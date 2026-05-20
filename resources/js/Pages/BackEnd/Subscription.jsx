import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';

export default function Subscsriptions() {

    const { flash } = usePage();
    const { auth, companyStatus, errors, stripe, csrf_token } = usePage().props;




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

                        <div className="mb-5">

                            {!stripe ? (
                                <div className="alert alert-warning rounded-4">
                                    Нямате активен абонаментен план в момента.
                                </div>
                            ) : (
                                <div className="pricing-table-1 border-0 shadow-sm p-4 mt-3 rounded-4">

                                    <h4 className="wt-title mb-4">
                                        Вашият текущ абонамент
                                    </h4>

                                    {/* TOP GRID */}
                                    <div className="row g-3">

                                        <div className="col-lg-4 col-md-6">
                                            <div className="p-3 rounded-4 shadow-sm bg-light h-100">
                                                <div className="text-muted small">План</div>
                                                <div className="fw-bold mt-1">
                                                    <span className="badge bg-primary">
                                                        {stripe.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="p-3 rounded-4 shadow-sm bg-light h-100">
                                                <div className="text-muted small">Статус</div>
                                                <div className="fw-bold mt-1">

                                                    {stripe.active ? (
                                                        <span className="badge bg-success">
                                                            Активен
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-danger">
                                                            Неактивен
                                                        </span>
                                                    )}

                                                    {stripe.cancel_at_period_end &&
                                                        <div className='alert-danger  p-3 rounded-4 mt-3'>Поискали сте прекратяване на вашия абонамент.
                                                            Вашият абонамент скоро няма да бъде активен.
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-4 col-md-6">
                                            <div className="p-3 rounded-4 shadow-sm bg-light h-100">
                                                <div className="text-muted small">Начало</div>
                                                <div className="fw-bold mt-1">
                                                    {stripe.started_at ?? '—'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="p-3 rounded-4 shadow-sm bg-light h-100">
                                                <div className="text-muted small">Следващо плащане</div>
                                                <div className="fw-bold mt-1">
                                                    {stripe.current_period_end ?? 'Няма предстоящо плащане'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="p-3 rounded-4 shadow-sm bg-light h-100">
                                                <div className="text-muted small">Край на периода</div>
                                                <div className="fw-bold mt-1">
                                                    {stripe.ends_at ?? '—'}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* MESSAGE */}
                                    {stripe.message && (
                                        <div className="alert-warning mt-4 rounded-4 p-2 w-fit-content">
                                            {stripe.message}
                                        </div>
                                    )}

                                    {/* CANCEL SECTION */}
                                    <form
                                        action={route('cancel.subscription')}
                                        method='POST'
                                        className="mt-4 p-3 rounded-4 bg-light shadow-sm">
                                        <input type="hidden" name="_token" value={csrf_token} />

                                        <div className="alert alert-danger rounded-4 mb-3">
                                            В случай, че спрете абонамента си, все още ще имате достъп до системата до{" "}
                                            <strong>{stripe.ends_at}</strong>.
                                        </div>

                                        <button type='submit' className="btn btn-danger rounded-pill px-4">
                                            Спри абонамента
                                        </button>

                                    </form>

                                </div>
                            )}

                        </div>


                        {/* TITLE END*/}
                        <div className="section-content ">
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
                                                <form
                                                    method='POST'
                                                    action={route('subscription.create', {
                                                        price_id: 'price_1TYR4fRpNo0JC34nhtSt8OqO',
                                                        plan: 'basic'
                                                    })}
                                                    className="col-lg-4 col-md-6 m-b30">
                                                    <input type="hidden" name="_token" value={csrf_token} />

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
                                                </form>
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
