import React from "react";
import { Head } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function Calculator () {

    return (
        <>
            <Head>
                <title>Контакти | Rabotazamen</title>
                <meta name="description" content="Свържете се с Rabotazamen. Изпратете ни съобщение и нашият екип ще се свърже с вас възможно най-скоро." />
                <meta name="keywords" content="Rabotazamen, контакт, връзка с нас, работа за мен, услуги, България" />
                <meta name="author" content="Rabotazamen" />

                {/* Open Graph */}
                <meta property="og:title" content="Контакти | Rabotazamen" />
                <meta property="og:description" content="Свържете се с Rabotazamen. Изпратете ни съобщение и ще се свържем с вас възможно най-скоро." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/contact" />
                <meta property="og:image" content="/images/banner/1.jpg" />
            </Head>


            




        </>
    )

}

Calculator.layout = page => <FrontEndLayout children={page} />
