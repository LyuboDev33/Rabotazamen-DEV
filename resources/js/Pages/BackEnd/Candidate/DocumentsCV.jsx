import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';
import CandidateStatus from '@/Components/CandidateStatus';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';
import { router } from '@inertiajs/react';
import {
    DoubleRangeSlider,
    SimpleRangeSlider,
} from "react-range-slider-advanced";
import "react-range-slider-advanced/style.css";

import Modal from '@/Components/Modal';
import WorkExperience from './DocumentsCVPartials/WorkExperience';
import Education from './DocumentsCVPartials/Education';

export default function Candidate({ candidate, cities }) {


    const candidateData = candidate || {};


    const months = [
        "Януари",
        "Февруари",
        "Март",
        "Април",
        "Май",
        "Юни",
        "Юли",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември"
    ];

    const yearsExperience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = 2000; y <= currentYear; y++) {
        years.push(y);
    }
    const [expectedMinPay, setExpectedMinPay] = useState(
        candidateData?.min_salary ?? 0
    );

    const [expectedMaxPay, setExpectedMaxPay] = useState(
        candidateData?.max_salary ?? 10000
    );

    const [avatarFile, setAvatarFile] = useState(null);
    const [aboutContent, setAboutContent] = useState('');
    const [showDeleteCVModal, setShowDeleteCVModal] = useState(false);
    const [CVId, setCVId] = useState('');


    const { csrf_token, errors, candidateStatus, auth } = usePage().props;
    const { flash } = usePage();


    function handleAvatarChange(e) {
        if (e.target.files[0]) {
            setAvatarFile(URL.createObjectURL(e.target.files[0]));
        }
    }


    function isChecked(array, value) {
        return Array.isArray(array) && array.includes(value);
    }


    return (
        <>
            <Head>
                <title>Кандидат | Вашия профил</title>
            </Head>



            <div>
                <div className="content-admin-main">

                    <CandidateStatus candidateStatus={candidateStatus} />

                    <Form
                        options={{ preserveScroll: true }}
                        action={route('populate.candidate')}
                        method="PATCH"
                        encType="multipart/form-data"
                        onSuccess={() => {
                            setAvatarFile(null);
                        }}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />

                        {/* Профилна снимка */}
             

                        {/* Основна информация */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Основна информация</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">

                                    {/* Професионално заглавие */}
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Професионално заглавие (Не е задължително)</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="professional_title"
                                                    type="text"
                                                    defaultValue={candidateData.professional_title || ''}
                                                    placeholder='Напр. "Customer Support Specialist"'
                                                />
                                                <i className="fs-input-icon fa fa-briefcase" />
                                            </div>
                                            {errors.professional_title && (
                                                <div className="text-danger">{errors.professional_title}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Телефон */}
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Служебен телефон <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="phone"
                                                    type="tel"
                                                    defaultValue={candidateData.phone || ''}
                                                    placeholder="+359 ..."
                                                />
                                                <i className="fs-input-icon fa fa-phone" />
                                            </div>
                                            {errors.phone && (
                                                <div className="text-danger">{errors.phone}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Локация */}
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Локация <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <select
                                                    className="form-control"
                                                    name="location"
                                                    defaultValue={candidateData.location || ''}
                                                >
                                                    <option value="">Изберете град</option>
                                                    {cities && cities.map((city) => (
                                                        <option key={city.id} value={city.city_name}>
                                                            {city.city_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <i className="fs-input-icon fa fa-map-marker-alt" />
                                            </div>
                                            {errors.location && (
                                                <div className="text-danger">{errors.location}</div>
                                            )}
                                        </div>
                                    </div>


                                    <hr />

                                    {/* Work status */}
                                    <div className="col-xl-12 mb-3">
                                        <h3>Отбележете в какъв период се намирате:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="work_status"
                                                    value="actively_looking"
                                                    defaultChecked={candidateData.work_status === 'actively_looking'}
                                                />
                                                <span>Активно търся работа</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="work_status"
                                                    value="open_to_offers"
                                                    defaultChecked={candidateData.work_status === 'open_to_offers'}
                                                />
                                                <span>Отворен за предложения</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="work_status"
                                                    value="not_looking"
                                                    defaultChecked={candidateData.work_status === 'not_looking'}
                                                />
                                                <span>Не търся в момента</span>
                                            </label>

                                        </div>

                                        {errors.work_status && (
                                            <div className="text-danger">{errors.work_status}</div>
                                        )}
                                    </div>

                                    <hr />

                                    <h3>Отбележете вашия опит</h3>

                                    <div className="col-xl-3 mb-3">
                                        <h3>Години опит:</h3>

                                        <select
                                            name="years_experience"
                                            className="form-control"
                                            defaultValue={candidateData.years_experience || ""}
                                        >
                                            <option value="">Избери години опит</option>

                                            {yearsExperience.map((year) => (
                                                <option key={year} value={year}>
                                                    {year} {year === 1 ? "година" : "години"}
                                                </option>
                                            ))}
                                        </select>

                                        {errors.years_experience && (
                                            <div className="text-danger">{errors.years_experience}</div>
                                        )}
                                    </div>



                                    <div className="col-xl-3 mb-3">
                                        <h3>Ниво (Seniority):</h3>

                                        <select
                                            name="seniority"
                                            className="form-control"
                                            defaultValue={candidateData.seniority || ""}
                                        >
                                            <option value="">Избери ниво</option>

                                            <option value="junior">Junior</option>
                                            <option value="mid">Mid</option>
                                            <option value="team_leader">Team Leader</option>
                                            <option value="senior">Senior</option>
                                            <option value="principal">Principal</option>
                                            <option value="cto">CTO</option>
                                        </select>

                                        {errors.seniority && (
                                            <div className="text-danger">{errors.seniority}</div>
                                        )}
                                    </div>

                                    <h3>Изберете диапазон на желаното възнаграждение</h3>

                                    <DoubleRangeSlider
                                        min={620}
                                        max={10000}
                                        from={candidateData.min_salary ?? 620}
                                        to={candidateData.max_salary ?? 10000}
                                        numberOfSections={10}
                                        separator=","

                                        postfix=" EUR"
                                        valuesSeparator='-'
                                        onFinish={({ from, to }) => {
                                            setExpectedMinPay(from);
                                            setExpectedMaxPay(to);
                                        }}
                                    />

                                    {/* Hidden inputs for backend */}
                                    <input
                                        type="hidden"
                                        name="min_salary"
                                        value={expectedMinPay}
                                    />

                                    <input
                                        type="hidden"
                                        name="max_salary"
                                        value={expectedMaxPay}
                                    />

                                    {errors.min_salary && (
                                        <div className="text-danger">{errors.min_salary}</div>
                                    )}

                                    {errors.max_salary && (
                                        <div className="text-danger">{errors.max_salary}</div>
                                    )}
                                    <hr />
                                    {/* Work model */}
                                    <div className="col-xl-12 mb-3">
                                        <h3>Изберете предпочитан модел на работа:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="on_site"
                                                    defaultChecked={isChecked(candidateData.work_model, 'on_site')}
                                                />
                                                <span>Работа на място</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="hybrid"
                                                    defaultChecked={isChecked(candidateData.work_model, 'hybrid')}
                                                />
                                                <span>Хибридна работа</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="remote"
                                                    defaultChecked={isChecked(candidateData.work_model, 'remote')}
                                                />
                                                <span>Дистанционна работа</span>
                                            </label>

                                        </div>

                                        {errors.work_model && (
                                            <div className="text-danger">{errors.work_model}</div>
                                        )}
                                    </div>

                                    <hr />



                                    {/* Skills */}
                                    <div className="col-xl-12 mb-3">
                                        <h3>Ключови умения:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="communication"
                                                    defaultChecked={isChecked(candidateData.skills, 'communication')}
                                                />
                                                <span>Комуникация</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="teamwork"
                                                    defaultChecked={isChecked(candidateData.skills, 'teamwork')}
                                                />
                                                <span>Работа в екип</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="problem_solving"
                                                    defaultChecked={isChecked(candidateData.skills, 'problem_solving')}
                                                />
                                                <span>Решаване на проблеми</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="adaptability"
                                                    defaultChecked={isChecked(candidateData.skills, 'adaptability')}
                                                />
                                                <span>Адаптивност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="organization"
                                                    defaultChecked={isChecked(candidateData.skills, 'organization')}
                                                />
                                                <span>Организираност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="time_management"
                                                    defaultChecked={isChecked(candidateData.skills, 'time_management')}
                                                />
                                                <span>Управление на времето</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="critical_thinking"
                                                    defaultChecked={isChecked(candidateData.skills, 'critical_thinking')}
                                                />
                                                <span>Критично мислене</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="analytical_thinking"
                                                    defaultChecked={isChecked(candidateData.skills, 'analytical_thinking')}
                                                />
                                                <span>Аналитично мислене</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="independence"
                                                    defaultChecked={isChecked(candidateData.skills, 'independence')}
                                                />
                                                <span>Самостоятелност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="skills[]"
                                                    value="work_under_pressure"
                                                    defaultChecked={isChecked(candidateData.skills, 'work_under_pressure')}
                                                />
                                                <span>Работа под напрежение</span>
                                            </label>

                                        </div>

                                        {errors.skills && (
                                            <div className="text-danger">{errors.skills}</div>
                                        )}
                                    </div>

                                    <hr />

                                    {/* About me */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label className='mb-2'>
                                                <strong>Кратко представяне</strong> - Представете себе си, уменията си, технологиите с които сте работили и всичко което смятате за релевантно пред потенциални работодатели.
                                            </label>
                                            <TinyMCETextEditor
                                                value={aboutContent}
                                                onChange={setAboutContent}
                                                initialValue={candidateData.about_me || ''}
                                            />
                                            <input
                                                type="hidden"
                                                name="about_me"
                                                value={aboutContent || candidateData.about_me || ''}
                                            />
                                            {errors.about_me && (
                                                <div className="text-danger">{errors.about_me}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <button type="submit" className="site-button">
                                            Запази промените
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Form>

                    <WorkExperience
                        months={months}
                        cities={cities}
                        years={years}></WorkExperience>

                    <Education
                        months={months}
                        cities={cities}
                        years={years}
                    ></Education>

                    <div className="panel panel-default">

                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                                Добавете CV (PDF <i className="fa-regular fa-file-pdf"></i>)
                            </h4>
                        </div>

                        {/* UPLOAD */}
                        <label className="custum-file-upload" htmlFor="file">
                            <div className="icon">
                                <i className="fa-regular fa-file-pdf"></i>
                            </div>

                            <div className="text">
                                <span>Прикачете файл</span>
                            </div>

                            <input
                                type="file"
                                id="file"
                                name="cv_upload"
                                accept="application/pdf"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    const formData = new FormData();
                                    formData.append('cv_upload', file);

                                    router.post(route('upload.cv'), formData, {
                                        preserveScroll: true,
                                        onFinish: () => {
                                            e.target.value = null;
                                        }
                                    });
                                }}
                            />
                        </label>

                        {/* ERROR */}
                        {errors.cv_upload && (
                            <div className="text-danger mt-2">
                                {errors.cv_upload}
                            </div>
                        )}

                        <hr className='mb-0' />

                        {/* CV LIST */}
                        <div className="panel-body wt-panel-body p-a20 m-b30 bg-white d-flex flex-wrap gap-3">

                            {candidate?.c_vs && candidate.c_vs.length > 0 ? (
                                candidate.c_vs.map((cv) => (
                                    <div
                                        key={cv.id}
                                        className="cv-card custum-file-upload position-relative"
                                    >

                                        {/* DELETE BUTTON */}
                                        <button
                                            type="button"
                                            className="cv-delete-btn"
                                            onClick={() => {
                                                setShowDeleteCVModal(true);
                                                setCVId(cv.id)
                                            }}
                                        >
                                            Изтрий файла
                                        </button>

                                        {/* ICON */}
                                        <div className="icon">
                                            <i className="fa-regular fa-file-pdf"></i>
                                        </div>

                                        {/* FILE NAME */}
                                        <div className="text">
                                            <span>{cv.file_name}</span>
                                        </div>
                                        <hr className='w-100 mt-0 mb-0' />
                                        <a className='pdfDownload' download href={`/assets/pdfs/${cv.file_name}`}>Свали файл</a>

                                    </div>
                                ))
                            ) : (
                                <p>Нямате качени CV файлове.</p>
                            )}

                        </div>
                    </div>



                </div>
            </div>

            <Modal
                show={showDeleteCVModal}
                method="delete"
                action={route("delete.cv")}
                onSuccess={() => setShowDeleteCVModal(false)}
                onClose={() => setShowDeleteCVModal(false)}
            >
                <div className="modal-header">
                    <h3 className="modal-title mb-0">Внимание!</h3>
                </div>

                <div className="modal-body text-center">
                    <p>
                        Сигурни ли сте, че искате да изтриете този PDF Файл? <br />
                    </p>
                </div>

                <div className="modal-footer">

                    <button type="submit" className="site-button bg-danger">
                        Потвърди изтриването
                    </button>

                    <button
                        type="button"
                        className="site-button"
                        onClick={() => setShowDeleteCVModal(false)}
                    >
                        Затвори
                    </button>
                </div>
                <input name="CVid" value={CVId} type="hidden" />
            </Modal>


            {flash?.successUpdateCandidate && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successUpdateCandidate}
                </div>
            )}

            {/* Flash Messages */}
            {flash?.successUploadCV && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successUploadCV}
                </div>
            )}

            {flash?.successDeletingCV && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletingCV}
                </div>
            )}

            {flash?.CVAlreadyExists && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.CVAlreadyExists}
                </div>
            )}

            {flash?.errorDeletingCV && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.errorDeletingCV}
                </div>
            )}
        </>
    );
}

Candidate.layout = page => <DashboardLayout children={page} />;
