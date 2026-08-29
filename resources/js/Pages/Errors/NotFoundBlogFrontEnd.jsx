import React from "react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";
import { Link } from "@inertiajs/react";
Link


export default function NotFoundBlogFrontEnd() {

    return (
        <>

            <div className="page-content">
                {/* OUR BLOG START */}
                <div className="section-full p-t100  p-b90 site-bg-white">
                    <div className="container m-0-auto">
                        <div className="twm-error-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="twm-error-image">
                                        <img src="/assets/images/error-404.png" alt="#" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="twm-error-content">
                                        <h2 className="twm-error-title">404</h2>
                                        <h4 className="twm-error-title2 site-text-primary">Упсс.... Грешка 404</h4>
                                        <p>Страницата, която търсите е не съществува или е временно неактивна.</p>
                                        <Link href="/blog" className="site-button">Към всички статии</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OUR BLOG END */}
            </div>

        </>
    )

}

NotFoundBlogFrontEnd.layout = page => <FrontEndLayout children={page} />
