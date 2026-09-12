import React, { useState } from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link, usePage, Form } from "@inertiajs/react";


export default function Job({ job, hasApplied }) {

    const { flash } = usePage();
    const { auth, candidateStatus } = usePage().props;
    const [showApplySidebar, setShowApplySidebar] = useState(false);
    const [selectedCV, setSelectedCV] = useState("");
    const candidateId = candidateStatus?.candidateId;

    const cvs = candidateStatus?.cvs ?? candidateStatus?.candidate?.cvs ?? [];
    const isLoggedIn = Boolean(auth?.user);
    const isCandidate = auth?.isCandidate === true || auth?.isCandidate === 1;
    const isEmployer = auth?.isEmployer === true || auth?.isEmployer === 1;
    const profileComplete = candidateStatus?.profileComplete === true;




    const formatDate = (date) => {
        if (!date) {
            return "-";
        }

        return new Date(date).toLocaleDateString("bg-BG", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const employmentTypes = {
        full_time: "Пълен работен ден",
        part_time: "Непълен работен ден",
        internship: "Стаж",
        freelance: "Freelance",
        temporary: "Временна заетост",
    };

    const workTypes = {
        permanent: "Постоянна работа",
        temporary: "Временна работа",
        contract: "Договор",
    };

    const positionLevels = {
        intern: "Стажант",
        junior: "Junior",
        mid: "Mid",
        senior: "Senior",
        lead: "Lead",
        manager: "Manager",
    };

    const remoteOptions = {
        office: "Работа от офис",
        remote: "Дистанционна работа",
        hybrid: "Хибридна работа",
    };


    return (
        <>
            <Head title={`${job.title}`}>


                <meta
                    name="description"
                    content={`${job.title} в ${job.publisher?.company_name ?? "компания"}. Работа в ${job.city?.city_name ?? "България"}. Заплата ${job.min_salary} - ${job.max_salary} EUR.`}
                />

                <meta
                    name="keywords"
                    content={`${job.title}, ${job.category?.name ?? ""}, ${job.job_role?.name ?? ""}, работа ${job.city?.city_name ?? ""}, ${job.publisher?.company_name ?? ""}`}
                />

                <meta
                    property="og:title"
                    content={`${job.title} | ${job.publisher?.company_name ?? "RabotaZaMen"}`}
                />

                <meta
                    property="og:description"
                    content={`Кандидатствайте за ${job.title} в ${job.publisher?.company_name ?? "компанията"}.`}
                />

                <meta
                    property="og:type"
                    content="website"
                />
            </Head>


            {/* CONTENT START */}
            <div className="page-content">

                {/* JOB DETAIL START */}
                <div className="section-full p-t120 p-b90 bg-white">

                    <div className="container">

                        <div className="section-content">

                            <div className="row d-flex justify-content-center">

                                {/* LEFT SIDE */}
                                <div className="col-lg-8 col-md-12">


                                    <div className="cabdidate-de-info">

                                        <div className="twm-job-self-wrap">

                                            <div className="twm-job-self-info">

                                                <div className="twm-job-self-top">

                                                    <div className="twm-media-bg shadow rounded-5">
                                                        {job.publisher?.company_banner && (
                                                            <img
                                                                src={`/assets/images/company_banners/${job.publisher.company_banner}`}
                                                                alt={job.publisher.company_name}
                                                            />
                                                        )}
                                                    </div>


                                                    <div className="twm-mid-content">

                                                        <div className="twm-media">

                                                            {job.publisher?.company_logo && (
                                                                <img
                                                                    src={`/assets/images/company_profile_pictures/${job.publisher.company_logo}`}
                                                                    alt={job.publisher.company_name}
                                                                />
                                                            )}

                                                        </div>

                                                        <hr />

                                                        <h4 className="twm-job-title">

                                                            {job.title}

                                                            <span className="twm-job-post-duration">
                                                                {" "}
                                                                / {formatDate(job.created_at)}
                                                            </span>

                                                        </h4>


                                                        <p className="twm-job-address">

                                                            <i className="fa-solid fa-location-dot me-2" />

                                                            {job.city?.city_name}

                                                            {job.address && (
                                                                <>
                                                                    , {job.address}
                                                                </>
                                                            )}

                                                        </p>


                                                        <div className="twm-job-self-mid">

                                                            <div className="twm-job-self-mid-left">

                                                                {job.publisher?.company_website && (
                                                                    <a
                                                                        href={job.publisher.company_website}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="twm-job-websites site-text-primary"
                                                                    >
                                                                        {job.publisher.company_website}
                                                                    </a>
                                                                )}


                                                                <div className="twm-jobs-amount">

                                                                    {job.min_salary} - {job.max_salary} EUR

                                                                    <span>
                                                                        {" "}
                                                                        / месец
                                                                    </span>

                                                                </div>

                                                            </div>


                                                            <div className="twm-job-apllication-area">

                                                                Кандидатстване до:

                                                                <span className="twm-job-apllication-date">
                                                                    {" "}
                                                                    {formatDate(job.job_end_date)}
                                                                </span>

                                                            </div>

                                                        </div>


                                                        {/* JOB INFORMATION */}
                                                        <div className="job-main-information mt-4">

                                                            <div className="row g-3">

                                                                {/* LOCATION */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-location-dot" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Локация
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {job.city?.city_name ?? "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* JOB ROLE */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-user-tie" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Позиция
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {job.job_role?.name ?? job.title}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* CATEGORY */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-briefcase" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Категория
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {job.category?.name ?? "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* POSITION LEVEL */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-layer-group" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Ниво
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {positionLevels[job.position_level] ?? job.position_level}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* EMPLOYMENT TYPE */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-clock" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Заетост
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {employmentTypes[job.employment_type] ?? job.employment_type}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* WORK TYPE */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-building" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Вид работа
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {workTypes[job.work_type] ?? job.work_type}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                                {/* REMOTE OPTION */}
                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-laptop-house" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Начин на работа
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {remoteOptions[job.remote_option] ?? job.remote_option}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div className="twm-job-self-bottom mt-4">

                                                            {job.is_active === 1 ? (
                                                                hasApplied ? (
                                                                    <p className="p-3 alert-info rounded-pill mb-0">
                                                                        Вече сте кандидатствали по тази обява.
                                                                    </p>
                                                                ) : (
                                                                    <button
                                                                        type="button"
                                                                        className="site-button"
                                                                        onClick={() => setShowApplySidebar(true)}
                                                                    >
                                                                        Кандидатствай
                                                                    </button>
                                                                )
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    className="site-button"
                                                                    disabled
                                                                >
                                                                    Обявата е изтекла
                                                                </button>
                                                            )}
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <hr />
                                        {/* JOB DESCRIPTION */}
                                        <h4 className="twm-s-title">
                                            Описание на позицията:
                                        </h4>

                                        <div
                                            className="job-description"
                                            dangerouslySetInnerHTML={{
                                                __html: job.description ?? "",
                                            }}
                                        />


                                        {/* LANGUAGES */}
                                        {job.languages?.length > 0 && (
                                            <>
                                                <h4 className="twm-s-title">
                                                    Изисквани езици:
                                                </h4>

                                                <ul className="description-list-2">

                                                    {job.languages.map((language) => (

                                                        <li key={language.id}>

                                                            <i className="fa-solid fa-circle-check" />

                                                            {language.language_name}

                                                        </li>

                                                    ))}

                                                </ul>
                                            </>
                                        )}



                                        <h4 className="twm-s-title">
                                            Сподели обявата
                                        </h4>

                                        <div className="twm-social-tags">

                                            <a
                                                href="#"
                                                className="fb-clr"
                                            >
                                                Facebook
                                            </a>


                                            <a
                                                href="#"
                                                className="link-clr"
                                            >
                                                Linkedin
                                            </a>


                                        </div>

                                    </div>

                                </div>


                                {/* RIGHT SIDEBAR */}
                                <div className="col-lg-4 col-md-12 rightSidebar">

                                    {/* COMPANY */}
                                    {job.publisher && (

                                        <div className="twm-s-info3-wrap mb-5">

                                            <div className="twm-s-info3">

                                                <div className="twm-s-info-logo-section">



                                                    <h4 className="twm-title">
                                                        {job.publisher.company_name}
                                                    </h4>

                                                </div>


                                                <ul>

                                                    {/* COMPANY */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-building" />

                                                            <span className="twm-title">
                                                                Компания
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.publisher.company_name}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* INDUSTRY */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-briefcase" />

                                                            <span className="twm-title">
                                                                Индустрия
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.publisher.company_industry}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* SIZE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-users" />

                                                            <span className="twm-title">
                                                                Размер
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.publisher.company_size}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* WEBSITE */}
                                                    {job.publisher.company_website && (

                                                        <li>

                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-desktop" />

                                                                <span className="twm-title">
                                                                    Уебсайт
                                                                </span>

                                                                <div className="twm-s-info-discription">

                                                                    <a
                                                                        href={job.publisher.company_website}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        {job.publisher.company_website}
                                                                    </a>

                                                                </div>

                                                            </div>

                                                        </li>

                                                    )}


                                                    {/* ADDRESS */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-map-marker-alt" />

                                                            <span className="twm-title">
                                                                Адрес
                                                            </span>

                                                            <div className="twm-s-info-discription">

                                                                {job.publisher.company_location}

                                                                {job.publisher.company_address && (
                                                                    <>
                                                                        , {job.publisher.company_address}
                                                                    </>
                                                                )}

                                                            </div>

                                                        </div>

                                                    </li>

                                                </ul>


                                                <Link
                                                    href={`/companies/${job.publisher.id}`}
                                                    className="site-button"
                                                >
                                                    Виж компанията
                                                </Link>

                                            </div>

                                        </div>

                                    )}

                                    <div className="side-bar mb-4 shadow">

                                        <div className="twm-s-info2-wrap mb-5">

                                            <div className="twm-s-info2">

                                                <h4 className="section-head-small mb-4">
                                                    Информация за обявата
                                                </h4>


                                                <ul className="twm-job-hilites">

                                                    <li>

                                                        <i className="fas fa-calendar-alt" />

                                                        <span className="twm-title">
                                                            Публикувана на {formatDate(job.created_at)}
                                                        </span>

                                                    </li>


                                                    <li>

                                                        <i className="fas fa-eye" />

                                                        <span className="twm-title">
                                                            {job.number_of_views ?? 0} преглеждания
                                                        </span>

                                                    </li>


                                                    <li>

                                                        <i className="fas fa-briefcase" />

                                                        <span className="twm-title">
                                                            {job.open_positions}{" "}
                                                            {job.open_positions === 1
                                                                ? "отворена позиция"
                                                                : "отворени позиции"}
                                                        </span>

                                                    </li>

                                                </ul>


                                                <ul className="twm-job-hilites2">

                                                    {/* DATE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-calendar-alt" />

                                                            <span className="twm-title">
                                                                Публикувана
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {formatDate(job.created_at)}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* LOCATION */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-map-marker-alt" />

                                                            <span className="twm-title">
                                                                Локация
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.city?.city_name ?? "-"}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* JOB ROLE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-user-tie" />

                                                            <span className="twm-title">
                                                                Позиция
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.job_role?.name ?? job.title}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* CATEGORY */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-suitcase" />

                                                            <span className="twm-title">
                                                                Категория
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.category?.name ?? "-"}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* POSITION LEVEL */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-layer-group" />

                                                            <span className="twm-title">
                                                                Ниво
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {positionLevels[job.position_level] ?? job.position_level}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* EMPLOYMENT */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-clock" />

                                                            <span className="twm-title">
                                                                Заетост
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {employmentTypes[job.employment_type] ?? job.employment_type}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* WORK TYPE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-briefcase" />

                                                            <span className="twm-title">
                                                                Вид работа
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {workTypes[job.work_type] ?? job.work_type}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* REMOTE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-laptop-house" />

                                                            <span className="twm-title">
                                                                Начин на работа
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {remoteOptions[job.remote_option] ?? job.remote_option}
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* SALARY */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-money-bill-wave" />

                                                            <span className="twm-title">
                                                                Възнаграждение
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {job.min_salary} - {job.max_salary} EUR
                                                            </div>

                                                        </div>

                                                    </li>


                                                    {/* ANNUAL LEAVE */}
                                                    {job.annual_leave && (

                                                        <li>

                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-umbrella-beach" />

                                                                <span className="twm-title">
                                                                    Годишен отпуск
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {job.annual_leave} дни
                                                                </div>

                                                            </div>

                                                        </li>

                                                    )}


                                                    {/* END DATE */}
                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-hourglass-end" />

                                                            <span className="twm-title">
                                                                Валидна до
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {formatDate(job.job_end_date)}
                                                            </div>

                                                        </div>

                                                    </li>

                                                </ul>

                                            </div>

                                        </div>


                                        {/* LANGUAGES */}
                                        {job.languages?.length > 0 && (

                                            <div className="widget tw-sidebar-tags-wrap">

                                                <h4 className="section-head-small mb-4">
                                                    Езици
                                                </h4>

                                                <div className="tagcloud">

                                                    {job.languages.map((language) => (

                                                        <span key={language.id}>
                                                            {language.language_name}
                                                        </span>

                                                    ))}

                                                </div>

                                            </div>

                                        )}

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                {/* JOB DETAIL END */}

            </div>
            {/* CONTENT END */}

            {/* APPLY SIDEBAR */}
            {showApplySidebar && (
                <>
                    <div
                        className="job-apply-sidebar-backdrop"
                        onClick={() => setShowApplySidebar(false)}
                    />

                    <aside className="job-apply-sidebar">
                        <div className="job-apply-sidebar__header">
                            <div>
                                <span className="text-muted small">Кандидатстване</span>
                                <h4 className="mb-0">{job.title}</h4>
                            </div>

                            <button
                                type="button"
                                className="job-apply-sidebar__close"
                                onClick={() => setShowApplySidebar(false)}
                                aria-label="Затвори"
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>

                        <div className="job-apply-sidebar__body">

                            {/* NOT LOGGED IN */}
                            {!isLoggedIn && (
                                <div className="job-apply-message job-apply-message--info">
                                    <div className="job-apply-message__icon">
                                        <i className="fa-solid fa-right-to-bracket" />
                                    </div>

                                    <h5>Влезте в профила си</h5>

                                    <p className="mb-0">
                                        За да кандидатствате за тази позиция, е необходимо първо да влезете в своя профил. След вход ще можете да използвате запазено CV и да изпратите кандидатурата си.
                                    </p>

                                    <Link
                                        href={route("login")}
                                        className="site-button mt-4"
                                    >
                                        Вход в профила
                                    </Link>
                                </div>
                            )}


                            {/* EMPLOYER */}
                            {isLoggedIn && isEmployer && (
                                <div className="job-apply-message job-apply-message--warning">
                                    <div className="job-apply-message__icon d-flex gap-2">
                                        <i className="fa-solid fa-building" />
                                        <h5>Кандидатстването не е достъпно</h5>
                                    </div>


                                    <p className="mb-0">
                                        Профилите на работодатели и компании не могат да кандидатстват за обяви. Ако желаете да кандидатствате за работа, използвайте кандидатски профил.
                                    </p>
                                </div>
                            )}


                            {/* CANDIDATE WITH INCOMPLETE PROFILE */}
                            {isLoggedIn && isCandidate && !profileComplete && (
                                <div className="job-apply-message job-apply-message--warning mt-3">
                                    <div className="job-apply-message__icon d-flex gap-2">
                                        <i className="fa-solid fa-user-pen" />
                                        <h5>Профилът ви не е завършен</h5>
                                    </div>



                                    <p className="mb-0">
                                        За да кандидатствате за тази позиция, трябва първо да попълните кандидатския си профил. Необходимо е да добавите основната информация за себе си, образование, професионален опит и поне едно CV.
                                    </p>

                                    <Link
                                        href={route("candidate.profile")}
                                        className="site-button mt-4"
                                    >
                                        Попълнете профила си
                                    </Link>
                                </div>
                            )}


                            {/* CANDIDATE WITH COMPLETE PROFILE */}
                            {isLoggedIn && isCandidate && !isEmployer && profileComplete && (
                                <div>

                                    {flash.successApplication && (
                                        <div className="alert alert-success animate__animated animate__fadeInUp mb-4">
                                            <i className="fa-solid fa-circle-check me-2"></i>
                                            {flash.successApplication}
                                        </div>
                                    )}

                                    {hasApplied ? (

                                        <div className="job-apply-message job-apply-message--success">

                                            <div className="job-apply-message__icon d-flex gap-2">
                                                <i className="fa-solid fa-circle-check" />
                                                <h5>Кандидатстването е успешно!</h5>

                                            </div>


                                            <p className="mb-0">
                                                Вече сте кандидатствали по тази обява. Работодателят ще има възможност да прегледа вашата кандидатура и избраното от вас CV.
                                            </p>

                                        </div>

                                    ) : (
                                        <>



                                            {cvs.length > 0 ? (

                                                <Form
                                                    options={{
                                                        preserveScroll: true,
                                                    }}
                                                    action={route('application.apply', {
                                                        job: job.id,
                                                        candidate: candidateId,
                                                    })}
                                                    method="POST"
                                                >
                                                    {({ errors, processing }) => (
                                                        <>

                                                            <div className="form-group mb-4">

                                                                <label
                                                                    htmlFor="application-cv"
                                                                    className="form-label fw-semibold"
                                                                >
                                                                    Изберете CV
                                                                    <span className="text-danger"> *</span>
                                                                </label>

                                                                <select
                                                                    id="application-cv"
                                                                    name="cv_id"
                                                                    className={`form-select ${errors.cv_id ? 'is-invalid' : ''}`}
                                                                    defaultValue=""
                                                                >
                                                                    <option value="">
                                                                        Изберете CV
                                                                    </option>

                                                                    {cvs.map((cv) => (
                                                                        <option
                                                                            key={cv.id}
                                                                            value={cv.id}
                                                                        >
                                                                            {cv.file_name ?? cv.name ?? `CV #${cv.id}`}
                                                                        </option>
                                                                    ))}
                                                                </select>

                                                                {errors.cv_id && (
                                                                    <div className="text-danger mt-2">
                                                                        {errors.cv_id}
                                                                    </div>
                                                                )}

                                                                <small className="text-muted d-block mt-2">
                                                                    Изберете кое от вашите CV-та искате да използвате за кандидатурата.
                                                                </small>

                                                            </div>


                                                            <div className="form-group mb-4">

                                                                <label
                                                                    htmlFor="application-message"
                                                                    className="form-label fw-semibold"
                                                                >
                                                                    Съобщение към работодателя
                                                                </label>

                                                                <textarea
                                                                    id="application-message"
                                                                    name="message"
                                                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                                    rows="6"
                                                                    placeholder="Напишете кратко съобщение към работодателя..."
                                                                />

                                                                {errors.message && (
                                                                    <div className="text-danger mt-2">
                                                                        {errors.message}
                                                                    </div>
                                                                )}

                                                            </div>


                                                            {errors.application && (
                                                                <div className="alert alert-danger mb-4">
                                                                    {errors.application}
                                                                </div>
                                                            )}


                                                            <button
                                                                type="submit"
                                                                className="site-button w-100"
                                                                disabled={processing}
                                                            >
                                                                {processing ? (
                                                                    <>
                                                                        <i className="fa-solid fa-spinner fa-spin me-2" />
                                                                        Изпращане...
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <i className="fa-solid fa-paper-plane me-2" />
                                                                        Кандидатствай
                                                                    </>
                                                                )}
                                                            </button>

                                                        </>
                                                    )}
                                                </Form>

                                            ) : (

                                                <div className="job-apply-message job-apply-message--warning mt-3">

                                                    <div className="job-apply-message__icon">
                                                        <i className="fa-regular fa-circle-xmark" />
                                                    </div>

                                                    <h5>Нямате качено CV</h5>

                                                    <p className="mb-0">
                                                        Не можете да кандидатствате, докато не добавите поне едно CV към кандидатския си профил.
                                                    </p>

                                                </div>

                                            )}

                                        </>
                                    )}

                                </div>
                            )}

                        </div>
                    </aside>
                </>
            )}


        </>
    );
}

Job.layout = (page) => <FrontEndLayout children={page} />;
