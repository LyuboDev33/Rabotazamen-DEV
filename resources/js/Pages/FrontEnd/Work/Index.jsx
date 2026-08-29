import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function Work ({ jobs }) {

    return (
        <>
            <Head>
                <title>Обяви за работа | RabotaZaMen</title>

                <meta
                    name="description"
                    content="Разгледайте актуални обяви за работа от водещи работодатели. Намерете подходящата позиция според град, категория, ниво и възнаграждение."
                />

                <meta
                    name="keywords"
                    content="работа, обяви за работа, работа България, свободни позиции, работодатели, работа София, работа Варна"
                />

                <meta
                    property="og:title"
                    content="Обяви за работа | RabotaZaMen"
                />

                <meta
                    property="og:description"
                    content="Открийте актуални работни позиции и намерете следващата стъпка в кариерата си."
                />

                <meta
                    property="og:type"
                    content="website"
                />
            </Head>


            {/* YOUR SEARCH/FILTER SECTION HERE */}


            <div className="section-full p-t120 p-b90 site-bg-white">

                <div className="container">

                    <div className="row">

                        <div className="col-12">

                            <div className="row">

                                {jobs && jobs.length > 0 ? (

                                    jobs.map((job) => (

                                        <div
                                            className="col-lg-6 col-md-12 m-b30"
                                            key={job.id}
                                        >

                                            <div className="twm-jobs-grid-style1">

                                                {/* Company Logo */}
                                                <div className="twm-media">

                                                    {job.publisher?.company_logo ? (

                                                        <img
                                                            src={`/assets/images/company_profile_pictures/${job.publisher.company_logo}`}
                                                            alt={`${job.publisher.company_name} logo`}
                                                        />

                                                    ) : (

                                                        <img
                                                            src="/assets/images/default-company.png"
                                                            alt="Компания"
                                                        />

                                                    )}

                                                </div>


                                                {/* Created Date */}
                                                <span className="twm-job-post-duration">
                                                    Обявата ще изтече на
                                                    <u>    {new Date(job.job_end_date).toLocaleDateString(
                                                        'bg-BG'
                                                    )}</u>

                                                </span>


                                                {/* Category */}
                                                {job.category && (

                                                    <div className="twm-jobs-category green">

                                                        <span className="twm-bg-green">
                                                            {job.category.name}
                                                        </span>

                                                    </div>

                                                )}


                                                {/* Main content */}
                                                <div className="twm-mid-content">

                                                    <Link
                                                        href={`/jobs/${job.reference_number}`}
                                                        className="twm-job-title"
                                                    >
                                                        <h4>
                                                            {job.title}
                                                        </h4>
                                                    </Link>


                                                    {/* Company */}
                                                    {job.publisher && (

                                                        <div className="mb-2">

                                                            <strong>
                                                                {job.publisher.company_name} {job.address && (
                                                            <>
                                                                {job.city?.city_name && ', '}
                                                                {job.address}
                                                            </>
                                                        )}
                                                            </strong>

                                                        </div>

                                                    )}




                                                    {/* Job Role */}
                                                    {job.job_role && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-briefcase me-2" />

                                                            {job.job_role.name}

                                                        </p>

                                                    )}


                                                    {/* Employment type */}
                                                    <p className="mb-1">

                                                        <i className="fa-solid fa-clock me-2" />

                                                        {job.employment_type === 'full_time'
                                                            ? 'Пълен работен ден'  : job.employment_type === 'part_time'
                                                            ? 'Непълен работен ден' : job.employment_type
                                                            ? 'flexible' : 'Гъвкаво работно време'
                                                        }

                                                    </p>


                                                    {/* Remote option */}
                                                    <p className="mb-0">

                                                        <i className="fa-solid fa-house-laptop me-2" />

                                                        {job.remote_option === 'office'
                                                            ? 'Работа от офис' : job.remote_option === 'hybrid'
                                                            ? 'Хибридна работа' : job.remote_option === 'remote'
                                                            ? 'Дистанционна работа' : job.remote_option}

                                                    </p>

                                                </div>


                                                {/* Right content */}
                                                <div className="twm-right-content">

                                                    {/* Salary */}
                                                    <div className="twm-jobs-amount">

                                                        {Number(job.min_salary).toLocaleString('bg-BG')}
                                                        {' - '}
                                                        {Number(job.max_salary).toLocaleString('bg-BG')}

                                                        <span> EUR</span>

                                                    </div>

                                                    <Link
                                                        href={`/jobs/show/${job.id}`}
                                                        className="twm-jobs-browse site-text-primary">
                                                        Виж обявата
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <div className="col-12">

                                        <div className="alert-info p-3 rounded-3 text-center">
                                            В момента няма налични обяви за работа.
                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

Work.layout = (page) => <FrontEndLayout children={page} />;
