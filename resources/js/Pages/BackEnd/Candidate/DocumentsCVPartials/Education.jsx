import { usePage, Form } from "@inertiajs/react";
import React, { useState } from "react";
import Modal from "@/Components/Modal";

export default function Education({ years, months, degrees }) {

    const { flash } = usePage();
    const candidate = usePage().props.candidate;
    const { csrf_token, errors } = usePage().props;

    const [educationId, setEducationId] = useState('');

    const [educationModal, setEducationModal] = useState(false);
    const toggleEducation = () => {
        setEducationModal(prev => !prev);
    };

    const [openEditId, setOpenEditId] = useState(null);
    const toggleEdit = (id) => {
        setOpenEditId(prev => (prev === id ? null : id));
    };

    const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);

    return (
        <>
            {educationModal && (
                <Form
                    method="POST"
                    options={{ preserveScroll: true }}
                    action={route('education.create')}
                    encType="multipart/form-data"
                    onSuccess={() => setEducationModal(false)}
                    className={`modal ${educationModal ? 'active' : ''}`}
                >
                    <div className="modal-content container">
                        <div className="panel panel-default">

                            {/* HEADER */}
                            <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between align-items-center">
                                <h4 className="panel-tittle m-a0">
                                    <i className="fa fa-graduation-cap me-2" />
                                    Добави образование
                                </h4>

                                <button
                                    onClick={toggleEducation}
                                    type="button"
                                    className="site-button button-sm closeEducation"
                                >
                                    <i className="fa fa-times me-1" /> Затвори
                                </button>
                            </div>

                            <div className="educationPanel panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="row">

                                    {/* INSTITUTION */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Учебно заведение</strong> <span className="text-danger">*</span></label>
                                            <input
                                                className="form-control"
                                                name="institution"
                                                type="text"
                                                placeholder="Напр. Софийски университет"
                                            />
                                            {errors.institution && (
                                                <p className="text-danger">{errors.institution}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* SPECIALTY */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Специалност</strong> <span className="text-danger">*</span></label>
                                            <input
                                                className="form-control"
                                                name="specialty"
                                                type="text"
                                                placeholder="Напр. Информатика"
                                            />
                                            {errors.specialty && (
                                                <p className="text-danger">{errors.specialty}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* DEGREE */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Степен</strong> <span className="text-danger">*</span></label>
                                            <select
                                                className="form-control"
                                                name="degree"
                                            >
                                                <option value="">Изберете степен</option>
                                                {degrees && degrees.map((degree) => (
                                                    <option key={degree.id} value={degree.name}>
                                                        {degree.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.degree && (
                                                <p className="text-danger">{errors.degree}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* CERTIFICATE / DIPLOMA */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Сертификат / диплома</strong></label>
                                            <input
                                                className="form-control"
                                                name="certificate"
                                                type="file"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                            />
                                            {errors.certificate && (
                                                <p className="text-danger">{errors.certificate}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* CURRENTLY STUDYING */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <div className="form-check mt-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="currently_studying"
                                                    id="currently_studying"
                                                />
                                                <label
                                                    className="form-check-label ms-2"
                                                    htmlFor="currently_studying"
                                                >
                                                    В момента уча тук
                                                </label>
                                            </div>
                                            {errors.currently_studying && (
                                                <p className="text-danger">{errors.currently_studying}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* PERIOD TITLE */}
                                    <div className="col-lg-12">
                                        <h5 className="mt-2 mb-3">
                                            <i className="fa fa-calendar-alt me-2" />
                                            Период
                                        </h5>
                                    </div>

                                    {/* START YEAR */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Година на започване</label>
                                            <select className="form-control" name="year_start_from">
                                                <option value="" selected>
                                                    Избери година
                                                </option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.year_start_from && (
                                                <p className="text-danger">{errors.year_start_from}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* START MONTH */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Месец на започване</label>
                                            <select className="form-control" name="month_start_from">
                                                {months.map((month, idx) => (
                                                    <option key={idx} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.month_start_from && (
                                                <p className="text-danger">{errors.month_start_from}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* END YEAR */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Година на приключване</label>
                                            <select className="form-control" name="year_end_to">
                                                <option value="" selected>
                                                    Избери година
                                                </option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.year_end_to && (
                                                <p className="text-danger">{errors.year_end_to}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* END MONTH */}
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Месец на приключване</label>
                                            <select className="form-control" name="month_end_to">
                                                {months.map((month, idx) => (
                                                    <option key={idx} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {errors.month_end_to && (
                                        <p className="text-danger text-center">{errors.month_end_to}</p>
                                    )}

                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="p-3">
                                <hr />
                                <div className="d-flex gap-2 justify-content-end">
                                    <button type="submit" className="site-button">
                                        <i className="fa fa-plus me-1" /> Добави
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Form>
            )}


            <div className="panel panel-default pb-1">
                <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Образование</h4>
                </div>

                <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                    <button
                        onClick={toggleEducation}
                        type='button'
                        className='site-button d-flex gap-2 align-items-center'>
                        Добави образование
                        <i className="fa-solid fa-graduation-cap"></i>
                    </button>
                </div>


                <div className="twm-timing-list-wrap m-3">
                    <h3 className="p-3">Сегашен изглед</h3>

                    {candidate.education.length < 1 ?
                        <p>Нямате добавено образование</p>
                        : ''}

                    {candidate.education.map((edu) => (
                        <Form
                            className='mb-4'
                            options={{ preserveScroll: true }}
                            key={edu.id}
                            method="PATCH"
                            action={route('education.update')}
                            encType="multipart/form-data"
                        >
                            <input type="hidden" name="update_id" value={edu.id} />

                            <div className="panel panel-default m-b30 twm-timing-list">
                                <div className="edit-work-experience">
                                    <button
                                        className="site-button pt-2 pb-2 pe-1 rounded-pill me-1"
                                        onClick={() => toggleEdit(edu.id)}
                                        type="button">
                                        Редактирай
                                        <i className="fa fa-edit ms-1"></i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsDeleteModalOpened(true)
                                            setEducationId(edu.id)
                                        }}
                                        className="btn btn-danger pt-2 pb-2 pe-1 rounded-pill"
                                        type="button">
                                        Изтрий
                                        <i className="fa fa-trash-alt ms-1"></i>
                                    </button>
                                </div>
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0 twm-time-list-title text-black">{edu.institution}</h4>
                                    <div className="twm-time-list-position">{edu.specialty}, {edu.degree}</div>

                                    <div className="twm-time-list-date">
                                        {edu.start_month + " " + edu.start_year}г. до {edu.end_month + " " + edu.end_year}г.
                                    </div>

                                    {edu.certificate && (
                                        <div className="twm-time-list-discription">
                                            <a href={`/storage/${edu.certificate}`} target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-file me-1" /> Виж сертификат / диплома
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <div className={`panel-body wt-panel-body p-a20 ${openEditId === edu.id ? 'd-block' : 'd-none'}`}>
                                    <div className="row">

                                        {/* Hidden id error */}
                                        {errors.update_id && (
                                            <div className="col-12">
                                                <div className="text-danger mb-2">{errors.update_id}</div>
                                            </div>
                                        )}

                                        {/* Institution */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Учебно заведение</label>
                                                <div className="ls-inputicon-box">
                                                    <input
                                                        className="form-control"
                                                        name="update_institution"
                                                        type="text"
                                                        defaultValue={edu.institution}
                                                    />
                                                    <i className="fs-input-icon fa fa-university" />
                                                </div>
                                                {errors.update_institution && (
                                                    <div className="text-danger">{errors.update_institution}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Specialty */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Специалност</label>
                                                <div className="ls-inputicon-box">
                                                    <input
                                                        className="form-control"
                                                        name="update_specialty"
                                                        type="text"
                                                        defaultValue={edu.specialty}
                                                    />
                                                    <i className="fs-input-icon fa fa-book" />
                                                </div>
                                                {errors.update_specialty && (
                                                    <div className="text-danger">{errors.update_specialty}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Degree */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Степен</label>
                                                <div className="ls-inputicon-box">
                                                    <select
                                                        className="form-control"
                                                        name="update_degree"
                                                    >
                                                        <option value={edu.degree} selected>
                                                            {edu.degree}
                                                        </option>
                                                        {degrees && degrees.map((degree) => (
                                                            <option key={degree.id} value={degree.name}>
                                                                {degree.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <i className="fs-input-icon fa fa-graduation-cap" />
                                                </div>
                                                {errors.update_degree && (
                                                    <div className="text-danger">{errors.update_degree}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Certificate */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Сертификат / диплома (нов файл)</label>
                                                <input
                                                    className="form-control"
                                                    name="update_certificate"
                                                    type="file"
                                                    accept=".pdf,.jpg,.jpeg,.png"
                                                />
                                                {edu.certificate && (
                                                    <small className="text-muted">
                                                        Текущ файл: {edu.certificate}
                                                    </small>
                                                )}
                                                {errors.update_certificate && (
                                                    <div className="text-danger">{errors.update_certificate}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <h3>Изберете нов период</h3>
                                                <label>Дата на започване</label>
                                                <div className="ls-inputicon-box d-flex gap-2">
                                                    <select className="form-control" name="update_year_start_from">
                                                        <option value={edu.start_year} selected>
                                                            {edu.start_year}
                                                        </option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <select className="form-control" name="update_month_start_from">
                                                        {months.map((month, idx) => (
                                                            <option key={idx} value={month}>
                                                                {month}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {errors.update_year_start_from && (
                                                    <div className="text-danger">{errors.update_year_start_from}</div>
                                                )}
                                                {errors.update_month_start_from && (
                                                    <div className="text-danger">{errors.update_month_start_from}</div>
                                                )}

                                                <label className="mt-2">Дата на приключване</label>
                                                <div className="ls-inputicon-box d-flex gap-2">
                                                    <select className="form-control" name="update_year_end_to">
                                                        <option value={edu.end_year} selected>
                                                            {edu.end_year}
                                                        </option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <select className="form-control" name="update_month_end_to">
                                                        {months.map((month, idx) => (
                                                            <option key={idx} value={month}>
                                                                {month}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {errors.update_year_end_to && (
                                                    <div className="text-danger">{errors.update_year_end_to}</div>
                                                )}
                                                {errors.update_month_end_to && (
                                                    <div className="text-danger">{errors.update_month_end_to}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Currently studying checkbox */}
                                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                                            <div className="form-group m-t30">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="update_currently_studying"
                                                        defaultChecked={edu.currently_studying}
                                                    />
                                                    {" "}В момента уча тук
                                                </label>
                                                {errors.update_currently_studying && (
                                                    <div className="text-danger">{errors.update_currently_studying}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="col-lg-12">
                                            <button type="submit" className="site-button">
                                                Запази новите промени
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Form>
                    ))}

                </div>


            </div>

            <Modal
                show={isDeleteModalOpened}
                method="delete"
                action={route("education.delete")}
                onSuccess={() => setIsDeleteModalOpened(false)}
                onClose={() => setIsDeleteModalOpened(false)}
            >
                <div className="modal-header">
                    <h3 className="modal-title mb-0">Внимание!</h3>
                </div>

                <div className="modal-body text-center">
                    <p>
                        Сигурни ли сте, че искате да изтриете това образование? <br />
                    </p>
                </div>

                <div className="modal-footer">
                    <button type="submit" className="site-button bg-danger">
                        Потвърди изтриването
                    </button>

                    <button
                        type="button"
                        className="site-button"
                        onClick={() => setIsDeleteModalOpened(false)}
                    >
                        Затвори
                    </button>
                </div>
                <input name="educationId" value={educationId} type="hidden" />
            </Modal>


            {flash?.successDeletionEducation && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletionEducation}
                </div>
            )}

            {flash?.successCreateEducation && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successCreateEducation}
                </div>
            )}

            {flash?.successUpdateEducation && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successUpdateEducation}
                </div>
            )}

            {flash?.failedEducation && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.failedEducation}
                </div>
            )}

        </>
    )
}
