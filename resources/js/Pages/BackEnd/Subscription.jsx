import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';

export default function Subscsriptions() {

    const { flash } = usePage();
    const { auth, companyStatus, errors } = usePage().props;
    const { csrf_token } = usePage().props;

    console.log(flash);


    return (
        <>
            <Head>
                <title>Табло за упраление</title>
            </Head>


            {/* CONTENT START */}
            <div className="page-content">

                {/* PRICING TABLE SECTION START */}
                <div className="section-full site-bg-white tw-pricing-area">
                    <div className="container">
                        {/* TITLE START*/}

                        {/* TITLE END*/}
                        <div className="section-content p-t50">
                            <div className="twm-tabs-style-1">

                                {flash.subscriptionAlreadyExists &&
                                    <div
                                    onClick={() => window.location.reload()}
                                    className='btn alert-danger mb-3 rounded-pill'>
                                        {flash.subscriptionAlreadyExists}
                                    </div>
                                }

                                <div className="tab-content" id="myTab3Content">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="Monthly">
                                        <div className="pricing-block-outer">
                                            <div className="row justify-content-center">
                                                <Form
                                                    options={{ preserveScroll: true }}
                                                    method='POST'
                                                    action={route('subscription.create', {
                                                        price_id: 'price_1TYR4fRpNo0JC34nhtSt8OqO',
                                                        plan: 'basic'
                                                    })}
                                                    className="col-lg-4 col-md-6 m-b30">

                                                    <div className="pricing-table-1">
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Basic
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$90/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li className="disable"><i className="feather-x" />0 featured job</li>
                                                                    <li className="disable"><i className="feather-x" />job displayed fo 20 days</li>
                                                                    <li className="disable"><i className="feather-x" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <button type='submit' className="site-button">
                                                                    Purchase Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                                <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                                                    <div className="pricing-table-1 circle-yellow">
                                                        <div className="p-table-recommended">Recommended</div>
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Standard
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$248/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li><i className="feather-check" />0 featured job</li>
                                                                    <li><i className="feather-check" />job displayed fo 20 days</li>
                                                                    <li className="disable"><i className="feather-x" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <a href="about-1.html" className="site-button">Purchase Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 m-b30">
                                                    <div className="pricing-table-1 circle-pink">
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Extended
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$499/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li><i className="feather-check" />0 featured job</li>
                                                                    <li><i className="feather-check" />job displayed fo 20 days</li>
                                                                    <li><i className="feather-check" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <a href="about-1.html" className="site-button">Purchase Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="annual">
                                        <div className="pricing-block-outer">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 col-md-6 m-b30">
                                                    <div className="pricing-table-1">
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Basic
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$149/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li className="disable"><i className="feather-x" />0 featured job</li>
                                                                    <li className="disable"><i className="feather-x" />job displayed fo 20 days</li>
                                                                    <li className="disable"><i className="feather-x" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <a href="about-1.html" className="site-button">Purchase Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                                                    <div className="pricing-table-1 circle-yellow">
                                                        <div className="p-table-recommended">Recommended</div>
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Standard
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$499/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li><i className="feather-check" />0 featured job</li>
                                                                    <li><i className="feather-check" />job displayed fo 20 days</li>
                                                                    <li className="disable"><i className="feather-x" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <a href="about-1.html" className="site-button">Purchase Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 m-b30">
                                                    <div className="pricing-table-1 circle-pink">
                                                        <div className="p-table-title">
                                                            <h4 className="wt-title">
                                                                Extended
                                                            </h4>
                                                        </div>
                                                        <div className="p-table-inner">
                                                            <div className="p-table-price">
                                                                <span>$1499/</span>
                                                                <p>Monthly</p>
                                                            </div>
                                                            <div className="p-table-list">
                                                                <ul>
                                                                    <li><i className="feather-check" />1 job posting</li>
                                                                    <li><i className="feather-check" />0 featured job</li>
                                                                    <li><i className="feather-check" />job displayed fo 20 days</li>
                                                                    <li><i className="feather-check" />Premium support 24/7</li>
                                                                </ul>
                                                            </div>
                                                            <div className="p-table-btn">
                                                                <a href="about-1.html" className="site-button">Purchase Now</a>
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
                    </div>
                </div>
                {/* PRICING TABLE SECTION END */}
            </div>
            {/* CONTENT END */}


        </>
    );
}

Subscsriptions.layout = page => <DashboardLayout children={page} />;
