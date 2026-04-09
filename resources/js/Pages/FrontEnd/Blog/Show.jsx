import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function Blog({ article }) {

    console.log(article);
    

    return (
        <>
            {/* SEO */}
            <Head>
                <title>Блог | Последни статии и новини</title>
                <meta
                    name="description"
                    content="Прегледайте последните блог статии, съвети за кариера и новини от нашата платформа."
                />
                <meta
                    name="keywords"
                    content="блог, новини, статии, кариерни съвети"
                />
            </Head>

            {/* OUR BLOG START */}
            <div className="section-full  p-t120 p-b90 bg-white">
                <div className="container">
                    {/* BLOG SECTION START */}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10 col-md-12">
                                {/* BLOG START */}
                                <div className="blog-post-single-outer">
                                    <div className="blog-post-single bg-white">
                                        <div className="wt-post-info">
                                            <div className="wt-post-media m-b30">
                                                <img src={`/assets/images/blog/${article.blog_image}`} alt={article.blog_name} />
                                            </div>
                                            <div className="wt-post-title ">
                                                <div className="wt-post-meta-list">
                                                    <div className="wt-list-content post-date">April 05, 2023</div>
                                                    <div className="wt-list-content post-author">By Mark Petter</div>
                                                </div>
                                                <h3 className="post-title">How to convince recruiters and get your dream job</h3>
                                            </div>
                                            <div className="wt-post-discription">
                                                {article.blog_content}
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
                                    <div className="post-area-tags-wrap">
                                        <div className="post-social-icons-wrap">
                                            <h4 className="mb-4">Share</h4>
                                            <ul className="post-social-icons">
                                                <li><a href=";" className="fab fa-facebook-f" /></li>
                                                <li><a href=";" className="fab fa-linkedin-in" /></li>
                                            </ul>
                                        </div>
                                    </div>
                            
                            
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR BLOG END */}



        </>
    );
}

Blog.layout = page => <FrontEndLayout children={page} />;
