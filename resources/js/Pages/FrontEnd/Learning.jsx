import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Academy() {


    return (
        <>

            {/* HERO / INTRO START */}
            <section className="section-full p-t120  site-bg-white twm-millions-1-area pos-relative">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-7 col-md-12">
                            <div className="section-head left wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Академия РаботаЗаМен.БГ</div>
                                </div>
                                <h2 className="wt-title">
                                    Професионалното израстване не трябва да бъде лукс. То е право.
                                </h2>
                                <p>
                                    Знанията са единственият актив, който не губи стойност. Основна
                                    мисия на РаботаЗаМен.БГ е да предостави на бизнеса и на отделния
                                    професионалист инструментите за реален растеж. От безплатни
                                    квалификационни програми през Агенцията по заетостта до
                                    високоспециализирани частни тренинги – ние оптимизираме
                                    най-ценния ви ресурс — повишаване на ключови компетентности.
                                </p>
                                <p>
                                    В нашата Академия ще откриете уменията, които пазарът търси и
                                    обученията, от които бизнесът има нужда.
                                </p>

                                <div className="wt-post-discription">
                                    <blockquote>
                                        <p>
                                            <span>"</span> Основната мисия на Академията на РаботаЗаМен.БГ
                                            е да свързваме таланта с възможностите, предоставяйки
                                            модерно, практическо и достъпно образование. Стремим се да
                                            бъдем мостът между нуждите на бизнеса и уменията на
                                            кадрите, създавайки уверени професионалисти и сплотени
                                            екипи.
                                        </p>
                                        <strong>Екипът на РаботаЗаМен.БГ</strong>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="twm-explore-media-wrap2">
                                <div className="twm-media">
                                    <img src="/assets/images/million-jobs/main-pic.png" alt="Академия" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* HERO / INTRO END */}


            {/* WHY CHOOSE US START */}
            <section className="section-full p-t40 p-b40 site-bg-light-purple twm-how-it-work-area2">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Защо нас</div>
                        </div>
                        <h2 className="wt-title mb-2">Защо да изберете Академията на РаботаЗаМен.БГ?</h2>
                        <p>
                            РаботаЗаМен.БГ комбинира опита на утвърдена HR агенция с експертизата
                            на образователен център. Ние сме официално лицензиран Доставчик на
                            обучение (ДОб) към Агенцията по заетостта, което ни позволява да
                            провеждаме обучения, напълно финансирани от държавата. От друга страна,
                            ние оперираме и на свободния пазар, предоставяйки високоспециализирани
                            частни обучения и консултации, изцяло адаптирани към специфичните нужди
                            на корпоративния сектор.
                        </p>
                        <p>Изборът на място за обучение е избор на вашето бъдеще.</p>
                    </div>

                    <div className="twm-w-process-steps-2-wrap m-t80">
                        <div className="row">

                            {/* HR partner */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">01</span>

                                        <h4 className="twm-title">Повече от обучение — HR партньор</h4>
                                        <p>
                                            За разлика от традиционните учебни центрове, ние сме
                                            утвърдена HR компания. Знаем точно какви умения търсят
                                            работодателите в момента. Получавате знания, тествани в
                                            реална работна среда и директно приложими за кариерното ви
                                            израстване.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Funding */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                        <span className="twm-large-number text-clr-yellow">02</span>

                                        <h4 className="twm-title">Гъвкавост при финансирането</h4>
                                        <p>
                                            Качественото образование трябва да е достъпно. Имате избор:
                                            държавно финансиране чрез ваучери от Агенцията по
                                            заетостта или гъвкави корпоративни пакети, които се
                                            изплащат чрез повишената продуктивност на екипа ви.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* License */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                        <span className="twm-large-number text-clr-pink">03</span>

                                        <h4 className="twm-title">Официално лицензирана Академия</h4>
                                        <p>
                                            Вашето доверие е защитено. Ние сме официално регистриран
                                            доставчик към Агенцията по заетостта. Нашите сертификати
                                            са легитимни и признати от работодателите — стабилност и
                                            увереност при кандидатстване или повишение.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Practice */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                        <span className="twm-large-number text-clr-green">04</span>

                                        <h4 className="twm-title">Акцент върху практическата приложимост</h4>
                                        <p>
                                            Минимум теория, максимум практика. Работим с
                                            лектори-практици и експерти на свободна практика, които
                                            споделят реален опит, „хитрини от кухнята“ и казуси от
                                            ежедневието на успешните компании.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Approach */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-w-process-steps-2">
                                    <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                        <span className="twm-large-number text-clr-sky">05</span>

                                        <h4 className="twm-title">Индивидуално отношение към всеки екип</h4>
                                        <p>
                                            Оказваме съдействие през целия процес на кандидатстване за
                                            ваучери — от регистрацията в портала на АЗ до успешното
                                            завършване. Анализираме нуждите на вашия екип и адаптираме
                                            съдържанието към конкретните бизнес предизвикателства.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* WHY CHOOSE US END */}


            {/* WHO IS IT FOR — using the "how-to-get" layout style */}
            <section className="section-full p-t30 p-b20 site-bg-gray twm-how-t-get-wrap7">
                <div className="container">
                    <div className="twm-how-t-get-section">
                        <div className="row">

                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="twm-how-t-get-section-left">
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>За кого</div>
                                        </div>
                                        <h2 className="wt-title">За кого са подходящи обученията?</h2>
                                        <p>
                                            Нашата програма е създадена за всеки, който вярва, че
                                            развитието на уменията е най-сигурната инвестиция в
                                            бъдещето.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="twm-w-process-steps-2-wrap">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                                    <h4 className="twm-title">Стартиращи таланти</h4>
                                                    <p>
                                                        Които търсят бърз старт на първата си работа.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                                    <h4 className="twm-title">Търсещи промяна</h4>
                                                    <p>
                                                        Които искат сигурен път към нова професия.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                                    <h4 className="twm-title">Амбициозни експерти</h4>
                                                    <p>
                                                        Които целят повишение и нови отговорности.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                                    <h4 className="twm-title">Бизнес лидери</h4>
                                                    <p>
                                                        Които инвестират в развитието на своите екипи.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* WHO IS IT FOR END */}


            {/* COURSES — FAQ ACCORDION START */}
            <section className="section-full p-t120 p-b90 site-bg-white">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Каталог с курсове</div>
                        </div>
                        <h2 className="wt-title">Какви обучения предлагаме?</h2>
                        <p>
                            Разгледайте нашия актуален каталог от курсове, внимателно подбрани
                            спрямо най-търсените умения на пазара на труда. Можем да предоставяме
                            възможност за различна продължителност — пълните блокове с всички
                            модули или определен брой модули, в зависимост от интересите, цени и
                            условия за потребителите.
                        </p>
                        <p>
                            <em>
                                Условия за персонални заявки и оферти — например: Фирма иска да
                                инвестира в обучение на служителите си за съответно ниво на
                                конкретен език. Заявява желание, фирмата ни изготвя оферта.
                            </em>
                        </p>
                    </div>

                    <div className="accordion twm-academy-accordion">
                        <Accordion className="row">

                            <div className="col-lg-6">
                                <AccordionItem header="1. Дигитални умения и офис инструменти">
                                    <div className="accordion-body">

                                        <p>
                                            Дигиталните умения и работата с офис инструменти обхващат
                                            способността за уверено, критично и творческо използване на
                                            информационните и комуникационни технологии.
                                        </p>

                                        <h5 className="twm-blog-s-title">
                                            Знания, които ще придобиете:
                                        </h5>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Работа с компютърни системи и файлове.</li>
                                            <li><i className="feather-check" /> Работа с Word, Excel и PowerPoint.</li>
                                            <li><i className="feather-check" /> Дигитална сигурност и защита на данните.</li>
                                            <li><i className="feather-check" /> Работа с облачни технологии.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="2. Поведенчески умения и комуникация">
                                    <div className="accordion-body">

                                        <p>
                                            Поведенческите умения и комуникацията са ключови за
                                            ефективна работа в екип и професионална среда.
                                        </p>

                                        <h5 className="twm-blog-s-title">
                                            Умения, които ще развиете:
                                        </h5>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Активно слушане.</li>
                                            <li><i className="feather-check" /> Ефективна комуникация.</li>
                                            <li><i className="feather-check" /> Управление на конфликти.</li>
                                            <li><i className="feather-check" /> Презентационни умения.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="3. Управление, продуктивност и лидерство">
                                    <div className="accordion-body">

                                        <p>
                                            Развитие на лидерски качества и подобряване
                                            на личната продуктивност.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Управление на време.</li>
                                            <li><i className="feather-check" /> SMART цели.</li>
                                            <li><i className="feather-check" /> Работа с екипи.</li>
                                            <li><i className="feather-check" /> Делегиране на задачи.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="4. Човешки ресурси и организационно поведение">
                                    <div className="accordion-body">

                                        <p>
                                            Управление на човешкия капитал и организационната култура.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Подбор на персонал.</li>
                                            <li><i className="feather-check" /> Провеждане на интервюта.</li>
                                            <li><i className="feather-check" /> HR процеси.</li>
                                            <li><i className="feather-check" /> Управление на таланти.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="5. ИТ основи и технически умения">
                                    <div className="accordion-body">

                                        <p>
                                            Основи на компютърните технологии и техническа поддръжка.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Компютърни мрежи.</li>
                                            <li><i className="feather-check" /> Софтуер и хардуер.</li>
                                            <li><i className="feather-check" /> Киберсигурност.</li>
                                            <li><i className="feather-check" /> Диагностика на проблеми.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>
                            </div>

                            <div className="col-lg-6">
                                <AccordionItem header="6. Дигитален маркетинг и електронна търговия">
                                    <div className="accordion-body">

                                        <p>
                                            Онлайн маркетинг, SEO и електронна търговия.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> SEO и SEM.</li>
                                            <li><i className="feather-check" /> Социални мрежи.</li>
                                            <li><i className="feather-check" /> Онлайн реклама.</li>
                                            <li><i className="feather-check" /> E-commerce платформи.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="7. Езикови обучения">
                                    <div className="accordion-body">

                                        <p>
                                            Развитие на езикови умения за професионална реализация.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Бизнес комуникация.</li>
                                            <li><i className="feather-check" /> Граматика и лексика.</li>
                                            <li><i className="feather-check" /> Писмена комуникация.</li>
                                            <li><i className="feather-check" /> Разговорни умения.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="8. Критично мислене и решаване на проблеми">
                                    <div className="accordion-body">

                                        <p>
                                            Анализиране на информация и намиране на решения.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Логическо мислене.</li>
                                            <li><i className="feather-check" /> Анализ на данни.</li>
                                            <li><i className="feather-check" /> Решаване на казуси.</li>
                                            <li><i className="feather-check" /> Вземане на решения.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>

                                <AccordionItem header="9. Адаптивност и дигитален имидж">
                                    <div className="accordion-body">

                                        <p>
                                            Адаптация към динамична работна среда и онлайн присъствие.
                                        </p>

                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Личен брандинг.</li>
                                            <li><i className="feather-check" /> Онлайн репутация.</li>
                                            <li><i className="feather-check" /> Дигитален етикет.</li>
                                            <li><i className="feather-check" /> Работа в дистанционни екипи.</li>
                                        </ul>

                                    </div>
                                </AccordionItem>
                            </div>

                        </Accordion>
                    </div>
                </div>
            </section>
            {/* COURSES — FAQ ACCORDION END */}


            {/* FREE TRAINING VIA EMPLOYMENT AGENCY START */}
            <section className="section-full p-t30 p-b40 site-bg-light-purple">
                <div className="container">

                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Безплатни обучения</div>
                        </div>
                        <h2 className="wt-title">Безплатни обучения чрез Агенцията по заетостта</h2>
                    </div>

                    {/* How the state helps */}
                    <div className="twm-millions-section-wrap p-b30 text-center">
                        <h4 className="twm-blog-s-title">Как съдейства държавата?</h4>
                        <p>
                            Чрез европейски и национални програми, държавата предоставя възможност
                            на заети и безработни лица да повишат своята квалификация напълно
                            безплатно. Инструментът за това е електронният ваучер. Държавата
                            покрива 100% от разходите за обучението, а вие получавате нови знания и
                            официален сертификат, избирайки нас за свой Доставчик на обучение.
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="row p-b30">
                        <div className="col-lg-6 col-md-12">
                            <div className="twm-w-process-steps-2">
                                <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                    <h4 className="twm-title">За кандидатите</h4>
                                    <p>
                                        Придобиване на нови, търсени на пазара умения без финансова
                                        инвестиция, повишаване на конкурентоспособността,
                                        държавно признат сертификат.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="twm-w-process-steps-2">
                                <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                    <h4 className="twm-title">За работодателите</h4>
                                    <p>
                                        Възможност да повишат квалификацията на своя екип без да
                                        натоварват фирмения бюджет и повишаване на продуктивността в
                                        компанията.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How to apply */}
                    <div className="twm-millions-section-wrap p-b30">
                        <h4 className="twm-blog-s-title">Как да кандидатствате през Агенцията по заетостта?</h4>
                        <p>Кандидатстването е изцяло дигитално и изисква само няколко минути:</p>
                        <ul className="description-list-2">
                            <li><i className="feather-check" /> <strong>Избор на курс:</strong> Разгледайте каталога с обучения на нашата Академия.</li>
                            <li><i className="feather-check" /> <strong>Подаване на заявление:</strong> Влезте в Електронния портал на Агенция по заетостта чрез КЕП, ПИК на НАП/НОИ или системата е-Автентика.</li>
                            <li><i className="feather-check" /> <strong>Избор на доставчик:</strong> При попълване на електронното заявление, посочете РаботаЗаМен.БГ като предпочитан Доставчик на обучение.</li>
                            <li><i className="feather-check" /> <strong>Получаване на ваучер:</strong> След одобрение от АЗ, ще получите своя електронен ваучер директно на вашия имейл.</li>
                            <li><i className="feather-check" /> <strong>Старт на обучението:</strong> Свържете се с нас, за да ви запишем в предстояща група и да сключим договор за обучение. Ние ще се погрижим за цялата останала администрация!</li>
                        </ul>
                    </div>

                    {/* Employer support */}
                    <div className="twm-millions-section-wrap">
                        <h4 className="twm-blog-s-title">Съдействие на работодатели</h4>
                        <p>
                            Ако сте работодател и искате да обучите екипа си чрез програмите на АЗ:
                        </p>
                        <ul className="description-list-2">
                            <li><i className="feather-check" /> <strong>Свържете се с нас:</strong> Ще обсъдим кои от вашите служители отговарят на условията за безплатни ваучери.</li>
                            <li><i className="feather-check" /> <strong>Информационна кампания:</strong> Ние ще съдействаме с инструкции и материали, които да предоставите на екипа си, за да ги улесним максимално при самостоятелното подаване на заявленията им.</li>
                            <li><i className="feather-check" /> <strong>Синхронизиране:</strong> След като служителите ви получат ваучерите си, ние ще формираме „затворена“ група само за вашата компания (при достатъчен брой хора) и ще съобразим графика на обучението с работния ви процес.</li>
                        </ul>
                    </div>

                </div>
            </section>
            {/* FREE TRAINING END */}


            {/* PRIVATE / CORPORATE TRAINING START — using "get jobs" layout style */}
            <section className="section-full site-bg-white h-page6-getjobs-wrap p-t50 p-b50">
                <div className="container">
                    <div className="h-page-6-getjobs-wrap">
                        <div className="row align-items-center">

                            <div className="col-lg-6 col-md-12">
                                <div className="h-page-6-getjobs-left">
                                    <div className="twm-media">
                                        <img src="/assets/images/get-job-pic.png" alt="Корпоративни обучения" />
                                        <div className="twm-media-bg-circle" />
                                        <div className="twm-media-bg-circle2" />
                                        <div className="twm-media-bg-circle3">
                                            <div className="rotate-center">
                                                <span className="ring1" />
                                                <span className="ring2" />
                                                <span className="ring3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="h-page-6-getjobs-right">
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Частни обучения</div>
                                        </div>
                                        <h2 className="wt-title">Как предоставяме частните си услуги?</h2>
                                        <p>
                                            За компаниите, които търсят курсове за своите служители,
                                            извън рамките на държавните програми, ние предлагаме
                                            изцяло персонализирани услуги на свободна практика.
                                            Нашите корпоративни обучения не са готови шаблони. Ние
                                            работим като ваш стратегически HR партньор:
                                        </p>
                                    </div>

                                    <div className="post-single-list">
                                        <ul className="description-list-2">
                                            <li><i className="feather-check" /> Стартираме с анализ на нуждите на вашия екип.</li>
                                            <li><i className="feather-check" /> Създаваме учебна програма, която решава реални казуси от вашата бизнес практика.</li>
                                            <li><i className="feather-check" /> Обученията могат да бъдат присъствени (във вашия офис или наша зала), изцяло онлайн или в хибриден формат. Адаптираме се към вашето работно време.</li>
                                            <li><i className="feather-check" /> Работим с доказани практици и експерти на свободна практика, които носят реален опит от индустрията.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Benefits + how we work */}
                    <div className="row p-t60">
                        <div className="col-lg-6 col-md-12">
                            <div className="twm-millions-section-wrap">
                                <h4 className="twm-blog-s-title">Преки ползи за вашия бизнес</h4>
                                <ul className="description-list-2">
                                    <li><i className="feather-check" /> Инвестицията ви се възвръща чрез конкретно подобряване на работните процеси.</li>
                                    <li><i className="feather-check" /> Затворените корпоративни обучения сплотяват екипа и подобряват вътрешната комуникация.</li>
                                    <li><i className="feather-check" /> Разглеждаме вътрешнофирмени казуси в защитена и поверителна среда.</li>
                                    <li><i className="feather-check" /> Компаниите, които инвестират целево в хората си, привличат и задържат най-добрите таланти.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="twm-millions-section-wrap">
                                <h4 className="twm-blog-s-title">Как работим с корпоративни клиенти?</h4>
                                <ul className="description-list-2">
                                    <li><i className="feather-check" /> Свържете се с нас с кратко описание на вашите нужди.</li>
                                    <li><i className="feather-check" /> Провеждаме среща с вашия мениджмънт/HR отдел за уточняване на целите.</li>
                                    <li><i className="feather-check" /> Изготвяме предложение с конкретни теми, лектори, времева рамка и бюджет.</li>
                                    <li><i className="feather-check" /> Реализираме обучението и предоставяме доклад с обратна връзка и препоръки за последващо развитие на екипа.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PRIVATE / CORPORATE TRAINING END */}


            {/* MAIN CTA START */}
            <section className="section-full p-t120 p-b120 twm-explore-area bg-cover"
                style={{ backgroundImage: "url(/assets/images/f-bg.jpg)" }}>
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="twm-explore-content-outer">
                                    <div className="twm-explore-content text-center">
                                        <div className="twm-l-line-1" />
                                        <div className="twm-l-line-2" />
                                        <div className="twm-r-circle-1" />
                                        <div className="twm-r-circle-2" />

                                        <div className="twm-title-small">Време е за действие</div>
                                        <div className="twm-title-large">
                                            <h2>
                                                Готови ли сте да надградите своите знания
                                                или тези на вашия екип?
                                            </h2>
                                        </div>

                                        <div className="twm-read-more d-flex justify-content-center gap-3 flex-wrap ">
                                            <a href="/contact" className="site-button">Свържете се с нас</a>
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
            {/* MAIN CTA END */}


            {/* TERMS & GUARANTEES START */}
            <section className="section-full p-t50 p-b20 site-bg-white">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>Условия и гаранции</div>
                        </div>
                        <h2 className="wt-title">Прозрачни условия за вашето спокойствие</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="twm-w-process-steps-2">
                                <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                    <span className="twm-large-number text-clr-sky">01</span>
                                    <h4 className="twm-title">Доживотен достъп</h4>
                                    <p>
                                        За единичните курсове получавате доживотен достъп до видео
                                        уроците и бъдещите им обновявания. За абонаментните планове
                                        достъпът е активен, докато абонаментът е валиден.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="twm-w-process-steps-2">
                                <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                    <span className="twm-large-number text-clr-yellow">02</span>
                                    <h4 className="twm-title">14-дневна гаранция</h4>
                                    <p>
                                        Сигурни сме в качеството на нашите обучения. Ако курсът не
                                        отговори на очакванията ви, предлагаме 14-дневен срок за
                                        връщане на парите без излишни въпроси.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="twm-w-process-steps-2">
                                <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                    <span className="twm-large-number text-clr-pink">03</span>
                                    <h4 className="twm-title">Дигитални сертификати</h4>
                                    <p>
                                        Сертификатите се издават автоматично след успешно
                                        преминаване на финалния тест с резултат над 75%. Дигитални,
                                        с уникален верификационен номер и възможност за директно
                                        споделяне в LinkedIn и CV профила ви в платформата.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TERMS & GUARANTEES END */}


            {/* SKILL VALIDATION START */}
            <section className="section-full p-t30 p-b30 site-bg-gray twm-how-t-get-wrap7">
                <div className="container">
                    <div className="twm-how-t-get-section">
                        <div className="row">

                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="twm-how-t-get-section-left">
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Валидиране на умения</div>
                                        </div>
                                        <h2 className="wt-title">Спечели предимството, което другите нямат!</h2>
                                        <p>
                                            <strong>Уменията не се купуват, те се доказват.</strong>
                                        </p>
                                        <p>
                                            Готов ли си да затвърдиш професионализма си или пък да
                                            докажеш своите умения на себе си или своя работодател?
                                        </p>
                                    </div>

                                    {/* <div className="twm-how-t-get-bottom">
                                        <a href="#" className="site-button">Започни тест</a>
                                        <div className="twm-left-icon-bx">
                                            <div className="twm-left-icon-media site-bg-primary">
                                                <i className="flaticon-tick site-text-white" />
                                            </div>
                                            <div className="twm-left-icon-content">
                                                <h4 className="icon-title">Сертифициран</h4>
                                                <p>Видима значка за работодатели</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="twm-millions-section-wrap">
                                    <h4 className="twm-blog-s-title">Как работи платформата за валидиране на умения?</h4>
                                    <ul className="description-list-2">
                                        <li>
                                            <i className="feather-check" />
                                            <strong>Избери тест</strong> от нашата библиотека, който
                                            отговаря на твоя профил. Отваря се падащо меню с видове
                                            умения, за които предоставяме тестове за валидация на
                                            компетенции.
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            <strong>Разполагаш с 15 до 30 минути.</strong> Въпросите
                                            са практически и са създадени от експерти, за да проверят
                                            реалните ти знания, а не теорията. След избор на умение
                                            се отваря прозорец с тест (Google формуляр или
                                            интерактивен тест) с незабавна обратна връзка — покрил ли
                                            си минимума за верификация или не. Получаваш възможност
                                            срещу допълнително заплащане за обратна връзка и
                                            препоръки от експерт върху какво трябва да наблегнеш,
                                            или 30-дневен период, след който може да покриеш отново
                                            теста за валидация.
                                        </li>
                                        <li>
                                            <i className="feather-check" />
                                            <strong>Успешен резултат над 75%</strong> автоматично
                                            добавя верифицирана значка „Сертифициран“ към профила
                                            ти. Тя е видима за всички работодатели.
                                        </li>
                                    </ul>

                                    <p className="p-t10">
                                        <em>
                                            * Към всеки вече изготвен обучителен блок изготвяме по
                                            един тест за валидиране на умения.
                                        </em>
                                    </p>

                                    <h3 className="twm-blog-s-title p-t20 p-b10">Платени функции</h3>
                                    <div className="row">
                                        <div className="align-self-start col-md-4">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                                    <h4 className="twm-title">От работодателите</h4>
                                                    <p>
                                                        Те плащат, за да виждат и филтрират точно тези
                                                        хора с безплатните значки.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                                    <h4 className="twm-title">Повторни опити</h4>
                                                    <p>
                                                        Например: Иван прави тест по Английски и се
                                                        проваля. Системата му казва: „Можеш да опиташ
                                                        пак безплатно след 30 дни. Или плати 5€ за
                                                        моментален повторен опит.“
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="twm-w-process-steps-2">
                                                <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                                    <h4 className="twm-title">От курсове</h4>
                                                    <p>
                                                        Например: Мария се проваля на теста по Excel.
                                                        Системата ѝ предлага: „Липсват ти знания за
                                                        Pivot таблици. Купи нашия курс за Excel и ще
                                                        минеш теста веднага.“
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* SKILL VALIDATION END */}

        </>
    );
}

Academy.layout = (page) => <FrontEndLayout children={page} />;
