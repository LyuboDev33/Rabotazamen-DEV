import React from "react";
import { Head } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function Contact() {

    return (
        <>
            <Head>
                <title>Контакти | Rabotazamen</title>
                <meta name="description" content="Свържете се с Rabotazamen. Изпратете ни съобщение и нашият екип ще се свърже с вас възможно най-скоро." />
                <meta name="keywords" content="Rabotazamen, контакт, връзка с нас, работа за мен, услуги, България" />
                <meta name="author" content="Rabotazamen" />

                {/* Open Graph */}
                <meta property="og:title" content="Контакти | Rabotazamen" />
                <meta property="og:description" content="Свържете се с Rabotazamen. Изпратете ни съобщение и ще се свържем с вас възможно най-скоро." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/contact" />
                <meta property="og:image" content="/images/banner/1.jpg" />
            </Head>

            {/* CONTENT START */}
            <div className="page-content">


                {/* CONTACT FORM */}
                <div className="section-full twm-contact-one">
                    <div className="section-content">
                        <div className="container">

                            <div className="contact-one-inner">
                                <div className="row">

                                    {/* FORM */}
                                    <div className="col-lg-6 col-md-12">
                                        <div className="contact-form-outer">

                                            <div className="section-head left wt-small-separator-outer">
                                                <h2 className="wt-title">Изпратете ни съобщение</h2>
                                                <p>
                                                    Ако имате въпроси или нужда от допълнителна информация,
                                                    не се колебайте да се свържете с нас. Нашият екип ще ви
                                                    отговори възможно най-скоро.
                                                </p>
                                            </div>

                                            <form className="cons-contact-form" method="post" action="/contact/send">
                                                <div className="row">

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                name="username"
                                                                type="text"
                                                                required
                                                                className="form-control"
                                                                placeholder="Име"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                name="email"
                                                                type="email"
                                                                className="form-control"
                                                                required
                                                                placeholder="Имейл"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                name="phone"
                                                                type="text"
                                                                className="form-control"
                                                                required
                                                                placeholder="Телефон"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                name="subject"
                                                                type="text"
                                                                className="form-control"
                                                                required
                                                                placeholder="Тема"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                rows={4}
                                                                placeholder="Вашето съобщение"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <button type="submit" className="site-button">
                                                            Изпрати съобщение
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                    {/* CONTACT INFO */}
                                    <div className="col-lg-6 col-md-12">
                                        <div className="contact-info-wrap">
                                            <div className="contact-info">

                                                <div className="contact-info-section">

                                                    <div className="c-info-column">
                                                        <div className="c-info-icon">
                                                            <i className="fas fa-map-marker-alt" />
                                                        </div>
                                                        <h3 className="twm-title">Адрес</h3>
                                                        <p>София, България</p>
                                                    </div>

                                                    <div className="c-info-column">
                                                        <div className="c-info-icon custome-size">
                                                            <i className="fas fa-mobile-alt" />
                                                        </div>
                                                        <h3 className="twm-title">Телефон</h3>
                                                        <p><a href="tel:+359000000000">+359 000 000 000</a></p>
                                                        <p><a href="tel:+359000000000">+359 000 000 001</a></p>
                                                    </div>

                                                    <div className="c-info-column">
                                                        <div className="c-info-icon">
                                                            <i className="fas fa-envelope" />
                                                        </div>
                                                        <h3 className="twm-title">Имейл</h3>
                                                        <p>info@rabotazamen.com</p>
                                                        <p>support@rabotazamen.com</p>
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


                {/* GOOGLE MAP */}
                <div className="gmap-outline">
                    <div className="google-map">
                        <div style={{ width: '100%' }}>
                            <iframe
                                height={460}
                                src="https://www.google.com/maps?q=Sofia,Bulgaria&output=embed"
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* CONTENT END */}

        </>
    )

}

Contact.layout = page => <FrontEndLayout children={page} />
