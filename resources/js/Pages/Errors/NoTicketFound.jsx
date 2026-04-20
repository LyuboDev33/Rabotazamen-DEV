import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form, Link } from '@inertiajs/react';

export default function NotFoundCompany () {

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
                                <img src="/assets/images/error-404.png" alt="Error Logo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="twm-error-content">
                                <h3 className="twm-error-title">Упсс....</h3>
                                <p>Не съществува такъв тикет в нашата система!</p>
                                <Link href="/support/tickets" className="site-button">
                                    Към всички
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

NotFoundCompany.layout = page => <DashboardLayout children={page} />;
