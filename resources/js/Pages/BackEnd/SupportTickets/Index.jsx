import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function SupportTicket() {

    const { supportTickets } = usePage().props;
    const { flash  } = usePage();

    return (
        <>
            <Head>
                <title>Моите тикети</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default site-bg-white">
                    <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between">
                        <h4 className="panel-tittle m-a0">
                            <i className="fa fa-suitcase"></i> Вашите тикети
                        </h4>
                        <Link
                            className='btn btn-info text-white rounded-pill'
                            href='/support/tickets/create-ticket'> Създай тикет</Link>
                    </div>

                    <div className="panel-body wt-panel-body">

                        <div className="p-a20 table-responsive">

                            <table className="table twm-table table-striped table-borderless">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Заглавие</th>
                                        <th>Причина</th>
                                        <th>Статус</th>
                                        <th>Дата</th>
                                        <th>Действие</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {supportTickets.length > 0 ? (
                                        supportTickets.map(ticket => (
                                            <tr key={ticket.id}>

                                                <td>#{ticket.id}</td>

                                                <td>
                                                    <a className="site-text-primary">
                                                        {ticket.ticket_name}
                                                    </a>
                                                </td>

                                                <td>{ticket.ticket_reason}</td>

                                                <td>
                                                    <span className="text-clr-green2">
                                                        {ticket.status}
                                                    </span>
                                                </td>

                                                <td>
                                                    {new Date(ticket.created_at).toLocaleDateString()}
                                                </td>

                                                <td>
                                                    <Link
                                                        href={route('tickets.show', ticket.id)}
                                                        className="site-button-link site-text-primary"
                                                    >
                                                        Отвори
                                                    </Link>
                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">
                                                Нямате създадени тикети.
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>


            {flash.ticketSuccesCreation && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.ticketSuccesCreation}
                </div>
            )}

        </>
    );
}

SupportTicket.layout = page => <DashboardLayout children={page} />;
