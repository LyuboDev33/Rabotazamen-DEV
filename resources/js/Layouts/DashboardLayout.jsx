import React from "react";
import Header from "@/Components/DashboardComponents/Header";
import Sidebar from "@/Components/DashboardComponents/Sidebar";
// import CloseFlashMessages from '@/Components/CloseFlashMessages';

import { Head } from "@inertiajs/react";

import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/feather.css";
import '../../styles/custom.css';
import '../../styles/flaticon.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css';


export default function DashboardLayout({ children }) {

    return (

        <>

            <Head>
                <title>Табло за управление</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/imgs/theme/android-chrome-512x512.png" />
                <link rel="icon" href="/assets/images/favicon.ico"></link>

            </Head>

            <Header></Header>

            <Sidebar></Sidebar>

            {/* <!-- Page Content Holder -->
                  DO NOTE REMOE THE id="content" */}
            <main id="content">

                {children}

            </main>


            {/* <CloseFlashMessages></CloseFlashMessages> */}

        </>


    )

}
