import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import Select from 'react-select';

export default function GrantAccess() {

    const { errors, roles } = usePage().props;
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <>
            <Head>
                <title>Admin | Създаване на потребител</title>
            </Head>

            <div className="content-admin-main">
                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex align-items-center gap-3">
                        <Link
                            className='btn btn-primary'
                            href="/dashboard/admin/users">
                            Назад към всички протребители
                        </Link>
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-user" /> Създаване на потребител
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <Form
                            method="post"
                            action={route('user.create')}
                        >
                            <div className="row">

                                {/* Name */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Първо име</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="first_name"
                                            placeholder="Любомир"
                                        />
                                        {errors.name && (
                                            <div className="text-danger mt-1">{errors.name}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Фамилия</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="last_name"
                                            placeholder="Стоянов"
                                        />
                                        {errors.name && (
                                            <div className="text-danger mt-1">{errors.name}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="primer@email.com"
                                        />
                                        {errors.email && (
                                            <div className="text-danger mt-1">{errors.email}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Парола</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            placeholder="********"
                                        />
                                        {errors.password && (
                                            <div className="text-danger mt-1">{errors.password}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Role Select */}
                                {/* <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Роля</label>

                                        <Select
                                            options={roles.map(role => ({
                                                value: role.id,
                                                label: role.role_name,
                                            }))}
                                            value={selectedRole}
                                            onChange={(option) => setSelectedRole(option)}
                                            placeholder="Избери роля"
                                            name='user_role'
                                        />

                                        {errors.user_role && (
                                            <div className="text-danger mt-1">{errors.user_role}</div>
                                        )}
                                    </div>
                                </div> */}

                                {/* Submit */}
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <button
                                            type="submit"
                                            className="site-button m-r5"
                                        >
                                            Създай потребител
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </Form>

                    </div>
                </div>
            </div>
        </>
    );
}

GrantAccess.layout = page => <DashboardLayout children={page} />;
