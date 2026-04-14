import React from "react";
import { Head, useForm } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function ForgotPassword({ status }) {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <Head>
                <title>Забравена парола | Rabotazamen</title>
                <meta name="description" content="Възстановете паролата си в Rabotazamen. Въведете имейла си и ще получите линк за смяна на паролата." />
            </Head>

            <div className="page-content">

                <div className="section-full twm-contact-one">
                    <div className="section-content">
                        <div className="container">

                            <div className="contact-one-inner">
                                <div className="row justify-content-center">

                                    <div className="col-lg-6 col-md-12">
                                        <div className="contact-form-outer">

                                            <div className="section-head left wt-small-separator-outer">
                                                <h2 className="wt-title">Забравена парола</h2>
                                                <p>
                                                    Въведете вашия имейл адрес и ще ви изпратим линк
                                                    за възстановяване на паролата.
                                                </p>
                                            </div>

                                            {/* STATUS MESSAGE */}
                                            {status && (
                                                <div className="alert alert-success mb-3">
                                                    {status}
                                                </div>
                                            )}

                                            <form
                                                onSubmit={submit}
                                                className="cons-contact-form"
                                            >
                                                <div className="row">

                                                    {/* EMAIL */}
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                name="email"
                                                                type="email"
                                                                required
                                                                className="form-control"
                                                                placeholder="Имейл"
                                                                value={data.email}
                                                                onChange={(e) =>
                                                                    setData('email', e.target.value)
                                                                }
                                                            />

                                                            {errors.email && (
                                                                <p className="text-danger mt-1">
                                                                    {errors.email}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* BUTTON */}
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            className="site-button"
                                                            disabled={processing}
                                                        >
                                                            Изпрати линк за възстановяване
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

ForgotPassword.layout = page => <FrontEndLayout children={page} />;
