import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';
import { can } from '@/lib/can';

export default function Dashboard() {

    const { auth } = usePage().props;
    const { csrf_token } = usePage().props;



    return (
        <>

            <Head>
                <title>Табло за упраление</title>
            </Head>


            <div className="content-admin-main">
                <div className="wt-admin-right-page-header clearfix">
                    <h2>👋 Здравейте, {auth.user.first_name} {auth.user.last_name}. Вие имате администраторски права</h2>

                    <form method="GET" action={route('downloadStaticXML')}
                        className="field input-field d-flex flex-column w-fit">
                        <input type="hidden" name="_token" value={csrf_token} />

                        <button type="submit" className="alert-info p-2 rounded-4 m-10 m-10 downloadXMLBtn">Свали XML </button>
                    </form>
                </div>

                <div className="twm-dash-b-blocks mb-5">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                            <div className="panel panel-default">
                                <div className="panel-body wt-panel-body gradi-1 dashboard-card ">
                                    <div className="wt-card-wrap">
                                        <div className="wt-card-icon"><i className="far fa-address-book" /></div>
                                        <div className="wt-card-right wt-total-active-listing counter ">25</div>
                                        <div className="wt-card-bottom ">
                                            <h4 className="m-b0">Posted Jobs</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                            <div className="panel panel-default">
                                <div className="panel-body wt-panel-body gradi-2 dashboard-card ">
                                    <div className="wt-card-wrap">
                                        <div className="wt-card-icon"><i className="far fa-file-alt" /></div>
                                        <div className="wt-card-right  wt-total-listing-view counter ">435</div>
                                        <div className="wt-card-bottom">
                                            <h4 className="m-b0">Total Applications</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                            <div className="panel panel-default">
                                <div className="panel-body wt-panel-body gradi-3 dashboard-card ">
                                    <div className="wt-card-wrap">
                                        <div className="wt-card-icon"><i className="far fa-envelope" /></div>
                                        <div className="wt-card-right wt-total-listing-review counter ">28</div>
                                        <div className="wt-card-bottom">
                                            <h4 className="m-b0">Messages</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                            <div className="panel panel-default">
                                <div className="panel-body wt-panel-body gradi-4 dashboard-card ">
                                    <div className="wt-card-wrap">
                                        <div className="wt-card-icon"><i className="far fa-bell" /></div>
                                        <div className="wt-card-right wt-total-listing-bookmarked counter ">18</div>
                                        <div className="wt-card-bottom">
                                            <h4 className="m-b0">Notifications</h4>
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

Dashboard.layout = page => <DashboardLayout children={page} />
