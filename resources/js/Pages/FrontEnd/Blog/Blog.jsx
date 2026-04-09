import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Head, Link } from "@inertiajs/react";

export default function Blog({ articles }) {

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

            {/* CONTENT START */}
            <div className="page-content">

                {/* OUR BLOG START */}
                <div className="section-full p-t120 p-b90 site-bg-white">
                    <div className="container">
                        <div className="masonry-wrap row d-flex">

                            {articles && articles.length > 0 ? (
                                articles.map(article => (
                                    <div key={article.id}
                                        className="masonry-item col-lg-4 col-md-12">
                                        <div className="blog-post twm-blog-post-1-outer">
                                            <div className="wt-post-media">
                                                <Link href={`/blog/${article.blog_slug}`}>
                                                    <img
                                                        src={`/assets/images/blog/${article.blog_image}`}
                                                        alt={article.blog_name}
                                                    />
                                                </Link>
                                            </div>

                                            <div className="wt-post-info">
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
                                                                {article.author ? article.author.name : ''}
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="wt-post-title">
                                                    <h4 className="post-title">
                                                        <Link href={`/blog/${article.blog_slug}`}>
                                                            {article.blog_name}
                                                        </Link>
                                                    </h4>
                                                </div>

                                                <div className="wt-post-text">
                                                    <p>{article.blog_content.slice(0, 80) + '...'}</p>
                                                </div>

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
                                    </div>
                                ))
                            ) : (
                                <p>Все още няма статии</p>
                            )}

                        </div>
                    </div>
                </div>
                {/* OUR BLOG END */}
            </div>
            {/* CONTENT END */}
        </>
    );
}

Blog.layout = page => <FrontEndLayout children={page} />;
