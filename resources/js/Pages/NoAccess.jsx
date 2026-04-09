import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function NoAccess() {


    return (
        <>
            <Head>
                <title>Профил</title>
            </Head>
            <div className="content-admin-main">
                <div className="twm-error-wrap">
                    <div className="d-flex gap-3">
                        <div className="col-lg-6 col-md-12">
                            <div className="twm-error-image">
                                <img src="/assets/images/error-404.png" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="twm-error-content">
                                <h2 className="twm-error-title">403</h2>
                                <h4 className="twm-error-title2 site-text-primary">Упсс.... Грешка 403</h4>
                                <p>Това означава, че нямате админски права за да достъпите тази страница!</p>
                                <Link href="/dashboard" className="site-button">Към таблото
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

NoAccess.layout = page => <DashboardLayout children={page} />;
