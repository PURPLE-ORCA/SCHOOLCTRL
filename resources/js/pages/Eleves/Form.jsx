import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return date.toISOString().split('T')[0];
    } catch (e) {
        console.error('Error formatting date:', dateString, e);
        return '';
    }
};

export default function Form({ eleve, niveaux }) {
    const isEdit = Boolean(eleve);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        num_inscription: '',
        nomAr: '',
        prenomAr: '',
        nomFr: '',
        prenomFr: '',
        date_naissance: '',
        lieu_naissance: '',
        annee_archive: '',
        date_quitter_etablissement: '',
        code_massar: '',
        CIN: '',
        observation: '',
        id_niveau: '',
    });

    useEffect(() => {
        if (isEdit && eleve) {
            setData({
                num_inscription: eleve.num_inscription || '',
                nomAr: eleve.nomAr || '',
                prenomAr: eleve.prenomAr || '',
                nomFr: eleve.nomFr || '',
                prenomFr: eleve.prenomFr || '',
                date_naissance: formatDateForInput(eleve.date_naissance),
                lieu_naissance: eleve.lieu_naissance || '',
                annee_archive: eleve.annee_archive || '',
                date_quitter_etablissement: formatDateForInput(eleve.date_quitter_etablissement),
                code_massar: eleve.code_massar || '',
                CIN: eleve.CIN || '',
                observation: eleve.observation || '',
                id_niveau: eleve.id_niveau || '',
            });
        } else {
            reset();
        }
    }, [eleve, isEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEdit ? route('eleves.update', { elefe: eleve.id }) : route('eleves.store');
        const method = isEdit ? put : post;

        method(url, {
            preserveScroll: true,
        });
    };

    const breadcrumbs = [{ title: 'Élèves', href: route('eleves.index') }, { title: isEdit ? 'Modifier' : 'Créer' }];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Modifier Élève' : 'Créer Élève'} />

            <div className="mx-auto mt-4 max-w-4xl rounded-lg bg-transparent p-4 shadow md:p-6 lg:p-8 dark:text-white">
                <h1 className="mb-6 text-xl font-semibold text-black dark:text-white">
                    {isEdit ? `Modifier Élève: ${eleve?.prenomFr} ${eleve?.nomFr}` : 'Nouvel Élève'}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="code_massar" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Code Massar *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="code_massar"
                                    id="code_massar"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.code_massar ? 'ring-red-500' : ''}`}
                                    value={data.code_massar}
                                    onChange={(e) => setData('code_massar', e.target.value)}
                                />
                            </div>
                            {errors.code_massar && <p className="mt-1 text-sm text-red-600">{errors.code_massar}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="num_inscription" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                N° Inscription
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="num_inscription"
                                    id="num_inscription"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.num_inscription ? 'ring-red-500' : ''}`}
                                    value={data.num_inscription}
                                    onChange={(e) => setData('num_inscription', e.target.value)}
                                />
                            </div>
                            {errors.num_inscription && <p className="mt-1 text-sm text-red-600">{errors.num_inscription}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="nomFr" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Nom (Fr) *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="nomFr"
                                    id="nomFr"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.nomFr ? 'ring-red-500' : ''}`}
                                    value={data.nomFr}
                                    onChange={(e) => setData('nomFr', e.target.value)}
                                />
                            </div>
                            {errors.nomFr && <p className="mt-1 text-sm text-red-600">{errors.nomFr}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="prenomFr" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Prénom (Fr) *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="prenomFr"
                                    id="prenomFr"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.prenomFr ? 'ring-red-500' : ''}`}
                                    value={data.prenomFr}
                                    onChange={(e) => setData('prenomFr', e.target.value)}
                                />
                            </div>
                            {errors.prenomFr && <p className="mt-1 text-sm text-red-600">{errors.prenomFr}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="nomAr" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                الإسم العائلي *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="nomAr"
                                    id="nomAr"
                                    dir="rtl"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.nomAr ? 'ring-red-500' : ''}`}
                                    value={data.nomAr}
                                    onChange={(e) => setData('nomAr', e.target.value)}
                                />
                            </div>
                            {errors.nomAr && <p className="mt-1 text-sm text-red-600">{errors.nomAr}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="prenomAr" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                الإسم الشخصي *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="prenomAr"
                                    id="prenomAr"
                                    dir="rtl"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.prenomAr ? 'ring-red-500' : ''}`}
                                    value={data.prenomAr}
                                    onChange={(e) => setData('prenomAr', e.target.value)}
                                />
                            </div>
                            {errors.prenomAr && <p className="mt-1 text-sm text-red-600">{errors.prenomAr}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="date_naissance" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Date Naissance *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="date_naissance"
                                    id="date_naissance"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.date_naissance ? 'ring-red-500' : ''}`}
                                    value={data.date_naissance}
                                    onChange={(e) => setData('date_naissance', e.target.value)}
                                />
                            </div>
                            {errors.date_naissance && <p className="mt-1 text-sm text-red-600">{errors.date_naissance}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="lieu_naissance" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Lieu Naissance *
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="lieu_naissance"
                                    id="lieu_naissance"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.lieu_naissance ? 'ring-red-500' : ''}`}
                                    value={data.lieu_naissance}
                                    onChange={(e) => setData('lieu_naissance', e.target.value)}
                                />
                            </div>
                            {errors.lieu_naissance && <p className="mt-1 text-sm text-red-600">{errors.lieu_naissance}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="CIN" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                CIN
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="CIN"
                                    id="CIN"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.CIN ? 'ring-red-500' : ''}`}
                                    value={data.CIN}
                                    onChange={(e) => setData('CIN', e.target.value)}
                                />
                            </div>
                            {errors.CIN && <p className="mt-1 text-sm text-red-600">{errors.CIN}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="id_niveau" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Niveau Scolaire *
                            </label>
                            <div className="mt-1">
                                <select
                                    id="id_niveau"
                                    name="id_niveau"
                                    required
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.id_niveau ? 'ring-red-500' : ''}`}
                                    value={data.id_niveau}
                                    onChange={(e) => setData('id_niveau', e.target.value)}
                                >
                                    <option value="" disabled>
                                        -- Sélectionner Niveau --
                                    </option>
                                    {niveaux &&
                                        niveaux.map((niveau) => (
                                            <option key={niveau.id} value={niveau.id}>
                                                {niveau.label}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            {errors.id_niveau && <p className="mt-1 text-sm text-red-600">{errors.id_niveau}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="annee_archive" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Année Archive
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="annee_archive"
                                    id="annee_archive"
                                    maxLength="4"
                                    placeholder="YYYY"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.annee_archive ? 'ring-red-500' : ''}`}
                                    value={data.annee_archive}
                                    onChange={(e) => setData('annee_archive', e.target.value)}
                                />
                            </div>
                            {errors.annee_archive && <p className="mt-1 text-sm text-red-600">{errors.annee_archive}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="date_quitter_etablissement" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Date Départ
                            </label>
                            <div className="mt-1">
                                <input
                                    type="date"
                                    name="date_quitter_etablissement"
                                    id="date_quitter_etablissement"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.date_quitter_etablissement ? 'ring-red-500' : ''}`}
                                    value={data.date_quitter_etablissement}
                                    onChange={(e) => setData('date_quitter_etablissement', e.target.value)}
                                />
                            </div>
                            {errors.date_quitter_etablissement && <p className="mt-1 text-sm text-red-600">{errors.date_quitter_etablissement}</p>}
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="observation" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Observation
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="observation"
                                    name="observation"
                                    rows={3}
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.observation ? 'ring-red-500' : ''}`}
                                    value={data.observation}
                                    onChange={(e) => setData('observation', e.target.value)}
                                />
                            </div>
                            {errors.observation && <p className="mt-1 text-sm text-red-600">{errors.observation}</p>}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
                        <Link href={route('eleves.index')} className="text-sm leading-6 font-semibold text-black hover:underline dark:text-white">
                            Annuler
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:opacity-50 dark:bg-indigo-600"
                            disabled={processing}
                        >
                            {processing ? 'Enregistrement...' : isEdit ? 'Mettre à Jour' : 'Enregistrer'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
