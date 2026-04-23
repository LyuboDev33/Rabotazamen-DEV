import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';
import CandidateStatus from '@/Components/CandidateStatus';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import bg from "date-fns/locale/bg";
registerLocale("bg", bg);



export default function Candidate({ candidate, cities }) {
    const [avatarFile, setAvatarFile] = useState(null);
    const [aboutContent, setAboutContent] = useState('');
    const [workExperience, setWorkExperience] = useState(false);

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const toggleWorkExperience = () => {
        setWorkExperience(prev => !prev);
    };

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

            {workExperience && (
                <>
                    <div
                        className={`modal ${workExperience ? 'active' : ''}`}>
                        <div className="modal-content container p-3">



                            <button
                                onClick={toggleWorkExperience}
                                type="button"
                                class="site-button closeWorkExperience">
                                Затвори
                            </button>


                            <h3>Добави трудов опит</h3>

                            <div className="field">
                                <label>
                                    <input type="checkbox" name="no_experience" />
                                    Нямам предишен опит
                                </label>
                            </div>

                            <div className="field">
                                <label>Длъжност</label>
                                <input type="text" name="position" />
                            </div>

                            <div className="field">
                                <label>Компания</label>
                                <input type="text" name="company" />
                            </div>

                            <div className="field">
                                <label>Период от / до</label>
                                <div className="date-range">
                                    <DatePicker
                                        selectsRange
                                        startDate={startDate}
                                        endDate={endDate}
                                        onChange={(update) => setDateRange(update)}
                                        locale="bg"
                                        dateFormat="dd.MM.yyyy"
                                        placeholderText="Избери период"
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label>Държава / град</label>
                                <select
                                    className="form-control"
                                    name="work_experience_location"
                                    defaultValue={candidateData.location || ''}
                                >
                                    <option value="">Изберете град</option>
                                    {cities && cities.map((city) => (
                                        <option key={city.id} value={city.city_name}>
                                            {city.city_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="field">
                                <label>Описание на отговорностите</label>
                                <textarea name="responsibilities"></textarea>
                            </div>

                            <div className="field">
                                <label>Основни постижения</label>
                                <textarea name="achievements"></textarea>
                            </div>

                            <div className="field">
                                <label>
                                    <input type="checkbox" name="current_position" />
                                    Настояща позиция
                                </label>
                            </div>
                        </div>
                    </div>
                </>
            )}

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
                                            <label>Телефон <span className="text-danger">*</span></label>
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

                                    {/* Кратко представяне / About me */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Кратко представяне / About me</label>
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

                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <button
                                onClick={toggleWorkExperience}
                                type='button'
                                className='site-button'>Добави работен опит</button>
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Работен опит</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">

                            </div>
                        </div>

                        {/* Готовност за работа */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Предпочитание за работа</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group d-flex flex-wrap gap-4">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="work_readiness[]"
                                                    value="on_site"
                                                    defaultChecked={isChecked(workReadiness, 'on_site')}
                                                />{' '}
                                                Работа на място
                                            </label>

                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="work_readiness[]"
                                                    value="hybrid"
                                                    defaultChecked={isChecked(workReadiness, 'hybrid')}
                                                />{' '}
                                                Хибридна работа
                                            </label>

                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="work_readiness[]"
                                                    value="remote"
                                                    defaultChecked={isChecked(workReadiness, 'remote')}
                                                />{' '}
                                                Дистанционна работа
                                            </label>
                                        </div>
                                        {errors.work_readiness && (
                                            <div className="text-danger">{errors.work_readiness}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Статус */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Сегашен статус на търсенете</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group d-flex flex-wrap gap-4">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="job_status[]"
                                                    value="actively_looking"
                                                    defaultChecked={isChecked(jobStatus, 'actively_looking')}
                                                />{' '}
                                                Активно търся работа
                                            </label>

                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="job_status[]"
                                                    value="open_to_offers"
                                                    defaultChecked={isChecked(jobStatus, 'open_to_offers')}
                                                />{' '}
                                                Отворен за предложения
                                            </label>

                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="job_status[]"
                                                    value="not_looking"
                                                    defaultChecked={isChecked(jobStatus, 'not_looking')}
                                                />{' '}
                                                Не търся в момента
                                            </label>
                                        </div>
                                        {errors.job_status && (
                                            <div className="text-danger">{errors.job_status}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <button type="submit" className="site-button">
                                Запази всички промени
                            </button>
                        </div>

                    </Form>

                </div>
            </div>

            {/* Flash Messages */}
            {flash?.candidateCreate && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.candidateCreate}
                </div>
            )}

            {flash?.candidateUpdate && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.candidateUpdate}
                </div>
            )}
        </>
    );
}

Candidate.layout = page => <DashboardLayout children={page} />;
