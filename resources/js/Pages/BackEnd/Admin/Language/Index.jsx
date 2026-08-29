import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, usePage, router } from '@inertiajs/react';
import { useState } from 'react';
import Modal from '@/Components/Modal';

export default function Language() {

    const { languages, errors } = usePage().props;
    const { flash } = usePage();

    const [languageName, setLanguageName] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteLanguageId, setDeleteLanguageId] = useState('');

    const submit = (e) => {
        e.preventDefault();

        router.post(route('language.create'), {
            language_name: languageName
        }, {
            onSuccess: () => setLanguageName('')
        });
    };

    return (
        <>
            <Head>
                <title>Админ | Езици</title>
            </Head>

            <div className="content-admin-main">

                <div className="panel panel-default shadow">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                            Управление на езици
                        </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30">

                        {/* CREATE */}
                        <form onSubmit={submit}>
                            <div>
                                <label><h3>Добави език</h3></label>

                                <input
                                    className="form-control"
                                    type="text"
                                    value={languageName}
                                    onChange={(e) => setLanguageName(e.target.value)}
                                    placeholder="Например: Английски"
                                />

                                {errors.language_name && (
                                    <div className="text-danger mt-1">
                                        {errors.language_name}
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="site-button m-r5 mt-4">
                                Добави език
                            </button>
                        </form>

                        {/* LIST */}
                        <div className="m-t30">
                            <h5>Всички езици:</h5>

                            <div className="d-flex flex-wrap">

                                {languages.map(language => (
                                    <div
                                        key={language.id}
                                        className="alert-info rounded-pill px-3 py-2 d-flex align-items-center m-1"
                                    >
                                        {language.language_name}

                                        <button
                                            onClick={() => {
                                                setDeleteModal(true);
                                                setDeleteLanguageId(language.id);
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
                action={route('language.delete')}
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
                        Сигурни ли сте, че искате да изтриете този език?
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

                {/* backend reads this */}
                <input name="languageId" value={deleteLanguageId} type="hidden" />
            </Modal>

            {/* FLASH */}
            {flash?.successCreatingLanguage && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successCreatingLanguage}
                </div>
            )}

            {flash?.successDeletingLanguage && (
                <div className="alert alert-success animate__animated animate__fadeInUp">
                    {flash.successDeletingLanguage}
                </div>
            )}

            {flash?.errorDeletingLanguage && (
                <div className="alert alert-danger animate__animated animate__fadeInUp">
                    {flash.errorDeletingLanguage}
                </div>
            )}

        </>
    );
}

Language.layout = page => <DashboardLayout children={page} />;
