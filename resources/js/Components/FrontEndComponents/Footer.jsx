import React from "react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="footer-dark">
            <div className="container">

                {/* NEWSLETTER */}
                <div className="ftr-nw-content">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="ftr-nw-title">
                                Абонирайте се за нашия имейл бюлетин, за да получавате
                                известия за нови работни позиции и актуални новини.
                            </div>
                        </div>
                        <div className="col-md-7">
                            <form>
                                <div className="ftr-nw-form">
                                    <input
                                        name="news-letter"
                                        className="form-control"
                                        placeholder="Въведете вашия имейл"
                                        type="text"
                                    />
                                    <button className="ftr-nw-subcribe-btn">
                                        Абонирай се
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FOOTER BLOCKS */}
                <div className="footer-top">
                    <div className="row">

                        {/* Company */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Компания</h3>
                                <ul>
                                    <li><Link href="/about">За Нас</Link></li>
                                    <li><Link href="/mission">Мисия</Link></li>
                                    <li><Link href="/blog">Блог</Link></li>
                                    <li><Link href="/news">Новини</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* For Employers */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">За Работодатели</h3>
                                <ul>
                                    <li><Link href="/employer/registration">Регистрация - стъпки</Link></li>
                                    <li><Link href="/employer/digital-hr-agent">Дигитален ЧР Агент</Link></li>
                                    <li><Link href="/employer/branding">Брандинг</Link></li>
                                    <li><Link href="/employer/services">Услуги</Link></li>
                                    <li><Link href="/employer/packages">Пакети</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* For Candidates */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">За Кандидати</h3>
                                <ul>
                                    <li><Link href="/candidate/registration">Регистрация - стъпки</Link></li>
                                    <li><Link href="/candidate/top-talent">Топ Талант - секция</Link></li>
                                    <li><Link href="/candidate/find-work">Търся Работа</Link></li>
                                    <li><Link href="/candidate/digital-hr-agent">Дигитален ЧР Агент</Link></li>
                                    <li><Link href="/candidate/career-advice">Кариерни Съвети</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Academy */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Академия</h3>
                                <ul>
                                    <li><Link href="/academy/courses">Курсове</Link></li>
                                    <li><Link href="/academy/certificates">Сертификати</Link></li>
                                    <li><Link href="/academy/scheduled-training">Планирани Обучения</Link></li>
                                    <li><Link href="/academy/additional-services">Допълнителни услуги</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Social / Contact */}
                <div className="footer-bottom">
                    <div className="footer-bottom-info d-flex justify-content-between align-items-center">

                        <div className="footer-copy-right">
                            <span className="copyrights-text">
                                Copyright © 2026 Rabotazamen. Всички права запазени.
                            </span>
                        </div>

                        <ul className="social-icons list-unstyled d-flex gap-2 mb-0">
                            <li><Link href="#" className="fab fa-facebook-f" /></li>
                            <li><Link href="#" className="fab fa-twitter" /></li>
                            <li><Link href="#" className="fab fa-instagram" /></li>
                            <li><Link href="#" className="fab fa-youtube" /></li>
                        </ul>

                    </div>
                </div>

            </div>
        </footer>
    )
}
