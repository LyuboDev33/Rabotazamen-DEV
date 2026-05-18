
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function FailedPayment() {


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
                                <img src="/assets/images/error-404.png" alt="Payment" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="twm-error-content">
                                <h3>Провалено плащане!!!</h3>
                                <p className='mb-0'>Опитът за плащане беше неуспешен!</p>
                                <p>При възникнали въпроси, не се притеснявайте да се обадите по всяко време!</p>
                                <Link href="/subscriptions" className="site-button">Към абонаментите
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

FailedPayment.layout = page => <DashboardLayout children={page} />;
