import React from "react";
import { Head, useForm } from "@inertiajs/react";
import FrontEndLayout from "@/Layouts/FrontEndLayout";

export default function ResetPassword({ token, email }) {

    const { data, setData, post, processing, errors } = useForm({
        token: token || "",
        email: email || "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => {
                setData('password', '');
                setData('password_confirmation', '');
            },
        });
    };

    return (
        <>
            <Head>
                <title>Смяна на парола | Rabotazamen</title>
                <meta name="description" content="Сменете паролата си в Rabotazamen." />
            </Head>

            <div className="page-content">

                <div className="section-full twm-contact-one">
                    <div className="section-content">
                        <div className="container">

                            <div className="pt-120 pb-120">
                                <div className="row justify-content-center">

                                    <div className="col-lg-6 col-md-12">
                                        <div className="contact-form-outer">

                                            <div className="section-head left wt-small-separator-outer">
                                                <h2 className="wt-title">Смяна на парола</h2>
                                                <p>
                                                    Въведете новата си парола, за да я обновите.
                                                </p>
                                            </div>

                                            <form onSubmit={submit} className="cons-contact-form">

                                                <div className="row">

                                                    {/* EMAIL (readonly usually) */}
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                value={data.email}
                                                                readOnly
                                                            />
                                                            {errors.email && (
                                                                <p className="text-danger mt-1">
                                                                    {errors.email}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* PASSWORD */}
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Нова парола"
                                                                value={data.password}
                                                                onChange={(e) =>
                                                                    setData('password', e.target.value)
                                                                }
                                                            />
                                                            {errors.password && (
                                                                <p className="text-danger mt-1">
                                                                    {errors.password}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* PASSWORD CONFIRMATION */}
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Потвърдете паролата"
                                                                value={data.password_confirmation}
                                                                onChange={(e) =>
                                                                    setData('password_confirmation', e.target.value)
                                                                }
                                                            />
                                                            {errors.password_confirmation && (
                                                                <p className="text-danger mt-1">
                                                                    {errors.password_confirmation}
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
                                                            Запази новата парола
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

ResetPassword.layout = page => <FrontEndLayout children={page} />;
