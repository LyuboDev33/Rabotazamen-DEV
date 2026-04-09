import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import { can } from '@/lib/can';


export default function Users() {

    const { flash } = usePage();
    const [deleteModal, setDeleteModal] = useState(false);
    const [userId, setUserId] = useState('');

    const { users } = usePage().props;

    console.log(users);


    return (
        <>
            <Head>
                <title>Админ | Потребители</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white shadow">
                    <div className="panel-heading wt-panel-heading p-a15 d-flex">
                        <h4 className="panel-tittle m-a0">
                            Всички потребиели в  системата
                        </h4>
                        <hr className='hr-users' />
                        {/* Check if a Super Admin can create a user */}
                        {can('user.create') ?
                            <>
                                <Link
                                    className='btn btn-primary text-white rounded-pill w-fit-content'
                                    href='/dashboard/admin/access'> Създай Потребител</Link>
                            </>
                            : ''}
                    </div>

                    <div className="panel-body wt-panel-body">
                        <div className="table-responsive">

                            <table className="table twm-table table-striped table-borderless">

                                <thead>
                                    <tr>
                                        <th>Име</th>
                                        <th>Имейл</th>
                                        <th>Роли</th>
                                        <th>Дата на създаване</th>
                                        <th className='last-td-action'>Действия</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.length > 0 ? (
                                        users.map((user, index) => (
                                            <tr key={user.id}>


                                                <td>{user.name}</td>

                                                <td>{user.email}</td>

                                                <td>
                                                    {user.roles.map(role => (
                                                        <p key={role.id} className="badge bg-primary me-1">
                                                            {role.role_name}
                                                        </p>
                                                    ))}
                                                </td>

                                                <td>
                                                    {user.created_at
                                                        ? new Date(user.created_at).toLocaleDateString('bg-BG', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric',
                                                        })
                                                        : '—'}
                                                </td>

                                                <td className='d-flex last-td-edit'>

                                                    <Link
                                                        href={`/dashboard/admin/users/${user.id}/edit`}
                                                        type="button"
                                                        title="Преглед"
                                                        data-bs-toggle="tooltip"
                                                        className='site-button pt-2 pb-2 pe-1 rounded-pill'
                                                    >
                                                        Редактирай
                                                        <i className="fa fa-eye ms-1" />
                                                    </Link>

                                                    <button
                                                        onClick={() => {
                                                            setDeleteModal(true);
                                                            setUserId(user.id);
                                                        }}
                                                        title="Изтрий"
                                                        className='btn btn-danger ms-1 pt-2 pb-2 pe-1 rounded-pill'
                                                        data-bs-toggle="tooltip"
                                                    >
                                                        Изтрий
                                                        <i className="fa fa-trash-alt" />
                                                    </button>

                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                Няма регистрирани потребители
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
                action={route('user.delete')}
                onSuccess={() => setDeleteModal(false)}

            >
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={() => setDeleteModal(false)} />
                </div>
                <div className="modal-body">
                    <h3 className="modal-title">Сигурни ли сте, че искате да изтриете този потребител?</h3>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="site-button outline-primary">Потвърждавам</button>
                    <button type="button" className="site-button" onClick={() => setDeleteModal(false)}>Затвори</button>
                </div>
                <input name='userId' value={userId} type="hidden" />
            </Modal>




            {flash.successfullUserCreation && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp"
                >
                    {flash.successfullUserCreation}
                </div>
            )}

            {flash.userSuccessDeletion && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp"
                >
                    {flash.userSuccessDeletion}
                </div>
            )}


            {flash.failedUserDeletion && (
                <div
                    className="alert alert-danger animate__animated animate__fadeInUp"
                >
                    {flash.failedUserDeletion}
                </div>
            )}


        </>
    );
}

Users.layout = page => <DashboardLayout children={page} />;
