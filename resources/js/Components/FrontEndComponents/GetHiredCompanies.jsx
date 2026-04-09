import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function GetHiredCompanies() {

    return (
        <>
            <section className="section-full p-t50  site-bg-white twm-companies-wrap">
              
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Top Companies</div>
                    </div>
                    <h2 className="wt-title">Get hired in top companies</h2>
                </div>
          

                <div className="container">
                    <div className="section-content">

                        <Splide
                            options={{
                                type: 'loop',
                                perPage: 6,
                                gap: '30px',
                                autoplay: true,
                                interval: 2500,
                                pauseOnHover: false,
                                arrows: false,
                                pagination: false,
                                breakpoints: {
                                    1200: { perPage: 5 },
                                    992: { perPage: 4 },
                                    768: { perPage: 3 },
                                    576: { perPage: 2 },
                                },
                            }}
                            aria-label="Client Logos"
                        >

                            {/* Logo 1 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w1.png" alt="Client 1" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                            {/* Logo 2 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w2.png" alt="Client 2" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                            {/* Logo 3 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w3.png" alt="Client 3" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                            {/* Logo 4 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w4.png" alt="Client 4" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                            {/* Logo 5 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w5.png" alt="Client 5" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                            {/* Logo 6 */}
                            <SplideSlide>
                                <div className="ow-client-logo">
                                    <div className="client-logo client-logo-media">
                                        <a href="#">
                                            <img src="/assets/images/client-logo/w6.png" alt="Client 6" />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>

                    </div>
                </div>

                <div className="twm-company-approch-outer">
                    <div className="twm-company-approch">
                        <div className="row">
                            {/*block 1*/}
                            <div className="col-lg-4 col-md-12">
                                <div className="counter-outer-two">
                                    <div className="icon-content">
                                        <div className="tw-count-number text-clr-sky">
                                            <span className="counter">5</span>M+</div>
                                        <p className="icon-content-info">Million daily active users</p>
                                    </div>
                                </div>
                            </div>
                            {/*block 2*/}
                            <div className="col-lg-4 col-md-12">
                                <div className="counter-outer-two">
                                    <div className="icon-content">
                                        <div className="tw-count-number text-clr-pink">
                                            <span className="counter">9</span>K+</div>
                                        <p className="icon-content-info">Open job positions</p>
                                    </div>
                                </div>
                            </div>
                            {/*block 3*/}
                            <div className="col-lg-4 col-md-12">
                                <div className="counter-outer-two">
                                    <div className="icon-content">
                                        <div className="tw-count-number text-clr-green">
                                            <span className="counter">2</span>M+</div>
                                        <p className="icon-content-info">Million stories shared</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}