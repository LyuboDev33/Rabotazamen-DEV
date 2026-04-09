import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';

export default function DocumentCV () {
    const [file, setFile] = useState(null);
    const { csrf_token, auth, errors } = usePage().props;
    const { flash } = usePage();

    const profilePic = auth.profilePic;

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <Head>
                <title>Профил</title>
            </Head>

            <div>
                <div className="content-admin-main">

                    {/* Форма за профилна снимка и основна информация */}
                    <Form
                        options={{ preserveScroll: true }}
                        action={route('candidate.create.or.update')}
                        method="post"
                        encType="multipart/form-data"
                        onSuccess={() => {
                            setFile(false);
                        }}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />

                        {/* Profile Image */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Промяна на профилна снимка</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="dashboard-profile-section clearfix">
                                    <div className="dashboard-profile-pic d-flex gap-4">
                                        <div className="dashboard-profile-photo">
                                            <img src={profilePic} alt="" />

                                            <div className="upload-btn-wrapper">
                                                <div id="upload-image-grid" />
                                                <button type="button" className="site-button button-sm">
                                                    Прикачи снимка
                                                </button>

                                                <input
                                                    id="file-uploader"
                                                    accept=".jpg,.jpeg,.png"
                                                    name="profile_pic"
                                                    type="file"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {errors.profile_pic && (
                                                <div className="text-danger">
                                                    {errors.profile_pic}
                                                </div>
                                            )}
                                        </div>

                                        {file && (
                                            <img
                                                height={125}
                                                width={150}
                                                src={file}
                                                style={{ objectFit: 'cover' }}
                                                alt="Uploaded preview"
                                            />
                                        )}
                                    </div>
                                </div>
                                <hr />
                                <button type="submit" className="site-button mt-1">
                                    Запази профилната снимка
                                </button>
                            </div>
                        </div>

                        {/* Основна информация */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Основна информация</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Първо име</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="first_name"
                                                    type="text"
                                                    defaultValue={auth.user.first_name}
                                                    placeholder="Въведете вашето име"
                                                />
                                                <i className="fs-input-icon fa fa-user" />
                                            </div>
                                            {errors.profile?.name && (
                                                <div className="text-danger">{errors.profile.name}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Фамилия</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="last_name"
                                                    type="text"
                                                    defaultValue={auth.user.last_name}
                                                    placeholder="Въведете вашето име"
                                                />
                                                <i className="fs-input-icon fa fa-user" />
                                            </div>
                                            {errors.profile?.name && (
                                                <div className="text-danger">{errors.profile.name}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Телефон</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="phone"
                                                    type="text"
                                                    defaultValue={auth.user.phone}
                                                    placeholder="Въведете телефонен номер"
                                                />
                                                <i className="fs-input-icon fa fa-phone-alt" />
                                            </div>
                                            {errors.profile?.phone && (
                                                <div className="text-danger">{errors.profile.phone}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Имейл адрес</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    type="email"
                                                    defaultValue={auth.user.email}
                                                    placeholder="Въведете имейл адрес"
                                                />
                                                <i className="fs-input-icon fas fa-at" />
                                            </div>
                                            {errors.profile?.email && (
                                                <div className="text-danger">{errors.profile.email}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Уебсайт</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="company_website"
                                                    type="text"
                                                    placeholder="Въведете вашия уебсайт"
                                                />
                                                <i className="fs-input-icon fa fa-globe-americas" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="text-left">
                                            <button type="submit" className="site-button">
                                                Запази промените
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>



                    {/* Форма за смяна на парола */}
                    <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">Смяна на парола</h4>
                        </div>

                        <div className="panel-body wt-panel-body p-a20 m-b30">
                            <Form
                                method="put"
                                action={route('password.update')}
                                resetOnSuccess
                                options={{ preserveScroll: true }}
                            >
                                <input type="hidden" name="_token" value={csrf_token} />

                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="current_password">
                                                Въведете сегашната си парола
                                            </label>
                                            <input
                                                className="form-control"
                                                id="current_password"
                                                type="password"
                                                name="current_password"
                                            />
                                            {errors.current_password && (
                                                <p className="text-danger mt-1">{errors.current_password}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="password">
                                                Въведете новата си парола
                                            </label>
                                            <input
                                                className="form-control"
                                                id="password"
                                                type="password"
                                                name="password"
                                            />
                                            {errors.password && (
                                                <p className="text-danger mt-1">{errors.password}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="password_confirmation">
                                                Повторете новата парола
                                            </label>
                                            <input
                                                className="form-control"
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                            />
                                            {errors.password_confirmation && (
                                                <p className="text-danger mt-1">{errors.password_confirmation}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="text-left">
                                            <button type="submit" className="site-button">
                                                Запази новата парола
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>

            {flash.editSuccess && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.editSuccess}
                </div>
            )}

            {flash.successPasswordChange && (
                <div
                    className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successPasswordChange}
                </div>
            )}
        </>
    );
}

DocumentCV.layout = page => <DashboardLayout children={page} />;
