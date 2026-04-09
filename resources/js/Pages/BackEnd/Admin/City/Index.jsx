import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';

export default function City() {

    const { cities, errors } = usePage().props;
    const { flash } = usePage();

    const [cityName, setCityName] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteCityId, setDeleteCityId] = useState('');

    const submit = (e) => {
        e.preventDefault();

        router.post(route('cities.store'), {
            city_name: cityName
        }, {
            onSuccess: () => setCityName('')
        });
    };

    console.log(flash);


    return (
        <>
            <Head>
                <title>Админ | Градове</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            Управление на градове
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        {/* CREATE */}
                        <form onSubmit={submit}>
                            <div>
                                <label><h3>Добави град</h3></label>

                                <input
                                    className="form-control"
                                    type="text"
                                    value={cityName}
                                    onChange={(e) => setCityName(e.target.value)}
                                    placeholder="Например: София"
                                />

                                {errors.city_name && (
                                    <div className="text-danger mt-1">
                                        {errors.city_name}
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="site-button m-r5 mt-4">
                                Добави град
                            </button>
                        </form>

                        {/* LIST */}
                        <div className="m-t30">
                            <h5>Всички градове:</h5>

                            <div className="d-flex flex-wrap">

                                {cities.map(city => (
                                    <div
                                        key={city.id}
                                        className="alert-info rounded-pill px-3 py-2 d-flex align-items-center m-1"
                                    >
                                        {city.city_name}

                                        <button
                                            onClick={() => {
                                                setDeleteModal(true);
                                                setDeleteCityId(city.id);
                                            }}
                                            style={{
                                                marginLeft: '10px',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                                color: 'red'
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* DELETE MODAL */}
            <Modal
                show={deleteModal}
                method="delete"
                action={route('cities.destroy')} // ✅ NO PARAM HERE
                onSuccess={() => setDeleteModal(false)}
            >
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setDeleteModal(false)}
                    />
                </div>

                <div className="modal-body">
                    <h3 className="modal-title">
                        Сигурни ли сте, че искате да изтриете този град?
                    </h3>
                </div>

                <div className="modal-footer">

                    <button type="submit" className="site-button outline-primary">
                        Потвърждавам
                    </button>

                    <button
                        type="button"
                        className="site-button"
                        onClick={() => setDeleteModal(false)}
                    >
                        Затвори
                    </button>
                </div>

                {/* ✅ THIS is what backend reads */}
                <input name="cityId" value={deleteCityId} type="hidden" />
            </Modal>

            {/* FLASH */}
            {flash?.successCreatingCity && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successCreatingCity}
                </div>
            )}

                {flash?.successDeletingCity && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletingCity}
                </div>
            )}

                          {flash?.errorDeletingCity && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.errorDeletingCity}
                </div>
            )}

        </>
    );
}

City.layout = page => <DashboardLayout children={page} />;
