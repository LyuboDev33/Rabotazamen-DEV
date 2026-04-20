import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import Select from 'react-select';


export default function Companies() {

    const { flash } = usePage();
    const { companies } = usePage().props;

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteCompanyId, setDeleteCompanyId] = useState('');

    return (
        <>
            <Head>
                <title>Админ | Фирми</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white shadow-sm">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between">
                        <h4 className="panel-tittle m-a0">
                            Всички фирми
                        </h4>

                    </div>

                    <div className="panel-body wt-panel-body">
                        <div className="table-responsive">

                            <table className="table twm-table table-striped table-borderless">

                                <thead>
                                    <tr>
                                        <th>Име на фирмата</th>
                                        <th>ЕИК</th>
                                        <th>Индустрия</th>
                                        <th>Статус</th>
                                        <th className="last-td-action">Действия</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {companies && companies.length > 0 ? (
                                        companies.map((company) => (
                                            <tr key={company.id}>

                                            <td>

                                                {company.company_name}
                                            </td>

                                                <td>{company.company_eik}</td>

                                                <td>{company.company_industry}</td>

                                                <td>
                                                    <span className="badge bg-secondary p-2 rounded-4">
                                                        {company.status ?? 'Фирмените данни не са попълнени'}
                                                    </span>
                                                </td>

                                                <td className="d-flex last-td-edit">

                                                    <Link
                                                        href={`/dashboard/admin/companies/${company.company_eik}`}
                                                        className="site-button pt-2 pb-2 pe-1 rounded-pill"
                                                    >
                                                        Преглед
                                                        <i className="fa fa-eye ms-1" />
                                                    </Link>


                                                    <button
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            setDeleteCompanyId(company.id);
                                                        }}
                                                        className="btn btn-danger ms-1 pt-2 pb-2 pe-1 rounded-pill"
                                                    >
                                                        Изтрий
                                                        <i className="fa fa-trash-alt ms-1" />
                                                    </button>

                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">
                                                Няма добавени фирми
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>

            {/* DELETE MODAL */}
            <Modal
                show={deleteModal}
                method="delete"
                action={route('company.delete')}
                onSuccess={() => setDeleteModal(false)}
            >
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setDeleteModal(false)}
                    />
                </div>

                <div className="modal-body">
                    <h3 className="modal-title">
                        Сигурни ли сте, че искате да изтриете тази фирма?
                    </h3>
                </div>

                <div className="modal-footer">

                    <button type="submit" className="site-button outline-primary">
                        Потвърждавам
                    </button>

                    <button
                        type="button"
                        className="site-button"
                        onClick={() => setDeleteModal(false)}
                    >
                        Затвори
                    </button>
                </div>

                <input type="hidden" name="companyId" value={deleteCompanyId} />
            </Modal>

            {/* FLASH MESSAGES */}
            {flash.successDeletingCompany && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletingCompany}
                </div>
            )}
        </>
    );
}

Companies.layout = page => <DashboardLayout children={page} />;
