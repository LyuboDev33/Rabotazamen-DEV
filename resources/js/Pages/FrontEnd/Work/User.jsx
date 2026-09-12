import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, usePage, Form } from "@inertiajs/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function User({ candidate, profileLogo }) {

    const approvedReviews =
        candidate?.reviews?.filter((review) => review.is_approved === "approved") || [];

    const reviewSettings = {
        type: "slide",
        perPage: 3,
        perMove: 1,
        gap: "20px",
        speed: 500,
        arrows: true,
        pagination: false,
        rewind: false,

        breakpoints: {
            1024: {
                perPage: 2,
                perMove: 1,
                gap: "15px",
            },
            600: {
                perPage: 1,
                perMove: 1,
                gap: "10px",
            },
        },
    };

    const candidateData = candidate || {};

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

    const props = usePage().props;

    const isLoggedIn = !!props.auth?.user;
    const isCandidate = props.auth?.isCandidate === true;
    const isEmployer = props.auth?.isEmployer === true;


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

                                            <div className="overlay-main site-bg-primary " />

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
                                                            src={`/assets_dashboard/images/profile_pics/${profileLogo}`}
                                                            alt={
                                                                candidateData.professional_title ||
                                                                "Кандидат"
                                                            }
                                                        />
                                                    </div>

                                                    <div className="twm-mid-content">

                                                        <h3 className="text-white">{candidateData.user.first_name + " " + candidateData.user.last_name}</h3>

                                                        <h5 className="twm-job-title">
                                                            {candidateData.professional_title ||
                                                                "Кандидат"}
                                                        </h5>

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

                                    {approvedReviews.length > 0 && (
                                        <Splide
                                            options={reviewSettings}
                                            className="company-reviews-splide"
                                        >
                                            {approvedReviews.map((review) => {
                                                const reviewerCandidate = review.reviewer_candidate;
                                                const reviewerCompany = review.reviewer_company;

                                                let reviewerName = "Потребител";
                                                let reviewerImage = "/assets_dashboard/images/profile_pics/default-avatar.png";
                                                let reviewerType = "Потребител";

                                                if (reviewerCandidate) {
                                                    reviewerName =
                                                        `${reviewerCandidate.user?.first_name ?? ""} ${reviewerCandidate.user?.last_name ?? ""}`.trim()
                                                        || "Кандидат";

                                                    reviewerImage = reviewerCandidate.user?.profile_pic
                                                        ? `/assets_dashboard/images/profile_pics/${reviewerCandidate.user.profile_pic}`
                                                        : "/assets_dashboard/images/profile_pics/default-avatar.png";

                                                    reviewerType = "Кандидат";
                                                } else if (reviewerCompany) {
                                                    reviewerName =
                                                        reviewerCompany.company_name || "Компания";

                                                    reviewerImage = reviewerCompany.company_logo
                                                        ? `/assets/images/company_profile_pictures/${reviewerCompany.company_logo}`
                                                        : "/assets_dashboard/images/profile_pics/default-avatar.png";

                                                    reviewerType = "Компания";
                                                }

                                                return (
                                                    <SplideSlide key={review.id}>
                                                        <div className="review-card">
                                                            <div className="review-card-top">
                                                                <div className="review-user">
                                                                    <div className="review-user-image">
                                                                        <img
                                                                            src={reviewerImage}
                                                                            alt={reviewerName}
                                                                        />
                                                                    </div>

                                                                    <div className="review-user-info">
                                                                        <h5>{reviewerName}</h5>
                                                                        <span>{reviewerType}</span>
                                                                    </div>
                                                                </div>

                                                                <div className="review-quote">
                                                                    <i className="fas fa-quote-right"></i>
                                                                </div>
                                                            </div>

                                                            <div className="review-rating">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <i
                                                                        key={star}
                                                                        className={
                                                                            star <= review.rating
                                                                                ? "fas fa-star"
                                                                                : "far fa-star"
                                                                        }
                                                                    ></i>
                                                                ))}

                                                                <span>{review.rating}/5</span>
                                                            </div>

                                                            {review.comment && (
                                                                <p className="review-comment">
                                                                    {review.comment}
                                                                </p>
                                                            )}

                                                            <div className="review-card-footer">
                                                                <span>
                                                                    <i className="far fa-calendar-alt me-2"></i>

                                                                    {new Date(review.created_at).toLocaleDateString(
                                                                        "bg-BG",
                                                                        {
                                                                            day: "2-digit",
                                                                            month: "long",
                                                                            year: "numeric",
                                                                        }
                                                                    )}
                                                                </span>

                                                                <span className="review-approved">
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Одобрено мнение
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </SplideSlide>
                                                );
                                            })}
                                        </Splide>
                                    )}

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

                                        <div className="twm-s-info3">

                                            <h4 className="twm-title mb-4">
                                                Оставете ревю
                                            </h4>

                                            {!isLoggedIn && (
                                                <div className="alert-info mb-0 p-3 rounded-4">
                                                    Трябва да сте влезли в профила си, за да оставите ревю.
                                                </div>
                                            )}

                                            {isLoggedIn && (isCandidate || isEmployer) && (
                                                <Form
                                                    options={{ preserveScroll: true }}
                                                    action={route('reviews.candidate.store', candidate.id)}
                                                    method="POST"
                                                    resetOnSuccess
                                                >
                                                    {({ errors, processing }) => (
                                                        <>

                                                            <div className="form-group mb-4">
                                                                <label className="form-label fw-semibold">
                                                                    Оценка
                                                                </label>

                                                                <select
                                                                    name="rating"
                                                                    className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                                                                    defaultValue=""
                                                                >
                                                                    <option value="" disabled>
                                                                        Изберете оценка
                                                                    </option>
                                                                    <option value="1">1 звезда</option>
                                                                    <option value="2">2 звезди</option>
                                                                    <option value="3">3 звезди</option>
                                                                    <option value="4">4 звезди</option>
                                                                    <option value="5">5 звезди</option>
                                                                </select>

                                                                {errors.rating && (
                                                                    <div className="text-danger mt-2">
                                                                        {errors.rating}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="form-group mb-4">
                                                                <label className="form-label fw-semibold">
                                                                    Коментар
                                                                </label>

                                                                <textarea
                                                                    name="comment"
                                                                    className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                                                                    rows="5"
                                                                    placeholder="Напишете вашето мнение за кандидата..."
                                                                />

                                                                {errors.comment && (
                                                                    <div className="text-danger mt-2">
                                                                        {errors.comment}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <button
                                                                type="submit"
                                                                className="site-button"
                                                                disabled={processing}
                                                            >
                                                                {processing ? 'Изпращане...' : 'Изпрати ревю'}
                                                            </button>

                                                        </>
                                                    )}
                                                </Form>
                                            )}

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

User.layout = (page) => <FrontEndLayout children={page} />;
