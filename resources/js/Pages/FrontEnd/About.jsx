import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import GetHiredCompanies from "@/Components/FrontEndComponents/GetHiredCompanies";


export default function About() {

    return (
        <>

            {/* ABOUT SECTION START */}
            <section className="section-full p-t120 p-b0 site-bg-white twm-millions-1-area pos-relative">
                <div className="container">
                    <div className="twm-millions-section-wrap">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="twm-millions-1-section">
                                    <div className="twm-media">
                                        <img src="/assets/images/million-jobs/main-pic.png" alt="#"/>
                                        <div className="twm-circle-jobs-wrap">
                                            {/*1*/}
                                            <div className="twm-circle-jobs-box one bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-1.png" alt="#" />
                                                </div>
                                            </div>
                                            {/*2*/}
                                            <div className="twm-circle-jobs-box two bounce">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-2.png" alt="#" />
                                                </div>
                                            </div>
                                            {/*3*/}
                                            <div className="twm-circle-jobs-box three bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-3.png" alt="#" />
                                                </div>
                                            </div>
                                            {/*4*/}
                                            <div className="twm-circle-jobs-box four bounce">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-4.png" alt="#" />
                                                </div>
                                            </div>
                                            {/*5*/}
                                            <div className="twm-circle-jobs-box five bounce2">
                                                <div className="twm-circle-job-pics">
                                                    <img src="/assets/images/million-jobs/company-5.png" alt="#" />
                                                </div>
                                            </div>
                                            {/*6*/}
                                            <div className="twm-circle-jobs-box six bounce">
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
                            <div className="col-lg-5 col-md-12">
                                <div>
                                    <div className="wt-post-discription">


                                        <h4 className="twm-blog-s-title">About Business Network</h4>
                                        <p>
                                            Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales.
                                        </p>
                                        <div className="wt-post-discription">
                                            <blockquote>
                                                <p><span>"</span> A business consulting agency is involved in the planning, implementation,
                                                    and education  of businesses.
                                                </p>
                                                <strong>Richard Anderson</strong>
                                            </blockquote>
                                        </div>
                                        <h4 className="twm-blog-s-title">Get Your Resume Done Right</h4>
                                        <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod and pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. </p>
                                    </div>
                                    <div className="post-single-list">
                                        <ul className="description-list-2">
                                            <li>
                                                <i className="feather-check" />
                                                You need to create an account to find the best and preferred job.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                After creating the account, you have to apply for the desired job.
                                            </li>
                                            <li>
                                                <i className="feather-check" />
                                                After filling all the relevant information you have to upload your resume.
                                            </li>
                                        </ul>
                                    </div>
                                 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="twm-bg-shape5" />
            </section>
            {/* ABOUT SECTION END */}

            <hr />

            {/* EXPLORE NEW LIFE START */}
            <section className="section-full p-t30 p-b120 site-bg-white twm-explore-area2">
                <div className="container">
                    <div className="section-content">
                        <div className="twm-explore-content-2">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="twm-explore-content-outer2">
                                        <div className="twm-explore-top-section">
                                            <div className="twm-title-small">For Employee</div>
                                            <div className="twm-title-large">
                                                <h2>We help you connect
                                                    with the organizer</h2>
                                                <p>Get paid easily and security. Use our resources to become
                                                    independent and showcase your professional skills.</p>
                                            </div>
                                            <div className="twm-read-more">
                                                <a href="about-1.html" className="site-button">Read More</a>
                                            </div>
                                        </div>
                                        <div className="twm-explore-bottom-section">
                                            <div className="row">
                                                {/*block 1*/}
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="counter-outer-two">
                                                        <div className="icon-content">
                                                            <div className="tw-count-number text-clr-yellow-2">
                                                                <span className="counter">5</span>M+</div>
                                                            <p className="icon-content-info">Million daily active users</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 2*/}
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="counter-outer-two">
                                                        <div className="icon-content">
                                                            <div className="tw-count-number text-clr-green">
                                                                <span className="counter">9</span>K+</div>
                                                            <p className="icon-content-info">Open job positions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*block 3*/}
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="counter-outer-two">
                                                        <div className="icon-content">
                                                            <div className="tw-count-number text-clr-pink">
                                                                <span className="counter">2</span>M+</div>
                                                            <p className="icon-content-info">Million stories shared</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="twm-explore-media-wrap2">
                                        <div className="twm-media">
                                            <img src="/assets/images/gir-large-2.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* EXPLORE NEW LIFE END */}


            {/* HOW IT WORK SECTION START */}
            <section className="section-full p-t120 p-b90 site-bg-white twm-how-it-work-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            {/* TITLE START*/}
                            <div className="section-head left wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>How It Works </div>
                                </div>
                                <h2 className="wt-title">Follow our steps we will help you.</h2>
                            </div>
                            <ul className="description-list">
                                <li>
                                    <i className="feather-check" />
                                    Trusted &amp; Quality Job
                                </li>
                                <li>
                                    <i className="feather-check" />
                                    International Job
                                </li>
                                <li>
                                    <i className="feather-check" />
                                    No Extra Charge
                                </li>
                                <li>
                                    <i className="feather-check" />
                                    Top Companies
                                </li>
                            </ul>
                            {/* TITLE END*/}
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="twm-w-process-steps-2-wrap">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-sky-light bg-sky-light-shadow">
                                                <span className="twm-large-number text-clr-sky">01</span>
                                                <div className="twm-media">
                                                    <span><img src="/assets/images/work-process/icon1.png" alt="icon1" /></span>
                                                </div>
                                                <h4 className="twm-title">Register<br />Your Account</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-yellow-light bg-yellow-light-shadow">
                                                <span className="twm-large-number text-clr-yellow">02</span>
                                                <div className="twm-media">
                                                    <span><img src="/assets/images/work-process/icon4.png" alt="icon1" /></span>
                                                </div>
                                                <h4 className="twm-title">Search <br />
                                                    Your Job</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-pink-light bg-pink-light-shadow">
                                                <span className="twm-large-number text-clr-pink">03</span>
                                                <div className="twm-media">
                                                    <span><img src="/assets/images/work-process/icon3.png" alt="icon1" /></span>
                                                </div>
                                                <h4 className="twm-title">Apply <br />For Dream Job</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="twm-w-process-steps-2">
                                            <div className="twm-w-pro-top bg-clr-green-light bg-clr-light-shadow">
                                                <span className="twm-large-number text-clr-green">04</span>
                                                <div className="twm-media">
                                                    <span><img src="/assets/images/work-process/icon3.png" alt="icon1" /></span>
                                                </div>
                                                <h4 className="twm-title">Upload <br />Your Resume</h4>
                                                <p>You need to create an account to find the best and preferred job.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twm-how-it-work-section">
                    </div>
                </div>
            </section>
            {/* HOW IT WORK SECTION END */}


            {/* EXPLORE NEW LIFE START */}
            <section className="section-full p-t120 p-b120 twm-explore-area bg-cover " style={{ backgroundImage: 'url(images/background/bg-1.jpg)' }}>
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="twm-explore-media-wrap">
                                    <div className="twm-media">
                                        <img src="/assets/images/gir-large.png" alt="#" />
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
                                        <div className="twm-title-small">Explore New Life</div>
                                        <div className="twm-title-large">
                                            <h2>Don’t just find. be found
                                                put your CV in front of
                                                great employers </h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the  when an printer took.</p>
                                        </div>
                                        <div className="twm-upload-file">
                                            <button type="button" className="site-button">Upload Your Resume <i className="feather-upload" /></button>
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
            {/* EXPLORE NEW LIFE END */}




            {/* CONTENT END */}

        </>
    )

}

About.layout = page => <FrontEndLayout children={page} />
