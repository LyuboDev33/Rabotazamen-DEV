import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {

    const { auth } = usePage().props;

    return (
        <>

            <Head>
                <title>Табло за упраление</title>
            </Head>


            <div className="content-admin-main">


                <div className="twm-pro-view-chart-wrap">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <div className="panel panel-default site-bg-white shadow-sm">
                                <div className="panel-heading wt-panel-heading pt-2 ps-2 pb-2">
                                    <h3>👋 Здравейте, {auth.user.first_name} {auth.user.last_name}</h3>
                                </div>
                                <div className="panel-body wt-panel-body twm-pro-view-chart d-flex align-items-center gap-3">
                                    <div className='alert-info p-3 rounded-5'>
                                          <i className="fas fa-info-circle me-2"></i><strong>Следващи стъпки: </strong>
                                          Вие сте регистрират в платформата като Кандидат!
                                          Това означава, че ще можете да създадете или прикачите вашето CV и да кандидатствате за работа спрямо вашите критерии за търсене: <br />Локация, Квалификаций, Препоръки и др.
                                    </div>
                                          <div className='alert-danger p-3 rounded-5 align-self-start'>
                                          <i className="fas fa-info-circle me-2"></i><strong>Статус на профила: </strong>
                                          За да можете да кандидатствате е нужно да попълните вашия профил. Моля отидете в секция "Профил", където ще получите необходимата информация за завършване на вашия профил. Веднъж завършен, това съобщение ще изчезне и ще можете да кандидатствате за различни обяви за работа. Успех!
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="col-lg-12 col-md-12 mb-4">
                            <div className="panel panel-default">
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0">Recent Applicants</h4>
                                </div>
                                <div className="panel-body wt-panel-body bg-white">
                                    <div className="twm-dashboard-candidates-wrap">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="twm-dash-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img src="assets/images/candidates/pic1.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Wanda Montgomery </h4>
                                                        </a>
                                                        <p>Charted Accountant</p>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address"><i className="feather-map-pin" />New York</p>
                                                                <div className="twm-jobs-vacancies">$20<span>/ Day</span></div>
                                                            </div>
                                                            <div className="twm-right-btn">
                                                                <ul className="twm-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-envelope-open" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="twm-dash-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img src="assets/images/candidates/pic2.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Peter Hawkins</h4>
                                                        </a>
                                                        <p>Medical Professed</p>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address"><i className="feather-map-pin" />New York</p>
                                                                <div className="twm-jobs-vacancies">$7<span>/ Hour</span></div>
                                                            </div>
                                                            <div className="twm-right-btn">
                                                                <ul className="twm-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-envelope-open" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="twm-dash-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img src="assets/images/candidates/pic3.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Ralph Johnson</h4>
                                                        </a>
                                                        <p>Bank Manger</p>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address"><i className="feather-map-pin" />New York</p>
                                                                <div className="twm-jobs-vacancies">$180<span>/ Day</span></div>
                                                            </div>
                                                            <div className="twm-right-btn">
                                                                <ul className="twm-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-envelope-open" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="twm-dash-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img src="assets/images/candidates/pic4.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Randall Henderson </h4>
                                                        </a>
                                                        <p>IT Contractor</p>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address"><i className="feather-map-pin" />New York</p>
                                                                <div className="twm-jobs-vacancies">$90<span>/ Week</span></div>
                                                            </div>
                                                            <div className="twm-right-btn">
                                                                <ul className="twm-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-envelope-open" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-12">
                                                <div className="twm-dash-candidates-list">
                                                    <div className="twm-media">
                                                        <div className="twm-media-pic">
                                                            <img src="assets/images/candidates/pic6.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="twm-mid-content">
                                                        <a href="#" className="twm-job-title">
                                                            <h4>Christina Fischer </h4>
                                                        </a>
                                                        <p>Charity &amp; Voluntary</p>
                                                        <div className="twm-fot-content">
                                                            <div className="twm-left-info">
                                                                <p className="twm-candidate-address"><i className="feather-map-pin" />New York</p>
                                                                <div className="twm-jobs-vacancies">$19<span>/ Hour</span></div>
                                                            </div>
                                                            <div className="twm-right-btn">
                                                                <ul className="twm-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-envelope-open" />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>



        </>
    );
}

Dashboard.layout = page => <DashboardLayout children={page} />
