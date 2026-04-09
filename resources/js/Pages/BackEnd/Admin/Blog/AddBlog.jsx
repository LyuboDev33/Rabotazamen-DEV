import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage } from '@inertiajs/react';

export default function AddBlogView() {


    const { errors } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Създай статия</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-newspaper" /> Създаване на статия
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <Form
                            method="post"
                            action={route('blog.create')}
                            encType="multipart/form-data"
                        >

                            <div className="row">

                                {/* Blog Name */}
                                <div className="col-lg-6">
                                    <div className="form-group">

                                        <label>Заглавие на статията</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                name="blog_name"
                                                type="text"
                                                placeholder="Например: Как да намерим работа бързо"
                                            />
                                            <i className="fs-input-icon fa fa-heading" />
                                        </div>

                                        {errors.blog_name && (
                                            <div className="text-danger mt-1">
                                                {errors.blog_name}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Blog Image */}
                                <div className="col-lg-6">
                                    <div className="form-group">

                                        <label>Изображение на статията</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                type="file"
                                                accept=".jpg,.jpeg,.png"
                                                name="blog_image"
                                            />
                                        </div>

                                        <p className="m-t10">
                                            Максимален размер: 2MB. Поддържани формати: jpg, png.
                                        </p>

                                        {errors.blog_image && (
                                            <div className="text-danger mt-1">
                                                {errors.blog_image}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div className="col-xl-12">
                                    <div className="form-group">

                                        <label>Съдържание на статията</label>

                                        <textarea
                                            className="form-control"
                                            name="blog_content"
                                            rows={10}
                                            placeholder="Напишете съдържанието на статията..."
                                        />

                                        {errors.blog_content && (
                                            <div className="text-danger mt-1">
                                                {errors.blog_content}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="col-lg-12">

                                    <div className="text-left">

                                        <button
                                            type="submit"
                                            className="site-button m-r5"
                                        >
                                            Публикувай статия
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

AddBlogView.layout = page => <DashboardLayout children={page} />;
