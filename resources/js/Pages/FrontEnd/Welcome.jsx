import FrontEndLayout from '@/Layouts/FrontEndLayout';
import { Head, Link } from '@inertiajs/react';
import GetHiredCompanies from '@/Components/FrontEndComponents/GetHiredCompanies';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';





export default function Welcome({ articles }) {


    return (
        <>
            <Head>
                <title>Rabotazamen </title>

                <meta property="og:title" content="РаботаЗаМен" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://lunara.com" />
                <meta property="og:image" content="/assets/images/logo-light.png" />



            </Head>

            <section className="twm-home1-banner-section site-bg-gray bg-cover"
                style={{ backgroundImage: 'url(/assets/images/main-slider/slider1/bg1.jpg)' }}>
                <div className="row">
                    {/*Left Section*/}
                    <div className="col-xl-6 col-lg-6 col-md-12 align-self-start pt-60">
                        <div className="twm-bnr-left-section">
                            <div className="twm-bnr-title-small">Твоята кариера. Твоят бизнес.
                                <span className="site-text-primary">
                                    Твоето бъдеще
                                </span>
                            </div>
                            <div className="twm-bnr-title-large">Повече от платформа за работа.
                                <span className="site-text-primary">Твоят партньор</span> за растеж</div>
                            <div className="twm-bnr-discription">Една платформа. Безброй възможности. <br /> Цялостни решения за кариерно развитие и бизнес софтуер.
                            </div>
                            <div className="twm-bnr-search-bar">
                                <form>
                                    <div className="row">
                                        {/* Заглавие */}
                                        <div className="form-group col-xl-3 col-lg-6 col-md-6">
                                            <label>Какво</label>
                                            <select
                                                className="wt-search-bar-select selectpicker"
                                                data-live-search="true"
                                                id="j-Job_Title"
                                                data-bv-field="size"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Изберете категория
                                                </option>
                                                <option value="job_title">Длъжност</option>
                                                <option value="web_designer">Уеб дизайнер</option>
                                                <option value="developer">Програмист</option>
                                                <option value="accountant">Счетоводител</option>
                                            </select>
                                        </div>

                                        {/* Тип */}
                                        <div className="form-group col-xl-3 col-lg-6 col-md-6">
                                            <label>Тип</label>
                                            <select
                                                className="wt-search-bar-select selectpicker"
                                                data-live-search="true"
                                                id="j-Job_Title"
                                                data-bv-field="size"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Изберете категория
                                                </option>
                                                <option value="job_title">Длъжност</option>
                                                <option value="web_designer">Уеб дизайнер</option>
                                                <option value="developer">Програмист</option>
                                                <option value="accountant">Счетоводител</option>
                                            </select>
                                        </div>

                                        {/* Локация */}
                                        <div className="form-group col-xl-3 col-lg-6 col-md-6">
                                            <label>Локация</label>
                                            <div className="twm-inputicon-box">
                                                <input
                                                    name="username"
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    placeholder="Търсене..."
                                                />
                                                <i className="twm-input-icon fas fa-map-marker-alt" />
                                            </div>
                                        </div>

                                        {/* Бутон */}
                                        <div className="form-group col-xl-3 col-lg-6 col-md-6">
                                            <button type="button" className="site-button">
                                                Намери работа
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="twm-bnr-popular-search">
                                <span className="twm-title">Популярни търсения:</span>
                                <a href="job-list.html">Програмист</a> ,
                                <a href="job-list.html">Дизайнер</a> ,
                                <a href="job-list.html">Архитект</a> ,
                                <a href="job-list.html">Инженер</a> ...
                            </div>

                        </div>
                    </div>
                    {/*right Section*/}
                    <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-section">
                        <div className="twm-bnr-right-content">
                            <div className="twm-img-bg-circle-area">
                                <div className="twm-img-bg-circle1 rotate-center"><span /></div>
                                <div className="twm-img-bg-circle2 rotate-center-reverse"><span /></div>
                                <div className="twm-img-bg-circle3"><span /></div>
                            </div>
                            <div className="twm-bnr-right-carousel">


                                <Splide
                                    aria-label="My Favorite Images"
                                    options={{
                                        type: 'fade',
                                        autoplay: true,
                                        rewind: true,
                                        interval: 6500,
                                        pauseOnHover: false,
                                        pauseOnFocus: false,
                                        arrows: false,
                                        pagination: false,
                                        speed: 4000
                                    }}
                                >
                                    <SplideSlide>
                                        <div className="item">
                                            <div className="slide-img">
                                                <img src="/assets/images/main-slider/slider1/r-img1.png" alt="#" />
                                            </div>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="item">
                                            <div className="slide-img">
                                                <div className="slide-img">
                                                    <img src="/assets/images/main-slider/slider1/r-img2.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                </Splide>

                                <div className="twm-bnr-blocks-position-wrap">
                                    {/*icon-block-1*/}
                                    <div className="twm-bnr-blocks twm-bnr-blocks-position-1">
                                        <div className="twm-icon">
                                            <img src="/assets/images/main-slider/slider1/icon-1.png" alt="#" />
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-sky">
                                                <span className="counter">12</span>K+
                                            </div>
                                            <p className="icon-content-info">Активни обяви</p>
                                        </div>
                                    </div>

                                    {/*icon-block-2*/}
                                    <div className="twm-bnr-blocks twm-bnr-blocks-position-2">
                                        <div className="twm-icon">
                                            <img src="/assets/images/main-slider/slider1/icon-2.png" alt="#" />
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-pink">
                                                <span className="counter">98</span> +
                                            </div>
                                            <p className="icon-content-info">Записани курсисти</p>
                                        </div>
                                    </div>

                                    {/*icon-block-3*/}
                                    <div className="twm-bnr-blocks-3 twm-bnr-blocks-position-3">
                                        <div className="twm-pics">
                                            <span><img src="/assets/images/main-slider/slider1/user/u-1.jpg" alt="#" /></span>
                                            <span><img src="/assets/images/main-slider/slider1/user/u-2.jpg" alt="#" /></span>
                                            <span><img src="/assets/images/main-slider/slider1/user/u-3.jpg" alt="#" /></span>
                                            <span><img src="/assets/images/main-slider/slider1/user/u-4.jpg" alt="#" /></span>
                                            <span><img src="/assets/images/main-slider/slider1/user/u-5.jpg" alt="#" /></span>
                                            <span><img src="/assets/images/main-slider/slider1/user/u-6.jpg" alt="#" /></span>
                                        </div>
                                        <div className="twm-content">
                                            <div className="tw-count-number text-clr-green">
                                                <span className="counter">3</span>K+
                                            </div>
                                            <p className="icon-content-info">Доволни клиенти</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*Samll Ring Left*/}
                            <div className="twm-small-ring-l slide-top-animation" />
                            <div className="twm-small-ring-2 slide-top-animation" />
                        </div>
                    </div>
                </div>
                <div className="twm-gradient-text">
                    Jobs
                </div>
            </section>

            <section className="p-t90 p-50">
                <div className="auto-container">
                    <div className="row wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                        {/* РАБОТОДАТЕЛИ */}
                        <div className="banner-style-one -type-2 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <div className="content">
                                    <h2 className='text-black text-end'>Работодатели</h2>
                                    <p className="text-white pb-2 text-p text-end">Осигурете си стратегическо предимство на пазара на труда, като откриете идеалните таланти чрез прецизна технология и безкомпромисно качество на подбора.</p>
                                    <div className='d-flex justify-content-end'>
                                        <a
                                            href="/how-it-works-employers"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="theme-btn btn-style-five text-right"
                                        >
                                            Разбери повече
                                        </a>
                                    </div>
                                </div>
                                <figure className="image"><img src="/assets/images/employ.png" alt="Employers" /></figure>
                            </div>
                        </div>

                        {/* КАНДИДАТИ */}
                        <div className="banner-style-two -type-2 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <div className="content">
                                    <h2 className="text-black">Кандидати</h2>
                                    <p className="text-white pb-2 text-p">Поеми контрол над кариерата си: изгради впечатляващ профил и позволи на топ работодатели да те открият, предлагайки ти възможности, които напълно отговарят на твоя потенциал.</p>
                                    <a
                                        href="/how-it-works-candidates"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="theme-btn btn-style-five color-dark-1"
                                    >
                                        Разбери как работи за теб
                                    </a>
                                </div>
                                <figure className="image"><img src="/assets/images/candidate.png" alt="Candidates" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-full p-t20 p-b20 site-bg-white twm-how-it-work-area">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Как работи</div>
                        </div>
                        <h2 className="wt-title">Какво предлагаме</h2>
                    </div>
                    {/* TITLE END*/}

                    <div className="twm-how-it-work-section">
                        <div className="row">

                            {/* 1 */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps">
                                    <span className="twm-large-number">01</span>
                                    <div className="twm-w-pro-top bg-clr-sky">
                                        <div className="twm-media">
                                            <span>
                                                <img src="/assets/images/work-process/icon1.png" alt="icon1" />
                                            </span>
                                        </div>
                                        <h4 className="twm-title">
                                            Търсиш работа?
                                        </h4>
                                    </div>
                                    <p className='pt-60'>
                                        Открий своето ново работно място сред стотици актуални предложения.
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps">
                                    <span className="twm-large-number">02</span>
                                    <div className="twm-w-pro-top bg-clr-pink">
                                        <div className="twm-media">
                                            <span>
                                                <img src="/assets/images/work-process/icon2.png" alt="icon2" />
                                            </span>
                                        </div>
                                        <h4 className="twm-title">
                                            Искаш да развиеш нови умения?
                                        </h4>
                                    </div>
                                    <p className='pt-15'>
                                        Надгради професионалните си компетенции и стани най-желаният кандидат.
                                    </p>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps">
                                    <span className="twm-large-number">03</span>
                                    <div className="twm-w-pro-top bg-clr-green">
                                        <div className="twm-media">
                                            <span>
                                                <img src="/assets/images/work-process/icon3.png" alt="icon3" />
                                            </span>
                                        </div>
                                        <h4 className="twm-title">
                                            Имаш бизнес?
                                        </h4>
                                    </div>
                                    <p className='pt-60'>
                                        Софтуерни решения и подбор.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="twm-blog-post-h-page6-wrap section-full p-t60 p-b60 site-bg-white twm-job-categories-hpage-6-area">

                {/* TITLE START*/}
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Категории</div>
                    </div>
                    <h3 className="wt-title">
                        Открий своето призвание сред най-динамичните и търсени сектори на пазара.
                    </h3>

                    <p style={{ maxWidth: "900px", margin: "20px auto 0", fontSize: '18px ' }}>
                        Ние си партнираме с доказани работодатели – от иновативни стартъпи до утвърдени пазарни лидери.
                        Това са организации, които не просто търсят служители, а инвестират в техния талант и дигитално бъдеще чрез нашите решения.
                    </p>
                </div>
                {/* TITLE END*/}

                <div className="container">
                    <div className="twm-job-cat-hpage-6-wrap">
                        <div className="job-cat-block-hpage-6-section m-b30">

                            <div className="row">

                                {/* 1 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-dashboard" /></div>
                                        <div className="twm-content">
                                            <a href="#">Търговия и Продажби</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-project-management" /></div>
                                        <div className="twm-content">
                                            <a href="#">Администрация и Офис дейности</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-note" /></div>
                                        <div className="twm-content">
                                            <a href="#">Счетоводство и Финанси</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-customer-support" /></div>
                                        <div className="twm-content">
                                            <a href="#">Транспорт, Логистика и Спедиция</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-bars" /></div>
                                        <div className="twm-content">
                                            <a href="#">Производство и Инженерство</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 6 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-user" /></div>
                                        <div className="twm-content">
                                            <a href="#">IT и Софтуер</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 7 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-computer" /></div>
                                        <div className="twm-content">
                                            <a href="#">Маркетинг, Реклама и PR</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 8 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-coding" /></div>
                                        <div className="twm-content">
                                            <a href="#">Обслужване на клиенти</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 9 */}
                                <div className="col">
                                    <div className="job-cat-block-hpage-6 m-b30">
                                        <div className="twm-media"><div className="flaticon-computer" /></div>
                                        <div className="twm-content">
                                            <a href="#">Други</a>
                                            <div className="twm-jobs-available"><span>100+</span> нови обяви</div>
                                            <div className="circle-line-wrap">
                                                <a className="circle-line-btn"><i className="fa-solid fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="text-center job-categories-btn">
                            <a href="#" className="site-button">Всички категории</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-full p-t120 p-b120 twm-explore-area bg-cover">
                <div className="container">
                    <div className="section-content">
                        <div className="row">

                            {/* CONTENT FULL WIDTH */}
                            <div className="col-lg-12">
                                <div className="twm-explore-content-outer">

                                    <div className="twm-explore-content custom-split">

                                        {/* DECOR ELEMENTS */}
                                        <div className="twm-l-line-1" />
                                        <div className="twm-l-line-2" />
                                        <div className="twm-r-circle-1" />
                                        <div className="twm-r-circle-2" />

                                        {/* 🔥 SIDE IMAGES */}
                                        <img
                                            src="/assets/images/pic2.png"
                                            alt="Candidate"
                                            className="side-image left-image"
                                        />

                                        <img
                                            src="/assets/images/pic1.png"
                                            alt="Employer"
                                            className="side-image right-image"
                                        />


                                        <div className="twm-title-large">
                                            <h2>
                                                Свързваме правилните хора с правилните възможности.
                                            </h2>
                                            <h2 className='mt-3'>
                                                Покажи своя потенциал или открий точния талант – всичко започва тук.
                                            </h2>
                                        </div>

                                        <hr className='mt-0 mb-3 text-white d-md-none' />


                                        {/* SPLIT CONTENT */}
                                        <div className="split-container two-columns">

                                            {/* LEFT */}
                                            <div className="split-box left-box">
                                                <h3 className='text-white'>За Кандидати</h3>
                                                <p className='welcome-effect text-end'>
                                                    Създай професионално CV, подобри уменията си и
                                                    се представи пред работодатели, които търсят точно теб.
                                                </p>

                                                <a className="site-button">
                                                    Регистрирай се
                                                </a>
                                            </div>

                                            {/* DIVIDER */}
                                            <div className="split-divider"></div>
                                            <hr className='mt-0 mb-3 text-white d-md-none' />

                                            {/* RIGHT */}
                                            <div className="split-box right-box">
                                                <h3 className='text-white'>За Работодатели</h3>
                                                <p className='welcome-effect'>
                                                    Намери подходящите кандидати бързо и ефективно.
                                                    Управлявай процеса по подбор и изгради силен екип.
                                                </p>

                                                <a className="site-button">
                                                    Регистрирай компания
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                    {/* DECOR CIRCLES */}
                                    <div className="twm-bold-circle-right" />
                                    {/* <div className="twm-bold-circle-left" /> */}
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="text-center job-categories-btn pt-30">
                            <a href="#" className="site-button">
                                Заяви услуга
                            </a>
                        </div>

                    </div>
                </div>
            </section>



            <section className="section-full p-t30 p-b30 site-bg-white twm-candidate-h-page7-wrap pos-relative ">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Кандидате</div>
                        </div>
                        <h2 className="wt-title">Топ кандидати</h2>
                    </div>
                    {/* TITLE END*/}
                </div>
                <div className="container-fluid">
                    <div className="section-content">
                        <div className="twm-candidate-h-page7">
                            <div className="row d-flex justify-content-center m-b30">
                                {/* Деница */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Denitsa.PNG" alt="Деница" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Денислава</h4>
                                                </a>
                                                <p>HR Specialist</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />София</p>
                                                <div className="twm-jobs-vacancies">$25<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Даниел */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Daniel_Picture.png" alt="Даниел" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Даниел</h4>
                                                </a>
                                                <p>Project Manager</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Пловдив</p>
                                                <div className="twm-jobs-vacancies">$30<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Виктория */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Viktoriya_Vukova.jpg" alt="Виктория" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Виктория</h4>
                                                </a>
                                                <p>UX Designer</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Варна</p>
                                                <div className="twm-jobs-vacancies">$28<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Юстин */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Iustin-Racu.jpeg" alt="Юстин" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Юстин</h4>
                                                </a>
                                                <p>Data Analyst</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Бургас</p>
                                                <div className="twm-jobs-vacancies">$35<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Явор */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Yavor-Botusharov.jpg" alt="Явор" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Явор</h4>
                                                </a>
                                                <p>Marketing Manager</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />София</p>
                                                <div className="twm-jobs-vacancies">$40<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Елизабет */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Elizabeth-Soosaar.jpg" alt="Елизабет" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Елизабет</h4>
                                                </a>
                                                <p>Financial Analyst</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Русе</p>
                                                <div className="twm-jobs-vacancies">$32<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Елина */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Elina-Matisa.jpeg" alt="Елина" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Елина</h4>
                                                </a>
                                                <p>Content Writer</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Стара Загора</p>
                                                <div className="twm-jobs-vacancies">$18<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Румен */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Rumen-Slavchov.jpeg" alt="Румен" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Румен</h4>
                                                </a>
                                                <p>DevOps Engineer</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Пловдив</p>
                                                <div className="twm-jobs-vacancies">$45<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Риманте */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Rimante-Yanchev.jpeg" alt="Риманте" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Риманте</h4>
                                                </a>
                                                <p>Sales Manager</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />Варна</p>
                                                <div className="twm-jobs-vacancies">$38<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Любомир */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="twm-candidates-grid-h-page7 m-b30">
                                        <div className="twm-top-section-content">
                                            <div className="twm-media">
                                                <div className="twm-media-pic">
                                                    <img src="/assets/images/candidates/Lyubomir-Stoyanov.jpeg" alt="Любомир" />
                                                </div>
                                            </div>
                                            <div className="twm-mid-content">
                                                <div className="twm-candidates-tag"><span>Featured</span></div>
                                                <a href="candidate-detail.html" className="twm-job-title">
                                                    <h4>Любомир</h4>
                                                </a>
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="twm-fot-content">
                                            <div className="twm-left-info">
                                                <p className="twm-candidate-address"><i className="feather-map-pin" />София</p>
                                                <div className="twm-jobs-vacancies">$50<span>/ Hour</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center m-b30">
                                <a href="/candidates" className=" site-button">Всички кандидати</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="twm-bg-candi-pattern" />
            </section>



            {/* <GetHiredCompanies> </GetHiredCompanies> */}


            <section className="section-full p-t120 p-b90 site-bg-light-purple twm-bg-ring-wrap">
                <div className="twm-bg-ring-right" />
                <div className="twm-bg-ring-left" />
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>All Jobs Post</div>
                        </div>
                        <h2 className="wt-title">Find Your Career You Deserve it</h2>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="twm-jobs-list-wrap">
                            <ul>
                                <li>
                                    <div className="twm-jobs-list-style1 mb-5">
                                        <div className="twm-media">
                                            <img src="/assets/images/jobs-company/pic1.jpg" alt="#" />
                                        </div>
                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4>Senior Web Designer , Developer  <span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                            </a>
                                            <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                            <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-jobs-list-style1 mb-5">
                                        <div className="twm-media">
                                            <img src="/assets/images/jobs-company/pic2.jpg" alt="#" />
                                        </div>
                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4>Need Senior Rolling Stock Technician<span className="twm-job-post-duration">/ 15 days ago</span></h4>
                                            </a>
                                            <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-jobs-category green"><span className="twm-bg-brown">Intership</span></div>
                                            <div className="twm-jobs-amount">$2000<span>/ Month</span></div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-jobs-list-style1 mb-5">
                                        <div className="twm-media">
                                            <img src="/assets/images/jobs-company/pic3.jpg" alt="#" />
                                        </div>
                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4 className="twm-job-title">IT Department Manager &amp; Blogger-Entrepenour  <span className="twm-job-post-duration">/ 6 Month ago</span></h4>
                                            </a>
                                            <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-jobs-category green"><span className="twm-bg-purple">Fulltime</span></div>
                                            <div className="twm-jobs-amount">$1500 <span>/ Month</span></div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-jobs-list-style1 mb-5">
                                        <div className="twm-media">
                                            <img src="/assets/images/jobs-company/pic4.jpg" alt="#" />
                                        </div>
                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4 className="twm-job-title">Art Production Specialist   <span className="twm-job-post-duration">/ 2 days ago</span></h4>
                                            </a>
                                            <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-jobs-category green"><span className="twm-bg-sky">Freelancer</span></div>
                                            <div className="twm-jobs-amount">$1200<span>/ Month</span></div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-jobs-list-style1 mb-5">
                                        <div className="twm-media">
                                            <img src="/assets/images/jobs-company/pic5.jpg" alt="#" />
                                        </div>
                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4 className="twm-job-title">Recreation &amp; Fitness Worker   <span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                            </a>
                                            <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                            <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-jobs-category green"><span className="twm-bg-golden">Temporary</span></div>
                                            <div className="twm-jobs-amount">$1700 <span>/ Month</span></div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="text-center m-b30">
                                <a href="job-list.html" className=" site-button">Browse All Jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="section-full p-t120 p-b90 site-bg-gray twm-testimonial-2-area">


                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Clients Testimonials</div>
                    </div>
                    <h2 className="wt-title">What Our Customers Say About Us</h2>
                </div>


                <div className="container">
                    <div className="section-content">

                        <Splide
                            options={{
                                type: 'loop',
                                perPage: 3,
                                gap: '20px',
                                autoplay: true,
                                interval: 4000,
                                pauseOnHover: true,
                                arrows: true,
                                pagination: true,
                                breakpoints: {
                                    1200: { perPage: 3 },
                                    992: { perPage: 2 },
                                    768: { perPage: 1 },
                                },
                            }}
                            aria-label="Testimonials"
                        >

                            <SplideSlide>
                                <div className="twm-testimonial-2">
                                    <div className="twm-testimonial-2-content">
                                        <div className="twm-testi-media">
                                            <img src="/images/testimonials/pic-1.png" alt="Nikola Tesla" />
                                        </div>
                                        <div className="twm-testi-content">
                                            <div className="twm-quote">
                                                <img src="/images/quote-dark.png" alt="quote" />
                                            </div>
                                            <div className="twm-testi-info">
                                                I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.
                                            </div>
                                            <div className="twm-testi-detail">
                                                <div className="twm-testi-name">Nikola Tesla</div>
                                                <div className="twm-testi-position">Accountant</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="twm-testimonial-2">
                                    <div className="twm-testimonial-2-content">
                                        <div className="twm-testi-media">
                                            <img src="/images/testimonials/pic-2.png" alt="Collis Pong" />
                                        </div>
                                        <div className="twm-testi-content">
                                            <div className="twm-quote">
                                                <img src="/images/quote-dark.png" alt="quote" />
                                            </div>
                                            <div className="twm-testi-info">
                                                I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.
                                            </div>
                                            <div className="twm-testi-detail">
                                                <div className="twm-testi-name">Collis Pong</div>
                                                <div className="twm-testi-position">UI/UX Designer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="twm-testimonial-2">
                                    <div className="twm-testimonial-2-content">
                                        <div className="twm-testi-media">
                                            <img src="/images/testimonials/pic-3.png" alt="Nikola Tesla" />
                                        </div>
                                        <div className="twm-testi-content">
                                            <div className="twm-quote">
                                                <img src="/images/quote-dark.png" alt="quote" />
                                            </div>
                                            <div className="twm-testi-info">
                                                I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.
                                            </div>
                                            <div className="twm-testi-detail">
                                                <div className="twm-testi-name">Nikola Tesla</div>
                                                <div className="twm-testi-position">Accountant</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="twm-testimonial-2">
                                    <div className="twm-testimonial-2-content">
                                        <div className="twm-testi-media">
                                            <img src="/images/testimonials/pic-4.png" alt="Collis Pong" />
                                        </div>
                                        <div className="twm-testi-content">
                                            <div className="twm-quote">
                                                <img src="/images/quote-dark.png" alt="quote" />
                                            </div>
                                            <div className="twm-testi-info">
                                                I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.
                                            </div>
                                            <div className="twm-testi-detail">
                                                <div className="twm-testi-name">Collis Pong</div>
                                                <div className="twm-testi-position">UI/UX Designer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>

                    </div>
                </div>
            </section> */}




            {/* <section className="recruiter-section">
                <div className="outer-box">
                    <div className="image-column">
                        <figure className="image"><img src="/assets/images/recruiter.png" alt="#" /></figure>
                    </div>
                    <div className="content-column">
                        <div className="inner-column wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            <div className="sec-title">
                                <h2>I am Recruiter</h2>
                                <div className="text">One of our One of our jobs has some kind of flexibility jobs has some kind of flexibility option such as telecommuting, a part-time schedule or a flexible or flextime.</div>
                                <a href="#" className="theme-btn btn-style-one">Post New Job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="jobseeker-section">
                <div className="outer-box">
                    <div className="image-column">
                        <figure className="image"><img src="/assets/images/jobseeker.png" alt="#" /></figure>
                    </div>
                    <div className="content-column">
                        <div className="inner-column wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            <div className="sec-title">
                                <h2>I am Jobseeker</h2>
                                <div className="text">One of our One of our jobs has some kind of flexibility jobs has some kind of flexibility option such as telecommuting, a part-time schedule or a flexible or flextime.</div>
                                <a href="#" className="theme-btn btn-style-one">Browse Job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}







            <section className="section-full p-t120 p-b90 site-bg-gray">
                <div className="container">

                    {/* TITLE START */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Нашия Блог</div>
                        </div>
                        <h2 className="wt-title">Актуални статии </h2>
                    </div>
                    {/* TITLE END */}

                    <div className="section-content">
                        <div className="twm-blog-post-1-outer-wrap">

                            <Splide
                                options={{
                                    type: 'slide',
                                    perPage: 3,
                                    gap: '30px',
                                    arrows: false,
                                    pagination: true,
                                    breakpoints: {
                                        992: { perPage: 2 },
                                        768: { perPage: 1 },
                                    },
                                }}
                                aria-label="Latest Blog Articles"
                            >
                                {articles && articles.length > 0 ? (
                                    articles.map(article => (
                                        <SplideSlide key={article.id}>
                                            <div className="blog-post twm-blog-post-1-outer">

                                                {/* IMAGE */}
                                                <div className="wt-post-media">
                                                    <Link href={`/blog/${article.blog_slug}`}>
                                                        <img
                                                            src={`/assets/images/blog/${article.blog_image}`}
                                                            alt={article.blog_name}
                                                        />
                                                    </Link>
                                                </div>

                                                {/* CONTENT */}
                                                <div className="wt-post-info">

                                                    {/* META */}
                                                    <div className="wt-post-meta">
                                                        <ul>
                                                            <li className="post-date">
                                                                {new Date(article.created_at).toLocaleDateString("bg-BG", {
                                                                    day: "2-digit",
                                                                    month: "long",
                                                                    year: "numeric",
                                                                })}
                                                            </li>

                                                            <li className="post-author">
                                                                <span>
                                                                    {article.author ? article.author.name : 'Админ'}
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* TITLE */}
                                                    <div className="wt-post-title">
                                                        <h4 className="post-title">
                                                            <Link href={`/blog/${article.blog_slug}`}>
                                                                {article.blog_name}
                                                            </Link>
                                                        </h4>
                                                    </div>

                                                    {/* DESCRIPTION */}
                                                    <div className="wt-post-text">
                                                        <p>
                                                            {article.blog_content
                                                                ? article.blog_content.slice(0, 100) + '...'
                                                                : 'Няма описание'}
                                                        </p>
                                                    </div>

                                                    {/* READ MORE */}
                                                    <div className="wt-post-readmore">
                                                        <Link
                                                            href={`/blog/${article.blog_slug}`}
                                                            className="site-button-link site-text-primary"
                                                        >
                                                            Прочети повече
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </SplideSlide>
                                    ))
                                ) : (
                                    <p>Все още няма статии</p>
                                )}
                            </Splide>



                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

Welcome.layout = page => <FrontEndLayout children={page} />
