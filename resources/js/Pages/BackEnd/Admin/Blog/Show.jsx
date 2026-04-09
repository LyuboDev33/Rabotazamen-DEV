import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Form, usePage } from '@inertiajs/react';

export default function UpdateBlog () {

    const { flash } = usePage();
    const { errors } = usePage().props;
    const { blog } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Обнов статия</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-newspaper" /> Редакция на статия
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        <Form
                            method="patch"
                            action={route('blog.update')}
                            encType="multipart/form-data"
                            options={{
                                preserveScroll: true
                            }}
                        >

                            <div className="row">

                                {/* Blog Name */}
                                <div className="col-lg-4">
                                    <div className="form-group">

                                        <label>Заглавие на статията</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                defaultValue={blog.blog_name}
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
                                <div className="col-lg-4">
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
                                            Максимален размер: 2MB.
                                        </p>
                                        <p>
                                            Поддържани формати: jpg, png.
                                        </p>

                                        {errors.blog_image && (
                                            <div className="text-danger mt-1">
                                                {errors.blog_image}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <p>Сегашен изглед на главната снимка</p>
                                    <img width={200} src={`/assets/images/blog/${blog.blog_image}`} alt={blog.blog_image} />
                                </div>

                                {/* Blog Content */}
                                <div className="col-xl-12">
                                    <div className="form-group">

                                        <label>Съдържание на статията</label>

                                        <textarea
                                            defaultValue={blog.blog_content}
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
                                            Запази промени
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <input name='blog_id' type="hidden" value={blog.id} />
                        </Form>

                    </div>
                </div>
            </div>



         {flash.successUpdatingBlog && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp"
                >
                    {flash.successUpdatingBlog}
                </div>
            )}

            {flash?.errorUpdatingBlog && (
                <div
                    className="alert alert-danger animate__animated animate__fadeInUp"
                >
                    {flash.errorUpdatingBlog}
                </div>
            )}



        </>
    );
}

UpdateBlog.layout = page => <DashboardLayout children={page} />;
