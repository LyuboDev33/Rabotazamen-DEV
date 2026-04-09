import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Form, usePage } from "@inertiajs/react";

export default function CreateTicket() {

    const { errors } = usePage().props;

    return (
        <>
            <div className="content-admin-main">

        
                {/*Basic Information*/}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-suitcase" />
                            Създайте тикет и ни споделете повече за вашия проблем
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <Form
                            method="post"
                            action={route('ticket.create')}
                        >
                            <div className="row">

                                {/* Ticket Name */}
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Заглавие на тикета</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                name="ticket_name"
                                                type="text"
                                                placeholder="Например: Проблем с вход в акаунта"
                                            />

                                            <i className="fs-input-icon fa fa-heading" />
                                        </div>

                                        {errors.ticket_name && (
                                            <div className="text-danger mt-1">
                                                {errors.ticket_name}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Ticket Reason */}
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Причина за създаванае на тикета</label>

                                        <div className="ls-inputicon-box">
                                            <input
                                                className="form-control"
                                                name="ticket_reason"
                                                type="text"
                                                placeholder="Например: Технически проблем"
                                            />

                                            <i className="fs-input-icon fa fa-question-circle" />
                                        </div>

                                        {errors.ticket_reason && (
                                            <div className="text-danger mt-1">
                                                {errors.ticket_reason}
                                            </div>
                                        )}
                                    </div>
                                </div>

                             

                                {/* Ticket Content */}
                                <div className="col-md-12">
                                    <div className="form-group">

                                        <label>Описание на проблема</label>

                                        <textarea
                                            name="ticket_content"
                                            className="form-control"
                                            rows={4}
                                            placeholder="Опишете проблема възможно най-подробно..."
                                        />

                                        {errors.ticket_content && (
                                            <div className="text-danger mt-1">
                                                {errors.ticket_content}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="col-md-12">
                                    <button
                                        className="site-button"
                                        type="submit"
                                    >
                                        Създай тикет
                                    </button>
                                </div>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

CreateTicket.layout = page => <DashboardLayout children={page} />;
