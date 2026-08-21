import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, usePage } from "@inertiajs/react";

export default function User({ candidate }) {

    const candidateData = candidate || {};
    const profilePicture = usePage().props.auth.profilePic;

    const months = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември",
    ];

    const workStatusLabels = {
        actively_looking: "Активно търси работа",
        open_to_offers: "Отворен за предложения",
        not_looking: "Не търси работа в момента",
    };

    const seniorityLabels = {
        junior: "Junior",
        mid: "Mid",
        team_leader: "Team Leader",
        senior: "Senior",
        principal: "Principal",
        cto: "CTO",
    };

    const workModelLabels = {
        on_site: "Работа на място",
        hybrid: "Хибридна работа",
        remote: "Дистанционна работа",
    };

    const skillLabels = {
        communication: "Комуникация",
        teamwork: "Работа в екип",
        problem_solving: "Решаване на проблеми",
        adaptability: "Адаптивност",
        organization: "Организираност",
        time_management: "Управление на времето",
        critical_thinking: "Критично мислене",
        analytical_thinking: "Аналитично мислене",
        independence: "Самостоятелност",
        work_under_pressure: "Работа под напрежение",
    };

    const getMonthName = (month) => {
        if (!month) return "";

        const monthNumber = parseInt(month);

        if (monthNumber >= 1 && monthNumber <= 12) {
            return months[monthNumber - 1];
        }

        return month;
    };

    const formatPeriod = (startMonth, startYear, endMonth, endYear, current = false) => {

        let start = "";

        if (startMonth) {
            start += getMonthName(startMonth);
        }

        if (startYear) {
            start += `${start ? " " : ""}${startYear}`;
        }

        let end = "";

        if (current) {
            end = "До момента";
        } else {

            if (endMonth) {
                end += getMonthName(endMonth);
            }

            if (endYear) {
                end += `${end ? " " : ""}${endYear}`;
            }
        }

        if (start && end) {
            return `${start} - ${end}`;
        }

        return start || end || "Не е посочено";
    };



    return (
        <>
            <Head>
                <title>
                    {candidateData.professional_title
                        ? `${candidateData.professional_title} | Кандидат`
                        : "Профил на кандидат"}
                </title>
            </Head>

            <div className="page-content">

                <div className="section-full p-t120 p-b100 bg-white">

                    <div className="container">

                        <div className="section-content">

                            <div className="row d-flex justify-content-center">

                                {/* LEFT SIDE */}
                                <div className="col-lg-8 col-md-12">

                                    <div className="cabdidate-de-info">

                                        {/* Candidate Header */}
                                        <div
                                            className="twm-candi-self-wrap overlay-wraper"
                                            style={{
                                                backgroundImage:
                                                    "url('/images/candidates/candidate-bg.jpg')",
                                            }}
                                        >

                                            <div className="overlay-main site-bg-primary opacity-01" />

                                            <div className="twm-candi-self-info">

                                                <div className="twm-candi-self-top">

                                                    {candidateData.min_salary !== null &&
                                                        candidateData.min_salary !== undefined &&
                                                        candidateData.max_salary !== null &&
                                                        candidateData.max_salary !== undefined && (

                                                            <div className="twm-candi-fee">
                                                                {candidateData.min_salary} - {candidateData.max_salary} EUR
                                                            </div>

                                                        )}

                                                    <div className="twm-media">
                                                        <img
                                                            src={profilePicture}
                                                            alt={
                                                                candidateData.professional_title ||
                                                                "Кандидат"
                                                            }
                                                        />
                                                    </div>

                                                    <div className="twm-mid-content">

                                                        <h4 className="twm-job-title">
                                                            {candidateData.professional_title ||
                                                                "Кандидат"}
                                                        </h4>

                                                        {candidateData.seniority && (
                                                            <p>
                                                                {seniorityLabels[candidateData.seniority] ||
                                                                    candidateData.seniority}
                                                            </p>
                                                        )}

                                                        {candidateData.location && (
                                                            <p className="twm-candidate-address">
                                                                <i className="feather-map-pin" />
                                                                {candidateData.location}
                                                            </p>
                                                        )}

                                                        {candidateData.work_status && (
                                                            <p>
                                                                <i className="fa fa-briefcase me-2" />

                                                                {workStatusLabels[
                                                                    candidateData.work_status
                                                                ] || candidateData.work_status}
                                                            </p>
                                                        )}

                                                    </div>

                                                </div>

                                                {/* CV Buttons */}
                                                {candidateData.c_vs &&
                                                    candidateData.c_vs.length > 0 && (

                                                        <div className="twm-candi-self-bottom">

                                                            {candidateData.c_vs.map((cv) => (

                                                                <a
                                                                    key={cv.id}
                                                                    href={`/assets/pdfs/${cv.file_name}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="site-button secondry"
                                                                >
                                                                    <i className="fa-regular fa-file-pdf me-2" />
                                                                    Прегледай CV
                                                                </a>

                                                            ))}

                                                        </div>

                                                    )}

                                            </div>

                                        </div>


                                        {/* ABOUT */}
                                        <h4 className="twm-s-title">
                                            За кандидата
                                        </h4>

                                        {candidateData.about_me ? (

                                            <div
                                                className="candidate-about-content"
                                                dangerouslySetInnerHTML={{
                                                    __html: candidateData.about_me,
                                                }}
                                            />

                                        ) : (

                                            <p>
                                                Кандидатът все още не е добавил кратко представяне.
                                            </p>

                                        )}


                                        {/* SKILLS */}
                                        {candidateData.skills &&
                                            candidateData.skills.length > 0 && (
                                                <>
                                                    <h4 className="twm-s-title">
                                                        Ключови умения
                                                    </h4>

                                                    <div className="tw-sidebar-tags-wrap">

                                                        <div className="tagcloud">

                                                            {candidateData.skills.map((skill) => (

                                                                <span
                                                                    key={skill}
                                                                    className="candidate-skill-tag"
                                                                >
                                                                    {skillLabels[skill] || skill}
                                                                </span>

                                                            ))}

                                                        </div>

                                                    </div>
                                                </>
                                            )}


                                        {/* WORK MODE */}
                                        {candidateData.work_model &&
                                            candidateData.work_model.length > 0 && (
                                                <>
                                                    <h4 className="twm-s-title">
                                                        Предпочитан модел на работа
                                                    </h4>

                                                    <div className="tw-sidebar-tags-wrap">

                                                        <div className="tagcloud">

                                                            {candidateData.work_model.map((model) => (

                                                                <span
                                                                    key={model}
                                                                    className="candidate-skill-tag"
                                                                >
                                                                    {workModelLabels[model] || model}
                                                                </span>

                                                            ))}

                                                        </div>

                                                    </div>
                                                </>
                                            )}


                                        {/* WORK EXPERIENCE */}
                                        <h4 className="twm-s-title">
                                            Професионален опит
                                        </h4>

                                        {candidateData.work_experience &&
                                            candidateData.work_experience.length > 0 ? (

                                            <div className="twm-timing-list-wrap">

                                                {candidateData.work_experience.map((experience) => (

                                                    <div
                                                        className="twm-timing-list"
                                                        key={experience.id}
                                                    >

                                                        <div className="twm-time-list-date">

                                                            {formatPeriod(
                                                                experience.start_month,
                                                                experience.start_year,
                                                                experience.end_month,
                                                                experience.end_year,
                                                                experience.currently_working
                                                            )}

                                                        </div>

                                                        {experience.company_name && (
                                                            <div className="twm-time-list-title">
                                                                {experience.company_name}
                                                            </div>
                                                        )}

                                                        {experience.position && (
                                                            <div className="twm-time-list-position">
                                                                {experience.position}
                                                            </div>
                                                        )}

                                                        {experience.location && (
                                                            <div className="mb-2">
                                                                <i className="fa fa-map-marker-alt me-2" />
                                                                {experience.location}
                                                            </div>
                                                        )}

                                                        {experience.description && (

                                                            <div
                                                                className="twm-time-list-discription"
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        experience.description,
                                                                }}
                                                            />

                                                        )}

                                                    </div>

                                                ))}

                                            </div>

                                        ) : (

                                            <p>
                                                Няма добавен професионален опит.
                                            </p>

                                        )}


                                        {/* EDUCATION */}
                                        <h4 className="twm-s-title">
                                            Образование
                                        </h4>

                                        {candidateData.education &&
                                            candidateData.education.length > 0 ? (

                                            <div className="twm-timing-list-wrap">

                                                {candidateData.education.map((education) => (

                                                    <div
                                                        className="twm-timing-list"
                                                        key={education.id}
                                                    >

                                                        <div className="twm-time-list-date">

                                                            {formatPeriod(
                                                                education.start_month,
                                                                education.start_year,
                                                                education.end_month,
                                                                education.end_year,
                                                                education.currently_studying
                                                            )}

                                                        </div>

                                                        {education.institution && (
                                                            <div className="twm-time-list-title">
                                                                {education.institution}
                                                            </div>
                                                        )}

                                                        {education.degree && (
                                                            <div className="twm-time-list-position">
                                                                {education.degree}
                                                            </div>
                                                        )}

                                                        {education.field_of_study && (
                                                            <div className="mb-2">
                                                                {education.field_of_study}
                                                            </div>
                                                        )}

                                                        {education.location && (
                                                            <div className="mb-2">
                                                                <i className="fa fa-map-marker-alt me-2" />
                                                                {education.location}
                                                            </div>
                                                        )}

                                                        {education.description && (

                                                            <div
                                                                className="twm-time-list-discription"
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        education.description,
                                                                }}
                                                            />

                                                        )}

                                                    </div>

                                                ))}

                                            </div>

                                        ) : (

                                            <p>
                                                Няма добавена информация за образование.
                                            </p>

                                        )}

                                    </div>

                                </div>


                                {/* RIGHT SIDEBAR */}
                                <div className="col-lg-4 col-md-12 rightSidebar">

                                    <div className="side-bar-2">

                                        {/* PROFILE INFO */}
                                        <div className="twm-s-info-wrap mb-5">

                                            <h4 className="section-head-small mb-4">
                                                Информация за кандидата
                                            </h4>

                                            <div className="twm-s-info">

                                                <ul>

                                                    {candidateData.min_salary !== null &&
                                                        candidateData.min_salary !== undefined &&
                                                        candidateData.max_salary !== null &&
                                                        candidateData.max_salary !== undefined && (

                                                            <li>
                                                                <div className="twm-s-info-inner">

                                                                    <i className="fas fa-money-bill-wave" />

                                                                    <span className="twm-title">
                                                                        Желано възнаграждение
                                                                    </span>

                                                                    <div className="twm-s-info-discription">
                                                                        {candidateData.min_salary} -{" "}
                                                                        {candidateData.max_salary} EUR
                                                                    </div>

                                                                </div>
                                                            </li>

                                                        )}


                                                    {candidateData.years_experience && (

                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-clock" />

                                                                <span className="twm-title">
                                                                    Професионален опит
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {candidateData.years_experience}{" "}
                                                                    {Number(candidateData.years_experience) === 1
                                                                        ? "година"
                                                                        : "години"}
                                                                </div>

                                                            </div>
                                                        </li>

                                                    )}


                                                    {candidateData.seniority && (

                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-layer-group" />

                                                                <span className="twm-title">
                                                                    Ниво
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {seniorityLabels[
                                                                        candidateData.seniority
                                                                    ] || candidateData.seniority}
                                                                </div>

                                                            </div>
                                                        </li>

                                                    )}


                                                    {candidateData.phone && (

                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-mobile-alt" />

                                                                <span className="twm-title">
                                                                    Телефон
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {candidateData.phone}
                                                                </div>

                                                            </div>
                                                        </li>

                                                    )}


                                                    {candidateData.location && (

                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-map-marker-alt" />

                                                                <span className="twm-title">
                                                                    Локация
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {candidateData.location}
                                                                </div>

                                                            </div>
                                                        </li>

                                                    )}


                                                    {candidateData.work_status && (

                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-briefcase" />

                                                                <span className="twm-title">
                                                                    Статус
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {workStatusLabels[
                                                                        candidateData.work_status
                                                                    ] || candidateData.work_status}
                                                                </div>

                                                            </div>
                                                        </li>

                                                    )}

                                                </ul>

                                            </div>

                                        </div>


                                        {/* WORK MODEL */}
                                        {candidateData.work_model &&
                                            candidateData.work_model.length > 0 && (

                                                <div className="twm-s-info-wrap mb-5">

                                                    <h4 className="section-head-small mb-4">
                                                        Модел на работа
                                                    </h4>

                                                    <div className="tw-sidebar-tags-wrap">

                                                        <div className="tagcloud">

                                                            {candidateData.work_model.map((model) => (

                                                                <span
                                                                    key={model}
                                                                    className="candidate-skill-tag"
                                                                >
                                                                    {workModelLabels[model] || model}
                                                                </span>

                                                            ))}

                                                        </div>

                                                    </div>

                                                </div>

                                            )}


                                        {/* CV */}
                                        {candidateData.c_vs &&
                                            candidateData.c_vs.length > 0 && (

                                                <div className="twm-s-info-wrap mb-5">

                                                    <h4 className="section-head-small mb-4">
                                                        CV файлове
                                                    </h4>

                                                    <div className="d-flex flex-column gap-2">

                                                        {candidateData.c_vs.map((cv) => (

                                                            <a
                                                                key={cv.id}
                                                                href={`/assets/pdfs/${cv.file_name}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="site-button"
                                                            >
                                                                <i className="fa-regular fa-file-pdf me-2" />

                                                                {cv.file_name}
                                                            </a>

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

            </div>
        </>
    );
}

User.layout = (page) => <FrontEndLayout children={page} />;
