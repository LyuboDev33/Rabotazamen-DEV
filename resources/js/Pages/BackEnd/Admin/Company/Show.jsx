import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

export default function ViewCompany() {

    const { company } = usePage().props;

    return (
        <>
            <Head>
                <title>Админ | Преглед на фирма</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-building me-2" />
                            {company.company_name}
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        {/* Banner */}
                        <div className="mb-4">
                            <img
                                src={
                                    company.company_banner
                                        ? `/assets/images/company_banners/${company.company_banner}`
                                        : '/assets/images/default/2202_w046_n004_46b_p1_46.jpg'
                                }
                                style={{
                                    width: '100%',
                                    maxHeight: '220px',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                                alt="Banner"
                            />
                        </div>

                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="col-lg-4">

                                <div className="card p-3 mb-3 text-center">
                                    <img
                                        src={
                                            company.company_logo
                                                ? `/assets/images/company_profile_pictures/${company.company_logo}`
                                                : '/assets/images/default/enterprise_12594298.png'
                                        }
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: '50%',
                                            margin: '0 auto'
                                        }}
                                        alt="Лого"
                                    />

                                    <h5 className="mt-3 mb-1">
                                        {company.company_name}
                                    </h5>

                                    <span className="badge bg-secondary">
                                        {company.status ?? 'Фирмените данни не са попълнени'}
                                    </span>
                                </div>

                                <div className="card p-3 mb-3">
                                    <p><strong>EIK:</strong> {company.company_eik}</p>
                                    <p><strong>Индустрия:</strong> {company.company_industry}</p>
                                    <p><strong>Размер:</strong> {company.company_size}</p>
                                    <p><strong>Локация:</strong> {company.company_location}</p>
                                    <p><strong>Адрес:</strong> {company.company_address}</p>
                                    <p>
                                        <strong>Уебсайт:</strong>{' '}
                                        {company.company_website || '—'}
                                    </p>
                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-8">

                                <div className="card p-3 mb-3">
                                    <h5>Описание</h5>
                                    <p className="mb-0">
                                        {company.company_full_description}
                                    </p>
                                </div>

                                <div className="row">

                                    {/* Benefits */}
                                    <div className="col-lg-4">
                                        <div className="card p-3 mb-3">
                                            <h6>Придобивки</h6>
                                            <ul className="mb-0">
                                                {company.company_benefits.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Locations */}
                                    <div className="col-lg-4">
                                        <div className="card p-3 mb-3">
                                            <h6>Работни места</h6>
                                            <ul className="mb-0">
                                                {company.work_locations.map((w, i) => (
                                                    <li key={i}>{w}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    <div className="col-lg-4">
                                        <div className="card p-3 mb-3">
                                            <h6>Езици</h6>
                                            <ul className="mb-0">
                                                {company.work_languages.map((l, i) => (
                                                    <li key={i}>{l}</li>
                                                ))}
                                            </ul>
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

ViewCompany.layout = page => <DashboardLayout children={page} />;
