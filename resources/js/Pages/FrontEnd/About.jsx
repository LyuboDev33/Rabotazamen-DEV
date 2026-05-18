import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function About() {


const [activeTab, setActiveTab] = useState("candidates");

    return (
        <>

            {/* HERO / MANIFESTO START */}
            <section className="section-full p-t60 p-b30 site-bg-white twm-explore-area pos-relative">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">

                            <div className="wt-small-separator site-text-primary justify-content-center">
                                <div>За нас</div>
                            </div>

                            <h1 className="wt-title" style={{ fontSize: "2.6rem", lineHeight: "1.2" }}>
                                Не предлагаме просто услуги. <br />
                                <span className="site-text-primary">Предлагаме партньорство.</span>
                            </h1>

                            <p className="p-t20" style={{ fontSize: "1.05rem" }}>
                                <strong>„РаботаЗаМен.БГ“</strong> е новосъздадена компания,
                                изградена върху стълбовете на сигурността, иновациите и стремежа
                                към реални резултати. Нашата идентичност се гради върху
                                разбирането, че стандартните модели на посредничество вече не са
                                достатъчни.
                            </p>

                            <p>
                                Нашата дейност се разгръща в три стратегически направления, които
                                работят в синхрон. Вярваме, че най-добрият начин да намериш работа
                                е като докажеш уменията си, а най-добрият начин да развиеш бизнес е
                                като инвестираш в хората и технологиите си.
                            </p>

                            <p>
                                <em>
                                    Ние сме тук, за да направим пазара на труда по-прозрачен,
                                    по-ефективен и по-достъпен за всички.
                                </em>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="twm-bg-shape5" />
            </section>
            {/* HERO / MANIFESTO END */}


            {/* THREE PILLARS START */}
            <section className="section-full p-t60 p-b90 site-bg-white twm-how-it-work-area2">
                <div className="container">

                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Стълбове на нашата мисия</div>
                        </div>
                        <h2 className="wt-title">Върху какво градим всичко?</h2>
                    </div>

                    <div className="twm-w-process-steps-2-wrap">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow text-center">
                                        <span className="twm-large-number text-clr-sky">01</span>
                                        <h4 className="twm-title">Сигурност</h4>
                                        <p>
                                            Верифицирани работодатели, проверени кандидати и
                                            прозрачни процеси. Доверието е в основата на всяко
                                            успешно партньорство.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow text-center">
                                        <span className="twm-large-number text-clr-yellow">02</span>
                                        <h4 className="twm-title">Иновации</h4>
                                        <p>
                                            Дигитален HR Агент, интелигентни алгоритми за
                                            мачмейкинг и интегрирана ATS система — технологията
                                            работи в полза на хората.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mx-auto">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow text-center">
                                        <span className="twm-large-number text-clr-pink">03</span>
                                        <h4 className="twm-title">Реални резултати</h4>
                                        <p>
                                            Не обещания, а измерими постижения — по-кратък цикъл на
                                            наемане, по-добри съответствия и кариерно израстване,
                                            което се вижда.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* THREE PILLARS END */}


            {/* STATS COUNTER STRIP START */}
            <section className="section-full p-t60 p-b60 site-bg-light-purple">
                <div className="container">
                    <div className="row text-center">

                        <div className="col-lg-3 col-md-6">
                            <div className="counter-outer-two">
                                <div className="icon-content">
                                    <div className="tw-count-number text-clr-yellow-2">
                                        <span className="counter">60</span>%
                                    </div>
                                    <p className="icon-content-info">По-кратък цикъл на наемане</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="counter-outer-two">
                                <div className="icon-content">
                                    <div className="tw-count-number text-clr-green">
                                        <span className="counter">3</span>
                                    </div>
                                    <p className="icon-content-info">Стратегически направления</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="counter-outer-two">
                                <div className="icon-content">
                                    <div className="tw-count-number text-clr-pink">
                                        <span className="counter">100</span>%
                                    </div>
                                    <p className="icon-content-info">Верифицирани работодатели</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="counter-outer-two">
                                <div className="icon-content">
                                    <div className="tw-count-number text-clr-sky">
                                        <span className="counter">24</span>/7
                                    </div>
                                    <p className="icon-content-info">Дигитален HR Агент</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* STATS COUNTER STRIP END */}


            <section className="section-full p-t120 p-b90 site-bg-white">
                <div className="container">

                    {/* SECTION HEADER */}
                    <div className="section-head center wt-small-separator-outer">

                        <div className="wt-small-separator site-text-primary">
                            <div>Две перспективи, една платформа</div>
                        </div>

                        <h2 className="wt-title">
                            Кое е важно за вас?
                        </h2>

                        <p>
                            Изберете гледната точка, която ви интересува,
                            и вижте как РаботаЗаМен.БГ работи за вас.
                        </p>

                    </div>

                    {/* CUSTOM REACT TABS */}
                    <div className="twm-custom-tabs">

                        {/* TAB BUTTONS */}
                        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">

                            <button
                                type="button"
                                onClick={() => setActiveTab("candidates")}
                                className={`site-button ${activeTab === "candidates"
                                    ? ""
                                    : "site-bg-secondry"
                                    }`}
                            >
                                За кандидати
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("employers")}
                                className={`site-button ${activeTab === "employers"
                                    ? ""
                                    : "site-bg-secondry"
                                    }`}
                            >
                                За работодатели
                            </button>

                        </div>

                        {/* ========================= */}
                        {/* CANDIDATES CONTENT */}
                        {/* ========================= */}
                        {activeTab === "candidates" && (

                            <div className="tab-content-fade">

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">

                                                <h4 className="twm-title">
                                                    Дигитален HR Агент
                                                </h4>

                                                <p>
                                                    Вашата кандидатура не потъва в архива.
                                                    Получавате обратна връзка в реално време
                                                    за статуса на вашите апликации и достъп
                                                    до позиции, които максимално съответстват
                                                    на вашия профил.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">

                                                <h4 className="twm-title">
                                                    Ефективност и бързина
                                                </h4>

                                                <p>
                                                    Забравете за дългото чакане. Нашата система
                                                    осигурява светкавична връзка с работодателите
                                                    и ви дава възможност да получите обратна връзка
                                                    в реално време.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">

                                                <h4 className="twm-title">
                                                    Персонализирана академия
                                                </h4>

                                                <p>
                                                    Платформата идентифицира пропуските във
                                                    вашите умения и ви предлага конкретни
                                                    обучения за развитие.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">

                                                <h4 className="twm-title">
                                                    Инструменти за кариерен анализ
                                                </h4>

                                                <p>
                                                    Вашият личен дашборд предоставя всичко
                                                    необходимо за професионално развитие
                                                    и по-добро позициониране.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>

                        )}

                        {/* ========================= */}
                        {/* EMPLOYERS CONTENT */}
                        {/* ========================= */}
                        {activeTab === "employers" && (

                            <div className="tab-content-fade">

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">

                                                <h4 className="twm-title">
                                                    Дигитален HR Агент
                                                </h4>

                                                <p>
                                                    Автоматизира рутинните процеси —
                                                    филтриране, анализ и класиране
                                                    на кандидати според зададени критерии.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">

                                                <h4 className="twm-title">
                                                    Интегрирана ATS система
                                                </h4>

                                                <p>
                                                    Централизирате комуникацията и
                                                    управлението на кандидатите
                                                    в една модерна платформа.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">

                                                <h4 className="twm-title">
                                                    Обективен подбор чрез данни
                                                </h4>

                                                <p>
                                                    Алгоритмите ни намаляват субективния фактор
                                                    и откриват най-подходящите таланти.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">

                                                <h4 className="twm-title">
                                                    По-бърз процес по наемане
                                                </h4>

                                                <p>
                                                    Намалявате времето за подбор чрез
                                                    автоматизирани процеси и интелигентен
                                                    matching между кандидати и позиции.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>

                </div>
            </section>
            {/* TWO PERSPECTIVES END */}

            {/* DUAL CTA START */}
            <section
                className="section-full p-t50 p-b50 twm-explore-area bg-cover site-bg-light-purple"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            <div className="twm-explore-content-outer">
                                <div className="twm-explore-content text-center">
                                    <div className="twm-l-line-1" />
                                    <div className="twm-l-line-2" />
                                    <div className="twm-r-circle-1" />
                                    <div className="twm-r-circle-2" />

                                    <div className="twm-title-small">Готови ли сте?</div>
                                    <div className="twm-title-large mb-0">
                                        <h2>Присъединете се към новото поколение пазар на труда</h2>
                                        <p className="mt-2">
                                            Без значение дали търсите следващата стъпка в кариерата
                                            си или следващия топ талант — ние сме тук, за да го
                                            направим възможно.
                                        </p>
                                    </div>

                                    <div className="twm-upload-file d-flex gap-3 justify-content-center flex-wrap p-t20">
                                        <Link href="/register/candidate" className="site-button">
                                            Аз съм кандидат <i className="feather-arrow-right" />
                                        </Link>
                                        <Link href="/register/employer" className="site-button site-bg-secondry">
                                            Аз съм работодател <i className="feather-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="twm-bold-circle-right" />
                                <div className="twm-bold-circle-left" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* DUAL CTA END */}

        </>
    );
}

About.layout = (page) => <FrontEndLayout children={page} />;
