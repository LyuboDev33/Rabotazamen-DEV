import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";
import DOMPurify from "dompurify";


export default function Blog({ article }) {

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
                                                    <div className="wt-list-content post-date">
                                                        {new Date(article.created_at).toLocaleDateString("bg-BG", {
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        })}</div>
                                                    <div className="wt-list-content post-author">
                                                        {article.author.first_name + " " + article.author.last_name}
                                                    </div>
                                                </div>
                                                <h3 className="post-title">{article.blog_name}</h3>
                                            </div>
                                            <div dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(article.blog_content),
                                            }} className="wt-post-discription">
                                            </div>


                                        </div>
                                    </div>
                                    {/* <div className="post-area-tags-wrap">
                                        <div className="post-social-icons-wrap">
                                            <h4 className="mb-4">Share</h4>
                                            <ul className="post-social-icons">
                                                <li><a href=";" className="fab fa-facebook-f" /></li>
                                                <li><a href=";" className="fab fa-linkedin-in" /></li>
                                            </ul>
                                        </div>
                                    </div> */}


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
