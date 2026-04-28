import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';
import CandidateStatus from '@/Components/CandidateStatus';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';
import { router } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import WorkExperience from './DocumentsCVPartials/WorkExperience';
import Education from './DocumentsCVPartials/Education';

export default function Candidate({ candidate, cities }) {

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

    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = 2000; y <= currentYear; y++) {
        years.push(y);
    }
    const [avatarFile, setAvatarFile] = useState(null);
    const [aboutContent, setAboutContent] = useState('');
    const [showDeleteCVModal, setShowDeleteCVModal] = useState(false);
    const [CVId, setCVId] = useState('');




    const { csrf_token, errors, candidateStatus, auth } = usePage().props;
    const { flash } = usePage();
    const profilePic = auth.profilePic;

    const candidateData = candidate || {};

    const workReadiness = candidateData.work_readiness || [];
    const jobStatus = candidateData.job_status || [];

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
                        // action={
                        //     candidate
                        //         ? route('candidate.update', candidate.id)
                        //         : route('candidate.store')
                        // }
                        method={candidate ? 'put' : 'post'}
                        encType="multipart/form-data"
                        onSuccess={() => {
                            setAvatarFile(null);
                        }}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />

                        {/* Профилна снимка */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Профилна снимка</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="dashboard-profile-section clearfix">
                                    <div className="dashboard-profile-pic d-flex gap-4">
                                        <div className="dashboard-profile-photo">
                                            <img
                                                src={profilePic}
                                                alt="Профилна снимка"
                                            />

                                            <div className="upload-btn-wrapper">
                                                <div id="upload-avatar-grid" />
                                                <button type="button" className="site-button button-sm">
                                                    Прикачи снимка
                                                </button>

                                                <input
                                                    id="avatar-uploader"
                                                    accept=".jpg,.jpeg,.png,.svg"
                                                    name="profile_picture"
                                                    type="file"
                                                    onChange={handleAvatarChange}
                                                />
                                            </div>
                                        </div>

                                        {avatarFile && (
                                            <img
                                                height={125}
                                                width={150}
                                                src={avatarFile}
                                                style={{ objectFit: 'cover' }}
                                                alt="Avatar preview"
                                            />
                                        )}
                                    </div>

                                    {errors.profile_picture && (
                                        <div className="text-danger">
                                            {errors.profile_picture}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

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
                                    <div className="col-xl-12 mb-3">
                                        <h3>Отбележете в какъв период се намирате:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="job_status"
                                                    value="actively_looking"
                                                    defaultChecked={jobStatus === 'actively_looking'}
                                                />
                                                <span>Активно търся работа</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="job_status"
                                                    value="open_to_offers"
                                                    defaultChecked={jobStatus === 'open_to_offers'}
                                                />
                                                <span>Отворен за предложения</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="radio"
                                                    name="job_status"
                                                    value="not_looking"
                                                    defaultChecked={jobStatus === 'not_looking'}
                                                />
                                                <span>Не търся в момента</span>
                                            </label>

                                        </div>

                                        {errors.job_status && (
                                            <div className="text-danger">{errors.job_status}</div>
                                        )}
                                    </div>
                                    <hr />
                                    <div className="col-xl-12 mb-3">
                                        <h3>Ибзерете предпочитан модел на работа:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="on_site"
                                                    defaultChecked={isChecked(workReadiness, 'on_site')}
                                                />
                                                <span>Работа на място</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="hybrid"
                                                    defaultChecked={isChecked(workReadiness, 'hybrid')}
                                                />
                                                <span>Хибридна работа</span>
                                            </label>

                                            <label className="radio-card">
                                                <input
                                                    type="checkbox"
                                                    name="work_model[]"
                                                    value="remote"
                                                    defaultChecked={isChecked(workReadiness, 'remote')}
                                                />
                                                <span>Дистанционна работа</span>
                                            </label>

                                        </div>

                                        {errors.work_readiness && (
                                            <div className="text-danger">{errors.work_readiness}</div>
                                        )}
                                    </div>


                                    <hr />

                                    <div className="col-xl-12 mb-3">
                                        <h3>Ключови умения:</h3>

                                        <div className="radio-group">

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="communication" />
                                                <span>Комуникация</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="teamwork" />
                                                <span>Работа в екип</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="problem_solving" />
                                                <span>Решаване на проблеми</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="adaptability" />
                                                <span>Адаптивност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="organization" />
                                                <span>Организираност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="time_management" />
                                                <span>Управление на времето</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="critical_thinking" />
                                                <span>Критично мислене</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="analytical_thinking" />
                                                <span>Аналитично мислене</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="independence" />
                                                <span>Самостоятелност</span>
                                            </label>

                                            <label className="radio-card">
                                                <input type="checkbox" name="skills[]" value="work_under_pressure" />
                                                <span>Работа под напрежение</span>
                                            </label>

                                        </div>

                                        {errors.skills && (
                                            <div className="text-danger">{errors.skills}</div>
                                        )}
                                    </div>

                                    <hr />

                                    {/* Кратко представяне / About me */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label className='mb-2'><strong>Кратко представяне</strong> - Представете себе си, уменията си, технологиите с които сте работили и всичко което смятате за релевантно пред потенциални работодатели.</label>
                                            <TinyMCETextEditor
                                                value={aboutContent}
                                                onChange={setAboutContent}
                                            />
                                            <input type="hidden" name="blog_content" value={aboutContent} />
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
