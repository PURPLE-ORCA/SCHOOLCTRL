import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';

const breadcrumbs = [{ title: 'Élèves', href: route('eleves.index') }];

export default function Index({ eleves }) {
    const columns = useMemo(
        () => [
            { accessorKey: 'code_massar', header: 'Code Massar', size: 120 },
            { accessorKey: 'nomFr', header: 'Nom (Fr)', size: 100 },
            { accessorKey: 'prenomFr', header: 'Prénom (Fr)', size: 100 },
            { accessorKey: 'nomAr', header: 'الاسم الشخصي', size: 100 },
            { accessorKey: 'prenomAr', header: 'الاسم العائلي', size: 100 },
            {
                accessorKey: 'date_naissance',
                header: 'Né(e) le',
                Cell: ({ cell }) => (cell.getValue() ? new Date(cell.getValue()).toLocaleDateString() : 'N/A'),
                size: 100,
            },
            {
                accessorKey: 'niveau_scolaire.libelle_niveau',
                header: 'Niveau',
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-gray-400">N/A</span>,
                size: 200,
            },
            {
                accessorKey: 'niveau_scolaire.type_etude.libelle_etude',
                header: 'Type Étude',
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-gray-400">N/A</span>,
                size: 150,
            },
        ],
        [],
    );

    const handleDelete = (id, name) => {
        if (confirm(`Êtes-vous sûr de vouloir supprimer l'élève "${name}" ?`)) {
            router.delete(route('eleves.destroy', { elefe: id }), { preserveScroll: true });
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: eleves.data,
        manualPagination: true,
        rowCount: eleves.total,
        enableRowsPerPage: false,
        enableEditing: true,

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                <Link href={route('eleves.edit', { elefe: row.original.id })} className="p-1 text-indigo-600 hover:text-indigo-900" title="Modifier">
                    <Icon icon="mdi:pencil" className="h-5 w-5" />
                </Link>
                <button
                    onClick={() => handleDelete(row.original.id, `${row.original.prenomFr} ${row.original.nomFr}`)}
                    className="p-1 text-red-600 hover:text-red-900"
                    title="Supprimer"
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" />
                </button>
            </div>
        ),

        renderTopToolbarCustomActions: () => (
            <Link href={route('eleves.create')}>
                <button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-blue-600">Ajouter Élève</button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Liste des Élèves" />
            <div className="p-4 md:p-6">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
