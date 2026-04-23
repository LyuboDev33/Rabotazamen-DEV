import DashboardLayout from "@/Layouts/DashboardLayout";
import { Form, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function ShowTicket() {
    const { ticket, messages, auth } = usePage().props;
    const profilePicture = auth.profilePic;


    // Auto scroll to bottom when messages change
    useEffect(() => {
        const el = document.getElementById("msg-chat-wrap");
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="content-admin-main">
            <div className="wt-dashboard-msg-box">

                {/* Header */}
                <div className="single-msg-user-name-box">
                    <div className="single-msg-short-discription">
                        <h4 className="single-msg-user-name">
                        Тикет #{ticket.id}: {ticket.ticket_name}
                        </h4>
                        <p>Причина: {ticket.ticket_reason}</p>
                    </div>
                </div>

                {/* Messages */}
                <div
                    id="msg-chat-wrap"
                    className="single-user-msg-conversation scrollbar-macosx"
                    style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                    {messages.length === 0 && (
                        <p className="p-3">Няма съобщения все още.</p>
                    )}

                    {messages.map((msg) => {
                        const isOwn =
                            msg.user_id === auth.user.id ||
                            msg.admin_id === auth.user.id;

                        return (
                            <div
                                key={msg.id}
                                className={`single-user-comment-wrap ${
                                    isOwn ? "sigle-user-reply" : ""
                                }`}
                            >
                                <div
                                    className={`row ${
                                        isOwn ? "justify-content-end" : ""
                                    }`}
                                >
                                    <div className="col-xl-9 col-lg-12">
                                        <div className="single-user-comment-block clearfix">

                                            {/* Avatar */}
                                            <div className="single-user-com-pic">
                                                <img
                                                    src={profilePicture}
                                                    alt="avatar"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div className="single-user-com-text">
                                                <strong>
                                                    {msg.ticket_sender_name} ({msg.ticket_sender_role})
                                                </strong>
                                                <br />
                                                {msg.ticket_content}
                                            </div>

                                            {/* Time */}
                                            <div className="single-user-msg-time">
                                                {new Date(msg.created_at).toLocaleTimeString()}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Reply Form */}
                <div className="single-msg-reply-comment">
                    <Form method="post" action={route("ticket.reply")}>
                        <input
                            type="hidden"
                            name="ticket_id"
                            value={ticket.id}
                        />

                        <div className="input-group">
                            <textarea
                                name="message_content"
                                className="form-control"
                                placeholder="Напишете отговор..."
                                required
                            />

                            <button className="btn" type="submit">
                                <i className="fa fa-paper-plane" />
                            </button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
}

ShowTicket.layout = page => <DashboardLayout children={page} />;
