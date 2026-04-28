import { usePage, Form } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import TinyMCETextEditor from "@/Components/TinyMCETextEditor";
import DOMPurify from "dompurify";



export default function WorkExperience({ years, months, cities }) {

    const { flash } = usePage();
    const candidate = usePage().props.candidate;
    const { csrf_token, errors } = usePage().props;
    const [workExperienceContent, setWorkExperienceContent] = useState('');
    const [workExperienceContentUpdate, setWorkExperienceContentUpdate] = useState('');


    const [WorkExpId, setWorkExpId] = useState('');

    const [workExperienceModal, setWorkExperienceModal] = useState(false);
    const toggleWorkExperience = () => {
        setWorkExperienceModal(prev => !prev);
    };
    const [openEditId, setOpenEditId] = useState(null);
    const toggleEdit = (id) => {
        setOpenEditId(prev => (prev === id ? null : id));
    };

    const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);

    return (
        <>
            {workExperienceModal && (
                <Form
                    method="POST"
                    options={{ preserveScroll: true }}
                    action={route('work.experience.create')}
                    onSuccess={() => setWorkExperienceModal(false)}
                    className={`modal ${workExperienceModal ? 'active' : ''}`}
                >
                    <div className="modal-content container">
                        <div className="panel panel-default">

                            {/* HEADER */}
                            <div className="panel-heading wt-panel-heading p-a20 d-flex justify-content-between align-items-center">
                                <h4 className="panel-tittle m-a0">
                                    <i className="fa fa-briefcase me-2" />
                                    Добави трудов опит
                                </h4>

                                <button
                                    onClick={toggleWorkExperience}
                                    type="button"
                                    className="site-button button-sm closeWorkExperience"
                                >
                                    <i className="fa fa-times me-1" /> Затвори
                                </button>
                            </div>

                            <div className="workExperiencePanel panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="row">

                                    {/* POSITION */}
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Длъжност</strong>  <span className="text-danger">*</span></label>
                                            <input
                                                className="form-control"
                                                name="position"
                                                type="text"
                                                placeholder="Напр. Frontend Developer"
                                            />
                                            {errors.position && (
                                                <p className="text-danger">{errors.position}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* COMPANY */}
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Компания </strong> <span className="text-danger">*</span></label>
                                            <input
                                                className="form-control"
                                                name="company"
                                                type="text"
                                                placeholder="Напр. Acme Ltd."
                                            />
                                            {errors.company && (
                                                <p className="text-danger">{errors.company}</p>
                                            )}
                                        </div>
                                    </div>



                                    {/* LOCATION */}
                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <label><strong>Държава / град</strong> <span className="text-danger">*</span></label>
                                            <select
                                                className="form-control"
                                                name="work_experience_location"
                                            >
                                                <option value="">Изберете град</option>
                                                {cities && cities.map((city) => (
                                                    <option key={city.id} value={city.city_name}>
                                                        {city.city_name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.work_experience_location && (
                                                <p className="text-danger">{errors.work_experience_location}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* RESPONSIBILITIES */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-groupd mb-0">
                                            <label><strong>Описание на отговорностите</strong></label>
                                            <TinyMCETextEditor
                                                value={workExperienceContent}
                                                onChange={setWorkExperienceContent}
                                            ></TinyMCETextEditor>
                                            <input type="hidden" name="responsibilities" value={workExperienceContent} />

                                            {errors.responsibilities && (
                                                <p className="text-danger">{errors.responsibilities}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* CURRENT POSITION */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <div className="form-check mt-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="current_position"
                                                    id="current_position"
                                                />
                                                <label
                                                    className="form-check-label ms-2"
                                                    htmlFor="current_position"
                                                >
                                                    Настояща позиция (в момента работя тук)
                                                </label>
                                            </div>

                                            {errors.current_position && (
                                                <p className="text-danger">{errors.current_position}</p>
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
                    <h4 className="panel-tittle m-a0">Работен опит</h4>
                </div>

                <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                    <button
                        onClick={toggleWorkExperience}
                        type='button'
                        className='site-button d-flex gap-2 align-items-center'>Добави работен опит
                        <i className="fa-solid fa-briefcase"></i>
                    </button>
                </div>


                <div className="twm-timing-list-wrap m-3">
                    <h3 className="p-3">Сегашен изглед</h3>

                    {candidate.work_experience.length < 1 ?
                        <p>Нямате добавен работен опит</p>
                    :''}

                    {candidate.work_experience.map((exp) => (
                        <Form
                            className='mb-4'
                            options={{ preserveScroll: true }}
                            key={exp.id}
                            method="PATCH"
                            action={route('work.experience.update')}
                        >
                            <input type="hidden" name="update_id" value={exp.id} />

                            <div className="panel panel-default m-b30 twm-timing-list">
                                <div className="edit-work-experience">
                                    <button
                                        className="site-button pt-2 pb-2 pe-1 rounded-pill me-1"
                                        onClick={() => toggleEdit(exp.id)}
                                        type="button">
                                        Редактирай
                                        <i className="fa fa-edit ms-1"></i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsDeleteModalOpened(true)
                                            setWorkExpId(exp.id)
                                        }}
                                        className="btn btn-danger pt-2 pb-2 pe-1 rounded-pill"
                                        type="button">
                                        Изтрий
                                        <i className="fa fa-trash-alt ms-1"></i>
                                    </button>
                                </div>
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0 twm-time-list-title text-black">{exp.company}</h4>
                                    <div className="twm-time-list-position">{exp.position}, гр. {exp.location}</div>

                                    <div className="twm-time-list-date">
                                        {exp.start_month + " " + exp.start_year}г. до {exp.end_month + " " + exp.end_year}г.
                                    </div>

                                    <div className="twm-time-list-discription">
                                        <p dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(exp.responsibilities).slice(0, 80) + "...",
                                        }}>
                                        </p>
                                    </div>
                                </div>

                                <div className={`panel-body wt-panel-body p-a20 ${openEditId === exp.id ? 'd-block' : 'd-none'}`}>
                                    <div className="row">

                                        {/* Hidden id error (just in case) */}
                                        {errors.update_id && (
                                            <div className="col-12">
                                                <div className="text-danger mb-2">{errors.update_id}</div>
                                            </div>
                                        )}

                                        {/* Position */}
                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Длъжност</label>
                                                <div className="ls-inputicon-box">
                                                    <input
                                                        className="form-control"
                                                        name="update_position"
                                                        type="text"
                                                        defaultValue={exp.position}
                                                    />
                                                    <i className="fs-input-icon fa fa-user" />
                                                </div>
                                                {errors.update_position && (
                                                    <div className="text-danger">{errors.update_position}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Company */}
                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Компания</label>
                                                <div className="ls-inputicon-box">
                                                    <input
                                                        className="form-control"
                                                        name="update_company"
                                                        type="text"
                                                        defaultValue={exp.company}
                                                    />
                                                    <i className="fs-input-icon fa fa-building" />
                                                </div>
                                                {errors.update_company && (
                                                    <div className="text-danger">{errors.update_company}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Изберрете друг град</label>
                                                <div className="ls-inputicon-box">
                                                    <select
                                                        className="form-control"
                                                        name="update_work_experience_location"
                                                    >
                                                        <option value={exp.location} selected>
                                                            {exp.location}
                                                        </option>
                                                        {cities && cities.map((city) => (
                                                            <option key={city.id} value={city.city_name}>
                                                                {city.city_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <i className="fs-input-icon fa fa-map-marker-alt" />
                                                </div>
                                                {errors.update_work_experience_location && (
                                                    <div className="text-danger">{errors.update_work_experience_location}</div>
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
                                                        <option value={exp.start_year} selected>
                                                            {exp.start_year}
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
                                                        <option value={exp.end_year} selected>
                                                            {exp.end_year}
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

                                        {/* Current checkbox */}
                                        <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                                            <div className="form-group m-t30">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="update_is_current"
                                                        defaultChecked={exp.is_current}
                                                    />
                                                    {" "}До момента
                                                </label>
                                                {errors.update_is_current && (
                                                    <div className="text-danger">{errors.update_is_current}</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Описание на отговорностите</label>
                                                <TinyMCETextEditor
                                                    className="form-control"
                                                    name="update_responsibilities"
                                                    initialValue={exp.responsibilities}
                                                    onChange={setWorkExperienceContentUpdate}
                                                ></TinyMCETextEditor>
                                                <input type="hidden" value={workExperienceContentUpdate || exp.responsibilities} name="update_responsibilities" />

                                                {errors.update_responsibilities && (
                                                    <div className="text-danger">{errors.update_responsibilities}</div>
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
                action={route("work.experience.delete")}
                onSuccess={() => setIsDeleteModalOpened(false)}
                onClose={() => setIsDeleteModalOpened(false)}
            >
                <div className="modal-header">
                    <h3 className="modal-title mb-0">Внимание!</h3>
                </div>

                <div className="modal-body text-center">
                    <p>
                        Сигурни ли сте, че искате да изтриете това работно място? <br />
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
                <input name="WorkExpId" value={WorkExpId} type="hidden" />
            </Modal>


            {flash?.successDeletionWorkExperience && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletionWorkExperience}
                </div>
            )}

            {flash?.successCreateWorkExperience && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successCreateWorkExperience}
                </div>
            )}


            {flash?.successUpdateWorkExperience && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successUpdateWorkExperience}
                </div>
            )}

            {flash?.failedWorkExperience && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.failedWorkExperience}
                </div>
            )}

        </>
    )

}
