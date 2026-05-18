import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from '@inertiajs/react';

export default function PlatformEmployers() {
    return (
        <>

            <Head>
                <title>РаботаЗаМен | Работодатели</title>
            </Head>

            {/* ABOUT SECTION START */}
            <section className="section-full p-t120 p-b20 site-bg-white twm-millions-1-area pos-relative">
                <div className="container">
                    <div className="twm-millions-section-wrap">
                        <div className="row">

                            {/* IMAGE SIDE */}
                            <div className="col-lg-7 col-md-12 align-self-start">
                                <div className="twm-millions-1-section">
                                    <div className="twm-media">
                                        <img src="/assets/images/million-jobs/main-pic.png" alt="Работодатели" />

                                        <div className="twm-circle-jobs-wrap">
                                            <div className="twm-circle-jobs-box one bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-1.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="twm-circle-jobs-box two bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-2.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="twm-circle-jobs-box three bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-3.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="twm-circle-jobs-box four bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-4.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="twm-circle-jobs-box five bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-5.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="twm-circle-jobs-box six bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-6.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="twm-bg-circle-pic">
                                        <img src="/assets/images/million-jobs/bg-circle.png" alt="#" />
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT SIDE */}
                            <div className="col-lg-5 col-md-12">
                                <div>
                                    <div className="wt-post-discription">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>За работодатели</div>
                                        </div>

                                        <h2 className="wt-title">
                                            Цялостна екосистема за намиране на таланти
                                        </h2>

                                        <p>
                                            За бизнеса РаботаЗаМен.БГ не е просто поредният сайт за
                                            обяви, а цялостна екосистема, проектирана да трансформира
                                            начина, по който намирате, оценявате и наемате таланти.
                                            Нашата роля е да бъдем мостът между вашите бизнес цели и
                                            най-подходящите професионалисти на пазара, като
                                            премахнем хаоса и субективността от процеса на подбор.
                                        </p>

                                        <blockquote>
                                            <p>
                                                <span>"</span>
                                                Нашата мисия е да трансформираме тромавия и скъп
                                                процес по подбор в бърза, дигитална и прецизна
                                                операция.
                                            </p>
                                            <strong>Business Network</strong>
                                        </blockquote>

                                        <h4 className="twm-blog-s-title">
                                            Доверие и прозрачност за вашия бизнес
                                        </h4>

                                        <p>
                                            За предоставящите възможности за работни места
                                            платформата ни гарантира ефективен процес и доверие.
                                            Всеки работодател преминава през строга верификация и
                                            проверка в Търговския регистър. Системата ни позволява
                                            да управлявате и работите синхронно с екипа си, а
                                            търсенето на нови и успешни в сферата си кадри е
                                            по-прозрачно и легитимно отвсякога.
                                        </p>
                                    </div>

                                    <div className="post-single-list">
                                        <ul className="description-list-2">
                                            <li>
                                                <i className="feather-check" />
                                                Строга верификация и проверка в Търговския регистър.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Управление и синхронна работа с целия ви екип.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Директна връзка с таланти с доказани умения.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                Инструменти от корпоративно ниво за малкия и среден бизнес.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="twm-read-more p-t30">
                                        <Link href="/register/employer" className="site-button">
                                            Регистрирай компанията
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="twm-bg-shape5" />
            </section>
            {/* ABOUT SECTION END */}


            {/* TOP EMPLOYER BADGE INTRO START */}
            <section className="section-full p-t90 p-b30 site-bg-light-purple">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Топ Работодател</div>
                        </div>
                        <h2 className="wt-title">Какви са основните предимства за работодатели?</h2>
                        <p>
                            Всичко започва със създаването на вашия фирмен профил – вашия дигитален
                            отпечатък като работодател. Чрез него вие не просто обявявате свободни
                            позиции, а заявявате своята идентичност, ценности и професионална среда.
                            Платформата работи като интелигентен филтър, който автоматизира
                            административните задачи, анализира компетенциите на кандидатите и ви
                            позволява да се фокусирате върху най-важното – личната среща с правилния
                            човек.
                        </p>
                    </div>
                </div>
            </section>
            {/* TOP EMPLOYER BADGE INTRO END */}


            {/* TOP EMPLOYER BENEFITS CARDS START */}
            <section className="section-full p-t30 p-b90 site-bg-light-purple twm-how-it-work-area2">
                <div className="container">
                    <div className="twm-w-process-steps-2-wrap">
                        <div className="row">

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">01</span>
                                        <h4 className="twm-title">Top Employer Badge</h4>
                                        <p>
                                            Златната значка, която ви отличава от конкуренцията още
                                            при първото зареждане на сайта.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">02</span>
                                        <h4 className="twm-title">Ефективност и рекордна скорост</h4>
                                        <p>
                                            Платформата ни съкращава цикъла на наемане с до{" "}
                                            <strong>60%</strong>. Благодарение на интелигентните
                                            алгоритми, прескачате ръчното сортиране на стотици
                                            неподходящи CV-та и преминавате директно към
                                            качествените кандидатури.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                        <span className="twm-large-number text-clr-pink">03</span>
                                        <h4 className="twm-title">Достъп до „Top Talent“</h4>
                                        <p>
                                            Спестявате време за проверка. Кандидатите със златна
                                            значка са преминали през пълна верификация, качили са
                                            свое видео CV и са доказали своята активност. Вашата
                                            гаранция за качество.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                        <span className="twm-large-number text-clr-green">04</span>
                                        <h4 className="twm-title">Приоритетна видимост</h4>
                                        <p>
                                            Вашите обяви излизат на първо място в списъците на
                                            кандидатите.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">05</span>
                                        <h4 className="twm-title">Двустранно доверие чрез ревюта</h4>
                                        <p>
                                            Платформата позволява на потребителите да споделят своя
                                            обективен опит. За коректните работодатели това е
                                            най-мощният безплатен инструмент за реклама – вашата
                                            репутация работи за вас и привлича топ кадри органично.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">06</span>
                                        <h4 className="twm-title">Оптимизация на разходите</h4>
                                        <p>
                                            Обединяваме няколко услуги в една – портал за обяви,
                                            софтуер за управление на кандидати и обучителна
                                            академия. Елиминира нуждата от плащане за множество
                                            различни платформи и външни консултанти.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* TOP EMPLOYER BENEFITS CARDS END */}


            {/* HOW WE MEASURE REPUTATION — explainer with image */}
            <section className="section-full p-t120 p-b90 site-bg-gray twm-how-t-get-wrap7">
                <div className="container">
                    <div className="twm-how-t-get-section">
                        <div className="row align-items-center">

                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="twm-how-t-get-section-left">
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Company Score</div>
                                        </div>
                                        <h2 className="wt-title">Как измерваме Вашата репутация?</h2>
                                        <p>
                                            В РаботаЗаМен.БГ доверието се измерва с данни. Вашият{" "}
                                            <strong>Company Score</strong> е алгоритъм, който оценява
                                            качеството на вашето представяне пред талантите.
                                        </p>
                                        <p>
                                            Вашият прогрес ви изкачва в йерархията на най-желаните
                                            работодатели. След като достигнете над{" "}
                                            <strong>80% попълненост</strong>, вашият профил
                                            автоматично получава златната значка за „Топ Работодател“.
                                            Всеки детайл добавя тежест към вашия бранд.
                                        </p>
                                    </div>

                                    <div className="twm-how-t-get-bottom">
                                        <div className="twm-left-icon-bx">
                                            <div className="twm-left-icon-content">
                                                <h4 className="icon-title">80%+ Company Score</h4>
                                                <p>Получавате значката „Топ Работодател“ автоматично</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="twm-how-t-get-section-right">
                                    <div className="twm-media">
                                        <img src="/assets/images/hig-pic.png" alt="Top Employer" />
                                    </div>

                                    <div className="twm-left-img-bx bounce2">
                                        <div className="twm-left-img-media">
                                            <img src="/assets/images/pic1.jpg" alt="Top Employer" />
                                        </div>
                                        <div className="twm-left-img-content">
                                            <h4 className="icon-title">Завърши профила</h4>
                                            <p>80%+ Company Score</p>
                                        </div>
                                    </div>

                                    <div className="twm-profile-card bounce2">
                                        <div className="twm-profile-pic">
                                            <img src="/assets/images/pic3.jpg" alt="Top Employer" />
                                        </div>
                                        <div className="twm-profile-info">
                                            <h4 className="twm-profile-name">Top Employer</h4>
                                            <div className="twm-profile-position">Verified Business</div>
                                            <a className="site-button-link underline">Виж профила</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* HOW WE MEASURE REPUTATION END */}


            {/* STORY-STYLE EXPLANATION START */}
            <section className="section-full p-t90 p-b60 site-bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="wt-post-discription">
                                <h4 className="twm-blog-s-title">Как да станете „Топ Работодател“?</h4>
                                <p>
                                    Искате ли вашата компания да бъде първият избор на най-добрите
                                    професионалисти на пазара? В РаботаЗаМен.БГ превръщането в лидер
                                    не е въпрос на случайност, а на правилно представена идентичност.
                                    Всичко започва с полагането на солидна основа – качете вашето
                                    фирмено лого и разкажете историята на своя бизнес. Бъдете
                                    детайлни и искрени в секцията за мисия и ценности, защото именно
                                    там амбициозните таланти откриват смисъл в това да станат част
                                    от вашия екип.
                                </p>
                                <p>
                                    След като сте дефинирали кои сте, е време да „отворите вратите“
                                    на компанията си визуално. Статичните описания отстъпват място
                                    на автентичността – затова качете <strong>реални снимки</strong>{" "}
                                    от вашия офис, производствена база или обекти. Помнете, че една
                                    снимка на истинската работна атмосфера продава вашата фирмена
                                    култура много по-успешно от всеки рекламен банер.
                                </p>
                                <p>
                                    Доверието в дигиталната ера се гради върху прозрачността. Бъдете
                                    открити по отношение на възнаграждението, като ясно опишете
                                    диапазоните на заплатите и наличните бонуси. Това не само
                                    изгражда авторитет, но и ви спестява ценни часове в срещи с
                                    кандидати, чиито очаквания не съвпадат с вашите, превръщайки
                                    подбора в хирургически точен процес.
                                </p>
                                <p>
                                    Сигурността и професионализмът са задължителни за всеки сериозен
                                    бранд. Верифицирайте своя фирмен профил чрез потвърждение на
                                    имейл и домейн – това е най-бързият сигнал към пазара, че вие
                                    сте легитимен и стабилен партньор. За висококвалифицираните
                                    кадри тази сигурност често е решаващият фактор при избора на
                                    работодател.
                                </p>
                                <p>
                                    Накрая, превърнете активността в свой навик. Вашата репутация в
                                    платформата се определя директно от начина, по който общувате.
                                    Използвайте дашборда, за да отговаряте бързо и лично на
                                    кандидатите. Времето ви за реакция е директна мярка за вашето
                                    отношение към хората и е ключов компонент от вашия Company Score.
                                </p>

                                <blockquote>
                                    <p>
                                        <span>"</span> Всяка завършена стъпка повишава вашата
                                        видимост и ви приближава до златната значка. Започнете днес
                                        и превърнете бизнеса си в истински магнит за топ таланти!
                                    </p>
                                    <strong>Екипът на РаботаЗаМен.БГ</strong>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* STORY-STYLE EXPLANATION END */}


            {/* COMPANY SCORE BREAKDOWN — percentages as big numbers */}
            <section className="section-full p-t60 p-b50 site-bg-white twm-how-it-work-area2">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Изгради своя Company Score</div>
                        </div>
                        <h2 className="wt-title">Стъпки към златната значка „Топ Работодател“</h2>
                        <p>
                            Всеки детайл от профила на компанията ви добавя процент към общия
                            резултат. Колкото по-прозрачен и завършен е профилът ви, толкова
                            по-високо ниво на видимост и по-качествени кандидати привличате.
                        </p>
                    </div>

                    <div className="twm-w-process-steps-2-wrap">
                        <div className="row">

                            {/* 20% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">+20%</span>
                                        <h4 className="twm-title">Основна информация</h4>
                                        <p>
                                            Основни данни за вашия бизнес – име, индустрия, размер и
                                            локация. Професионалното начало на всяко партньорство.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 15% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">+15%</span>
                                        <h4 className="twm-title">Брандинг и Визия</h4>
                                        <p>
                                            Лого, корица и реални снимки от работния процес.
                                            Кандидатите искат да „видят“ къде ще работят.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 15% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                        <span className="twm-large-number text-clr-pink">+15%</span>
                                        <h4 className="twm-title">Фирмено описание</h4>
                                        <p>
                                            Вашата история, мисия и ценности. Тук печелите сърцата
                                            на талантите.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 10% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                        <span className="twm-large-number text-clr-green">+10%</span>
                                        <h4 className="twm-title">Социално присъствие</h4>
                                        <p>
                                            Уебсайт и линкове към LinkedIn и Facebook. Това е вашият
                                            сертификат за валидност и доверие.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 10% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">+10%</span>
                                        <h4 className="twm-title">Заплати и Бенефити</h4>
                                        <p>
                                            Прозрачност относно възнагражденията и придобивките.
                                            Най-силният фактор за привличане на качествени кадри.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 10% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">+10%</span>
                                        <h4 className="twm-title">Реална активност ⭐</h4>
                                        <p>
                                            Поне една активна обява през последните 30 дни показва,
                                            че компанията ви се развива „тук и сега“.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 5% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                        <span className="twm-large-number text-clr-pink">+5%</span>
                                        <h4 className="twm-title">Екип и Контакти</h4>
                                        <p>
                                            Лично лице за контакт. Хуманизирането на подбора
                                            увеличава доверието.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 5% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                        <span className="twm-large-number text-clr-green">+5%</span>
                                        <h4 className="twm-title">Настройки и Процес</h4>
                                        <p>
                                            Наличие на screening въпроси и организиран recruitment
                                            pipeline. Доказателство за професионално отношение.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 5% */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">+5%</span>
                                        <h4 className="twm-title">Верификация</h4>
                                        <p>
                                            Потвърден имейл, домейн и фирмена проверка. Най-силният
                                            фактор, гарантиращ, че сте легитимен бизнес.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 5% */}
                            <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-4">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">+5%</span>
                                        <h4 className="twm-title">Репутация и Реакция</h4>
                                        <p>
                                            Време за отговор към кандидатите. Колкото по-бързи сте,
                                            толкова по-висок е вашият рейтинг.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Totals indicator */}
                    <div className="row p-t30">
                        <div className="col-lg-12">
                            <div className="counter-outer-two text-center">
                                <div className="icon-content">
                                    <div className="tw-count-number text-clr-yellow-2">
                                        <span className="counter">100</span>%
                                    </div>
                                    <p className="icon-content-info">
                                        Максимален Company Score = магнит за топ таланти
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* COMPANY SCORE BREAKDOWN END */}


            {/* FINAL CTA START */}
            <section className="section-full p-t120 p-b120 twm-explore-area bg-cover site-bg-light-purple">
                <div className="container">
                    <div className="section-content">
                        <div className="row">

                            <div className="col-lg-4 col-md-12">
                                <div className="twm-explore-media-wrap">
                                    <div className="twm-media">
                                        <img src="/assets/images/gir-large.png" alt="Top Employer" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="twm-explore-content-outer">
                                    <div className="twm-explore-content">
                                        <div className="twm-l-line-1" />
                                        <div className="twm-l-line-2" />
                                        <div className="twm-r-circle-1" />
                                        <div className="twm-r-circle-2" />

                                        <div className="twm-title-small text-center">Време е за действие</div>
                                        <div className="twm-title-large">
                                            <h2>
                                                Превърнете бизнеса си в
                                                магнит за топ таланти!
                                            </h2>
                                            <p className="text-center mt-2">
                                                Всяка завършена стъпка повишава вашата видимост и ви
                                                приближава до златната значка „Топ Работодател“.
                                                Започнете днес!
                                            </p>
                                        </div>

                                        <div className="twm-upload-file d-flex gap-3 justify-content-center">
                                            <Link href="/register/employer" className="site-button">
                                                Регистрирай компанията <i className="feather-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="twm-bold-circle-right" />
                                    <div className="twm-bold-circle-left" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* FINAL CTA END */}

        </>
    );
}

PlatformEmployers.layout = (page) => <FrontEndLayout children={page} />;
