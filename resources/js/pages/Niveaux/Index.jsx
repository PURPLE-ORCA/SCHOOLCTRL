import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react'; // Added useEffect, useState

const breadcrumbs = [{ title: 'Niveaux Scolaires', href: route('niveaux.index') }];

// Default pagination (adjust if needed)
const defaultPageSize = 10;
const defaultPageIndex = 0;

export default function Index({ niveaux }) {
    // niveaux is paginator prop

    // --- State for MRT Pagination ---
    const [pagination, setPagination] = useState({
        pageIndex: niveaux.current_page - 1 ?? defaultPageIndex,
        pageSize: niveaux.per_page ?? defaultPageSize,
    });
    // --- End State ---

    // --- Trigger data fetch on pagination change ---
    useEffect(() => {
        if (pagination.pageIndex !== niveaux.current_page - 1 || pagination.pageSize !== niveaux.per_page) {
            router.get(
                route('niveaux.index'), // Target correct route
                {
                    page: pagination.pageIndex + 1,
                    per_page: pagination.pageSize,
                },
                { preserveState: true, replace: true, preserveScroll: true },
            );
        }
    }, [pagination.pageIndex, pagination.pageSize]);
    // --- End Trigger ---

    const columns = useMemo(
        () => [
            {
                accessorKey: 'libelle_niveau',
                header: 'Libellé Niveau',
                size: 250,
            },
            {
                // Use snake_case for relationship access
                accessorKey: 'type_etude.libelle_etude',
                header: "Type d'Étude",
                size: 200,
                // Adjusted N/A color for B&W theme
                Cell: ({ cell }) => cell.getValue() ?? <span className="text-black opacity-70 dark:text-white dark:opacity-70">N/A</span>,
            },
            {
                accessorKey: 'created_at',
                header: 'Créé le',
                Cell: ({ cell }) => (cell.getValue() ? new Date(cell.getValue()).toLocaleDateString() : 'N/A'), // Keep N/A simple
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
            // Use correct parameter 'niveau' and id 'id_niveau'
            router.delete(route('niveaux.destroy', { niveau: id }), { preserveScroll: true });
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: niveaux.data, // Use data from paginator
        manualPagination: true,
        state: { pagination }, // Link MRT state
        rowCount: niveaux.total,
        onPaginationChange: setPagination, // Link MRT events
        enableEditing: true,
        enableRowsPerPage: false, // Consistent styling

        // --- Copied Styling ---
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
                    borderColor: '#fff',
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
                    color: '#fff', // White text dark
                    borderBottom: '1px solid #fff',
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
                        color: '#fff', // Ensure dark icons are white
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff', // Ensure dark icons are white
                    },
                },
                '& .Mui-disabled': {
                    opacity: 0.5,
                },
            },
        },
        // --- End Copied Styling ---

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                {/* Copied & Adjusted Action Styles */}
                <Link
                    // Use correct parameter 'niveau' and id 'id_niveau'
                    href={route('niveaux.edit', { niveau: row.original.id_niveau })}
                    className="p-1 text-black hover:opacity-70 dark:text-white dark:hover:opacity-70"
                    title="Modifier"
                >
                    <Icon icon="mdi:pencil" className="h-5 w-5" />
                </Link>
                <button
                    // Use correct id 'id_niveau'
                    onClick={() => handleDelete(row.original.id_niveau, row.original.libelle_niveau)}
                    className="p-1 text-black hover:opacity-70 dark:text-white dark:hover:opacity-70"
                    title="Supprimer"
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" />
                </button>
            </div>
        ),

        renderTopToolbarCustomActions: () => (
            <Link href={route('niveaux.create')}>
                {/* Copied Button Style */}
                <button className="rounded border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:focus-visible:outline-white">
                    Ajouter Niveau Scolaire
                </button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Niveaux Scolaires" />
            {/* Copied Container Style */}
            <div className="bg-white p-4 md:p-6 dark:bg-black">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
