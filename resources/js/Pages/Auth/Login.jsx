import { Head, Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

import "../../../styles/bootstrap.min.css";
import "../../../styles/style.css";
import "../../../styles/feather.css";
import '../../../styles/custom.css';
import '../../../styles/flaticon.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function Login({ canResetPassword }) {

    const { errors } = usePage().props;
    const { csrf_token } = usePage().props;

    return (
        <>
            <Head>
                <title>Вход | Lunara - Магазин за детска мода</title>
                <link rel="icon" href="/assets/images/favicon.ico"></link>

            </Head>

            <div className="page-content small-screen">
                <div className="section-full site-bg-white">
                    <div className="container-fluid">

                        <div className='login-application'>
                            <Link
                                href='/'
                                className='site-button go-back-button text-center mb-0 pt-2 pb-2 pe-3 ps-3'>
                                <i className="fa-solid fa-circle-left"></i>
                                Назад
                            </Link>

                            <hr className='w-100 d-md-none' />

                            <Link>
                                <ApplicationLogo
                                    className='d-md-none'
                                    width='150'>
                                </ApplicationLogo>
                            </Link>
                        </div>

                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 twm-log-reg-media-wrap d-none d-md-flex">
                                <div className="twm-log-reg-media">
                                    <div className="twm-l-media">
                                        <img src="/assets/images/login-bg.png" alt="Login image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
                                <div className="twm-log-reg-form-wrap">

                                    <div className="twm-log-reg-inner max-w-464-px m-0-auto">
                                        <div className="twm-log-reg-head">
                                            <ApplicationLogo width='200'
                                                className='d-none d-md-inline' >

                                            </ApplicationLogo>
                                            <div className="twm-log-reg-logo">
                                                <span className="log-reg-form-title">Добре дошли обратно!</span>
                                                <span className="log-reg-form-title mb-3">Влезте във вашия акаунт</span>

                                            </div>
                                        </div>

                                        <div className="twm-tabs-style-2">

                                            <div className="tab-content" id="myTab2Content">

                                                {/* Candidate */}
                                                <div className="tab-pane fade show active" id="twm-login-candidate">

                                                    <form action={route('login')} method="post">
                                                        <input type="hidden" name="_token" value={csrf_token} />

                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <input name="email" type="email" required className="form-control" placeholder="Usearname*" />
                                                                    {errors.email ? (
                                                                        <div style={{ height: '30px' }} className="text-danger mt-1">
                                                                            {errors.email}
                                                                        </div>
                                                                    ) : <div style={{ height: '30px' }} className="text-danger mt-1"></div>}
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12">
                                                                <div className="form-group mb-3">
                                                                    <input name="password" type="password" className="form-control" required placeholder="Password*" />
                                                                    {errors.password && (
                                                                        <div className="text-danger mt-1">{errors.password}</div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="form-group mb-1">
                                                                    <button type="submit" className="site-button">Вход</button>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="form-group mb-1 mt-1">
                                                                    <span className="center-text-or">или</span>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <button type="button" className="log_with_google">
                                                                        <img src="/assets/images/google-icon.png" alt="" />
                                                                        Влезте с Google
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <hr className='mt-3' />

                                                            <div className="col-lg-12">
                                                                <div className="twm-forgot-wrap">
                                                                    <div className="form-group mb-3 text-center">
                                                                        <div className="form-check">
                                                                            {canResetPassword && (
                                                                                <Link href={route('password.request')} className="site-text-primary">
                                                                                    Забравена парола?
                                                                                </Link>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


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
