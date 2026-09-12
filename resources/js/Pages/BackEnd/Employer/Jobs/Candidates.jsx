import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';


export default function Candidates({ job, applications }) {

    const [selectedApplication, setSelectedApplication] = useState(null);


    const formatDate = (date) => {

        if (!date) {
            return '-';
        }

        return new Date(date).toLocaleString('bg-BG', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };


    const formatSimpleDate = (date) => {

        if (!date) {
            return 'Няма информация';
        }

        return new Date(date).toLocaleDateString('bg-BG', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };


    const getStatus = (status) => {

        switch (status) {

            case 'approved':
                return {
                    text: 'Одобрена',
                    className: 'twm-bg-green',
                };

            case 'rejected':
                return {
                    text: 'Отхвърлена',
                    className: 'bg-danger text-white',
                };

            case 'reviewed':
                return {
                    text: 'Прегледана',
                    className: 'bg-info text-white',
                };

            case 'pending':
            default:
                return {
                    text: 'Очаква преглед',
                    className: 'bg-warning text-dark',
                };
        }
    };


    const getWorkStatus = (status) => {

        switch (status) {

            case 'actively_looking':
                return 'Активно търси работа';

            case 'open_to_offers':
                return 'Отворен за предложения';

            case 'not_looking':
                return 'Не търси работа в момента';

            default:
                return 'Няма информация';
        }
    };


    const getSeniority = (seniority) => {

        switch (seniority) {

            case 'junior':
                return 'Junior';

            case 'mid':
                return 'Mid';

            case 'team_leader':
                return 'Team Leader';

            case 'senior':
                return 'Senior';

            case 'principal':
                return 'Principal';

            case 'cto':
                return 'CTO';

            default:
                return 'Няма информация';
        }
    };


    const getWorkModel = (workModel) => {

        const values = {
            on_site: 'Работа на място',
            hybrid: 'Хибридна работа',
            remote: 'Дистанционна работа',
        };

        if (!Array.isArray(workModel) || workModel.length === 0) {
            return [];
        }

        return workModel.map((item) => values[item] ?? item);
    };


    const getSkill = (skill) => {

        const skills = {
            communication: 'Комуникация',
            teamwork: 'Работа в екип',
            problem_solving: 'Решаване на проблеми',
            adaptability: 'Адаптивност',
            organization: 'Организираност',
            time_management: 'Управление на времето',
            critical_thinking: 'Критично мислене',
            analytical_thinking: 'Аналитично мислене',
            independence: 'Самостоятелност',
            work_under_pressure: 'Работа под напрежение',
        };

        return skills[skill] ?? skill;
    };


    const getProfilePicture = (user) => {

        if (!user?.profile_pic) {
            return '/assets_dashboard/images/profile_pics/default-avatar.png';
        }

        return `/assets_dashboard/images/profile_pics/${user.profile_pic}`;
    };


    return (
        <>
            <Head>
                <title>
                    Кандидатури
                </title>
            </Head>


            <div className="content-admin-main">

                <div className="twm-pro-view-chart-wrap">

                    <div className="col-lg-12 col-md-12 mb-4">

                        <div className="panel panel-default site-bg-white m-t30">

                            <div className="panel-heading wt-panel-heading p-a20">

                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                                    <div>

                                        <h4 className="panel-tittle m-a0">

                                            <i className="far fa-list-alt me-2" />

                                            Кандидатури

                                        </h4>

                                        {job && (

                                            <p className="text-muted mb-0 mt-2">
                                                {job.title}
                                            </p>

                                        )}

                                    </div>


                                    <div>

                                        <span className="badge bg-info text-white p-2">

                                            <i className="fa-solid fa-users me-2" />

                                            Общо кандидатури: {applications?.length ?? 0}

                                        </span>

                                    </div>

                                </div>

                            </div>


                            <div className="panel-body wt-panel-body">

                                <div className="twm-D_table p-a20 table-responsive">

                                    <table
                                        id="candidate_data_table"
                                        className="table table-bordered"
                                    >

                                        <thead>

                                            <tr>

                                                <th>
                                                    #
                                                </th>

                                                <th>
                                                    Кандидат
                                                </th>

                                                <th>
                                                    Кандидатства за
                                                </th>

                                                <th>
                                                    CV
                                                </th>

                                                <th>
                                                    Дата
                                                </th>

                                                <th>
                                                    Статус
                                                </th>

                                                <th>
                                                    Действия
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {applications && applications.length > 0 ? (

                                                applications.map((application, index) => {

                                                    const candidate = application.candidate;
                                                    const user = candidate?.user;
                                                    const status = getStatus(application.status);


                                                    return (

                                                        <tr key={application.id}>

                                                            <td>
                                                                {index + 1}
                                                            </td>


                                                            {/* Candidate */}
                                                            <td>

                                                                <div className="twm-DT-candidates-list">

                                                                    <div className="twm-media">

                                                                        <div className="twm-media-pic">

                                                                            <img
                                                                                src={getProfilePicture(user)}
                                                                                alt={`${user?.first_name ?? ''} ${user?.last_name ?? ''}`}
                                                                            />

                                                                        </div>

                                                                    </div>


                                                                    <div className="twm-mid-content">

                                                                        <div className="twm-job-title">

                                                                            <h4>

                                                                                {user?.first_name}

                                                                                {' '}

                                                                                {user?.last_name}

                                                                            </h4>


                                                                            {candidate?.professional_title && (

                                                                                <p className="mb-1">
                                                                                    {candidate.professional_title}
                                                                                </p>

                                                                            )}


                                                                            {candidate?.location && (

                                                                                <p className="twm-candidate-address mb-0">

                                                                                    <i className="fa-solid fa-location-dot me-1" />

                                                                                    {candidate.location}

                                                                                </p>

                                                                            )}

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </td>


                                                            {/* Job */}
                                                            <td>

                                                                <strong>
                                                                    {job?.title}
                                                                </strong>

                                                                <div className="text-muted small mt-1">
                                                                    {job?.reference_number}
                                                                </div>

                                                            </td>


                                                            {/* CV */}
                                                            <td>

                                                                {application.candidate_cv ? (

                                                                    <span>

                                                                        <i className="fa-solid fa-file-pdf me-2 text-danger" />

                                                                        {application.candidate_cv.file_name}

                                                                    </span>

                                                                ) : (

                                                                    <span className="text-muted">
                                                                        Няма избрано CV
                                                                    </span>

                                                                )}

                                                            </td>


                                                            {/* Date */}
                                                            <td>

                                                                <i className="fa-regular fa-calendar me-2" />

                                                                {formatDate(application.created_at)}

                                                            </td>


                                                            {/* Status */}
                                                            <td>

                                                                <div className="twm-jobs-category">

                                                                    <span className={status.className}>
                                                                        {status.text}
                                                                    </span>

                                                                </div>

                                                            </td>


                                                            {/* Actions */}
                                                            <td>

                                                                <div className="twm-table-controls">

                                                                    <ul className="twm-DT-controls-icon list-unstyled">

                                                                        <li>

                                                                            <button
                                                                                type="button"
                                                                                title="Преглед на кандидатурата"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                onClick={() => setSelectedApplication(application)}
                                                                            >

                                                                                <span className="fa fa-eye" />

                                                                            </button>

                                                                        </li>


                                                                        <li>

                                                                            <button
                                                                                type="button"
                                                                                title="Изтрий"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                            >

                                                                                <span className="far fa-trash-alt" />

                                                                            </button>

                                                                        </li>

                                                                    </ul>

                                                                </div>

                                                            </td>

                                                        </tr>

                                                    );

                                                })

                                            ) : (

                                                <tr>

                                                    <td
                                                        colSpan="7"
                                                        className="text-center p-5"
                                                    >

                                                        <div className="text-muted">

                                                            <i className="fa-solid fa-users fa-2x mb-3" />

                                                            <h5>
                                                                Все още няма кандидатури
                                                            </h5>

                                                            <p className="mb-0">
                                                                Все още няма кандидати, кандидатствали по тази обява.
                                                            </p>

                                                        </div>

                                                    </td>

                                                </tr>

                                            )}

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Candidate Application Sidebar */}
            {selectedApplication && (

                <>
                    <div
                        className="candidate-application-sidebar-overlay"
                        onClick={() => setSelectedApplication(null)}
                    />


                    <aside className="candidate-application-sidebar">

                        <div className="candidate-application-sidebar__header">

                            <div>

                                <span className="candidate-application-sidebar__subtitle">
                                    Преглед на кандидатура
                                </span>

                                <h3>
                                    Информация за кандидата
                                </h3>

                            </div>


                            <button
                                type="button"
                                className="candidate-application-sidebar__close"
                                onClick={() => setSelectedApplication(null)}
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>

                        </div>


                        <div className="candidate-application-sidebar__body">


                            {/* Profile */}
                            <div className="candidate-application-profile">

                                <div className="candidate-application-profile__avatar">

                                    <img
                                        src={getProfilePicture(selectedApplication.candidate?.user)}
                                        alt={`${selectedApplication.candidate?.user?.first_name ?? ''} ${selectedApplication.candidate?.user?.last_name ?? ''}`}
                                    />

                                </div>


                                <div className="candidate-application-profile__content">

                                    <h3>

                                        {selectedApplication.candidate?.user?.first_name}

                                        {' '}

                                        {selectedApplication.candidate?.user?.last_name}

                                    </h3>

                                    <p>
                                        {selectedApplication.candidate?.professional_title ?? 'Няма въведена професионална позиция'}
                                    </p>


                                    <div className="candidate-application-profile__location">

                                        <i className="fa-solid fa-location-dot" />

                                        {selectedApplication.candidate?.location ?? 'Няма въведена локация'}

                                    </div>

                                </div>

                            </div>


                            {/* Application */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-file-signature" />

                                    <h4>
                                        Кандидатура
                                    </h4>

                                </div>


                                <div className="candidate-sidebar-info-grid">

                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Позиция
                                        </span>

                                        <strong>
                                            {job?.title ?? 'Няма информация'}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Дата на кандидатстване
                                        </span>

                                        <strong>
                                            {formatDate(selectedApplication.created_at)}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Статус
                                        </span>

                                        <strong>
                                            {getStatus(selectedApplication.status).text}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Телефон
                                        </span>

                                        <strong>
                                            {selectedApplication.candidate?.phone ?? 'Няма информация'}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info candidate-sidebar-info--full">

                                        <span>
                                            Email
                                        </span>

                                        <strong>
                                            {selectedApplication.candidate?.user?.email ?? 'Няма информация'}
                                        </strong>

                                    </div>

                                </div>

                            </div>


                            {/* Professional information */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-briefcase" />

                                    <h4>
                                        Професионална информация
                                    </h4>

                                </div>


                                <div className="candidate-sidebar-info-grid">

                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Години опит
                                        </span>

                                        <strong>
                                            {selectedApplication.candidate?.years_experience
                                                ? `${selectedApplication.candidate.years_experience} години`
                                                : 'Няма информация'}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Ниво
                                        </span>

                                        <strong>
                                            {getSeniority(selectedApplication.candidate?.seniority)}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                            Очаквано минимално възнаграждение
                                        </span>

                                        <strong>
                                            {selectedApplication.candidate?.min_salary
                                                ? `${selectedApplication.candidate.min_salary} EUR`
                                                : 'Няма информация'}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info">

                                        <span>
                                           Очаквано максимално възнаграждение
                                        </span>

                                        <strong>
                                            {selectedApplication.candidate?.max_salary
                                                ? `${selectedApplication.candidate.max_salary} EUR`
                                                : 'Няма информация'}
                                        </strong>

                                    </div>


                                    <div className="candidate-sidebar-info candidate-sidebar-info--full">

                                        <span>
                                            Статус на търсене
                                        </span>

                                        <strong>
                                            {getWorkStatus(selectedApplication.candidate?.work_status)}
                                        </strong>

                                    </div>

                                </div>

                            </div>


                            {/* Work model */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-building" />

                                    <h4>
                                        Предпочитан модел на работа
                                    </h4>

                                </div>


                                <div className="candidate-sidebar-tags">

                                    {getWorkModel(selectedApplication.candidate?.work_model).length > 0 ? (

                                        getWorkModel(selectedApplication.candidate?.work_model).map((model, index) => (

                                            <span key={index}>
                                                {model}
                                            </span>

                                        ))

                                    ) : (

                                        <p className="candidate-sidebar-empty">
                                            Няма въведена информация.
                                        </p>

                                    )}

                                </div>

                            </div>


                            {/* Skills */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-bolt" />

                                    <h4>
                                        Ключови умения
                                    </h4>

                                </div>


                                <div className="candidate-sidebar-tags">

                                    {selectedApplication.candidate?.skills?.length > 0 ? (

                                        selectedApplication.candidate.skills.map((skill) => (

                                            <span key={skill}>
                                                {getSkill(skill)}
                                            </span>

                                        ))

                                    ) : (

                                        <p className="candidate-sidebar-empty">
                                            Няма добавени умения.
                                        </p>

                                    )}

                                </div>

                            </div>


                            {/* About */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-regular fa-user" />

                                    <h4>
                                        Кратко представяне
                                    </h4>

                                </div>


                                {selectedApplication.candidate?.about_me ? (

                                    <div
                                        className="candidate-sidebar-about"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedApplication.candidate.about_me
                                        }}
                                    />

                                ) : (

                                    <p className="candidate-sidebar-empty">
                                        Кандидатът не е добавил представяне.
                                    </p>

                                )}

                            </div>


                            {/* Work Experience */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-briefcase" />

                                    <h4>
                                        Професионален опит
                                    </h4>

                                </div>


                                {selectedApplication.candidate?.work_experience?.length > 0 ? (

                                    <div className="candidate-sidebar-timeline">

                                        {selectedApplication.candidate.work_experience.map((experience) => (

                                            <div
                                                className="candidate-sidebar-timeline__item"
                                                key={experience.id}
                                            >

                                                <div className="candidate-sidebar-timeline__marker" />


                                                <div className="candidate-sidebar-timeline__content">

                                                    <div className="candidate-sidebar-timeline__heading">

                                                        <div>

                                                            <h5>
                                                                {experience.position}
                                                            </h5>

                                                            <strong>
                                                                {experience.company}
                                                            </strong>

                                                        </div>


                                                        {experience.location && (

                                                            <span>
                                                                <i className="fa-solid fa-location-dot me-1" />

                                                                {experience.location}
                                                            </span>

                                                        )}

                                                    </div>


                                                    <p className="candidate-sidebar-timeline__date">

                                                        {experience.start_month}

                                                        {' '}

                                                        {experience.start_year}

                                                        {' — '}

                                                        {experience.is_current
                                                            ? 'До момента'
                                                            : `${experience.end_month ?? ''} ${experience.end_year ?? ''}`}

                                                    </p>


                                                    {experience.responsibilities && (

                                                        <div
                                                            className="candidate-sidebar-timeline__description"
                                                            dangerouslySetInnerHTML={{
                                                                __html: experience.responsibilities
                                                            }}
                                                        />

                                                    )}

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                ) : (

                                    <p className="candidate-sidebar-empty">
                                        Няма добавен професионален опит.
                                    </p>

                                )}

                            </div>


                            {/* Education */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-solid fa-graduation-cap" />

                                    <h4>
                                        Образование
                                    </h4>

                                </div>


                                {selectedApplication.candidate?.education?.length > 0 ? (

                                    <div className="candidate-sidebar-timeline">

                                        {selectedApplication.candidate.education.map((education) => (

                                            <div
                                                className="candidate-sidebar-timeline__item"
                                                key={education.id}
                                            >

                                                <div className="candidate-sidebar-timeline__marker" />


                                                <div className="candidate-sidebar-timeline__content">

                                                    <div className="candidate-sidebar-timeline__heading">

                                                        <div>

                                                            <h5>
                                                                {education.specialty}
                                                            </h5>

                                                            <strong>
                                                                {education.institution}
                                                            </strong>

                                                        </div>


                                                        {education.city && (

                                                            <span>

                                                                <i className="fa-solid fa-location-dot me-1" />

                                                                {education.city}

                                                            </span>

                                                        )}

                                                    </div>


                                                    <p className="candidate-sidebar-timeline__degree">
                                                        {education.degree ?? 'Няма въведена степен'}
                                                    </p>


                                                    <p className="candidate-sidebar-timeline__date">

                                                        {education.start_month}

                                                        {' '}

                                                        {education.start_year}

                                                        {' — '}

                                                        {education.is_current
                                                            ? 'До момента'
                                                            : `${education.end_month ?? ''} ${education.end_year ?? ''}`}

                                                    </p>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                ) : (

                                    <p className="candidate-sidebar-empty">
                                        Няма добавено образование.
                                    </p>

                                )}

                            </div>


                            {/* CV */}
                            <div className="candidate-sidebar-section">

                                <div className="candidate-sidebar-section__title">

                                    <i className="fa-regular fa-file-pdf" />

                                    <h4>
                                        CV
                                    </h4>

                                </div>


                                {selectedApplication.candidate_cv ? (

                                    <div className="candidate-sidebar-cv">

                                        <div className="candidate-sidebar-cv__icon">
                                            <i className="fa-solid fa-file-pdf" />
                                        </div>


                                        <div className="candidate-sidebar-cv__content">

                                            <strong>
                                                {selectedApplication.candidate_cv.file_name}
                                            </strong>

                                            <span>
                                                Прикачено към кандидатурата
                                            </span>

                                        </div>


                                        <a
                                            href={`/assets/pdfs/${selectedApplication.candidate_cv.file_name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="candidate-sidebar-cv__button"
                                        >
                                            <i className="fa-solid fa-eye" />

                                            Преглед
                                        </a>

                                    </div>

                                ) : (

                                    <p className="candidate-sidebar-empty">
                                        Няма прикачено CV.
                                    </p>

                                )}

                            </div>


                            {/* Message */}
                            <div className="candidate-sidebar-section">

                                <p className="candidate-sidebar-message">
                                    {selectedApplication.message ?? 'Кандидатът не е оставил допълнително съобщение.'}
                                </p>

                            </div>

                        </div>


                        <div className="candidate-application-sidebar__footer">


                            <button
                                type="button"
                                className="site-button bg-success"
                            >
                                <i className="fa-solid fa-check me-2" />

                                Одобри
                            </button>


                            <button
                                type="button"
                                className="site-button bg-danger"
                            >
                                <i className="fa-solid fa-xmark me-2" />

                                Отхвърли
                            </button>

                        </div>

                    </aside>

                </>

            )}

        </>
    );
}


Candidates.layout = page => (
    <DashboardLayout children={page} />
);
