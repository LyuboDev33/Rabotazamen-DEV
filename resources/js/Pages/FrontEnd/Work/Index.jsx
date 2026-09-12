import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function Work({ jobs, filters }) {

    const params = new URLSearchParams(window.location.search);

    const selectedCategory = params.get('category') ?? '';
    const selectedCity = params.get('city') ?? '';
    const selectedJobRole = params.get('job_role') ?? '';
    const selectedMinSalary = params.get('min_salary') ?? '';
    const selectedMaxSalary = params.get('max_salary') ?? '';

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
            <section className="page-title style-three">
                <form method="GET" className="auto-container">
                    {/* Job Search Form */}
                    <div className="job-search-form">
                        <div>
                            <div className="row">

                                {/* Form Group */}
                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                    <span className="icon flaticon-search-1" />

                                    <select name="category" className="chosen-select" defaultValue={selectedCategory}>
                                        <option value="">Изберете категория</option>

                                        {filters.jobCategories.map((category) => (
                                            <option key={category.id} value={category.slug}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Form Group */}
                                <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                                    <span className="icon flaticon-map-locator" />

                                    <select name="city" className="chosen-select" defaultValue={selectedCity}>
                                        <option value="">Изберете град</option>

                                        {filters.jobCities.map((city) => (
                                            <option key={city.id} value={city.city_slug}>
                                                {city.city_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Form Group */}
                                <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
                                    <span className="icon flaticon-briefcase" />

                                    <select name="job_role" className="chosen-select" defaultValue={selectedJobRole}>
                                        <option value="">Изберете позиция</option>

                                        {filters.jobRoles.map((jobRole) => (
                                            <option key={jobRole.id} value={jobRole.slug}>
                                                {jobRole.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Form Group */}
                                <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                                    <button type="submit" className="theme-btn btn-style-one">
                                        Търси
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Job Search Form */}

                    <div className="top-filters">

                        <div className="form-group">
                            <select name="min_salary" className="chosen-select" defaultValue={selectedMinSalary}>
                                <option value="">Минимална заплата</option>
                                <option value="1200">1200</option>
                                <option value="1500">1500</option>
                                <option value="1800">1800</option>
                                <option value="2000">2000</option>
                                <option value="2500">2500</option>
                                <option value="3000">3000</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="max_salary" className="chosen-select" defaultValue={selectedMaxSalary}>
                                <option value="">Максимална заплата</option>
                                <option value="1500">1500</option>
                                <option value="1800">1800</option>
                                <option value="2000">2000</option>
                                <option value="2500">2500</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="chosen-select">
                                <option>Experience Level</option>
                                <option>New Jobs</option>
                                <option>Freelance</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Part Time</option>
                                <option>Temporary</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="chosen-select">
                                <option>Salary estimate</option>
                                <option>New Jobs</option>
                                <option>Freelance</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Part Time</option>
                                <option>Temporary</option>
                            </select>
                        </div>

                    </div>
                </form>
            </section>


            <div className="section-full p-t50 p-b90 site-bg-white">

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
                                                            ? 'Пълен работен ден' : job.employment_type === 'part_time'
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

                                                    <a
                                                        href={`/jobs/show/${job.id}`}
                                                        className="twm-jobs-browse site-text-primary">
                                                        Виж обявата
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <div className="col-12">

                                        <div className="alert-info p-3 rounded-3 text-center">
                                            Няма резултати с избраните филтри.
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
