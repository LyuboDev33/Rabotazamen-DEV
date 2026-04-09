import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';

export default function JobCategoryEdit() {

    const [deleteModal, setDeleteModal] = useState(false);
    const [roleId, setRoleId] = useState('');
    const { flash } = usePage();

    const { jobCategory, errors } = usePage().props;

    return (
        <>
            <Head title={`Админ | Роли за категория: ${jobCategory?.name}`} />

            <div className="content-admin-main">
                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex align-items-center gap-2">
                        <Link
                            className='btn btn-primary text-white rounded-pill w-fit-content'
                            href='/dashboard/admin/job-categories'>
                            Назад към всички категории
                        </Link>
                        <h4 className="panel-tittle m-a0">
                            Роли за категория: {jobCategory?.name}
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Всички роли в тази категория</h3>

                                {/* CREATE ROLE */}
                                <div className="mt-3 mb-4">
                                    <Form
                                        method="post"
                                        action={route('job.role.create', jobCategory.id)}
                                        className="d-flex align-items-center gap-2"
                                        resetOnSuccess
                                    >
                                        <div className="w-50">
                                            <input
                                                type="text"
                                                name="name_create_role"
                                                placeholder="Добави нова роля..."
                                                style={{ height: '40px' }}
                                                className="form-control pt-0 pb-0"
                                            />

                                            {errors.name_create_role && (
                                                <div className="text-danger">
                                                    {errors.name_create_role}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-success rounded-pill pt-2 pb-2 px-3"
                                        >
                                            Добави роля +
                                        </button>
                                    </Form>
                                </div>

                                <div className="d-flex flex-column gap-2 mt-2">
                                    {jobCategory.job_roles.length > 0 ? (
                                        jobCategory.job_roles.map(role => (
                                            <div key={role.id}>

                                                {/* FORM PER ROLE */}
                                                <Form
                                                    method="patch"
                                                    action={route('job.role.update')}
                                                >
                                                    <input type="hidden" name="role_id" value={role.id} />

                                                    <div className="w-100 p-2 d-flex justify-content-between align-items-center rounded-5">

                                                        {/* INPUT FIELD */}
                                                        <div className="w-50">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                defaultValue={role.name}
                                                                style={{ height: '40px' }}
                                                                className="form-control pt-0 pb-0"
                                                            />

                                                            {/* ERROR */}
                                                            {errors.name && (
                                                                <div className="text-danger">
                                                                    {errors.name}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* ACTIONS */}
                                                        <div>
                                                            <button
                                                                type='submit'
                                                                className="site-button pt-2 pb-2 rounded-pill me-2"
                                                            >
                                                                Запази промените
                                                            </button>

                                                            <button
                                                                type='button'
                                                                onClick={() => {
                                                                    setDeleteModal(true);
                                                                    setRoleId(role.id);
                                                                }}
                                                                className="btn btn-danger pt-2 pb-2 pe-1 rounded-pill"
                                                            >
                                                                Изтрий
                                                                <i className="fa fa-trash-alt ms-1" />
                                                            </button>
                                                        </div>

                                                    </div>
                                                </Form>

                                                <hr className='mt-0 mb-0' />
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted">Няма роли в тази категория</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DELETE MODAL */}
            <Modal
                show={deleteModal}
                method="delete"
                action={route('job.role.delete')}
                onSuccess={() => setDeleteModal(false)}
            >
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={() => setDeleteModal(false)} />
                </div>

                <div className="modal-body">
                    <h3 className="modal-title">
                        Сигурни ли сте, че искате да изтриете тази роля?
                    </h3>
                </div>

                <div className="modal-footer">
                    <button type="submit" className="site-button outline-primary">
                        Потвърждавам
                    </button>
                    <button type="button" className="site-button" onClick={() => setDeleteModal(false)}>
                        Затвори
                    </button>
                </div>

                <input name="roleId" value={roleId} type="hidden" />
            </Modal>

            {flash?.roleNonExistant && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.roleNonExistant}
                </div>
            )}

                 {flash?.successRoleCreation && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successRoleCreation}
                </div>
            )}

            {flash?.successRoleUpdating && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successRoleUpdating}
                </div>
            )}

             {flash?.successDeletingRole && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletingRole}
                </div>
            )}

            {flash?.errorDeletingRole && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.errorDeletingRole}
                </div>
            )}
        </>
    );
}

JobCategoryEdit.layout = page => <DashboardLayout children={page} />;
