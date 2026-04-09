import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { LogIn, Briefcase, Search } from 'react-feather';



export default function Header() {

    const { auth } = usePage().props;
    const [sideBar, openMenuSidebar] = useState(false);
    const toggleMobileMenu = () => { openMenuSidebar(prev => !prev) };

    const { url } = usePage();
    const isHome = url === '/';

    // Create the sticky header
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', function () {
            setIsSticky(window.scrollY > 100)
        })
    }, []);


    return (
        <>
            <header className={`site-header header-style-3 mobile-sider-drawer-menu ${sideBar ? 'active' : ''}`}>
                <div className="sticky-wrapper" style={{ height: 90 }}>
                    <div className="sticky-header main-bar-wraper navbar-expand-lg is-fixed">
                        <div className={`main-bar ${isSticky ? 'color-fill' : ''}`}>
                            <div className="container-fluid clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <Link href="/">
                                            <ApplicationLogo></ApplicationLogo>
                                        </Link>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button
                                    onClick={toggleMobileMenu}
                                    id="mobile-side-drawer"
                                    data-target=".header-nav"
                                    data-toggle="collapse"
                                    type="button"
                                    className="navbar-toggler collapsed">
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* MAIN Vav */}
                                <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                                    <ul className="nav navbar-nav">
                                        <li className="has-child">
                                            <Link href="/">Начало</Link>
                                        </li>

                                        {/* Намери Работа */}
                                        <li>
                                            <Link href="/find-work">Обяви</Link>
                                        </li>

                                        <li className="has-child">
                                            <Link href="/platform">Платформа</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/platform/employer">За работодатели</Link>
                                                </li>
                                                <li>
                                                    <Link href="/platform/candidate">За кандидати</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/digital-hr-agent">Дигитален HR агент</Link>
                                        </li>

                                        <li>
                                            <Link href="/education">Обучения</Link>
                                        </li>

                                        <li>
                                            <Link href="/services">Услуги</Link>
                                        </li>

                                          <li>
                                            <Link href="/blog">Блог</Link>
                                        </li>

                                        <li>
                                            <Link href="/contact">Контакти</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Header Right Section*/}
                                <div className="extra-nav header-2-nav">
                                    {/* <div className="extra-cell">
                                        <div className="header-search">
                                            <a href="#search" className="header-search-icon">
                                                <Search size={24} />
                                            </a>


                                        </div>
                                    </div> */}
                                    <div className="extra-cell ">
                                        <div className="header-nav-btn-section">
                                            {!auth.user ? <>
                                                <div className="twm-nav-btn-left">
                                                    <Link
                                                        title="Вход"
                                                        className="twm-nav-sign-up" data-bs-toggle="modal" href="/login" role="button">
                                                        <LogIn size={16} />
                                                        <span className="d-none d-xl-block">Вход</span>
                                                    </Link>
                                                </div>
                                                <div className="twm-nav-btn-right">
                                                    <Link
                                                        title="Вход"
                                                        href="/register/candidate" className="twm-nav-post-a-job">
                                                        <Briefcase size={16} />
                                                        <span className="d-none d-xl-block">Регистрация</span>
                                                    </Link>
                                                </div>
                                            </> :
                                                <div className="twm-nav-btn-right">
                                                    <Link href="/dashboard" className="twm-nav-post-a-job">

                                                        <span className="d-none d-md-block">Табло за управление</span>
                                                    </Link>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SITE Search */}
                        <div id="search">
                            <span className="close" />
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <input className="form-control" defaultValue name="q" type="search" placeholder="Type to search" />
                                <span className="input-group-append">
                                    <button type="button" className="search-btn">
                                        <i className="fa fa-paper-plane" />
                                    </button>
                                </span>
                            </form>
                        </div>
                    </div></div>
            </header>
        </>
    )
}
