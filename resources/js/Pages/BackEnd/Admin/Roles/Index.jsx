import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import { can } from '@/lib/can';

export default function Roles() {

    const { flash } = usePage();
    // const [deleteModal, setDeleteModal] = useState(false);
    // const [userId, setUserId] = useState('');

    const { roles } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Роли</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white shadow">
                    <div className="panel-heading wt-panel-heading p-a15 d-flex">
                        <h4 className="panel-tittle m-a0">
                            Всички налични роли
                        </h4>
                        <hr className='hr-users' />
                        <>
                            <Link
                                className='btn btn-primary text-white rounded-pill w-fit-content'
                                href='/dashboard/admin/access'>
                                Създай роля
                            </Link>
                        </>
                    </div>

                    <div className="panel-body wt-panel-body">
                        <div className="table-responsive">

                            <table className="table twm-table table-striped table-borderless">

                                <thead>
                                    <tr>
                                        <th>Роля</th>
                                        <th>Права</th>
                                        <th className='last-td-action'>Действия</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {roles && roles.length > 0 ? (
                                        roles.map((role) => (
                                            <tr key={role.id}>

                                                <td><h5>{role.role_name}</h5></td>

                                                <td>
                                                    {role.permissions && role.permissions.length > 0 ?
                                                        role.permissions.map(role => (
                                                            <p key={role.id} className="badge bg-primary me-1">
                                                                {role.name}
                                                            </p>
                                                        )) : ''}
                                                </td>

                                                <td className='last-td-edit'>

                                                    <Link
                                                        href={`/dashboard/admin/roles/${role.id}/assign-permissionss`}
                                                        type="button"
                                                        title="Преглед"
                                                        data-bs-toggle="tooltip"
                                                        className='site-button pt-2 pb-2 pe-1 rounded-pill'
                                                    >
                                                        Добави права
                                                        <i className="fa fa-eye ms-1" />
                                                    </Link>

                                                    {/* <button
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            setUserId(role.id);
                                                        }}
                                                        title="Изтрий"
                                                        className='btn btn-danger ms-1 pt-2 pb-2 pe-1 rounded-pill'
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        Изтрий
                                                        <i className="fa fa-trash-alt" />
                                                    </button> */}

                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                                Няма налични роли
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>

            </div>

            {/* <Modal
                show={deleteModal}
                method="delete"
                action={route('blog.delete')}
                onSuccess={() => setDeleteModal(false)}
            >
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={() => setDeleteModal(false)} />
                </div>
                <div className="modal-body">
                    <h3 className="modal-title">Сигурни ли сте, че искате да изтриете този потребител?</h3>
                </div>
                <div className="modal-footer">
                    <button type="button" className="site-button" onClick={() => setDeleteModal(false)}>Не</button>
                    <button type="submit" className="site-button outline-primary">Да</button>
                </div>
                <input name='roleId' value={userId} type="hidden" />
            </Modal> */}

            {flash.succesDeletingUser && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.succesDeletingUser}
                </div>
            )}
        </>
    );
}

Roles.layout = page => <DashboardLayout children={page} />;
