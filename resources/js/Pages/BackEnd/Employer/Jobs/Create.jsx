import DashboardLayout from '@/Layouts/DashboardLayout';
import { Form, usePage } from '@inertiajs/react';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';
import { useState } from 'react';
import {
    DoubleRangeSlider,
    SimpleRangeSlider,
} from "react-range-slider-advanced";
import "react-range-slider-advanced/style.css";


export default function JobCreate({ cities, professionalFields, jobData = {}, errors = {}, companies }) {



    const [jobContent, setJobContent] = useState();
    const industries = usePage().props.industries;
    const languages = usePage().props.languages;
    const companyStatus = usePage().props.companyStatus;


    const [expectedMinPay, setExpectedMinPay] = useState(0);

    const [expectedMaxPay, setExpectedMaxPay] = useState(10000);

    const [jobRoles, setJobRoles] = useState([]);
    const [rolesLoading, setRolesLoading] = useState(false);

    const isChecked = (collection, value) =>
        Array.isArray(collection) && collection.includes(value);

    const handleCategoryChange = async (event) => {
        const categoryId = event.target.value;

        setJobRoles([]);

        if (!categoryId) {
            return;
        }

        try {
            setRolesLoading(true);

            const response = await axios.get(
                route('job.roles.by.category', categoryId)
            );

            setJobRoles(response.data);

        } catch (error) {
            console.error('Error loading job roles:', error);

            setJobRoles([]);

        } finally {
            setRolesLoading(false);
        }
    };

    console.log(errors);


    return (
        <>
            {companyStatus === 'approved' ? (

                <Form
                    options={{ preserveScroll: true }}
                    action={route('job.create')}
                    method="POST"
                >

                    {/* 1. Основна информация */}
                    <div className="panel panel-default">

                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                                Основна информация
                            </h4>
                        </div>


                        <div className="panel-body wt-panel-body p-a20 m-b30">

                            <div className="row">


                                {/* 1. Референтен номер */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            <u>
                                                Референтен номер
                                                <span className="text-danger"> *</span>
                                            </u>
                                        </label>

                                        <div className="ls-inputicon-box">
                                            Референтния номер ще бъде генериран автоматично от нашата система при създаване на обявата
                                        </div>

                                        {errors.job_reference_number && (
                                            <div className="text-danger">
                                                {errors.job_reference_number}
                                            </div>
                                        )}

                                    </div>

                                </div>

                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Компания
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <select
                                                className="form-control"
                                                name="company_id"
                                            >

                                                <option value="">
                                                    Изберете компания
                                                </option>

                                                {companies && companies.map((company) => (

                                                    <option
                                                        key={company.id}
                                                        value={company.id}
                                                    >
                                                        {company.company_name}
                                                    </option>

                                                ))}

                                            </select>

                                            <i className="fs-input-icon fa fa-building" />

                                        </div>

                                        {errors.company_id && (
                                            <div className="text-danger">
                                                {errors.company_id}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 2. Длъжност */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Длъжност
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <input
                                                className="form-control"
                                                name="job_title"
                                                type="text"
                                                defaultValue={jobData.job_title || ''}
                                                placeholder='Напр. "Senior Frontend Developer"'
                                            />

                                            <i className="fs-input-icon fa fa-briefcase" />

                                        </div>

                                        {errors.job_title && (
                                            <div className="text-danger">
                                                {errors.job_title}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 12. Брой отворени позиции */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Брой отворени позиции
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <input
                                                className="form-control"
                                                name="job_open_positions"
                                                type="number"
                                                min="1"
                                                defaultValue={jobData.job_open_positions || 1}
                                                placeholder="1"
                                            />

                                            <i className="fs-input-icon fa fa-users" />

                                        </div>

                                        {errors.job_open_positions && (
                                            <div className="text-danger">
                                                {errors.job_open_positions}
                                            </div>
                                        )}

                                    </div>

                                </div>

                                <div className='col-xl-8'>
                                    <label htmlFor="тест">Изберете ориентировъчно нетно възнаграждание  <span className="text-danger"> *</span></label>
                                    <DoubleRangeSlider
                                        min={620}
                                        max={10000}
                                        from={620}
                                        to={10000}
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
                                        name="job_min_salary"
                                        value={expectedMinPay}
                                    />

                                    <input
                                        type="hidden"
                                        name="job_max_salary"
                                        value={expectedMaxPay}
                                    />
                                </div>


                                {/* 3. Описание и изисквания */}
                                <div className="col-xl-12 col-lg-12 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Описание и изисквания
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <TinyMCETextEditor
                                            value={jobContent}
                                            onChange={setJobContent}
                                        />

                                        <input
                                            type="hidden"
                                            name="job_description"
                                            value={jobContent}
                                        />


                                        {/* <textarea
                                    className="form-control"
                                    name="job_description"
                                    rows="10"
                                    defaultValue={jobData.job_description || ''}
                                    placeholder="Опишете позицията, основните отговорности, изискванията към кандидатите, необходимия опит и друга важна информация..."
                                /> */}

                                        {errors.job_description && (
                                            <div className="text-danger">
                                                {errors.job_description}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 4. Категория */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Категория
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <select
                                                className="form-control"
                                                name="job_category"
                                                onChange={handleCategoryChange}
                                                defaultValue={jobData.job_category || ''}
                                            >

                                                <option value="">
                                                    Изберете категория
                                                </option>

                                                {industries && industries.map((field) => (

                                                    <option
                                                        key={field.id}
                                                        value={field.id}
                                                    >
                                                        {field.name}
                                                    </option>

                                                ))}

                                            </select>

                                            <i className="fs-input-icon fa fa-list" />

                                        </div>

                                        {errors.job_category && (
                                            <div className="text-danger">
                                                {errors.job_category}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 5. Подкатегория */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Подкатегория
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <select
                                                className="form-control"
                                                name="job_role"
                                                disabled={rolesLoading || jobRoles.length === 0}
                                                defaultValue={jobData.job_role || ''}
                                            >

                                                <option value="">
                                                    {rolesLoading
                                                        ? 'Зареждане...'
                                                        : 'Изберете подкатегория'
                                                    }
                                                </option>

                                                {jobRoles.map((role) => (

                                                    <option
                                                        key={role.id}
                                                        value={role.id}
                                                    >
                                                        {role.name}
                                                    </option>

                                                ))}

                                            </select>

                                            <i className="fs-input-icon fa fa-sitemap" />

                                        </div>

                                        {errors.job_role && (
                                            <div className="text-danger">
                                                {errors.job_role}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 9. Населено място */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Населено място / Град
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <select
                                                className="form-control"
                                                name="job_location"
                                                defaultValue={jobData.job_location || ''}
                                            >

                                                <option value="">
                                                    Изберете град
                                                </option>

                                                {cities && cities.map((city) => (

                                                    <option
                                                        key={city.id}
                                                        value={city.id}
                                                    >
                                                        {city.city_name}
                                                    </option>

                                                ))}

                                            </select>

                                            <i className="fs-input-icon fa fa-map-marker-alt" />

                                        </div>

                                        {errors.job_location && (
                                            <div className="text-danger">
                                                {errors.job_location}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 9. Адрес */}
                                <div className="col-xl-4 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Адрес
                                            <span className="text-danger"> *</span>
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <input
                                                className="form-control"
                                                name="job_address"
                                                type="text"
                                                defaultValue={jobData.job_address || ''}
                                                placeholder='Напр. "бул. България 100"'
                                            />

                                            <i className="fs-input-icon fa fa-location-dot" />

                                        </div>

                                        {errors.job_address && (
                                            <div className="text-danger">
                                                {errors.job_address}
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* 10. Годишен отпуск */}
                                <div className="col-xl-6 col-lg-6 col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Годишен отпуск
                                        </label>

                                        <div className="ls-inputicon-box">

                                            <input
                                                className="form-control"
                                                name="job_annual_leave"
                                                type="number"
                                                min="0"
                                                defaultValue={jobData.job_annual_leave || ''}
                                                placeholder="Напр. 20"
                                            />

                                            <i className="fs-input-icon fa fa-calendar-days" />

                                        </div>

                                        <small className="text-muted">
                                            Въведете броя дни платен годишен отпуск.
                                        </small>

                                        {errors.job_annual_leave && (
                                            <div className="text-danger">
                                                {errors.job_annual_leave}
                                            </div>
                                        )}

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>



                    {/* 2. Вид и ниво на позицията */}
                    <div className="panel panel-default">

                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                                Вид и ниво на позицията
                            </h4>
                        </div>


                        <div className="panel-body wt-panel-body p-a20 m-b30">

                            <div className="row">


                                {/* 5. Вид работа */}
                                <div className="col-xl-12 mb-4">

                                    <h3>
                                        Вид работа:
                                        <span className="text-danger"> *</span>
                                    </h3>

                                    <p className="text-muted">
                                        Може да бъде избрана само една опция.
                                    </p>

                                    <div className="radio-group">

                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_work_type"
                                                value="permanent"
                                                defaultChecked={
                                                    jobData.job_work_type === 'permanent'
                                                }
                                            />

                                            <span>
                                                Постоянна работа
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_work_type"
                                                value="temporary"
                                                defaultChecked={
                                                    jobData.job_work_type === 'temporary'
                                                }
                                            />

                                            <span>
                                                Временна работа
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_work_type"
                                                value="internship"
                                                defaultChecked={
                                                    jobData.job_work_type === 'internship'
                                                }
                                            />

                                            <span>
                                                Стаж
                                            </span>

                                        </label>

                                    </div>

                                    {errors.job_work_type && (
                                        <div className="text-danger">
                                            {errors.job_work_type}
                                        </div>
                                    )}

                                </div>


                                <hr />


                                {/* 6. Вид заетост */}
                                <div className="col-xl-12 mb-4">

                                    <h3>
                                        Вид заетост:
                                        <span className="text-danger"> *</span>
                                    </h3>

                                    <p className="text-muted">
                                        Може да бъде избрана само една опция.
                                    </p>

                                    <div className="radio-group">

                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_employment_type"
                                                value="full_time"
                                                defaultChecked={
                                                    jobData.job_employment_type === 'full_time'
                                                }
                                            />

                                            <span>
                                                Пълен работен ден
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_employment_type"
                                                value="part_time"
                                                defaultChecked={
                                                    jobData.job_employment_type === 'part_time'
                                                }
                                            />

                                            <span>
                                                Непълен работен ден
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_employment_type"
                                                value="flexible"
                                                defaultChecked={
                                                    jobData.job_employment_type === 'flexible'
                                                }
                                            />

                                            <span>
                                                Гъвкаво работно време
                                            </span>

                                        </label>

                                    </div>

                                    {errors.job_employment_type && (
                                        <div className="text-danger">
                                            {errors.job_employment_type}
                                        </div>
                                    )}

                                </div>


                                <hr />


                                {/* 7. Ниво на позицията */}
                                <div className="col-xl-12 mb-4">

                                    <h3>
                                        Ниво на позицията:
                                        <span className="text-danger"> *</span>
                                    </h3>

                                    <div className="radio-group">

                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="intern"
                                                defaultChecked={
                                                    jobData.job_level === 'intern'
                                                }
                                            />

                                            <span>
                                                Стажант
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="junior"
                                                defaultChecked={
                                                    jobData.job_level === 'junior'
                                                }
                                            />

                                            <span>
                                                Junior
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="mid"
                                                defaultChecked={
                                                    jobData.job_level === 'mid'
                                                }
                                            />

                                            <span>
                                                Mid
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="senior"
                                                defaultChecked={
                                                    jobData.job_level === 'senior'
                                                }
                                            />

                                            <span>
                                                Senior
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="team_leader"
                                                defaultChecked={
                                                    jobData.job_level === 'team_leader'
                                                }
                                            />

                                            <span>
                                                Team Leader
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="lead"
                                                defaultChecked={
                                                    jobData.job_level === 'lead'
                                                }
                                            />

                                            <span>
                                                Lead
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="architect"
                                                defaultChecked={
                                                    jobData.job_level === 'architect'
                                                }
                                            />

                                            <span>
                                                Architect
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="manager"
                                                defaultChecked={
                                                    jobData.job_level === 'manager'
                                                }
                                            />

                                            <span>
                                                Manager
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="director"
                                                defaultChecked={
                                                    jobData.job_level === 'director'
                                                }
                                            />

                                            <span>
                                                Director
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="head_of_department"
                                                defaultChecked={
                                                    jobData.job_level === 'head_of_department'
                                                }
                                            />

                                            <span>
                                                Head of Department
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_level"
                                                value="executive"
                                                defaultChecked={
                                                    jobData.job_level === 'executive'
                                                }
                                            />

                                            <span>
                                                Executive
                                            </span>

                                        </label>

                                    </div>

                                    {errors.job_level && (
                                        <div className="text-danger">
                                            {errors.job_level}
                                        </div>
                                    )}

                                </div>


                                <hr />


                                {/* 8. Опции за дистанционна работа */}
                                <div className="col-xl-12 mb-4">

                                    <h3>
                                        Опции за дистанционна работа:
                                        <span className="text-danger"> *</span>
                                    </h3>

                                    <p className="text-muted">
                                        Може да бъде избрана само една опция.
                                    </p>

                                    <div className="radio-group">

                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_remote_option"
                                                value="office"
                                                defaultChecked={
                                                    jobData.job_remote_option === 'office'
                                                }
                                            />

                                            <span>
                                                Изцяло офис
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_remote_option"
                                                value="hybrid"
                                                defaultChecked={
                                                    jobData.job_remote_option === 'hybrid'
                                                }
                                            />

                                            <span>
                                                Хибрид
                                            </span>

                                        </label>


                                        <label className="radio-card">

                                            <input
                                                type="radio"
                                                name="job_remote_option"
                                                value="remote"
                                                defaultChecked={
                                                    jobData.job_remote_option === 'remote'
                                                }
                                            />

                                            <span>
                                                Дистанционна работа
                                            </span>

                                        </label>

                                    </div>

                                    {errors.job_remote_option && (
                                        <div className="text-danger">
                                            {errors.job_remote_option}
                                        </div>
                                    )}

                                </div>


                            </div>

                        </div>

                    </div>



                    {/* 3. Чужди езици */}
                    <div className="panel panel-default">

                        <div className="panel-heading wt-panel-heading p-a20">

                            <h4 className="panel-tittle m-a0">
                                Чужди езици
                            </h4>

                        </div>


                        <div className="panel-body wt-panel-body p-a20 m-b30">

                            <div className="row">

                                <div className="col-xl-12">

                                    <h3>
                                        Изберете необходимите чужди езици:
                                    </h3>

                                    <p className="text-muted">
                                        Можете да изберете повече от един език.
                                    </p>

                                    <div className="radio-group">

                                        {languages.map((language) => (
                                            <label
                                                className="radio-card"
                                                key={language.id}
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="job_languages[]"
                                                    value={language.id}
                                                />

                                                <span>
                                                    {language.language_name}
                                                </span>
                                            </label>
                                        ))}

                                    </div>

                                    {errors.job_languages && (
                                        <div className="text-danger mt-2">
                                            {errors.job_languages}
                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* 4. Save */}
                    <div className="panel panel-default">

                        <div className="panel-body wt-panel-body p-a20">

                            <div className="text-left">

                                <button
                                    type="submit"
                                    className="site-button"
                                >
                                    Запази обявата
                                </button>

                            </div>

                        </div>

                    </div>

                </Form>

            ) : (
                <div className="alert-danger p-3 m-3 rounded-3">
                    Акаунтът ви очаква одобрение в момента и все още не можете да качвате обяви.
                </div>
            )}
        </>
    );



}


JobCreate.layout = page => (
    <DashboardLayout children={page} />
);
