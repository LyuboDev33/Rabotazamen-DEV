import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {

    const { url } = usePage();

    //** Checks if a user has admin or super_admin role */
    //** Please check HandleInertiaRequests.php for more info about the logic */
    const isAdmin = usePage().props.auth.isAdmin;
    const isCandidate = usePage().props.auth.isCandidate;
    const isEmployer = usePage().props.auth.isEmployer;




    const isActive = (path, exact = false) => {
        if (exact) {
            return url === path;
        }
        return url === path || url.startsWith(path + "/");
    };



    return (
        <>
            {/* Sidebar Holder */}
            <nav id="sidebar-admin-wraper">

                <div className="page-logo">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                </div>

                <div className="admin-nav scrollbar-macosx">
                    <ul>

                        {/* All Admin Routes */}
                        <hr />
                        {isAdmin ? <>
                            <p className="mb-0">Админска част</p>


                            {/* Dashboard */}
                            <li className={isActive('/dashboard/admin', true) ? 'active' : ''}>
                                <Link href="/dashboard/admin">
                                    <i className="fa fa-home" />
                                    <span className="admin-nav-text">
                                        Табло за управление админ
                                    </span>
                                </Link>
                            </li>

                            <li className={isActive('/dashboard/admin/cities', true) ? 'active' : ''}>
                                <Link href="/dashboard/admin/cities">
                                    <i className="fa fa-city" />
                                    <span className="admin-nav-text">
                                       Градове
                                    </span>
                                </Link>
                            </li>

                            <li className={isActive('/dashboard/admin/roles') ? 'active' : ''}>
                                <Link href="/dashboard/admin/roles">
                                    <i className="fa fa-home" />
                                    <span className="admin-nav-text">
                                        Роли
                                    </span>
                                </Link>
                            </li>


                            {/* Users */}
                            <li className={isActive('/dashboard/admin/users') ||
                                isActive('/dashboard/admin/access', true) ? 'active' : ''}>
                                <Link href="/dashboard/admin/users">
                                    <i className="fa fa-user-friends" />
                                    <span className="admin-nav-text">
                                        Потребители
                                    </span>
                                </Link>
                            </li>

                              <li className={isActive('/dashboard/admin/job-categories') ||
                              isActive('/dashboard/admin/job-category/edit')
                                ? 'active' : ''}>
                                <Link href="/dashboard/admin/job-categories">
                                    <i className="fa fa-briefcase" />
                                    <span className="admin-nav-text">
                                        Категории професии
                                    </span>
                                </Link>
                            </li>

                            {/* Blog */}
                            <li className={isActive('/dashboard/admin/blog') ? 'active' : ''}>
                                <Link href="/dashboard/admin/blog">
                                    <i className="fa-solid fa-newspaper"></i>
                                    <span className="admin-nav-text">
                                        Блог
                                    </span>
                                </Link>
                            </li>


                            {/* Admin support tickets */}
                            <li className={isActive('/dashboard/admin/support-tickets') ? 'active' : ''}>
                                <Link href="/dashboard/admin/support-tickets">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span className="admin-nav-text">
                                        Админ - Съпорт тикети
                                    </span>
                                </Link>
                            </li>

                            <hr />
                        </> : ''}
                        {/* End  of All Admin Routes */}


                        {/* Start of Regular User */}
                        <li className={isActive('/dashboard', true) ? 'active' : ''}>
                            <Link href="/dashboard">
                                <i className="fa fa-home" />
                                <span className="admin-nav-text">
                                    Табло за управление
                                </span>
                            </Link>
                        </li>

                        {/* Profile */}
                        <li className={isActive('/profile') ? 'active' : ''}>
                            <Link href="/profile">
                                <i className="fa fa-user" />
                                <span className="admin-nav-text">
                                    Профил
                                </span>
                            </Link>
                        </li>

                        {/* Profile */}
                        <li className={isActive('/support/tickets') ? 'active' : ''}>
                            <Link href="/support/tickets">
                                <i className="fa-solid fa-circle-info"></i>
                                <span className="admin-nav-text">
                                    Съпорт тикети
                                </span>
                            </Link>
                        </li>


                        {/* All Candidate Routes */}
                        {isCandidate && (
                            <>
                                <hr />
                                <p className="mb-0">Кандидат</p>

                                <li className={isActive('/dashboard/candidate', true) ? 'active' : ''}>
                                    <Link href="/dashboard/candidate">
                                        <i className="fa fa-home" />
                                        <span className="admin-nav-text">Моето табло</span>
                                    </Link>
                                </li>


                                <li className={isActive('/dashboard/candidate/cv-documents') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/cv-documents">
                                        <i className="fa fa-file-alt" />
                                        <span className="admin-nav-text">CV и документи</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/applications') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/applications">
                                        <i className="fa fa-paper-plane" />
                                        <span className="admin-nav-text">Кандидатури</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/saved-jobs') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/saved-jobs">
                                        <i className="fa fa-bookmark" />
                                        <span className="admin-nav-text">Запазени обяви</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/job-alerts') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/job-alerts">
                                        <i className="fa fa-bell" />
                                        <span className="admin-nav-text">Job Alerts</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/top-talent') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/top-talent">
                                        <i className="fa fa-star" />
                                        <span className="admin-nav-text">Top Talent</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/video-cv') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/video-cv">
                                        <i className="fa fa-video" />
                                        <span className="admin-nav-text">Video CV</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/trainings') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/trainings">
                                        <i className="fa fa-graduation-cap" />
                                        <span className="admin-nav-text">Обучения</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/find-me-job') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/find-me-job">
                                        <i className="fa fa-search" />
                                        <span className="admin-nav-text">Намери ми работа</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/packages') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/packages">
                                        <i className="fa fa-box" />
                                        <span className="admin-nav-text">Пакети</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/preview-profile') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/preview-profile">
                                        <i className="fa fa-eye" />
                                        <span className="admin-nav-text">Преглед Профил</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/candidate/settings') ? 'active' : ''}>
                                    <Link href="/dashboard/candidate/settings">
                                        <i className="fa fa-cog" />
                                        <span className="admin-nav-text">Настройки</span>
                                    </Link>
                                </li>

                                <hr />
                            </>
                        )}

                        {/* All Employer Routes */}
                        {isEmployer && (
                            <>
                                <hr />
                                <p className="mb-0">Работодател</p>

                                <li className={isActive('/dashboard/employer', true) ? 'active' : ''}>
                                    <Link href="/dashboard/employer">
                                        <i className="fa fa-home" />
                                        <span className="admin-nav-text">Табло</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/jobs') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/jobs">
                                        <i className="fa fa-briefcase" />
                                        <span className="admin-nav-text">Обяви</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/candidates') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/candidates">
                                        <i className="fa fa-users" />
                                        <span className="admin-nav-text">Кандидати</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/cv-database') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/cv-database">
                                        <i className="fa fa-database" />
                                        <span className="admin-nav-text">CV база</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/interviews') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/interviews">
                                        <i className="fa fa-calendar-check" />
                                        <span className="admin-nav-text">Интервюта</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/team-roles') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/team-roles">
                                        <i className="fa fa-user-tie" />
                                        <span className="admin-nav-text">Екип и роли</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/digital-hr-partner') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/digital-hr-partner">
                                        <i className="fa fa-robot" />
                                        <span className="admin-nav-text">Digital HR Partner</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/company') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/company">
                                        <i className="fa fa-building" />
                                        <span className="admin-nav-text">Компания</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/billing') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/billing">
                                        <i className="fa fa-credit-card" />
                                        <span className="admin-nav-text">Billing</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/reports') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/reports">
                                        <i className="fa fa-chart-bar" />
                                        <span className="admin-nav-text">Отчети</span>
                                    </Link>
                                </li>

                                <li className={isActive('/dashboard/employer/settings') ? 'active' : ''}>
                                    <Link href="/dashboard/employer/settings">
                                        <i className="fa fa-cog" />
                                        <span className="admin-nav-text">Настройки</span>
                                    </Link>
                                </li>



                                <hr />
                            </>
                        )}



                    </ul>
                </div>

            </nav>
        </>
    );
}
