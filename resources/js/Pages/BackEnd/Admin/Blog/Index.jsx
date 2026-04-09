import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';


export default function Blog() {

    const { flash } = usePage();
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteBlogId, setDeleteBlogId] = useState('');

    const { blogs } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Блог</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white shadow-sm">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between">
                        <h4 className="panel-tittle m-a0">
                            Всички статии
                        </h4>
                        <Link
                            className='btn btn-info text-white rounded-pill'
                            href='/dashboard/admin/blog/create-view'> Създай статия</Link>
                    </div>

                    <div className="panel-body wt-panel-body">
                        <div className="table-responsive">

                            <table className="table twm-table table-striped table-borderless">

                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Заглавие</th>
                                        <th>Дата</th>
                                        <th className='last-td-action'>Действия</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {blogs && blogs.length > 0 ? (
                                        blogs.map((blog, index) => (
                                            <tr key={blog.id}>

                                                <td>{index + 1}</td>

                                                <td>{blog.blog_name}</td>


                                                <td>
                                                    {new Date(blog.created_at).toLocaleDateString()}
                                                </td>

                                                <td className='d-flex last-td-edit'>

                                                    <Link
                                                        href={`/dashboard/admin/blog/${blog.blog_slug.trim()}/edit`}
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
                                                            setDeleteBlogId(blog.id)
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
                                                Няма добавени статии
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
                action={route('blog.delete')}
                onSuccess={() => setDeleteModal(false)}

            >
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={() => setDeleteModal(false)} />
                </div>
                <div className="modal-body">
                    <h3 className="modal-title">Сигурни ли сте, че искате да изтриете тази статия?</h3>
                </div>
                <div className="modal-footer">
                    <button type="button" className="site-button" onClick={() => setDeleteModal(false)}>Не</button>
                    <button type="submit" className="site-button outline-primary">Да</button>
                </div>
                <input name='blogId' value={deleteBlogId} type="hidden" />
            </Modal>




            {flash.successUploadingBlog && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp"
                >
                    {flash.successUploadingBlog}
                </div>
            )}

             {flash.successDeletingBlog && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp"
                >
                    {flash.successDeletingBlog}
                </div>
            )}


        </>
    );
}

Blog.layout = page => <DashboardLayout children={page} />;
