import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function Job({ job }) {

    console.log(job);


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
            <Head>
                {/* <title>
                    {job.title} | {job.publisher?.company_name ?? "RabotaZaMen"}
                </title> */}

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3 border">

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

                                                                <a
                                                                    className="site-button"
                                                                    data-bs-toggle="modal"
                                                                    href="#apply_job_popup"
                                                                    role="button"
                                                                >
                                                                    Кандидатствай
                                                                </a>

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
        </>
    );
}

Job.layout = (page) => <FrontEndLayout children={page} />;
