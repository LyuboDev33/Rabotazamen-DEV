import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth, companyStatus } = usePage().props;

    const renderEmployerStatus = () => {
        switch (companyStatus) {
            case 'no_company':
                return (
                    <div className="alert-danger p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-info-circle me-2"></i>
                        <strong>Следваща стъпка: Създайте фирмен профил</strong>
                        <hr />
                        <p>
                            В момента във вашия акаунт няма добавена фирма. За да започнете
                            да използвате платформата като работодател, е необходимо първо да
                            създадете фирмен профил.
                        </p>
                        <p>
                            Моля отидете в секция{' '}
                            <strong>
                                <a href="/dashboard/employer/company-details">
                                    <u>"Компания"</u>
                                </a>
                            </strong>{' '}
                            и попълнете всички задължителни полета (*), отбелязани във формата.
                        </p>
                        <p className="mb-0">
                            След като запазите информацията, статусът на вашия профил
                            автоматично ще се промени и това съобщение ще бъде заменено със
                            следващата стъпка. Успех!
                        </p>
                    </div>
                );

            case 'incomplete':
                return (
                    <div className="alert-warning p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        <strong>Профилът на фирмата е непълен</strong>
                        <hr />
                        <p>
                            Започнали сте попълването на фирмените данни, но някои от
                            задължителните полета липсват или са некоректни. Докато профилът
                            не бъде завършен, няма да можете да публикувате обяви или да
                            разглеждате кандидати.
                        </p>
                        <p>
                            Моля отворете секция{' '}
                            <strong>
                                <a href="/dashboard/employer/company-details">
                                    <u>"Компания"</u>
                                </a>
                            </strong>{' '}
                            и се уверете, че всички полета, отбелязани със (*), са попълнени
                            коректно.
                        </p>
                        <p className="mb-0">
                            След като запазите липсващата информация, профилът автоматично ще
                            премине към статус <strong>"В очакване на одобрение"</strong> и
                            нашият екип ще го прегледа.
                        </p>
                    </div>
                );

            case 'pending':
                return (
                    <div className="alert-info p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-clock me-2"></i>
                        <strong>Профилът е в процес на одобрение</strong>
                        <hr />
                        <p>
                            Благодарим ви! Всички фирмени данни са попълнени и вашият профил
                            е изпратен за преглед. Нашият екип ще го разгледа възможно
                            най-бързо.
                        </p>
                        <p>
                            По време на този процес все още не можете да публикувате обяви
                            или да преглеждате база данни с CV-та, но можете да разгледате
                            платформата и да се запознаете с нейните функционалности.
                        </p>
                        <p className="mb-0">
                            След приключване на прегледа ще получите известие, а статусът ви
                            ще се промени на <strong>"Одобрен"</strong> или{' '}
                            <strong>"Отхвърлен"</strong>, придружен със следващи стъпки.
                        </p>
                    </div>
                );

            case 'approved':
                return (
                    <div className="alert-success p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-check-circle me-2"></i>
                        <strong>Добре дошли! Профилът ви е одобрен</strong>
                        <hr />
                        <p>
                            Вашата фирма е успешно верифицирана от нашия екип. Вече имате
                            пълен достъп до всички функционалности на платформата:
                        </p>
                        <ul className="mb-2">
                            <li>Публикуване и управление на обяви за работа</li>
                            <li>Преглед и филтриране на база данни с кандидати</li>
                            <li>Запазване на CV-та и директна комуникация с кандидати</li>
                        </ul>
                        <p className="mb-0">
                            За да започнете, отидете в секция{' '}
                            <strong>
                                <a href="/dashboard/employer/jobs/create">
                                    <u>"Публикувай обява"</u>
                                </a>
                            </strong>
                            . При въпроси, не се колебайте да се свържете с нас.
                        </p>
                    </div>
                );

            case 'rejected':
                return (
                    <div className="alert-danger p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-times-circle me-2"></i>
                        <strong>Профилът е отхвърлен</strong>
                        <hr />
                        <p>
                            За съжаление, след преглед нашият екип не можа да одобри вашия
                            фирмен профил. Това обикновено се случва при липсваща или
                            неточна информация, или при невалидни фирмени данни.
                        </p>
                        <p>
                            Моля прегледайте секция{' '}
                            <strong>
                                <a href="/dashboard/employer/company-details">
                                    <u>"Компания"</u>
                                </a>
                            </strong>{' '}
                            и коригирайте данните. След запазване профилът ще бъде изпратен
                            повторно за одобрение.
                        </p>
                        <p className="mb-0">
                            Ако смятате, че това е грешка или имате нужда от съдействие,
                            моля свържете се с нашия екип.
                        </p>
                    </div>
                );

            case 'closed':
                return (
                    <div className="alert-danger p-3 rounded-5 align-self-start max-w-650-px">
                        <i className="fas fa-ban me-2"></i>
                        <strong>Профилът е блокиран</strong>
                        <hr />
                        <p>
                            Вашият фирмен профил е блокиран от администраторите на
                            платформата. Достъпът до функционалностите за работодатели е
                            временно ограничен.
                        </p>
                        <p className="mb-0">
                            За повече информация относно причините и възможните следващи
                            стъпки, моля свържете се с нашия екип.
                        </p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Head>
                <title>Табло за упраление</title>
            </Head>

            <div className="content-admin-main">
                <div className="twm-pro-view-chart-wrap">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                            <div className="panel panel-default site-bg-white shadow-sm">
                                <div className="panel-heading wt-panel-heading pt-2 ps-2 pb-2">
                                    <h3>
                                        👋 Здравейте, {auth.user.first_name} {auth.user.last_name}
                                    </h3>

                                    {auth.isCandidate ? (
                                        <div className="panel-body wt-panel-body twm-pro-view-chart d-flex flex-column align-items-start gap-3 max-w-650-px">
                                            <div className="alert-info p-3 rounded-5">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Следващи стъпки: </strong>
                                                Вие сте регистрират в платформата като Кандидат!
                                                <hr />
                                                Това означава, че ще можете да създадете или прикачите
                                                вашето CV и да кандидатствате за работа спрямо вашите
                                                критерии за търсене: <br />
                                                Локация, Квалификации, Препоръки и др.
                                            </div>

                                            <div className="alert-danger p-3 rounded-5 align-self-start max-w-650-px">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Статус на профила: Необходимо действие</strong>
                                                <p>За да можете да кандидатствате е нужно да попълните вашия профил.</p>
                                                <p>
                                                    Моля отидете в секция{' '}
                                                    <strong>
                                                        <a href="/dashboard/candidate/cv-documents">
                                                            <u>"CV и Документи"</u>
                                                        </a>
                                                    </strong>
                                                    , където ще получите необходимата информация за завършване на вашия профил.
                                                </p>
                                                <p>
                                                    Веднъж завършен, това съобщение ще изчезне и ще можете да кандидатствате за различни обяви за работа. Успех!
                                                </p>
                                            </div>
                                        </div>
                                    ) : ''}

                                    {auth.isEmployer ? (
                                        <div className="panel-body wt-panel-body twm-pro-view-chart d-flex flex-column align-items-start gap-3 max-w-650-px">
                                            <div className="alert-info p-3 rounded-5">
                                                <i className="fas fa-info-circle me-2"></i>
                                                <strong>Следващи стъпки: </strong>
                                                Вие сте регистрирани в платформата като работодател!
                                                <hr />
                                                Това означава, че ще можете да създавате работни обяви,
                                                да разглеждате потенциални кандидати, както и да запазвате CV-та.
                                            </div>

                                            {renderEmployerStatus()}
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <DashboardLayout children={page} />;
