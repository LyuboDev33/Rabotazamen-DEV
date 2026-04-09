import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import { can } from '@/lib/can';

export default function JobCategories() {

    const { flash } = usePage();
    const { jobCategories } = usePage().props;


    const [deleteModal, setDeleteModal] = useState(false);
    const [categoryId, setCategoryId] = useState('');

    return (
        <>
            <Head>
                <title>Админ | Категории и роли</title>
            </Head>

            <div className="content-admin-main">
                <div className="panel panel-default site-bg-white shadow">
                    <div className="panel-heading wt-panel-heading p-a15 d-flex">
                        <h4 className="panel-tittle m-a0">Категории и роли в системата</h4>
                        <hr className='hr-users' />
                        {can('jobcategory.create') && (
                            <Link
                                className='btn btn-primary text-white rounded-pill w-fit-content'
                                href='/dashboard/admin/job-categories/create-view'
                            >
                                Създай категория
                            </Link>
                        )}
                    </div>

                    <div className="panel-body wt-panel-body">
                        <div className="table-responsive">
                            <table className="table twm-table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>Категория</th>
                                        <th>Работна роля</th>
                                        <th className='last-td-action'>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobCategories && jobCategories.length > 0 ? (
                                        jobCategories.map(category => (
                                            <tr key={category.id}>
                                                <td><h3>{category.name}</h3></td>

                                                <td>
                                                    {category.job_roles && category.job_roles.length > 0 ? (
                                                        category.job_roles.map(role => (
                                                            <div
                                                                key={role.id}
                                                                className="alert-info rounded-4 p-2 mb-2"
                                                            >
                                                                {role.name}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <span>Няма работни роли</span>
                                                    )}
                                                </td>

                                                <td className='d-flex last-td-edit'>
                                                    {can('jobcategory.edit') && (
                                                        <Link
                                                            href={`/dashboard/admin/job-category/edit/${category.id}`}
                                                            className='site-button pt-2 pb-2 pe-1 rounded-pill me-1'
                                                        >
                                                            Редактирай
                                                            <i className="fa fa-edit ms-1" />
                                                        </Link>
                                                    )}

                                                    {can('jobcategory.delete') && (
                                                        <button
                                                            onClick={() => {
                                                                setDeleteModal(true);
                                                                setCategoryId(category.id);
                                                            }}
                                                            className='btn btn-danger pt-2 pb-2 pe-1 rounded-pill'
                                                        >
                                                            Изтрий
                                                            <i className="fa fa-trash-alt ms-1" />
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center">
                                                Няма регистрирани категории
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            <Modal
                show={deleteModal}
                method="delete"
                // action={route('jobcategory.delete')}
                onSuccess={() => setDeleteModal(false)}
            >
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={() => setDeleteModal(false)} />
                </div>
                <div className="modal-body">
                    <h3 className="modal-title">
                        Сигурни ли сте, че искате да изтриете тази категория и всички свързани роли?
                    </h3>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="site-button outline-primary">Потвърждавам</button>
                    <button type="button" className="site-button" onClick={() => setDeleteModal(false)}>Затвори</button>
                </div>
                <input name='categoryId' value={categoryId} type="hidden" />
            </Modal>

            {/* Flash messages */}
            {flash.success && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.success}
                </div>
            )}
            {flash.error && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.error}
                </div>
            )}

        </>
    );
}

JobCategories.layout = page => <DashboardLayout children={page} />;
