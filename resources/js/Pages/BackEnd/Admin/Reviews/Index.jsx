import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, router, usePage } from '@inertiajs/react';

export default function Reviews() {
    const { reviews = [], flash = {} } = usePage().props;

    const getCandidateName = (candidate) => {
        if (!candidate) {
            return null;
        }

        const firstName = candidate.user?.first_name ?? '';
        const lastName = candidate.user?.last_name ?? '';

        return `${firstName} ${lastName}`.trim() || 'Кандидат';
    };

    const getReviewer = (review) => {
        if (review.reviewer_candidate) {
            return {
                type: 'candidate',
                typeLabel: 'Кандидат',
                name: getCandidateName(review.reviewer_candidate),
                subtitle:
                    review.reviewer_candidate.professional_title ||
                    'Кандидат',
                image: review.reviewer_candidate.user?.profile_pic
                    ? `/assets_dashboard/images/profile_pics/${review.reviewer_candidate.user.profile_pic}`
                    : '/assets_dashboard/images/profile_pics/default-avatar.png',
            };
        }

        if (review.reviewer_company) {
            return {
                type: 'company',
                typeLabel: 'Фирма',
                name:
                    review.reviewer_company.company_name ||
                    'Фирма',
                subtitle:
                    review.reviewer_company.company_industry ||
                    'Работодател',
                image: review.reviewer_company.company_logo
                    ? `/assets/images/company_profile_pictures/${review.reviewer_company.company_logo}`
                    : '/assets_dashboard/images/profile_pics/default-avatar.png',
            };
        }

        return {
            type: 'unknown',
            typeLabel: 'Неизвестен',
            name: 'Неизвестен потребител',
            subtitle: '',
            image: '/assets_dashboard/images/profile_pics/default-avatar.png',
        };
    };

    const getReviewed = (review) => {
        if (review.reviewed_candidate) {
            return {
                type: 'candidate',
                typeLabel: 'Кандидат',
                name: getCandidateName(review.reviewed_candidate),
                subtitle:
                    review.reviewed_candidate.professional_title ||
                    'Кандидат',
                image: review.reviewed_candidate.user?.profile_pic
                    ? `/assets_dashboard/images/profile_pics/${review.reviewed_candidate.user.profile_pic}`
                    : '/assets_dashboard/images/profile_pics/default-avatar.png',
            };
        }

        if (review.reviewed_company) {
            return {
                type: 'company',
                typeLabel: 'Фирма',
                name:
                    review.reviewed_company.company_name ||
                    'Фирма',
                subtitle:
                    review.reviewed_company.company_industry ||
                    'Работодател',
                image: review.reviewed_company.company_logo
                    ? `/assets/images/company_profile_pictures/${review.reviewed_company.company_logo}`
                    : '/assets_dashboard/images/profile_pics/default-avatar.png',
            };
        }

        return {
            type: 'unknown',
            typeLabel: 'Неизвестен',
            name: 'Неизвестен получател',
            subtitle: '',
            image: '/assets_dashboard/images/profile_pics/default-avatar.png',
        };
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'pending':
                return 'Изчаква одобрение';

            case 'approved':
                return 'Одобрено';

            case 'rejected':
                return 'Отхвърлено';

            default:
                return status;
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'pending':
                return 'review-status-pending';

            case 'approved':
                return 'review-status-approved';

            case 'rejected':
                return 'review-status-rejected';

            default:
                return 'review-status-default';
        }
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('bg-BG', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleStatusChange = (reviewId, status) => {
        router.patch(
            route('super_admin.reviews.status', reviewId),
            {
                status: status,
            },
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <>
            <Head>
                <title>Админ | Ревюта</title>
            </Head>

            <div className="content-admin-main reviews-admin-page">

                <div className="panel panel-default site-bg-white shadow-sm review-admin-panel">

                    <div className="panel-heading wt-panel-heading p-a20 review-admin-header">

                        <div>
                            <h4 className="panel-tittle m-a0">
                                Всички ревюта
                            </h4>

                            <p className="review-admin-description">
                                Преглед и управление на всички мнения в платформата.
                            </p>
                        </div>

                        <div className="review-count">
                            <i className="fa fa-comments me-2"></i>
                            {reviews.length} ревюта
                        </div>

                    </div>

                    <div className="panel-body wt-panel-body">

                        <div className="table-responsive">

                            <table className="table twm-table review-admin-table">

                                <thead>
                                    <tr>
                                        <th>Оставено от</th>
                                        <th></th>
                                        <th>Получател</th>
                                        <th>Оценка</th>
                                        <th>Коментар</th>
                                        <th>Статус</th>
                                        <th>Дата</th>
                                        <th className="last-td-action">
                                            Действия
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {reviews.length > 0 ? (
                                        reviews.map((review) => {
                                            const reviewer = getReviewer(review);
                                            const reviewed = getReviewed(review);

                                            return (
                                                <tr key={review.id}>

                                                    {/* REVIEWER */}
                                                    <td>
                                                        <div className="review-person">

                                                            <div className="review-person-image">
                                                                <img
                                                                    src={reviewer.image}
                                                                    alt={reviewer.name}
                                                                />
                                                            </div>

                                                            <div className="review-person-info">

                                                                <strong>
                                                                    {reviewer.name}
                                                                </strong>

                                                                <span>
                                                                    {reviewer.subtitle}
                                                                </span>

                                                                <span
                                                                    className={`review-user-type ${
                                                                        reviewer.type === 'company'
                                                                            ? 'review-user-company'
                                                                            : 'review-user-candidate'
                                                                    }`}
                                                                >
                                                                    {reviewer.typeLabel}
                                                                </span>

                                                            </div>

                                                        </div>
                                                    </td>

                                                    {/* ARROW */}
                                                    <td className="review-direction-cell">
                                                        <div className="review-direction">
                                                            <i className="fa fa-arrow-right"></i>
                                                        </div>
                                                    </td>

                                                    {/* RECEIVER */}
                                                    <td>
                                                        <div className="review-person">

                                                            <div className="review-person-image">
                                                                <img
                                                                    src={reviewed.image}
                                                                    alt={reviewed.name}
                                                                />
                                                            </div>

                                                            <div className="review-person-info">

                                                                <strong>
                                                                    {reviewed.name}
                                                                </strong>

                                                                <span>
                                                                    {reviewed.subtitle}
                                                                </span>

                                                                <span
                                                                    className={`review-user-type ${
                                                                        reviewed.type === 'company'
                                                                            ? 'review-user-company'
                                                                            : 'review-user-candidate'
                                                                    }`}
                                                                >
                                                                    {reviewed.typeLabel}
                                                                </span>

                                                            </div>

                                                        </div>
                                                    </td>

                                                    {/* RATING */}
                                                    <td>
                                                        <div className="admin-review-rating">

                                                            <div className="admin-review-stars">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <i
                                                                        key={star}
                                                                        className={
                                                                            star <= review.rating
                                                                                ? 'fas fa-star'
                                                                                : 'far fa-star'
                                                                        }
                                                                    ></i>
                                                                ))}
                                                            </div>

                                                            <span>
                                                                {review.rating}/5
                                                            </span>

                                                        </div>
                                                    </td>

                                                    {/* COMMENT */}
                                                    <td>
                                                        <div className="review-comment-preview">
                                                            {review.comment ? (
                                                                review.comment
                                                            ) : (
                                                                <span className="text-muted">
                                                                    Няма коментар
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>

                                                    {/* STATUS */}
                                                    <td>
                                                        <span
                                                            className={`review-status ${getStatusClass(
                                                                review.is_approved
                                                            )}`}
                                                        >
                                                            {getStatusLabel(
                                                                review.is_approved
                                                            )}
                                                        </span>
                                                    </td>

                                                    {/* DATE */}
                                                    <td>
                                                        <div className="review-date">
                                                            <i className="far fa-calendar-alt me-2"></i>

                                                            {formatDate(
                                                                review.created_at
                                                            )}
                                                        </div>
                                                    </td>

                                                    {/* ACTIONS */}
                                                    <td>
                                                        <div className="review-actions">

                                                            <select
                                                                value={review.is_approved}
                                                                onChange={(e) =>
                                                                    handleStatusChange(
                                                                        review.id,
                                                                        e.target.value
                                                                    )
                                                                }
                                                                className={`form-select review-status-select ${getStatusClass(
                                                                    review.is_approved
                                                                )}`}
                                                            >
                                                                <option value="pending">
                                                                    Изчаква одобрение
                                                                </option>

                                                                <option value="approved">
                                                                    Одобрено
                                                                </option>

                                                                <option value="rejected">
                                                                    Отхвърлено
                                                                </option>
                                                            </select>

                                                        </div>
                                                    </td>

                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="text-center"
                                            >
                                                <div className="review-empty-state">

                                                    <i className="far fa-comments"></i>

                                                    <h5>
                                                        Все още няма ревюта
                                                    </h5>

                                                    <p>
                                                        Когато бъдат добавени ревюта,
                                                        те ще се покажат тук.
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

            {flash.success && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.success}
                </div>
            )}
        </>
    );
}

Reviews.layout = page => (
    <DashboardLayout children={page} />
);
