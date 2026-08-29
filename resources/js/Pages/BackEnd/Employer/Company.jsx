import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, Form } from '@inertiajs/react';
import { useState } from 'react';
import CompanyStatus from '@/Components/CompanyStatus';
import TinyMCETextEditor from '@/Components/TinyMCETextEditor';


export default function Company({ company, cities, jobCategories }) {
    const [logoFile, setLogoFile] = useState(null);
    const [bannerFile, setBannerFile] = useState(null);
    const { csrf_token, errors, companyStatus } = usePage().props;
    const { flash } = usePage();

    const companyData = company || {};
    const [companyDescription, setCompanyDescription] = useState(
        company?.company_full_description ?? ''
    );
    const companyBenefits = companyData.company_benefits || [];
    const workLocations = companyData.work_locations || [];
    const workLanguages = companyData.work_languages || [];

    function handleLogoChange(e) {
        if (e.target.files[0]) {
            setLogoFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    function handleBannerChange(e) {
        if (e.target.files[0]) {
            setBannerFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    function isChecked(array, value) {
        return Array.isArray(array) && array.includes(value);
    }


    return (
        <>
            <Head>
                <title>Компания</title>
            </Head>

            <div>
                <div className="content-admin-main">


                    <CompanyStatus companyStatus={companyStatus} />

                    <Form
                        options={{ preserveScroll: true }}
                        action={
                            company
                                ? route('employer.update', company.id)
                                : route('employer.store')
                        }
                        method={company ? 'put' : 'post'}
                        encType="multipart/form-data"
                        onSuccess={() => {
                            setLogoFile(null);
                            setBannerFile(null);
                        }}
                    >
                        <input type="hidden" name="_token" value={csrf_token} />

                        {/* Лого на компанията */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Лого на компанията</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="dashboard-profile-section clearfix">
                                    <div className="dashboard-profile-pic d-flex gap-4">
                                        <div className="dashboard-profile-photo">
                                            <img
                                                src={
                                                    companyData.company_logo
                                                        ? `/assets/images/company_profile_pictures/${companyData.company_logo}`
                                                        : '/assets/images/default/enterprise_12594298.png'
                                                }
                                                alt="Лого"
                                            />

                                            <div className="upload-btn-wrapper">
                                                <div id="upload-logo-grid" />
                                                <button type="button" className="site-button button-sm">
                                                    Прикачи лого
                                                </button>

                                                <input
                                                    id="logo-uploader"
                                                    accept=".jpg,.jpeg,.png,.svg"
                                                    name="company_logo"
                                                    type="file"
                                                    onChange={handleLogoChange}
                                                />
                                            </div>
                                        </div>

                                        {logoFile && (
                                            <img
                                                height={125}
                                                width={150}
                                                src={logoFile}
                                                style={{ objectFit: 'cover' }}
                                                alt="Logo preview"
                                            />
                                        )}
                                    </div>

                                    {errors.company_logo && (
                                        <div className="text-danger">
                                            {errors.company_logo}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Банер / Корица */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Банер / Корица</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">
                                <div className="dashboard-cover-section clearfix">
                                    <div className="dashboard-cover-pic">
                                        <img
                                            src={
                                                bannerFile
                                                    ? bannerFile
                                                    : companyData.company_banner
                                                        ? `/assets/images/company_banners/${companyData.company_banner}`
                                                        : '/assets/images/default/2202_w046_n004_46b_p1_46.jpg'
                                            }
                                            style={{
                                                width: '100%',
                                                maxHeight: '200px',
                                                objectFit: 'cover',
                                                marginBottom: '15px',
                                                borderRadius: '8px'
                                            }}
                                            alt="Banner preview"
                                        />

                                        <div className="upload-btn-wrapper">
                                            <button type="button" className="site-button button-sm">
                                                Прикачи банер (препоръчителен размер: 1200x300px)
                                            </button>

                                            <input
                                                id="banner-uploader"
                                                accept=".jpg,.jpeg,.png"
                                                name="company_banner"
                                                type="file"
                                                onChange={handleBannerChange}
                                            />
                                        </div>

                                        {errors.company_banner && (
                                            <div className="text-danger mt-2">
                                                {errors.company_banner}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Основна информация за компанията */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Основна информация за компанията</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">

                                    {/* Име на компанията */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Име на компанията <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="company_name"
                                                    type="text"
                                                    defaultValue={companyData.company_name || ''}
                                                    placeholder="Въведете името на компанията"
                                                />
                                                <i className="fs-input-icon fa fa-building" />
                                            </div>
                                            {errors.company_name && (
                                                <div className="text-danger">{errors.company_name}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* ЕИК / VAT номер */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>ЕИК / VAT номер <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="company_eik"
                                                    type="text"
                                                    defaultValue={companyData.company_eik || ''}
                                                    placeholder="Въведете ЕИК или VAT номер"
                                                />
                                                <i className="fs-input-icon fa fa-id-card" />
                                            </div>
                                            {errors.company_eik && (
                                                <div className="text-danger">{errors.company_eik}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Индустрия */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Индустрия <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <select
                                                    className="form-control"
                                                    name="company_industry"
                                                    defaultValue={companyData.company_industry || ''}
                                                >
                                                    <option value="">Изберете индустрия</option>
                                                    {jobCategories && jobCategories.map((category) => (
                                                        <option key={category.id} value={category.name}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <i className="fs-input-icon fa fa-industry" />
                                            </div>
                                            {errors.company_industry && (
                                                <div className="text-danger">{errors.company_industry}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Размер на компанията */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Размер на компанията <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <select
                                                    className="form-control"
                                                    name="company_size"
                                                    defaultValue={companyData.company_size || ''}
                                                >
                                                    <option value="">Изберете размер</option>
                                                    <option value="1-10 служители">1-10 служители</option>
                                                    <option value="11-50 служители">11-50 служители</option>
                                                    <option value="51-200 служители">51-200 служители</option>
                                                    <option value="201-500 служители">201-500 служители</option>
                                                    <option value="501-1000 служители">501-1000 служители</option>
                                                    <option value="1000+ служители">1000+ служители</option>
                                                </select>
                                                <i className="fs-input-icon fa fa-users" />
                                            </div>
                                            {errors.company_size && (
                                                <div className="text-danger">{errors.company_size}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Локация (Град) */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Локация (Град) <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <select
                                                    className="form-control"
                                                    name="company_location"
                                                    defaultValue={companyData.company_location || ''}
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
                                            {errors.company_location && (
                                                <div className="text-danger">{errors.company_location}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Уебсайт */}
                                    <div className="col-xl-4 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Уебсайт</label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="company_website"
                                                    type="url"
                                                    defaultValue={companyData.company_website || ''}
                                                    placeholder="https://www.example.com"
                                                />
                                                <i className="fs-input-icon fa fa-globe" />
                                            </div>
                                            {errors.company_website && (
                                                <div className="text-danger">{errors.company_website}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Адрес */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Адрес <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">
                                                <input
                                                    className="form-control"
                                                    name="company_address"
                                                    type="text"
                                                    defaultValue={companyData.company_address || ''}
                                                    placeholder="Въведете пълен адрес"
                                                />
                                                <i className="fs-input-icon fa fa-location-arrow" />
                                            </div>
                                            {errors.company_address && (
                                                <div className="text-danger">{errors.company_address}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Подробно описание */}
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Подробно описание <span className="text-danger">*</span></label>
                                            <div className="ls-inputicon-box">

                                                <TinyMCETextEditor
                                                    initialValue={companyDescription}
                                                    onChange={setCompanyDescription}
                                                />
                                                <input type="hidden" name="company_full_description" value={companyDescription} />

                                            </div>
                                            {errors.company_full_description && (
                                                <div className="text-danger">{errors.company_full_description}</div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Работни локации */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Работни локации</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="text-muted mb-3">Изберете предлаганите модели на работа:</p>
                                    </div>

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_locations[]"
                                                    value="На място в офиса"
                                                    id="work-location-1"
                                                    defaultChecked={isChecked(workLocations, 'На място в офиса')}
                                                />
                                                <label className="form-check-label" htmlFor="work-location-1">На място в офиса</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_locations[]"
                                                    value="Напълно дистанционно"
                                                    id="work-location-2"
                                                    defaultChecked={isChecked(workLocations, 'Напълно дистанционно')}
                                                />
                                                <label className="form-check-label" htmlFor="work-location-2">Напълно дистанционно</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_locations[]"
                                                    value="Хибридно"
                                                    id="work-location-3"
                                                    defaultChecked={isChecked(workLocations, 'Хибридно')}
                                                />
                                                <label className="form-check-label" htmlFor="work-location-3">Хибридно</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_locations[]"
                                                    value="На терен"
                                                    id="work-location-4"
                                                    defaultChecked={isChecked(workLocations, 'На терен')}
                                                />
                                                <label className="form-check-label" htmlFor="work-location-4">На терен</label>
                                            </div>
                                        </div>
                                    </div>

                                    {errors.work_locations && (
                                        <div className="col-12">
                                            <div className="text-danger">{errors.work_locations}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Работни езици */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Работни езици</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="text-muted mb-3">Изберете езиците, използвани в работната среда:</p>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Български"
                                                    id="work-language-1"
                                                    defaultChecked={isChecked(workLanguages, 'Български')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-1">Български</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Английски"
                                                    id="work-language-2"
                                                    defaultChecked={isChecked(workLanguages, 'Английски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-2">Английски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Немски"
                                                    id="work-language-3"
                                                    defaultChecked={isChecked(workLanguages, 'Немски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-3">Немски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Френски"
                                                    id="work-language-4"
                                                    defaultChecked={isChecked(workLanguages, 'Френски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-4">Френски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Испански"
                                                    id="work-language-5"
                                                    defaultChecked={isChecked(workLanguages, 'Испански')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-5">Испански</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Италиански"
                                                    id="work-language-6"
                                                    defaultChecked={isChecked(workLanguages, 'Италиански')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-6">Италиански</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Руски"
                                                    id="work-language-7"
                                                    defaultChecked={isChecked(workLanguages, 'Руски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-7">Руски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Китайски"
                                                    id="work-language-8"
                                                    defaultChecked={isChecked(workLanguages, 'Китайски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-8">Китайски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Японски"
                                                    id="work-language-9"
                                                    defaultChecked={isChecked(workLanguages, 'Японски')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-9">Японски</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="work_languages[]"
                                                    value="Друг"
                                                    id="work-language-10"
                                                    defaultChecked={isChecked(workLanguages, 'Друг')}
                                                />
                                                <label className="form-check-label" htmlFor="work-language-10">Друг</label>
                                            </div>
                                        </div>
                                    </div>

                                    {errors.work_languages && (
                                        <div className="col-12">
                                            <div className="text-danger">{errors.work_languages}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Бенефити / Придобивки */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Бенефити / Придобивки</h4>
                            </div>

                            <div className="panel-body wt-panel-body p-a20 m-b30">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="text-muted mb-3">Изберете придобивките, които предлагате на служителите си:</p>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Допълнително здравно осигуряване"
                                                    id="benefit-1"
                                                    defaultChecked={isChecked(companyBenefits, 'Допълнително здравно осигуряване')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-1">Допълнително здравно осигуряване</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Гъвкаво работно време"
                                                    id="benefit-2"
                                                    defaultChecked={isChecked(companyBenefits, 'Гъвкаво работно време')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-2">Гъвкаво работно време</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Работа от вкъщи"
                                                    id="benefit-3"
                                                    defaultChecked={isChecked(companyBenefits, 'Работа от вкъщи')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-3">Работа от вкъщи</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Служебен автомобил"
                                                    id="benefit-4"
                                                    defaultChecked={isChecked(companyBenefits, 'Служебен автомобил')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-4">Служебен автомобил</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Служебен телефон"
                                                    id="benefit-5"
                                                    defaultChecked={isChecked(companyBenefits, 'Служебен телефон')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-5">Служебен телефон</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Служебен лаптоп"
                                                    id="benefit-6"
                                                    defaultChecked={isChecked(companyBenefits, 'Служебен лаптоп')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-6">Служебен лаптоп</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Безплатна храна"
                                                    id="benefit-7"
                                                    defaultChecked={isChecked(companyBenefits, 'Безплатна храна')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-7">Безплатна храна</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Фитнес карта"
                                                    id="benefit-8"
                                                    defaultChecked={isChecked(companyBenefits, 'Фитнес карта')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-8">Фитнес карта</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Обучения и курсове"
                                                    id="benefit-9"
                                                    defaultChecked={isChecked(companyBenefits, 'Обучения и курсове')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-9">Обучения и курсове</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Бонуси и премии"
                                                    id="benefit-10"
                                                    defaultChecked={isChecked(companyBenefits, 'Бонуси и премии')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-10">Бонуси и премии</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Допълнителен годишен отпуск"
                                                    id="benefit-11"
                                                    defaultChecked={isChecked(companyBenefits, 'Допълнителен годишен отпуск')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-11">Допълнителен годишен отпуск</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Тийм билдинг"
                                                    id="benefit-12"
                                                    defaultChecked={isChecked(companyBenefits, 'Тийм билдинг')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-12">Тийм билдинг</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Карта за градски транспорт"
                                                    id="benefit-13"
                                                    defaultChecked={isChecked(companyBenefits, 'Карта за градски транспорт')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-13">Карта за градски транспорт</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Паркинг място"
                                                    id="benefit-14"
                                                    defaultChecked={isChecked(companyBenefits, 'Паркинг място')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-14">Паркинг място</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Детска градина/ясла"
                                                    id="benefit-15"
                                                    defaultChecked={isChecked(companyBenefits, 'Детска градина/ясла')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-15">Детска градина/ясла</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Ваучери за храна"
                                                    id="benefit-16"
                                                    defaultChecked={isChecked(companyBenefits, 'Ваучери за храна')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-16">Ваучери за храна</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Застраховка живот"
                                                    id="benefit-17"
                                                    defaultChecked={isChecked(companyBenefits, 'Застраховка живот')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-17">Застраховка живот</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="company_benefits[]"
                                                    value="Пенсионен план"
                                                    id="benefit-18"
                                                    defaultChecked={isChecked(companyBenefits, 'Пенсионен план')}
                                                />
                                                <label className="form-check-label" htmlFor="benefit-18">Пенсионен план</label>
                                            </div>
                                        </div>
                                    </div>

                                    {errors.company_benefits && (
                                        <div className="col-12">
                                            <div className="text-danger">{errors.company_benefits}</div>
                                        </div>
                                    )}
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
            {flash.companyCreate && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.companyCreate}
                </div>
            )}

            {flash.companyUpdate && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.companyUpdate}
                </div>
            )}
        </>
    );
}

Company.layout = page => <DashboardLayout children={page} />;
