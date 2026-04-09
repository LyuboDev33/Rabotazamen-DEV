import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage, Link } from '@inertiajs/react';

export default function AssignPermissions() {

    const { flash } = usePage();
    const { errors, role, permissions } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Добави права</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex align-items-center gap-2">
                        <Link
                            className='btn btn-primary text-white rounded-pill w-fit-content'
                            href='/dashboard/admin/roles'>
                            Назад към всички роли
                        </Link>
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-lock" /> Управление на права за роля: {role.role_name}
                        </h4>
                    </div>


                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="col-lg-6">

                                {/* FORM: ASSIGN PERMISSIONS */}
                                <Form method="post" action={route('permissions.asign')}>

                                    <input type="hidden" name="role_id" value={role.id} />

                                    <div className="form-group">
                                        <h3>Текущи права</h3>

                                        <div className="mb-3">
                                            {role.permissions && role.permissions.length > 0 ? (
                                                role.permissions.map(p => (
                                                    <span key={p.id} className="badge bg-success me-1 mb-1">
                                                        {p.name}
                                                    </span>
                                                ))
                                            ) : (
                                                <p className="text-muted">Няма добавени права</p>
                                            )}
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label><strong>Добави / Премахни права</strong></label>

                                    <hr />
                                        <div className="d-flex flex-column gap-2">

                                            {permissions && permissions.length > 0 && permissions.map(p => (
                                                <>
                                                    <label key={p.id} className="d-flex align-items-center gap-2 shadow-sm p-2 alert-info rounded-5">
                                                        <input
                                                            type="checkbox"
                                                            name="permissions[]"
                                                            value={p.id}
                                                            defaultChecked={
                                                                role.permissions.some(rp => rp.id === p.id)
                                                            }
                                                        />
                                                        {p.name} &nbsp;
                                                        - {p.description}
                                                    </label>
                                                    <hr className='mb-0 mt-0' />
                                                </>
                                            ))}

                                        </div>

                                        {errors.permissions && (
                                            <div className="text-danger mt-1">
                                                {errors.permissions}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="site-button">
                                            Запази права
                                        </button>
                                    </div>

                                </Form>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-6">

                                {/* FORM: CREATE PERMISSION */}
                                <Form method="post" action={route('permissions.create')}>

                                    <div className="form-group mb-1">

                                        <label>Създай ново право</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                name="permission"
                                                type="text"
                                                placeholder="Пример: blog.create"
                                            />
                                            <i className="fs-input-icon fa fa-key" />
                                        </div>

                                        {errors.permission ? (
                                            <div className="text-danger errorHandlingDiv">
                                                {errors.permission}
                                            </div>
                                        ) : <div className="text-danger errorHandlingDiv"></div>}

                                        <label>Описание  на правото</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                name="permission_description"
                                                type="text"
                                                placeholder="Пример: blog.create"
                                            />
                                            <i className="fs-input-icon fa fa-key" />
                                        </div>

                                        {errors.permission ? (
                                            <div className="text-danger errorHandlingDiv">
                                                {errors.permission}
                                            </div>
                                        ) : <div className="text-danger errorHandlingDiv"></div>}

                                    </div>

                                    <div>
                                        <button type="submit" className="site-button">
                                            Създай право
                                        </button>
                                    </div>

                                </Form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {flash.succesfullyCreatedPermission && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.succesfullyCreatedPermission}
                </div>
            )}

            {flash.succesfullyAssignedPermissions && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.succesfullyAssignedPermissions}
                </div>
            )}


            {flash.errorAssigningRole && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.errorAssigningRole}
                </div>
            )}




        </>
    );
}

AssignPermissions.layout = page => <DashboardLayout children={page} />;
