import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';

const breadcrumbs = [{ title: 'Élèves', href: route('eleves.index') }];

const defaultPageSize = 15;
const defaultPageIndex = 0;

export default function Index({ eleves }) {
    const [pagination, setPagination] = useState({
        pageIndex: eleves.current_page - 1 ?? defaultPageIndex,
        pageSize: eleves.per_page ?? defaultPageSize,
    });

    useEffect(() => {
        if (pagination.pageIndex !== eleves.current_page - 1 || pagination.pageSize !== eleves.per_page) {
            router.get(
                route('eleves.index'),
                { page: pagination.pageIndex + 1, per_page: pagination.pageSize },
                { preserveState: true, replace: true, preserveScroll: true },
            );
        }
    }, [pagination.pageIndex, pagination.pageSize]);

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
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-black opacity-70 dark:text-white dark:opacity-70">N/A</span>,
                size: 200,
            },
            {
                accessorKey: 'niveau_scolaire.type_etude.libelle_etude',
                header: 'Type Étude',
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-black opacity-70 dark:text-white dark:opacity-70">N/A</span>,
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
        state: { pagination },
        rowCount: eleves.total,
        onPaginationChange: setPagination,
        enableEditing: true,
        enableRowsPerPage: false,

        // Black & White Styling with Dark Mode Support
        muiTablePaperProps: {
            elevation: 0,
            sx: {
                borderRadius: '0.5rem',
                backgroundColor: '#fff',
                '.dark &': {
                    backgroundColor: '#000',
                },
            },
        },
        muiTableHeadCellProps: {
            sx: {
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: '600',
                borderBottomWidth: '2px',
                borderColor: '#000',
                '.dark &': {
                    backgroundColor: '#000',
                    color: '#fff',
                },
                '& .MuiSvgIcon-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff',
                    },
                },
            },
        },
        muiTableBodyCellProps: {
            sx: {
                color: '#000',
                borderBottom: '1px solid #000',
                '.dark &': {
                    color: '#000',
                },
            },
        },
        muiTableBodyRowProps: {
            sx: {
                '&:hover td': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    '.dark &': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                },
            },
        },
        muiTopToolbarProps: {
            sx: {
                backgroundColor: '#fff',
                borderBottom: '1px solid #000',
                '.dark &': {
                    backgroundColor: '#000',
                    borderBottom: '1px solid #fff',
                },
                '& .MuiIconButton-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff',
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff',
                    },
                },
                '& .MuiInputBase-input': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff',
                    },
                },
            },
        },
        muiBottomToolbarProps: {
            sx: {
                backgroundColor: '#fff',
                color: '#000',
                borderTop: '1px solid #000',
                '.dark &': {
                    backgroundColor: '#000',
                    color: '#fff',
                    borderTop: '1px solid #fff',
                },
                '& .MuiIconButton-root:not([disabled])': {
                    color: '#000',
                    '.dark &': {
                        color: '#000',
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#000',
                    },
                },
                '& .Mui-disabled': {
                    opacity: 0.5,
                },
            },
        },

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                <Link
                    href={route('eleves.edit', { elefe: row.original.id })}
                    className="p-1 text-black hover:opacity-70 dark:text-black dark:hover:opacity-70"
                    title="Modifier"
                >
                    <Icon icon="mdi:pencil" className="h-5 w-5" />
                </Link>
                <button
                    onClick={() => handleDelete(row.original.id, `${row.original.prenomFr} ${row.original.nomFr}`)}
                    className="p-1 text-black hover:opacity-70 dark:text-black dark:hover:opacity-70"
                    title="Supprimer"
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" />
                </button>
            </div>
        ),
        renderTopToolbarCustomActions: () => (
            <Link href={route('eleves.create')}>
                <button className="rounded border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:focus-visible:outline-white">
                    Ajouter Élève
                </button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Liste des Élèves" />
            <div className="bg-white p-4 md:p-6 dark:bg-black">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
