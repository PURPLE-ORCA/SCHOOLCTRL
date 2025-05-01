import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';

const breadcrumbs = [{ title: 'Etudes', href: route('etudes.index') }];

export default function Index({ etudes }) {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'libelle_etude',
                header: 'Libellé Étude',
                size: 400,
            },
            {
                accessorKey: 'created_at',
                header: 'Créé le',
                Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
                size: 150,
            },
        ],
        [],
    );

    const handleDelete = (id, name) => {
        if (confirm(`Êtes-vous sûr de vouloir supprimer "${name}" ?`)) {
            router.delete(route('etudes.destroy', id), {
                preserveScroll: true,
            });
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: etudes.data, 
        manualPagination: true,
        rowCount: etudes.total,
        enableRowsPerPage: false,
        enableEditing: true, 

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                <Link
                    href={route('etudes.edit', row.original.id_etudes)}
                    className="p-1 text-indigo-600 hover:text-indigo-900" 
                    title="Modifier" 
                >
                    <Icon icon="mdi:pencil" className="h-5 w-5" /> 
                </Link>
                <button
                    onClick={() => handleDelete(row.original.id_etudes, row.original.libelle_etude)}
                    className="p-1 text-red-600 hover:text-red-900" 
                    title="Supprimer" 
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" /> 
                </button>
            </div>
        ),

        renderTopToolbarCustomActions: () => (
            <Link href={route('etudes.create')}>
                <button className="rounded bg-blue-600 dark:bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    Ajouter Type Étude
                </button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Types d'Études" />

            <div className="p-4 md:p-6">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
