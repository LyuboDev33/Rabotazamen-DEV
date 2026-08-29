import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function Calculator() {

    const [gross, setGross] = useState("");
    const [net, setNet] = useState(null);
    const [tax, setTax] = useState(null);
    const [insurance, setInsurance] = useState(null);

    const calculate = () => {
        const eurRate = 1.95583;
        const grossValueEUR = parseFloat(gross);

        if (!grossValueEUR) return;

        // Convert EUR -> BGN
        const grossBGN = grossValueEUR * eurRate;

        // Bulgarian calculations
        const insuranceRate = 0.1378;
        const insuranceBGN = grossBGN * insuranceRate;

        const taxableIncome = grossBGN - insuranceBGN;
        const taxBGN = taxableIncome * 0.10;

        const netBGN = grossBGN - insuranceBGN - taxBGN;

        // Convert back to EUR
        const netEUR = netBGN / eurRate;
        const taxEUR = taxBGN / eurRate;
        const insuranceEUR = insuranceBGN / eurRate;

        setInsurance(insuranceEUR.toFixed(2));
        setTax(taxEUR.toFixed(2));
        setNet(netEUR.toFixed(2));
    };

    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>Калкулатор Бруто към Нето Заплата в Евро (2026) | Rabotazamen</title>

                <meta
                    name="description"
                    content="Безплатен калкулатор за изчисляване на нетна заплата от брутна в евро. Включва данъци и осигуровки за България. Бързо, точно и лесно."
                />

                <meta
                    name="keywords"
                    content="калкулатор бруто нето, нетна заплата евро, брутна заплата калкулатор, осигуровки България, заплата в евро България, salary calculator Bulgaria"
                />

                <meta name="author" content="Rabotazamen" />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://rabotazamen.bg/calculator" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Калкулатор Бруто → Нето в Евро" />
                <meta
                    property="og:description"
                    content="Изчислете вашата нетна заплата в евро с включени данъци и осигуровки за България."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rabotazamen.bg/calculator" />
                <meta property="og:image" content="https://rabotazamen.bg/images/banner/1.jpg" />
                <meta property="og:locale" content="bg_BG" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Калкулатор Бруто към Нето (€)" />
                <meta
                    name="twitter:description"
                    content="Бързо изчисли нетната си заплата в евро за България."
                />
                <meta name="twitter:image" content="https://rabotazamen.bg/images/banner/1.jpg" />

                {/* Extra SEO signals */}
                <meta httpEquiv="Content-Language" content="bg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/* FOR EMPLOYEE START */}
            <div className="section-full p-t120 p-b120 twm-for-employee-area site-bg-white">
                <div className="container">
                    <div className="section-content">
                        <div className="row">

                            {/* IMAGE (UNCHANGED) */}
                            <div className="col-lg-5 col-md-12">
                                <div className="twm-explore-media-wrap">
                                    <div className="twm-media">
                                        <img src="/assets/images/boy-large.png" alt="Thinking" />
                                    </div>
                                </div>
                            </div>

                            {/* CALCULATOR */}
                            <div className="col-lg-7 col-md-12">
                                <div className="twm-explore-content-outer-3">
                                    <div className="twm-explore-content-3">

                                        <div className="twm-title-small">
                                            Калкулатор
                                        </div>

                                        <div className="twm-title-large">
                                            <h3>Калкулатор Бруто → Нето (€)</h3>
                                            <p>
                                                Въведете вашата брутна заплата в евро и изчислете
                                                колко ще получите чисто след данъци и осигуровки в България.
                                            </p>
                                        </div>

                                        {/* INPUT */}
                                        <div className="form-group mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Брутна заплата (€)"
                                                value={gross}
                                                onChange={(e) => setGross(e.target.value)}
                                            />
                                        </div>

                                        {/* BUTTON */}
                                        <div className="twm-upload-file">
                                            <button
                                                type="button"
                                                onClick={calculate}
                                                className="site-button"
                                            >
                                                Изчисли
                                            </button>
                                        </div>

                                        {/* RESULTS */}
                                        {net && (
                                            <div className="mt-4 p-3 bg-light rounded">
                                                <p>
                                                    <strong>Нетна заплата:</strong> {net} €
                                                </p>
                                                <p>
                                                    <strong>Данък (10%):</strong> {tax} €
                                                </p>
                                                <p>
                                                    <strong>Осигуровки:</strong> {insurance} €
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                    <div className="twm-l-line-1" />
                                    <div className="twm-l-line-2" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* FOR EMPLOYEE END */}
        </>
    );
}

Calculator.layout = page => <FrontEndLayout children={page} />;
