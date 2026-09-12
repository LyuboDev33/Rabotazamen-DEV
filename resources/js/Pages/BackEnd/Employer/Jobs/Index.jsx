import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';


export default function Jobs({ jobs }) {

    const { flash } = usePage();

    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteJobId, setDeleteJobId] = useState('');


    return (
        <>
            <Head>
                <title>Работни обяви</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white shadow-sm">

                    <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between align-items-center">

                        <h4 className="panel-tittle m-a0">
                            Всички ваши обяви за работа
                        </h4>

                        <Link
                            className="btn btn-info text-white rounded-pill"
                            href="/dashboard/employer/jobs/create"
                        >
                            Създай обява за работа
                        </Link>

                    </div>


                    <div className="panel-body wt-panel-body">

                        {flash?.success && (
                            <div className="alert alert-success">
                                {flash.success}
                            </div>
                        )}

                        {flash?.error && (
                            <div className="alert alert-danger">
                                {flash.error}
                            </div>
                        )}


                        <div className="table-responsive">

                            <table className="table twm-table table-striped table-borderless">

                                <thead>

                                    <tr>
                                        <th>Реф. номер</th>
                                        <th>Длъжност</th>
                                        <th>Статус</th>
                                        <th>Кандидатури</th>
                                        <th>Преглеждания</th>
                                        <th>Крайна дата</th>

                                        <th className="last-td-action">
                                            Действия
                                        </th>
                                    </tr>

                                </thead>


                                <tbody>

                                    {jobs && jobs.length > 0 ? (

                                        jobs.map((job, index) => (

                                            <tr key={job.id}>


                                                <td>
                                                    <a target='_blank' href={route('find-work.show', job.id)}>
                                                        <strong>
                                                            {job.reference_number}
                                                        </strong>
                                                    </a>
                                                </td>

                                                <td>
                                                    {job.title}
                                                </td>





                                                <td>

                                                    {Boolean(job.is_active) ? (

                                                        <span className="badge bg-success">
                                                            Активна
                                                        </span>

                                                    ) : (

                                                        <span className="badge bg-secondary">
                                                            Неактивна
                                                        </span>

                                                    )}

                                                </td>


                                                {/* Applications */}
                                                <td>

                                                    <span className="badge bg-info text-white">

                                                        <i className="fa-solid fa-users me-1"></i>

                                                        {job.applications_count ?? 0}

                                                    </span>
                                                    <a className='badge bg-info mt-2'
                                                       href={route(`applications.show`, job.id)}
                                                       >
                                                        Виж кандидати
                                                    </a>
                                                </td>


                                                {/* Views */}
                                                <td>

                                                    <span className="badge bg-light text-dark border">

                                                        <i className="fa-solid fa-eye me-1"></i>

                                                        {job.number_of_views ?? 0}

                                                    </span>

                                                </td>


                                                {/* Job End Date */}
                                                <td>

                                                    <i className="fa-regular fa-calendar me-2"></i>

                                                    {job.job_end_date
                                                        ? new Date(job.job_end_date).toLocaleDateString('bg-BG')
                                                        : 'Няма'
                                                    }

                                                </td>


                                                <td className="d-flex last-td-edit">

                                                    <Link
                                                        href={`/dashboard/employer/jobs/edit/${job.reference_number}`}
                                                        type="button"
                                                        title="Редактирай"
                                                        className="site-button pt-2 pb-2 pe-1 rounded-pill"
                                                    >
                                                        Редактирай

                                                        <i className="fa fa-pen ms-1" />
                                                    </Link>


                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            setDeleteJobId(job.id);
                                                        }}
                                                        title="Изтрий"
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

                                            <td
                                                colSpan="9"
                                                className="text-center"
                                            >
                                                Няма добавени обяви за работа
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>


            <Modal
                show={deleteModal}
                method="delete"
                action={route('job.delete')}
                onSuccess={() => {
                    setDeleteModal(false);
                    setDeleteJobId('');
                }}
            >

                <div className="modal-header">

                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setDeleteModal(false);
                            setDeleteJobId('');
                        }}
                    />

                </div>


                <div className="modal-body">

                    <h3 className="modal-title">
                        Сигурни ли сте, че искате да изтриете тази обява?
                    </h3>

                </div>


                <div className="modal-footer">

                    <button
                        type="button"
                        className="site-button"
                        onClick={() => {
                            setDeleteModal(false);
                            setDeleteJobId('');
                        }}
                    >
                        Не
                    </button>


                    <button
                        type="submit"
                        className="site-button outline-primary"
                    >
                        Да
                    </button>

                </div>


                <input
                    name="jobId"
                    value={deleteJobId}
                    type="hidden"
                    readOnly
                />

            </Modal>

        </>
    );
}


Jobs.layout = page => (
    <DashboardLayout children={page} />
);
