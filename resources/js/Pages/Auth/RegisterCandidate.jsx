import { Head, Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

import "../../../styles/bootstrap.min.css";
import "../../../styles/style.css";
import "../../../styles/feather.css";
import '../../../styles/custom.css';
import '../../../styles/flaticon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Register() {
    const { errors, csrf_token } = usePage().props;

    return (
        <>
            <Head>
                <title>Rabotazamen | Регистрация</title>
                <link rel="icon" href="/assets/images/favicon.ico" />
            </Head>

            <div className="page-content small-screen">
                <div className="section-full site-bg-white">
                    <div className="container-fluid">

                        <div className="login-application">
                            <Link
                                href="/"
                                className="site-button go-back-button text-center mb-0 pt-2 pb-2 pe-3 ps-3"
                            >
                                <i className="fa-solid fa-circle-left"></i>
                                Назад
                            </Link>

                            <hr className="w-100 d-md-none" />

                            <Link href="/">
                                <ApplicationLogo className="d-md-none" width="150" />
                            </Link>
                        </div>

                        <div className="row">
                            {/* Image Side - 50% */}
                            <div className="col-lg-6 col-md-6 twm-log-reg-media-wrap d-none d-md-flex">
                                <div className="twm-log-reg-media">
                                    <div className="twm-l-media">
                                        <img src="/assets/images/login-bg.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* Form Side - 50% */}
                            <div className="col-lg-6 col-md-6">
                                <div className="twm-log-reg-form-wrap">
                                    <div className="twm-log-reg-inner">
                                        <div className="twm-log-reg-head">
                                            <ApplicationLogo width="200" className="d-none d-md-inline" />
                                            <div className="twm-log-reg-logo">
                                                <span className="log-reg-form-title">Създайте потребителски акаунт</span>
                                                <span>Регистрирайте се и започнете да кандидатствате</span>
                                            </div>
                                        </div>

                                        <div className="twm-tabs-style-2">
                                            {/* Tabs Navigation */}
                                            <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                                <li className="nav-item">
                                                    <Link
                                                        href="/register/candidate"
                                                        className="nav-link active"
                                                    >
                                                        <i className="fas fa-user-tie me-1"></i>
                                                        Кандидат
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        href="/register/employer"
                                                        className="nav-link"
                                                    >
                                                        <i className="fas fa-building me-1"></i>
                                                        Фирма
                                                    </Link>
                                                </li>
                                            </ul>

                                            <div className="tab-content" id="myTab2Content">
                                                {/* Candidate Registration */}
                                                <div className="tab-pane fade show active">
                                                    <form
                                                        action={route('register.candidate')}
                                                        method="post">
                                                        <input type="hidden" name="_token" value={csrf_token} />

                                                        {/* Row container */}
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-12 col-xl-12">
                                                                <div className="row">
                                                                    {/* Име */}
                                                                    <div className="col-lg-6 col-xl-4">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Име <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="first_name"
                                                                                type="text"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="Въведете име"
                                                                            />
                                                                            {errors.first_name && (
                                                                                <div className="text-danger small">{errors.first_name}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Фамилия */}
                                                                    <div className="col-lg-6 col-xl-4">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Фамилия <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="last_name"
                                                                                type="text"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="Въведете фамилия"
                                                                            />
                                                                            {errors.last_name && (
                                                                                <div className="text-danger small">{errors.last_name}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Телефонен номер */}
                                                                    <div className="col-lg-12 col-xl-4 ">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Телефон <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="phone"
                                                                                type="tel"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="0888 123 456"
                                                                            />
                                                                            {errors.phone && (
                                                                                <div className="text-danger small">{errors.phone}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Имейл адрес */}
                                                                    <div className="col-12 col-lg-12 col-xl-12">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Имейл адрес <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="email"
                                                                                type="email"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="ime@example.com"
                                                                            />
                                                                            {errors.email && (
                                                                                <div className="text-danger small">{errors.email}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Парола */}
                                                                    <div className="col-12 col-lg-6">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Парола <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="password"
                                                                                type="password"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="Въведете парола"
                                                                            />
                                                                            {errors.password && (
                                                                                <div className="text-danger small">{errors.password}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Потвърди парола */}
                                                                    <div className="col-12 col-lg-6">
                                                                        <div className="form-group mb-2">
                                                                            <label className="form-label small mb-1">Потвърди парола <span className="text-danger">*</span></label>
                                                                            <input
                                                                                name="password_confirmation"
                                                                                type="password"

                                                                                className="form-control form-control-sm"
                                                                                placeholder="Повторете паролата"
                                                                            />
                                                                            {errors.password_confirmation && (
                                                                                <div className="text-danger small">{errors.password_confirmation}</div>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    {/* Important Notice */}
                                                                    <div className="col-12 mt-2 mb-2">
                                                                        <div className="alert-info py-2 px-3 mb-2" role="alert">
                                                                            <i className="fas fa-info-circle me-2"></i>
                                                                            <small>
                                                                                <strong>Важно:</strong> След регистрация ще можете да попълните вашето CV,
                                                                                както и ще намерите допълнителни инструкции за използване на платформата.
                                                                            </small>
                                                                        </div>
                                                                    </div>

                                                                    {/* Submit Button */}
                                                                    <div className="col-12">
                                                                        <div >
                                                                            <button type="submit" className="site-button">
                                                                                Регистрация
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12">
                                                                        <div className="form-group mb-1 mt-2">
                                                                            <span className="center-text-or">или</span>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>

                                                    {/* Google Registration */}
                                                    <form
                                                        action={route('google', { access: 'candidate' })}
                                                        method="get"
                                                        className="col-12 pb-4">
                                                        <div className="form-group mb-2">
                                                            <button type="submit" className="log_with_google">
                                                                <img src="/assets/images/google-icon.png" alt="" />
                                                                Регистрация с Google
                                                            </button>
                                                        </div>
                                                    </form>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
