
import { Head } from '@inertiajs/react';

import Footer from '@/Components/FrontEndComponents/Footer';
import Header from '@/Components/FrontEndComponents/Header';
// import CloseFlashMessages from '@/Components/CloseFlashMessages';
import { ReactLenis, useLenis } from 'lenis/react'


import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/feather.css";
import '../../styles/custom.css';
import '../../styles/flaticon.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@splidejs/react-splide/css';
import 'animate.css';
import 'lenis/dist/lenis.css'





export default function FrontEndLayout({ children }) {
    return (
        <>

            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/images/favicon.ico"></link>
            </Head>

               <ReactLenis
                root
                options={{
                    duration: 1.2,
                    smoothWheel: true,
                    smoothTouch: false,
                }}
            ></ReactLenis>

            <Header></Header>

            <main>
                <div className="page-content">
                    {children}
                </div>
            </main>



            <Footer></Footer>

            {/* <CloseFlashMessages></CloseFlashMessages> */}

        </>
    );
}
