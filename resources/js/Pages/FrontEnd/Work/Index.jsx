import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, usePage } from "@inertiajs/react";

export default function User({ jobs }) {




    return (
        <>

            {/* CONTENT START */}
            <div className="page-content">


                <section className="page-title style-three">
                    <div className="auto-container">
                        {/* Job Search Form */}
                        <div className="job-search-form">
                            <form method="get">
                                <div className="row">
                                    {/* Form Group */}
                                    <div className="form-group d-flex align-items-center col-lg-4 col-md-12 col-sm-12">
                                        <i className="fa-solid fa-magnifying-glass" />

                                        <input type="text" name="field_name" placeholder="Job title, keywords, or company" />
                                    </div>
                                    {/* Form Group */}
                                    <div className="form-group d-flex align-items-center col-lg-3 col-md-12 col-sm-12 location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <input type="text" name="field_name" placeholder="City or postcode" />
                                    </div>
                                    {/* Form Group */}
                                    <div className="form-group d-flex align-items-center col-lg-3 col-md-12 col-sm-12 category">
                                        <i className="fa-solid fa-briefcase"></i>
                                        <select className="chosen-select" style={{ display: 'none' }}>
                                            <option value>All Categories</option>
                                            <option value={44}>Accounting / Finance</option>
                                            <option value={106}>Automotive Jobs</option>
                                            <option value={46}>Customer</option>
                                            <option value={48}>Design</option>
                                            <option value={47}>Development</option>
                                            <option value={45}>Health and Care</option>
                                            <option value={105}>Marketing</option>
                                            <option value={107}>Project Management</option>
                                        </select><div className="chosen-container chosen-container-single chosen-container-single-nosearch" title style={{ width: '100%' }}><a className="chosen-single">
                                            <span>All Categories</span>
                                            <div><b /></div>
                                        </a>
                                            {/* <div className="chosen-drop">
                                                <div className="chosen-search">
                                                    <input className="chosen-search-input" type="text" autoComplete="off" readOnly />
                                                </div>
                                                <ul className="chosen-results" />
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* Form Group */}
                                    <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                                        <button type="submit" className="theme-btn btn-style-one">Потърси обяви</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Job Search Form */}
                        <div className="top-filters">
                            <div className="form-group">
                                <select className="chosen-select">
                                    <option>Job Type</option>
                                    <option>New Jobs</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Part Time</option>
                                    <option>Temporary</option>
                                </select><div className="chosen-container chosen-container-single chosen-container-single-nosearch" title style={{ width: '100%' }}><a className="chosen-single">
                                    <span>Job Type</span>
                                    <div><b />
                                    </div>
                                </a>
                                    <div className="chosen-drop">
                                        <div className="chosen-search">
                                            <input className="chosen-search-input" type="text" autoComplete="off" readOnly />
                                        </div>
                                        <ul className="chosen-results" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <select className="chosen-select" style={{ display: 'none' }}>
                                    <option>Date Posted</option>
                                    <option>New Jobs</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Part Time</option>
                                    <option>Temporary</option>
                                </select><div className="chosen-container chosen-container-single chosen-container-single-nosearch" title style={{ width: '100%' }}><a className="chosen-single">
                                    <span>Date Posted</span>
                                    <div><b /></div>
                                </a>
                                    <div className="chosen-drop">
                                        <div className="chosen-search">
                                            <input className="chosen-search-input" type="text" autoComplete="off" readOnly />
                                        </div>
                                        <ul className="chosen-results" />
                                    </div></div>
                            </div>
                            <div className="form-group">
                                <select className="chosen-select" style={{ display: 'none' }}>
                                    <option>Experience Level</option>
                                    <option>New Jobs</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Part Time</option>
                                    <option>Temporary</option>
                                </select><div className="chosen-container chosen-container-single chosen-container-single-nosearch" title style={{ width: '100%' }}><a className="chosen-single">
                                    <span>Experience Level</span>
                                    <div><b /></div>
                                </a>
                                    <div className="chosen-drop">
                                        <div className="chosen-search">
                                            <input className="chosen-search-input" type="text" autoComplete="off" readOnly />
                                        </div>
                                        <ul className="chosen-results" />
                                    </div></div>
                            </div>
                            <div className="form-group">
                                <select className="chosen-select" style={{ display: 'none' }}>
                                    <option>Salary estimate</option>
                                    <option>New Jobs</option>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Part Time</option>
                                    <option>Temporary</option>
                                </select><div className="chosen-container chosen-container-single chosen-container-single-nosearch" title style={{ width: '100%' }}><a className="chosen-single">
                                    <span>Salary estimate</span>
                                    <div><b /></div>
                                </a>
                                    <div className="chosen-drop">
                                        <div className="chosen-search">
                                            <input className="chosen-search-input" type="text" autoComplete="off" readOnly />
                                        </div>
                                        <ul className="chosen-results" />
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* OUR BLOG START */}
                <div className="section-full p-t20  p-b90 site-bg-white">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                {/*Filter Short By*/}

                                <div className="row">
                                    {/*Block one*/}
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="twm-jobs-grid-style1">
                                            <div className="twm-media">
                                                <img src="images/jobs-company/pic1.jpg" alt="#" />
                                            </div>
                                            <span className="twm-job-post-duration">1 days ago</span>
                                            <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                            <div className="twm-mid-content">
                                                <a href="job-detail.html" className="twm-job-title">
                                                    <h4>Senior Web Designer , Developer</h4>
                                                </a>
                                                <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                            </div>
                                            <div className="twm-right-content">
                                                <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                                                <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Browse Job</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Block */}

                                </div>
                                <div className="pagination-outer">
                                    <div className="pagination-style1">
                                        <ul className="clearfix">
                                            <li className="prev"><a href=""><span> <i className="fa fa-angle-left" /> </span></a></li>
                                            <li><a href="">1</a></li>
                                            <li className="active"><a href="">2</a></li>
                                            <li><a href="">3</a></li>
                                            <li><a className="" href=""><i className="fa fa-ellipsis-h" /></a></li>
                                            <li><a href="">5</a></li>
                                            <li className="next"><a href=""><span> <i className="fa fa-angle-right" /> </span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OUR BLOG END */}
            </div>
            {/* CONTENT END */}



        </>
    );
}

User.layout = (page) => <FrontEndLayout children={page} />;
