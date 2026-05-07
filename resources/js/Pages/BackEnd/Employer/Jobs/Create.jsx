import DashboardLayout from '@/Layouts/DashboardLayout';
import { Form, usePage } from '@inertiajs/react';


export default function JobCreate({
    cities,
    industries,
    professionalFields,
    jobData = {},
    errors = {},
}) {

    const isChecked = (collection, value) =>
        Array.isArray(collection) && collection.includes(value);

    return (
        <Form
            options={{ preserveScroll: true }}
            action={route('job.create')}
            method="POST"
            encType="multipart/form-data"
        >

            {/* 1. Основна информация */}
            <div className="panel panel-default">
                <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Основна информация</h4>
                </div>

                <div className="panel-body wt-panel-body p-a20 m-b30">
                    <div className="row">

                        {/* Заглавие на позицията */}
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Заглавие на позицията <span className="text-danger">*</span></label>
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
                                    <div className="text-danger">{errors.job_title}</div>
                                )}
                            </div>
                        </div>


                        {/* Локация */}
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Локация <span className="text-danger">*</span></label>
                                <div className="ls-inputicon-box">
                                    <select
                                        className="form-control"
                                        name="job_location"
                                        defaultValue={jobData.job_location || ''}
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
                                {errors.job_location && (
                                    <div className="text-danger">{errors.job_location}</div>
                                )}
                            </div>
                        </div>

                        {/* Град / Държава */}
                        <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Адрес на месторабота <span className="text-danger">*</span></label>
                                <div className="ls-inputicon-box">
                                    <input
                                        className="form-control"
                                        name="job_address"
                                        type="text"
                                        defaultValue={jobData.job_city_country || ''}
                                        placeholder='Напр. "бул. България"'
                                    />
                                    <i className="fs-input-icon fa fa-globe" />
                                </div>
                                {errors.job_city_country && (
                                    <div className="text-danger">{errors.job_city_country}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Индустрия <span className="text-danger">*</span></label>
                                <div className="ls-inputicon-box">
                                    <select
                                        className="form-control"
                                        name="job_industry"
                                        defaultValue={jobData.job_industry || ''}
                                    >
                                        <option value="">Изберете индустрия</option>
                                        {industries && industries.map((industry) => (
                                            <option key={industry.id} value={industry.id}>
                                                {industry.name}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="fs-input-icon fa fa-industry" />
                                </div>
                                {errors.job_industry && (
                                    <div className="text-danger">{errors.job_industry}</div>
                                )}
                            </div>
                        </div>

                        {/* Професионална област */}
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Професионална област <span className="text-danger">*</span></label>
                                <div className="ls-inputicon-box">
                                    <select
                                        className="form-control"
                                        name="job_professional_field"
                                        defaultValue={jobData.job_professional_field || ''}
                                    >
                                        <option value="">Изберете професионална област</option>
                                        {professionalFields && professionalFields.map((field) => (
                                            <option key={field.id} value={field.id}>
                                                {field.name}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="fs-input-icon fa fa-sitemap" />
                                </div>
                                {errors.job_professional_field && (
                                    <div className="text-danger">{errors.job_professional_field}</div>
                                )}
                            </div>
                        </div>

                        {/* Отдел / Екип */}
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Отдел / Екип</label>
                                <div className="ls-inputicon-box">
                                    <input
                                        className="form-control"
                                        name="job_department"
                                        type="text"
                                        defaultValue={jobData.job_department || ''}
                                        placeholder='Напр. "Engineering"'
                                    />
                                    <i className="fs-input-icon fa fa-users" />
                                </div>
                                {errors.job_department && (
                                    <div className="text-danger">{errors.job_department}</div>
                                )}
                            </div>
                        </div>

                        {/* Брой свободни позиции */}
                        <div className="col-xl-3 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Брой свободни позиции <span className="text-danger">*</span></label>
                                <div className="ls-inputicon-box">
                                    <input
                                        className="form-control"
                                        name="job_open_positions"
                                        type="number"
                                        min="1"
                                        defaultValue={jobData.job_open_positions || 1}
                                        placeholder="1"
                                    />
                                    <i className="fs-input-icon fa fa-hashtag" />
                                </div>
                                {errors.job_open_positions && (
                                    <div className="text-danger">{errors.job_open_positions}</div>
                                )}
                            </div>
                        </div>

                        {/* Краен срок за кандидатстване */}
                        <div className="col-xl-3 col-lg-6 col-md-12">
                            <div className="form-group">
                                <label>Краен срок за кандидатстване</label>
                                <div className="ls-inputicon-box">
                                    <input
                                        className="form-control"
                                        name="job_deadline"
                                        type="date"
                                        defaultValue={jobData.job_deadline || ''}
                                    />
                                    <i className="fs-input-icon fa fa-calendar" />
                                </div>
                                {errors.job_deadline && (
                                    <div className="text-danger">{errors.job_deadline}</div>
                                )}
                            </div>
                        </div>



                        {/* Софтуер и системи */}
                        <div className="col-xl-12 mb-3">
                            <h3>Изберете софтуери които се изискват:</h3>

                            <div className="radio-group">

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="microsoft_office"
                                        defaultChecked={isChecked(jobData.job_software, 'microsoft_office')}
                                    />
                                    <span>Microsoft Office</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="excel"
                                        defaultChecked={isChecked(jobData.job_software, 'excel')}
                                    />
                                    <span>Excel</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="word"
                                        defaultChecked={isChecked(jobData.job_software, 'word')}
                                    />
                                    <span>Word</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="powerpoint"
                                        defaultChecked={isChecked(jobData.job_software, 'powerpoint')}
                                    />
                                    <span>PowerPoint</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="google_workspace"
                                        defaultChecked={isChecked(jobData.job_software, 'google_workspace')}
                                    />
                                    <span>Google Workspace</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="crm"
                                        defaultChecked={isChecked(jobData.job_software, 'crm')}
                                    />
                                    <span>CRM системи</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="erp"
                                        defaultChecked={isChecked(jobData.job_software, 'erp')}
                                    />
                                    <span>ERP системи</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="sap"
                                        defaultChecked={isChecked(jobData.job_software, 'sap')}
                                    />
                                    <span>SAP</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="salesforce"
                                        defaultChecked={isChecked(jobData.job_software, 'salesforce')}
                                    />
                                    <span>Salesforce</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="jira"
                                        defaultChecked={isChecked(jobData.job_software, 'jira')}
                                    />
                                    <span>Jira</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="trello"
                                        defaultChecked={isChecked(jobData.job_software, 'trello')}
                                    />
                                    <span>Trello</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="github_gitlab"
                                        defaultChecked={isChecked(jobData.job_software, 'github_gitlab')}
                                    />
                                    <span>GitHub / GitLab</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="figma"
                                        defaultChecked={isChecked(jobData.job_software, 'figma')}
                                    />
                                    <span>Figma</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="adobe"
                                        defaultChecked={isChecked(jobData.job_software, 'adobe')}
                                    />
                                    <span>Adobe</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="power_bi"
                                        defaultChecked={isChecked(jobData.job_software, 'power_bi')}
                                    />
                                    <span>Power BI</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_software[]"
                                        value="sql"
                                        defaultChecked={isChecked(jobData.job_software, 'sql')}
                                    />
                                    <span>SQL</span>
                                </label>

                      
                            </div>

                            {errors.job_software && (
                                <div className="text-danger">{errors.job_software}</div>
                            )}

                            {/* Optional: specify which "other" software */}
                            <div className="form-group mt-3">
                                <label>Друг софтуер (уточнете):</label>
                                <div className="ls-inputicon-box">
                                    <input
                                        className="form-control"
                                        name="job_software_other"
                                        type="text"
                                        defaultValue={jobData.job_software_other || ''}
                                        placeholder='Напр. "Notion, Slack, Zendesk"'
                                    />
                                    <i className="fs-input-icon fa fa-keyboard" />
                                </div>
                                {errors.job_software_other && (
                                    <div className="text-danger">{errors.job_software_other}</div>
                                )}
                            </div>
                        </div>

                        <hr />



                        {/* Тип работа (single choice) */}
                        <div className="col-xl-12 mb-3">
                            <h3>Тип работа:</h3>

                            <div className="radio-group">

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_work_type"
                                        value="on_site"
                                        defaultChecked={jobData.job_work_type === 'on_site'}
                                    />
                                    <span>Офис</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_work_type"
                                        value="remote"
                                        defaultChecked={jobData.job_work_type === 'remote'}
                                    />
                                    <span>Дистанционно</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_work_type"
                                        value="hybrid"
                                        defaultChecked={jobData.job_work_type === 'hybrid'}
                                    />
                                    <span>Хибридно</span>
                                </label>

                            </div>

                            {errors.job_work_type && (
                                <div className="text-danger">{errors.job_work_type}</div>
                            )}
                        </div>

                        <hr />

                        {/* Статус (single choice) */}
                        <div className="col-xl-12 mb-3">
                            <h3>Статус на обявата:</h3>

                            <div className="radio-group">

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_status"
                                        value="active"
                                        defaultChecked={jobData.job_status === 'active'}
                                    />
                                    <span>Активна</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_status"
                                        value="draft"
                                        defaultChecked={(jobData.job_status || 'draft') === 'draft'}
                                    />
                                    <span>Чернова</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_status"
                                        value="hidden"
                                        defaultChecked={jobData.job_status === 'hidden'}
                                    />
                                    <span>Скрита</span>
                                </label>

                            </div>

                            {errors.job_status && (
                                <div className="text-danger">{errors.job_status}</div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Категория на позицията */}
            <div className="panel panel-default">
                <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Категория на позицията</h4>
                </div>

                <div className="panel-body wt-panel-body p-a20 m-b30">
                    <div className="row">

                        {/* Ниво на позицията (single choice) */}
                        <div className="col-xl-12 mb-3">
                            <h3>Ниво на позицията:</h3>

                            <div className="radio-group">

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="intern"
                                        defaultChecked={jobData.job_level === 'intern'}
                                    />
                                    <span>Стажант</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="junior"
                                        defaultChecked={jobData.job_level === 'junior'}
                                    />
                                    <span>Junior</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="mid"
                                        defaultChecked={jobData.job_level === 'mid'}
                                    />
                                    <span>Mid</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="senior"
                                        defaultChecked={jobData.job_level === 'senior'}
                                    />
                                    <span>Senior</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="lead"
                                        defaultChecked={jobData.job_level === 'lead'}
                                    />
                                    <span>Lead</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="manager"
                                        defaultChecked={jobData.job_level === 'manager'}
                                    />
                                    <span>Manager</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="radio"
                                        name="job_level"
                                        value="director"
                                        defaultChecked={jobData.job_level === 'director'}
                                    />
                                    <span>Director</span>
                                </label>

                            </div>

                            {errors.job_level && (
                                <div className="text-danger">{errors.job_level}</div>
                            )}
                        </div>

                        <hr />

                        {/* Тип заетост (multiple choice -> checkboxes) */}
                        <div className="col-xl-12 mb-3">
                            <h3>Тип заетост:</h3>

                            <div className="radio-group">

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="full_time"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'full_time')}
                                    />
                                    <span>Пълен работен ден</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="part_time"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'part_time')}
                                    />
                                    <span>Непълен работен ден</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="hourly"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'hourly')}
                                    />
                                    <span>Почасова</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="internship"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'internship')}
                                    />
                                    <span>Стаж</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="temporary"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'temporary')}
                                    />
                                    <span>Временна</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="project"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'project')}
                                    />
                                    <span>Проектна</span>
                                </label>

                                <label className="radio-card">
                                    <input
                                        type="checkbox"
                                        name="job_employment_type[]"
                                        value="freelance"
                                        defaultChecked={isChecked(jobData.job_employment_type, 'freelance')}
                                    />
                                    <span>Freelance</span>
                                </label>

                            </div>

                            {errors.job_employment_type && (
                                <div className="text-danger">{errors.job_employment_type}</div>
                            )}
                        </div>

                        <div className="text-left">
                            <button type="submit" className="site-button">
                                Запази обявата
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </Form>
    );
}

JobCreate.layout = page => <DashboardLayout children={page} />;
