import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';

const breadcrumbs = [{ title: 'Niveaux Scolaires', href: route('niveaux.index') }];

export default function Index({ niveaux }) {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'libelle_niveau',
                header: 'Libellé Niveau',
                size: 250,
            },
            {
                accessorKey: 'type_etude.libelle_etude',
                header: "Type d'Étude",
                size: 200,
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-gray-400">N/A</span>,
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
        if (
            confirm(
                `Êtes-vous sûr de vouloir supprimer le niveau "${name}" ?\nATTENTION : Cela pourrait supprimer les élèves associés si la cascade est activée !`,
            )
        ) {
            router.delete(route('niveaux.destroy', { niveau: id }), { preserveScroll: true });
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: niveaux.data,
        manualPagination: true,
        rowCount: niveaux.total,
        enableRowsPerPage: false,
        enableEditing: true,

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                <Link
                    href={route('niveaux.edit', { niveau: row.original.id_niveau })}
                    className="p-1 text-indigo-600 hover:text-indigo-900"
                    title="Modifier"
                >
                    <Icon icon="mdi:pencil" className="h-5 w-5" />
                </Link>
                <button
                    onClick={() => handleDelete(row.original.id_niveau, row.original.libelle_niveau)}
                    className="p-1 text-red-600 hover:text-red-900"
                    title="Supprimer"
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" />
                </button>
            </div>
        ),

        renderTopToolbarCustomActions: () => (
            <Link href={route('niveaux.create')}>
                <button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-blue-600">
                    Ajouter Niveau Scolaire
                </button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Niveaux Scolaires" />
            <div className="p-4 md:p-6">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
