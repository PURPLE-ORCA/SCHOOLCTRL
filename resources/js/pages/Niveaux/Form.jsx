import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ niveau, etudes }) {
    const isEdit = Boolean(niveau);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        libelle_niveau: '',
        id_etudes: '',
    });

    useEffect(() => {
        if (isEdit && niveau) {
            setData({
                libelle_niveau: niveau.libelle_niveau || '',
                id_etudes: niveau.id_etudes || '',
            });
        } else {
            reset('libelle_niveau', 'id_etudes');
        }
    }, [niveau, isEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEdit ? route('niveaux.update', { niveau: niveau.id_niveau }) : route('niveaux.store');
        const method = isEdit ? put : post;

        method(url, {
            preserveScroll: true,
        });
    };

    const breadcrumbs = [{ title: 'Niveaux Scolaires', href: route('niveaux.index') }, { title: isEdit ? 'Modifier' : 'Créer' }];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Modifier Niveau Scolaire' : 'Créer Niveau Scolaire'} />

            <div className="mx-auto mt-4 max-w-2xl rounded-lg bg-transparent p-4 shadow md:p-6 lg:p-8 dark:text-white">
                <h1 className="mb-6 text-xl font-semibold text-black dark:text-white">
                    {isEdit ? `Modifier Niveau: ${niveau?.libelle_niveau}` : 'Nouveau Niveau Scolaire'}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {' '}
                        <div>
                            <label htmlFor="libelle_niveau" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Libellé Niveau
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="libelle_niveau"
                                    id="libelle_niveau"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.libelle_niveau ? 'ring-red-500' : ''}`}
                                    value={data.libelle_niveau}
                                    onChange={(e) => setData('libelle_niveau', e.target.value)}
                                    required
                                />
                            </div>
                            {errors.libelle_niveau && <p className="mt-1 text-sm text-red-600">{errors.libelle_niveau}</p>}
                        </div>
                        <div>
                            <label htmlFor="id_etudes" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Type d'Étude
                            </label>
                            <div className="mt-1">
                                <select
                                    id="id_etudes"
                                    name="id_etudes"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:text-white ${errors.id_etudes ? 'ring-red-500' : ''}`}
                                    value={data.id_etudes}
                                    onChange={(e) => setData('id_etudes', e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        -- Sélectionner --
                                    </option>
                                    {etudes &&
                                        etudes.map((etude) => (
                                            <option key={etude.id_etudes} value={etude.id_etudes}>
                                                {etude.libelle_etude}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            {errors.id_etudes && <p className="mt-1 text-sm text-red-600">{errors.id_etudes}</p>}
                        </div>
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-4">
                            <Link
                                href={route('niveaux.index')}
                                className="text-sm leading-6 font-semibold text-black hover:underline dark:text-white"
                            >
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
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
