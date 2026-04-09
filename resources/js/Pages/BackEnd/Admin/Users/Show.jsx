import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage, Link } from '@inertiajs/react';

export default function ShowUser() {

    const { flash } = usePage();
    const { errors, user, roles } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Управление на потребител</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex align-items-center gap-2">
                        <Link
                            className='btn btn-primary text-white rounded-pill w-fit-content'
                            href='/dashboard/admin/users'>
                            Назад към потребители
                        </Link>

                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-user" /> Управление на роли за: {user.name}
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="col-lg-6">

                                {/* ASSIGN ROLES */}
                                <Form
                                    method="patch"
                                    action={route('user.assign.role')}>

                                    <input type="hidden" name="user_id" value={user.id} />

                                    {/* CURRENT ROLES */}
                                    <div className="form-group">
                                        <h3>Текущи роли</h3>

                                        <div className="mb-3">
                                            {user.roles && user.roles.length > 0 ? (
                                                user.roles.map(r => (
                                                    <span key={r.id} className="badge bg-success me-1 mb-1">
                                                        {r.role_name}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-muted">Няма добавени роли</p>
                                            )}
                                        </div>
                                    </div>

                                    <hr />

                                    {/* CHECKBOXES */}
                                    <div className="form-group">
                                        <label><strong>Добави / Премахни роли</strong></label>

                                        <div className="d-flex flex-column gap-2">

                                            {roles && roles.length > 0 && roles.map(r => (
                                                <label key={r.id} className="d-flex align-items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        name="roles[]"
                                                        value={r.id}
                                                        defaultChecked={
                                                            user.roles.some(ur => ur.id === r.id)
                                                        }
                                                    />
                                                    {r.role_name}
                                                </label>
                                            ))}

                                        </div>

                                        {errors.roles && (
                                            <div className="text-danger mt-1">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="site-button">
                                            Запази роли
                                        </button>
                                    </div>

                                </Form>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-6">

                                {/* USER INFO (read-only, simple) */}
                                <div className="form-group">
                                    <h3>Информация за потребителя</h3>

                                    <p><strong>Име:</strong> {user.name}</p>
                                    <p><strong>Имейл:</strong> {user.email}</p>
                                    <p><strong>ID:</strong> {user.id}</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {flash.cannotRemoveAdminRole && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.cannotRemoveAdminRole}
                </div>
            )}

            {flash.assignedRolesSuccesfully && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.assignedRolesSuccesfully}
                </div>
            )}

            {flash.noSuchUser && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.noSuchUser}
                </div>
            )}

        </>
    );
}

ShowUser.layout = page => <DashboardLayout children={page} />;
