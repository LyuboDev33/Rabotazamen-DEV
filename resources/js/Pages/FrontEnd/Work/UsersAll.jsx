import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function AllUsers({ allCandidates }) {

    console.log(allCandidates);


    const getWorkStatus = (status) => {
        switch (status) {
            case "actively_looking":
                return "Активно търси работа";

            case "open_to_offers":
                return "Отворен към предложения";

            case "not_looking":
                return "Не търси работа";

            default:
                return "Не е посочено";
        }
    };

    const getSeniority = (seniority) => {
        switch (seniority) {
            case "junior":
                return "Junior";

            case "mid":
                return "Mid";

            case "senior":
                return "Senior";

            default:
                return seniority ?? "Не е посочено";
        }
    };

    const getWorkModel = (workModel) => {
        if (!workModel || workModel.length === 0) {
            return "Не е посочено";
        }

        return workModel
            .map((model) => {
                switch (model) {
                    case "on_site":
                        return "Работа от офис";

                    case "hybrid":
                        return "Хибридна работа";

                    case "remote":
                        return "Дистанционна работа";

                    default:
                        return model;
                }
            })
            .join(" · ");
    };

    return (
        <>
            <Head>
                <title>Кандидати | RabotaZaMen</title>

                <meta
                    name="description"
                    content="Разгледайте кандидати, които търсят нови професионални възможности. Открийте специалисти според професионален опит, умения и предпочитан модел на работа."
                />

                <meta
                    name="keywords"
                    content="кандидати за работа, специалисти, служители, търсещи работа, RabotaZaMen, кандидати България"
                />

                <meta
                    property="og:title"
                    content="Кандидати | RabotaZaMen"
                />

                <meta
                    property="og:description"
                    content="Разгледайте профили на кандидати и открийте подходящия специалист за Вашата компания."
                />

                <meta
                    property="og:type"
                    content="website"
                />
            </Head>


            <div className="section-full p-t150 p-b90 site-bg-white">

                <div className="container">

                    <div className="row">

                        <div className="col-12">


                            <div className="row">

                                {allCandidates && allCandidates.length > 0 ? (

                                    allCandidates.map((candidate) => (

                                        <div
                                            className="col-lg-6 col-md-12 m-b30"
                                            key={candidate.id}
                                        >

                                            <div className="twm-jobs-grid-style1">

                                                {/* Candidate image */}
                                                <div className="twm-media">

                                                    {candidate.user?.profile_pic ? (

                                                        <img
                                                            src={`/assets_dashboard/images/profile_pics/${candidate.user.profile_pic}`}
                                                            alt={`${candidate.user.first_name} ${candidate.user.last_name}`}
                                                        />

                                                    ) : (

                                                        <img
                                                            src="/assets_dashboard/images/profile_pics/default-avatar.png"
                                                            alt="Кандидат"
                                                        />

                                                    )}

                                                </div>


                                                {/* Work status */}
                                                <span className="twm-job-post-duration">
                                                    {getWorkStatus(candidate.work_status)}
                                                </span>


                                                {/* Seniority */}
                                                {candidate.seniority && (

                                                    <div className="twm-jobs-category green">

                                                        <span className="twm-bg-green">
                                                            {getSeniority(candidate.seniority)}
                                                        </span>

                                                    </div>

                                                )}


                                                {/* Main content */}
                                                <div className="twm-mid-content">

                                                    <Link
                                                        href={`/candidate/${candidate.id}`}
                                                        className="twm-job-title"
                                                    >

                                                        <h4>
                                                            {candidate.user?.first_name}{" "}
                                                            {candidate.user?.last_name}
                                                        </h4>

                                                    </Link>


                                                    {/* Professional title */}
                                                    {candidate.professional_title && (

                                                        <div className="mb-2">

                                                            <strong>
                                                                {candidate.professional_title}
                                                            </strong>

                                                        </div>

                                                    )}


                                                    {/* Location */}
                                                    {candidate.location && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-location-dot me-2" />

                                                            {candidate.location}

                                                        </p>

                                                    )}


                                                    {/* Experience */}
                                                    {candidate.years_experience && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-briefcase me-2" />

                                                            {candidate.years_experience} г. професионален опит

                                                        </p>

                                                    )}


                                                    {/* Work model */}
                                                    <p className="mb-1">

                                                        <i className="fa-solid fa-house-laptop me-2" />

                                                        {getWorkModel(candidate.work_model)}

                                                    </p>


                                                    {/* Work experience */}
                                                    {candidate.work_experience &&
                                                        candidate.work_experience.length > 0 && (

                                                            <p className="mb-1">

                                                                <i className="fa-solid fa-building me-2" />

                                                                Последна позиция:{" "}

                                                                <strong>
                                                                    {candidate.work_experience[0].position}
                                                                </strong>

                                                                {" в "}

                                                                {candidate.work_experience[0].company}

                                                            </p>

                                                        )}


                                                    {/* Education */}
                                                    {candidate.education &&
                                                        candidate.education.length > 0 && (

                                                            <p className="mb-0">

                                                                <i className="fa-solid fa-graduation-cap me-2" />

                                                                {candidate.education[0].institution}

                                                            </p>

                                                        )}

                                                </div>


                                                {/* Right content */}
                                                <div className="twm-right-content">

                                                    {/* Salary */}
                                                    {(candidate.min_salary || candidate.max_salary) && (

                                                        <div className="twm-jobs-amount">

                                                            {candidate.min_salary && (
                                                                <>
                                                                    {Number(candidate.min_salary).toLocaleString("bg-BG")}
                                                                </>
                                                            )}

                                                            {candidate.min_salary && candidate.max_salary && (
                                                                <>
                                                                    {" - "}
                                                                </>
                                                            )}

                                                            {candidate.max_salary && (
                                                                <>
                                                                    {Number(candidate.max_salary).toLocaleString("bg-BG")}
                                                                </>
                                                            )}

                                                            <span> EUR</span>

                                                        </div>

                                                    )}


                                                    <Link
                                                        href={`/candidate/${candidate.user.id}`}
                                                        className="twm-jobs-browse site-text-primary"
                                                    >
                                                        Виж профила
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <div className="col-12">

                                        <div className="alert-info p-3 rounded-3 text-center">
                                            Все още няма налични кандидати.
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

AllUsers.layout = (page) => <FrontEndLayout children={page} />;
