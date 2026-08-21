import DashboardLayout from '@/Layouts/DashboardLayout';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';

import { Form } from '@inertiajs/react';
import { useState } from 'react';

import axios from 'axios';
import { router } from '@inertiajs/react';

import {
    DoubleRangeSlider,
    SimpleRangeSlider,
} from "react-range-slider-advanced";
import "react-range-slider-advanced/style.css";


export default function Show({
    job,
    cities,
    industries,
    languages,
    jobRoles: initialJobRoles,
    errors = {},
}) {

    const [jobContent, setJobContent] = useState(
        job.description || ''
    );

    const [jobRoles, setJobRoles] = useState(
        initialJobRoles || []
    );

    const [expectedMinPay, setExpectedMinPay] = useState(
        job.min_salary ?? 620
    );

    const [expectedMaxPay, setExpectedMaxPay] = useState(
        job.max_salary ?? 10000
    );

    const [rolesLoading, setRolesLoading] = useState(false);


    const selectedLanguages = Array.isArray(job.languages)
        ? job.languages.map(language => language.id)
        : [];


    const isLanguageChecked = (languageId) => {
        return selectedLanguages.includes(languageId);
    };


    const handleCategoryChange = async (event) => {

        const categoryId = event.target.value;

        setJobRoles([]);

        if (!categoryId) {
            return;
        }

        try {

            setRolesLoading(true);

            const response = await axios.get(
                route(
                    'job.roles.by.category',
                    categoryId
                )
            );

            setJobRoles(response.data);

        } catch (error) {

            console.error(
                'Error loading job roles:',
                error
            );

            setJobRoles([]);

        } finally {

            setRolesLoading(false);

        }
    };




    return (

        <Form
            options={{
                preserveScroll: true,
            }}
            action={route('job.update', job.reference_number)}
            method="PUT"
        >


            {/* Основна информация */}
            <div className="panel panel-default">

                <div className="panel-heading wt-panel-heading p-a20">

                    <h4 className="panel-tittle m-a0">
                        Редактиране на обява {job.reference_number} | Фирма: {job.publisher.company_name}
                    </h4>

                </div>


                <div className="panel-body wt-panel-body p-a20 m-b30">

                    <div className="row">




                        {/* Job Title */}
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
                                        defaultValue={job.title || ''}
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


                        {/* Open Positions */}
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
                                        defaultValue={job.open_positions || 1}
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



                        {/* City */}
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
                                        defaultValue={job.city_id || ''}
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

                        <div className="col-xl-8">

                            <label>
                                Изберете ориентировъчно нетно възнаграждение
                                <span className="text-danger"> *</span>
                            </label>

                            <DoubleRangeSlider
                                min={620}
                                max={10000}
                                from={job.min_salary ?? 620}
                                to={job.max_salary ?? 10000}
                                numberOfSections={10}
                                separator=","
                                postfix=" EUR"
                                valuesSeparator="-"
                                onFinish={({ from, to }) => {
                                    setExpectedMinPay(from);
                                    setExpectedMaxPay(to);
                                }}
                            />

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

                            {errors.job_min_salary && (
                                <div className="text-danger">
                                    {errors.job_min_salary}
                                </div>
                            )}

                            {errors.job_max_salary && (
                                <div className="text-danger">
                                    {errors.job_max_salary}
                                </div>
                            )}

                        </div>

                        <div className='col-xl-4'>
                            <div className="form-group">
                                <label>
                                    Статус на обявата
                                </label>

                                <select
                                    className="form-control"
                                    value={job.is_active === 1 ? '1' : '0'}
                                    onChange={(e) => {
                                        router.put(route('job.change.status', job.reference_number),
                                            {
                                                is_active: e.target.value
                                            },
                                            {
                                                preserveScroll: true
                                            }
                                        );
                                    }}
                                >
                                    <option value="1">Активна</option>
                                    <option value="0">Неактивна</option>
                                </select>
                            </div>
                        </div>


                        {/* Description */}
                        <div className="col-xl-12 col-lg-12 col-md-12">

                            <div className="form-group">

                                <label>
                                    Описание и изисквания
                                    <span className="text-danger"> *</span>
                                </label>

                                <TinyMCETextEditor
                                    initialValue={job.description || ''}
                                    onChange={setJobContent}
                                />

                                <input
                                    type="hidden"
                                    name="job_description"
                                    value={jobContent}
                                />

                                {errors.job_description && (
                                    <div className="text-danger">
                                        {errors.job_description}
                                    </div>
                                )}

                            </div>

                        </div>


                        {/* Category */}
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
                                        defaultValue={job.category_id || ''}
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


                        {/* Job Role */}
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
                                        disabled={jobRoles.length === 0}
                                        defaultValue={job.job_role_id || ''}
                                        key={`${job.category_id}-${jobRoles.length}`}
                                    >

                                        <option value="">


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



                        {/* Address */}
                        <div className="col-xl-4 col-lg-4 col-md-12">

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
                                        defaultValue={job.address || ''}
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


                        {/* Annual Leave */}
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
                                        defaultValue={job.annual_leave ?? ''}
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



            {/* Вид и ниво на позицията */}
            <div className="panel panel-default">

                <div className="panel-heading wt-panel-heading p-a20">

                    <h4 className="panel-tittle m-a0">
                        Вид и ниво на позицията
                    </h4>

                </div>


                <div className="panel-body wt-panel-body p-a20 m-b30">

                    <div className="row">


                        {/* Work Type */}
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
                                            job.work_type === 'permanent'
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
                                            job.work_type === 'temporary'
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
                                            job.work_type === 'internship'
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


                        {/* Employment Type */}
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
                                            job.employment_type === 'full_time'
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
                                            job.employment_type === 'part_time'
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
                                            job.employment_type === 'flexible'
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


                        {/* Position Level */}
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
                                        defaultChecked={job.position_level === 'intern'}
                                    />
                                    <span>Стажант</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="junior"
                                        defaultChecked={job.position_level === 'junior'}
                                    />
                                    <span>Junior</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="mid"
                                        defaultChecked={job.position_level === 'mid'}
                                    />
                                    <span>Mid</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="senior"
                                        defaultChecked={job.position_level === 'senior'}
                                    />
                                    <span>Senior</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="team_leader"
                                        defaultChecked={job.position_level === 'team_leader'}
                                    />
                                    <span>Team Leader</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="lead"
                                        defaultChecked={job.position_level === 'lead'}
                                    />
                                    <span>Lead</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="architect"
                                        defaultChecked={job.position_level === 'architect'}
                                    />
                                    <span>Architect</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="manager"
                                        defaultChecked={job.position_level === 'manager'}
                                    />
                                    <span>Manager</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="director"
                                        defaultChecked={job.position_level === 'director'}
                                    />
                                    <span>Director</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="head_of_department"
                                        defaultChecked={job.position_level === 'head_of_department'}
                                    />
                                    <span>Head of Department</span>
                                </label>


                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="executive"
                                        defaultChecked={job.position_level === 'executive'}
                                    />
                                    <span>Executive</span>
                                </label>


                            </div>

                            {errors.job_level && (
                                <div className="text-danger">
                                    {errors.job_level}
                                </div>
                            )}

                        </div>


                        <hr />


                        {/* Remote Option */}
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
                                            job.remote_option === 'office'
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
                                            job.remote_option === 'hybrid'
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
                                            job.remote_option === 'remote'
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



            {/* Languages */}
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

                                {languages && languages.map((language) => (

                                    <label
                                        className="radio-card"
                                        key={language.id}
                                    >

                                        <input
                                            type="checkbox"
                                            name="job_languages[]"
                                            value={language.id}
                                            defaultChecked={
                                                isLanguageChecked(language.id)
                                            }
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



            {/* Save */}
            <div className="panel panel-default">

                <div className="panel-body wt-panel-body p-a20">

                    <div className="text-left">

                        <button
                            type="submit"
                            className="site-button"
                        >
                            Запази промените
                        </button>

                    </div>

                </div>

            </div>


        </Form>

    );
}


Show.layout = page => (
    <DashboardLayout children={page} />
);
