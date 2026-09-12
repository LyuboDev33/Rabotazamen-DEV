import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function CompaniesAll({ companies }) {

    const getWorkLocations = (workLocations) => {
        if (!workLocations || workLocations.length === 0) {
            return null;
        }

        return workLocations.join(" · ");
    };

    const getWorkLanguages = (workLanguages) => {
        if (!workLanguages || workLanguages.length === 0) {
            return null;
        }

        return workLanguages.join(" · ");
    };

    return (
        <>
            <Head>
                <title>Компании | RabotaZaMen</title>

                <meta
                    name="description"
                    content="Разгледайте компании и работодатели в RabotaZaMen. Научете повече за техния бизнес, локации, условия на работа и възможности за развитие."
                />

                <meta
                    name="keywords"
                    content="компании, работодатели, компании България, работа, работодатели България, RabotaZaMen"
                />

                <meta
                    property="og:title"
                    content="Компании | RabotaZaMen"
                />

                <meta
                    property="og:description"
                    content="Открийте компании и работодатели, техните офиси, индустрии и възможности за работа."
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

                                {companies && companies.length > 0 ? (

                                    companies.map((company) => (

                                        <div
                                            className="col-lg-6 col-md-12 m-b30"
                                            key={company.id}
                                        >

                                            <div className="twm-jobs-grid-style1">

                                                <div className="twm-media">

                                                    {company.company_logo ? (

                                                        <img
                                                            src={`/assets/images/company_profile_pictures/${company.company_logo}`}
                                                            alt={company.company_name}
                                                        />

                                                    ) : (

                                                        <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                                            <i className="fa-solid fa-building fa-2x"></i>
                                                        </div>

                                                    )}

                                                </div>

                                                {company.company_location && (

                                                    <span className="twm-job-post-duration">
                                                        {company.company_location}
                                                    </span>

                                                )}

                                                {company.company_industry && (

                                                    <div className="twm-jobs-category green">

                                                        <span className="twm-bg-green">
                                                            {company.company_industry}
                                                        </span>

                                                    </div>

                                                )}

                                                <div className="twm-mid-content">

                                                    <Link
                                                        href={`/company/${company.id}`}
                                                        className="twm-job-title"
                                                    >

                                                        <h4>
                                                            {company.company_name}
                                                        </h4>

                                                    </Link>

                                                    {company.company_industry && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-briefcase me-2" />

                                                            {company.company_industry}

                                                        </p>

                                                    )}

                                                    {company.company_size && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-users me-2" />

                                                            {company.company_size}

                                                        </p>

                                                    )}

                                                    {company.company_location && (

                                                        <p className="mb-1">

                                                            <i className="fa-solid fa-location-dot me-2" />

                                                            {company.company_location}

                                                        </p>

                                                    )}

                                                    {company.work_locations &&
                                                        company.work_locations.length > 0 && (

                                                            <p className="mb-1">

                                                                <i className="fa-solid fa-house-laptop me-2" />

                                                                {getWorkLocations(company.work_locations)}

                                                            </p>

                                                        )}

                                                    {company.work_languages &&
                                                        company.work_languages.length > 0 && (

                                                            <p className="mb-1">

                                                                <i className="fa-solid fa-language me-2" />

                                                                {getWorkLanguages(company.work_languages)}

                                                            </p>

                                                        )}

                                                    {company.company_website && (

                                                        <p className="mb-0">

                                                            <i className="fa-solid fa-globe me-2" />

                                                            {company.company_website}

                                                        </p>

                                                    )}

                                                </div>

                                                <div className="twm-right-content">

                                                    <Link
                                                        href={`/companies/show/${company.id}`}
                                                        className="twm-jobs-browse site-text-primary"
                                                    >
                                                        Виж компанията
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <div className="col-12">

                                        <div className="alert-info p-3 rounded-3 text-center">
                                            Все още няма налични компании.
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

CompaniesAll.layout = (page) => <FrontEndLayout children={page} />;
