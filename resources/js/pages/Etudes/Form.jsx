import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ etude }) {
    const isEdit = Boolean(etude);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        libelle_etude: '',
    });

    useEffect(() => {
        if (isEdit) {
            setData({
                libelle_etude: etude.libelle_etude || '',
            });
        } else {
            reset('libelle_etude');
        }
    }, [etude, isEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEdit ? route('etudes.update', etude.id_etudes) : route('etudes.store');
        const method = isEdit ? put : post; 

        method(url, {
            preserveScroll: true, 
            onSuccess: () => {
            },
        });
    };

    const breadcrumbs = [{ title: 'Etudes', href: route('etudes.index') }, { title: isEdit ? 'Modifier' : 'Créer' }];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Modifier Type Étude' : 'Créer Type Étude'} />

            <div className="mx-auto mt-4 max-w-2xl rounded-lg bg-transparent p-4 shadow md:p-6 lg:p-8 dark:text-white">
                <h1 className="mb-6 text-xl font-semibold text-black dark:text-white">
                    {isEdit ? `Modifier Type d'Étude: ${etude.libelle_etude}` : "Nouveau Type d'Étude"}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="libelle_etude" className="block text-sm leading-6 font-medium text-black dark:text-white">
                                Libellé Étude
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="libelle_etude"
                                    id="libelle_etude"
                                    className={`block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:text-white ${errors.libelle_etude ? 'ring-red-500' : ''}`}
                                    value={data.libelle_etude}
                                    onChange={(e) => setData('libelle_etude', e.target.value)}
                                    required
                                />
                            </div>
                            {errors.libelle_etude && (
                                <p className="mt-1 text-sm text-red-600" id="libelle_etude-error">
                                    {errors.libelle_etude}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-4">
                            <Link href={route('etudes.index')} className="text-sm leading-6 font-semibold text-black hover:underline dark:text-white">
                                Annuler
                            </Link>
                            <button
                                type="submit"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm dark:bg-indigo-600"
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
