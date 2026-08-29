import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function VerifyEmail({ status }) {

    const { post, processing } = useForm({});
    const { auth } = usePage().props;

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };


    return (
        <>
            <Head>
                <title>Потвърждение на имейл | Rabotazamen</title>
                <meta
                    name="description"
                    content="Потвърдете вашия имейл адрес, за да продължите да използвате Rabotazamen."
                />
            </Head>

            <div className="page-content">

                <div className="section-full twm-contact-one">
                    <div className="section-content">
                        <div className="container">

                            <div className="pt-120 pb-120">
                                <div className="row justify-content-center">

                                    <div className="col-lg-8 col-md-12">
                                        <div className="contact-form-outer">

                                            <div className="section-head left wt-small-separator-outer">
                                                <h2 className="wt-title">Потвърдете вашия имейл</h2>
                                                <p className="mb-1">
                                                    Благодарим ви за регистрацията!
                                                </p>
                                                <p className="mb-1">
                                                    Преди да продължите,
                                                    моля потвърдете вашия имейл адрес чрез линка,
                                                    който ви изпратихме.
                                                </p>
                                                <p><strong>Имейла, който сте посочили е: {auth.user.email ?? ''}</strong></p>
                                                <p>
                                                    Ако не сте получили имейл,
                                                    можете да заявите нов.
                                                </p>
                                            </div>

                                            {/* STATUS MESSAGE */}
                                            {status === 'verification-link-sent' && (
                                                <div className="alert alert-success mb-3">
                                                    Нов линк за потвърждение беше изпратен на вашия имейл.
                                                </div>
                                            )}

                                            <form
                                                onSubmit={submit}
                                                className="cons-contact-form"
                                            >
                                                <div className="row">

                                                    {/* RESEND BUTTON */}
                                                    <div className="col-md-12 mb-3">
                                                        <button
                                                            type="submit"
                                                            className="site-button"
                                                            disabled={processing}
                                                        >
                                                            Изпрати отново имейл
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

VerifyEmail.layout = page => <FrontEndLayout children={page} />;
