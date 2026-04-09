import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage, Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function CreateJobCategoriesView() {

    const { errors, roles } = usePage().props;

    return (
        <>
            <Head>
                <title>Admin | Създаване на категория</title>
            </Head>

            <div className="content-admin-main">
                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex align-items-center gap-3">
                        <Link
                            className='btn btn-primary'
                            href="/dashboard/admin/job-categories">
                            Назад към всички категории
                        </Link>
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-user" /> Създаване на категория
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <Form
                            method="post"
                            action={route('job.category.create')}
                        >
                            <div className="row">

                                {/* Name */}
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Име на категория</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="job_category_name"
                                            placeholder="Счетоводство"
                                        />
                                        {errors.job_category_name && (
                                            <div className="text-danger mt-1">{errors.job_category_name}</div>
                                        )}
                                    </div>
                                </div>


                                {/* Submit */}
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <button
                                            type="submit"
                                            className="site-button m-r5"
                                        >
                                            Създай категория
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

CreateJobCategoriesView.layout = page => <DashboardLayout children={page} />;
