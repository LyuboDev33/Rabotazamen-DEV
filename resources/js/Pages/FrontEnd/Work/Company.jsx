import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, usePage, Form } from "@inertiajs/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function CompanyShow({ company }) {

    const benefits = company.company_benefits ?? [];
    const workLocations = company.work_locations ?? [];
    const workLanguages = company.work_languages ?? [];

    const props = usePage().props;

    const isLoggedIn = !!props.auth?.user;
    const isCandidate = props.auth?.isCandidate === true;
    const isEmployer = props.auth?.isEmployer === true;

    const approvedReviews =
        company?.reviews?.filter((review) => review.is_approved === "approved") || [];

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


    return (
        <>
            <Head title={`${company.company_name} | RabotaZaMen`}>

                <meta
                    name="description"
                    content={`${company.company_name} - ${company.company_industry ?? "компания"} в ${company.company_location ?? "България"}. Разгледайте информация за компанията, придобивки, начин на работа и езици.`}
                />

                <meta
                    name="keywords"
                    content={`${company.company_name}, ${company.company_industry ?? ""}, компании, работодатели, работа ${company.company_location ?? "България"}, RabotaZaMen`}
                />

                <meta
                    property="og:title"
                    content={`${company.company_name} | RabotaZaMen`}
                />

                <meta
                    property="og:description"
                    content={`Разгледайте профила на ${company.company_name} в RabotaZaMen.`}
                />

                <meta
                    property="og:type"
                    content="website"
                />
            </Head>

            <div className="page-content">

                <div className="section-full p-t120 p-b90 bg-white">

                    <div className="container">

                        <div className="section-content">

                            <div className="row d-flex justify-content-center">

                                <div className="col-lg-8 col-md-12">

                                    <div className="cabdidate-de-info">

                                        <div className="twm-job-self-wrap">

                                            <div className="twm-job-self-info">

                                                <div className="twm-job-self-top">

                                                    <div className="twm-media-bg shadow rounded-5">

                                                        {company.company_banner ? (

                                                            <img
                                                                src={`/assets/images/company_profile_pictures/${company.company_banner}`}
                                                                alt={`${company.company_name} banner`}
                                                            />

                                                        ) : (

                                                            <div
                                                                className="w-100 d-flex align-items-center justify-content-center bg-light"
                                                                style={{ minHeight: "250px" }}
                                                            >
                                                                <i className="fa-solid fa-building fa-4x text-muted" />
                                                            </div>

                                                        )}

                                                    </div>

                                                    <div className="twm-mid-content">

                                                        <div className="twm-media">

                                                            {company.company_logo ? (

                                                                <img
                                                                    src={`/assets/images/company_profile_pictures/${company.company_logo}`}
                                                                    alt={company.company_name}
                                                                />

                                                            ) : (

                                                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                                                    <i className="fa-solid fa-building fa-2x" />
                                                                </div>

                                                            )}

                                                        </div>

                                                        <hr />

                                                        <h2 className="twm-job-title mb-2">
                                                            {company.company_name}
                                                        </h2>

                                                        <p className="twm-job-address mb-2">

                                                            <i className="fa-solid fa-location-dot me-2" />

                                                            {company.company_location ?? "Не е посочена локация"}

                                                            {company.company_address && (
                                                                <>
                                                                    , {company.company_address}
                                                                </>
                                                            )}

                                                        </p>

                                                        {company.company_website && (

                                                            <a
                                                                href={company.company_website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="twm-job-websites site-text-primary"
                                                            >
                                                                <i className="fa-solid fa-globe me-2" />
                                                                {company.company_website}
                                                            </a>

                                                        )}

                                                        <div className="job-main-information mt-4">

                                                            <div className="row g-3">

                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-briefcase" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Индустрия
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {company.company_industry ?? "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-users" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Размер
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {company.company_size ?? "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

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
                                                                                    {company.company_location ?? "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-house-laptop" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Начин на работа
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {workLocations.length > 0 ? workLocations.join(", ") : "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-language" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Езици
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    {workLanguages.length > 0 ? workLanguages.join(", ") : "-"}
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="col-6 col-xl-4 col-md-6">

                                                                    <div className="job-main-information__item h-100 p-3 rounded-3">

                                                                        <div className="d-flex align-items-center gap-3">

                                                                            <div className="job-main-information__icon">
                                                                                <i className="fa-solid fa-building-circle-check" />
                                                                            </div>

                                                                            <div>

                                                                                <div className="text-muted small mb-1">
                                                                                    Статус
                                                                                </div>

                                                                                <div className="fw-semibold">
                                                                                    Одобрена компания
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        {company.company_full_description && (
                                            <>
                                                <hr />

                                                <h4 className="twm-s-title">
                                                    За компанията
                                                </h4>

                                                <div
                                                    className="job-description"
                                                    dangerouslySetInnerHTML={{
                                                        __html: company.company_full_description,
                                                    }}
                                                />
                                            </>
                                        )}

                                        {benefits.length > 0 && (
                                            <>
                                                <h4 className="twm-s-title mt-4">
                                                    Придобивки
                                                </h4>

                                                <ul className="description-list-2">

                                                    {benefits.map((benefit, index) => (

                                                        <li key={index}>

                                                            <i className="fa-solid fa-circle-check" />

                                                            {benefit}

                                                        </li>

                                                    ))}

                                                </ul>
                                            </>
                                        )}

                                        {workLocations.length > 0 && (
                                            <>
                                                <h4 className="twm-s-title mt-4">
                                                    Начин на работа
                                                </h4>

                                                <ul className="description-list-2">

                                                    {workLocations.map((location, index) => (

                                                        <li key={index}>

                                                            <i className="fa-solid fa-circle-check" />

                                                            {location}

                                                        </li>

                                                    ))}

                                                </ul>
                                            </>
                                        )}

                                        {workLanguages.length > 0 && (
                                            <>
                                                <h4 className="twm-s-title mt-4">
                                                    Работни езици
                                                </h4>

                                                <div className="tagcloud mb-4">

                                                    {workLanguages.map((language, index) => (

                                                        <span key={index}>
                                                            {language}
                                                        </span>

                                                    ))}

                                                </div>
                                            </>
                                        )}

                                        <h4 className="twm-s-title mt-4">
                                            Сподели компанията
                                        </h4>

                                        <div className="twm-social-tags">

                                            <a href="#" className="fb-clr">
                                                Facebook
                                            </a>

                                            <a href="#" className="link-clr">
                                                Linkedin
                                            </a>

                                        </div>

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

                                <div className="col-lg-4 col-md-12 rightSidebar">

                                    <div className="twm-s-info3-wrap mb-5">

                                        <div className="twm-s-info3">

                                            <div className="twm-s-info-logo-section">

                                                {company.company_logo && (

                                                    <div className="twm-media mb-3">

                                                        <img
                                                            src={`/assets/images/company_profile_pictures/${company.company_logo}`}
                                                            alt={company.company_name}
                                                        />

                                                    </div>

                                                )}

                                                <h4 className="twm-title">
                                                    {company.company_name}
                                                </h4>

                                            </div>

                                            <ul>

                                                <li>

                                                    <div className="twm-s-info-inner">

                                                        <i className="fas fa-building" />

                                                        <span className="twm-title">
                                                            Компания
                                                        </span>

                                                        <div className="twm-s-info-discription">
                                                            {company.company_name}
                                                        </div>

                                                    </div>

                                                </li>

                                                <li>

                                                    <div className="twm-s-info-inner">

                                                        <i className="fas fa-briefcase" />

                                                        <span className="twm-title">
                                                            Индустрия
                                                        </span>

                                                        <div className="twm-s-info-discription">
                                                            {company.company_industry ?? "-"}
                                                        </div>

                                                    </div>

                                                </li>

                                                <li>

                                                    <div className="twm-s-info-inner">

                                                        <i className="fas fa-users" />

                                                        <span className="twm-title">
                                                            Размер
                                                        </span>

                                                        <div className="twm-s-info-discription">
                                                            {company.company_size ?? "-"}
                                                        </div>

                                                    </div>

                                                </li>

                                                <li>

                                                    <div className="twm-s-info-inner">

                                                        <i className="fas fa-map-marker-alt" />

                                                        <span className="twm-title">
                                                            Адрес
                                                        </span>

                                                        <div className="twm-s-info-discription">

                                                            {company.company_location ?? "-"}

                                                            {company.company_address && (
                                                                <>
                                                                    , {company.company_address}
                                                                </>
                                                            )}

                                                        </div>

                                                    </div>

                                                </li>

                                                {company.company_website && (

                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-desktop" />

                                                            <span className="twm-title">
                                                                Уебсайт
                                                            </span>

                                                            <div className="twm-s-info-discription">

                                                                <a
                                                                    href={company.company_website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {company.company_website}
                                                                </a>

                                                            </div>

                                                        </div>

                                                    </li>

                                                )}

                                            </ul>

                                            {company.company_website && (

                                                <a
                                                    href={company.company_website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="site-button"
                                                >
                                                    Посети уебсайта
                                                </a>

                                            )}

                                        </div>

                                    </div>

                                    <div className="side-bar mb-4 shadow">

                                        <div className="twm-s-info2-wrap mb-5">

                                            <div className="twm-s-info2">

                                                <h4 className="section-head-small mb-4">
                                                    Информация за компанията
                                                </h4>

                                                <ul className="twm-job-hilites">

                                                    <li>

                                                        <i className="fas fa-briefcase" />

                                                        <span className="twm-title">
                                                            {company.company_industry ?? "Не е посочена индустрия"}
                                                        </span>

                                                    </li>

                                                    <li>

                                                        <i className="fas fa-users" />

                                                        <span className="twm-title">
                                                            {company.company_size ?? "Не е посочен размер"}
                                                        </span>

                                                    </li>

                                                    <li>

                                                        <i className="fas fa-map-marker-alt" />

                                                        <span className="twm-title">
                                                            {company.company_location ?? "Не е посочена локация"}
                                                        </span>

                                                    </li>

                                                </ul>

                                                <ul className="twm-job-hilites2">

                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-building" />

                                                            <span className="twm-title">
                                                                Компания
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {company.company_name}
                                                            </div>

                                                        </div>

                                                    </li>

                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-briefcase" />

                                                            <span className="twm-title">
                                                                Индустрия
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {company.company_industry ?? "-"}
                                                            </div>

                                                        </div>

                                                    </li>

                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-users" />

                                                            <span className="twm-title">
                                                                Размер
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {company.company_size ?? "-"}
                                                            </div>

                                                        </div>

                                                    </li>

                                                    <li>

                                                        <div className="twm-s-info-inner">

                                                            <i className="fas fa-map-marker-alt" />

                                                            <span className="twm-title">
                                                                Локация
                                                            </span>

                                                            <div className="twm-s-info-discription">
                                                                {company.company_location ?? "-"}
                                                            </div>

                                                        </div>

                                                    </li>

                                                    {company.company_address && (

                                                        <li>

                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-location-arrow" />

                                                                <span className="twm-title">
                                                                    Адрес
                                                                </span>

                                                                <div className="twm-s-info-discription">
                                                                    {company.company_address}
                                                                </div>

                                                            </div>

                                                        </li>

                                                    )}

                                                    {company.company_website && (

                                                        <li>

                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-globe" />

                                                                <span className="twm-title">
                                                                    Уебсайт
                                                                </span>

                                                                <div className="twm-s-info-discription">

                                                                    <a
                                                                        href={company.company_website}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        {company.company_website}
                                                                    </a>

                                                                </div>

                                                            </div>

                                                        </li>

                                                    )}

                                                </ul>

                                            </div>

                                        </div>

                                        {workLanguages.length > 0 && (

                                            <div className="widget tw-sidebar-tags-wrap">

                                                <h4 className="section-head-small mb-4">
                                                    Работни езици
                                                </h4>

                                                <div className="tagcloud">

                                                    {workLanguages.map((language, index) => (

                                                        <span key={index}>
                                                            {language}
                                                        </span>

                                                    ))}

                                                </div>

                                            </div>

                                        )}

                                        {workLocations.length > 0 && (

                                            <div className="widget tw-sidebar-tags-wrap mt-4">

                                                <h4 className="section-head-small mb-4">
                                                    Начин на работа
                                                </h4>

                                                <div className="tagcloud">

                                                    {workLocations.map((location, index) => (

                                                        <span key={index}>
                                                            {location}
                                                        </span>

                                                    ))}

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                    <div className="twm-s-info3-wrap mb-5">
                                        <div className="twm-s-info3">

                                            <h4 className="twm-title mb-4">
                                                Оставете ревю
                                            </h4>

                                            {!isLoggedIn && (
                                                <div className="p-3 rounded-4 alert-info mb-0">
                                                    Трябва да сте влезли в профила си, за да оставите ревю.
                                                </div>
                                            )}

                                            {isLoggedIn && isEmployer && (
                                                <div className="p-3 rounded-4 alert-warning mb-0">
                                                    Фирма не може да оставя ревю на друга фирма.
                                                </div>
                                            )}

                                            {isLoggedIn && isCandidate && (
                                                <Form
                                                    options={{ preserveScroll: true }}
                                                    action={route('reviews.company.store', company.id)}
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
                                                                    placeholder="Напишете вашето мнение за компанията..."
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

CompanyShow.layout = (page) => <FrontEndLayout children={page} />;
