import AppLayout from '@/layouts/app-layout';
import { Icon } from '@iconify/react';
import { Head, Link, router } from '@inertiajs/react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react'; // Added useEffect, useState

const breadcrumbs = [{ title: 'Etudes', href: route('etudes.index') }];

// Default pagination (adjust if needed)
const defaultPageSize = 10;
const defaultPageIndex = 0;

export default function Index({ etudes }) {
    // etudes is paginator prop

    // --- State for MRT Pagination ---
    const [pagination, setPagination] = useState({
        pageIndex: etudes.current_page - 1 ?? defaultPageIndex,
        pageSize: etudes.per_page ?? defaultPageSize,
    });
    // --- End State ---

    // --- Trigger data fetch on pagination change ---
    useEffect(() => {
        if (pagination.pageIndex !== etudes.current_page - 1 || pagination.pageSize !== etudes.per_page) {
            router.get(
                route('etudes.index'),
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
                accessorKey: 'libelle_etude',
                header: 'Libellé Étude',
                size: 400,
            },
            {
                accessorKey: 'created_at',
                header: 'Créé le',
                Cell: ({ cell }) => (cell.getValue() ? new Date(cell.getValue()).toLocaleDateString() : 'N/A'), // Keep N/A simple or style like Eleves
                size: 150,
            },
        ],
        [],
    );

    const handleDelete = (id, name) => {
        if (confirm(`Êtes-vous sûr de vouloir supprimer "${name}" ?`)) {
            // Ensure correct parameter name 'etude' for destroy route
            router.delete(route('etudes.destroy', { etude: id }), {
                preserveScroll: true,
            });
        }
    };

    const table = useMaterialReactTable({
        columns,
        data: etudes.data, // Use data from paginator
        manualPagination: true,
        state: { pagination }, // Link MRT state to React state
        rowCount: etudes.total,
        onPaginationChange: setPagination, // Link MRT events to state setter
        enableEditing: true,
        enableRowsPerPage: false, // Consistent with Eleves

        // --- Copied Styling from Eleves/Index.jsx ---
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
                    borderColor: '#fff', // Ensure dark border matches
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
                    color: '#fff', // White text in dark mode cells
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
                // Corrected dark mode icon colors for pagination
                '& .MuiIconButton-root:not([disabled])': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff', // White icons for dark mode
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: '#000',
                    '.dark &': {
                        color: '#fff', // White icons for dark mode
                    },
                },
                '& .Mui-disabled': {
                    // Ensure disabled icons are visible
                    opacity: 0.5,
                    '.dark &': {
                        opacity: 0.5, // Adjust if needed for dark
                    },
                },
            },
        },
        // --- End Copied Styling ---

        renderRowActions: ({ row }) => (
            <div className="flex items-center gap-2">
                {/* Copied & Adjusted Row Action Styles */}
                <Link
                    // Use correct parameter 'etude'
                    href={route('etudes.edit', { etude: row.original.id_etudes })}
                    className="p-1 text-black hover:opacity-70 dark:text-white dark:hover:opacity-70" // Use white text in dark mode
                    title="Modifier"
                >
                    <Icon icon="mdi:pencil" className="h-5 w-5" />
                </Link>
                <button
                    onClick={() => handleDelete(row.original.id_etudes, row.original.libelle_etude)}
                    className="p-1 text-black hover:opacity-70 dark:text-white dark:hover:opacity-70" // Use white text in dark mode
                    title="Supprimer"
                >
                    <Icon icon="mdi:delete" className="h-5 w-5" />
                </button>
            </div>
        ),

        renderTopToolbarCustomActions: () => (
            <Link href={route('etudes.create')}>
                {/* Copied Button Style */}
                <button className="rounded border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:focus-visible:outline-white">
                    Ajouter Type Étude
                </button>
            </Link>
        ),
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Types d'Études" />
            {/* Copied Container Style */}
            <div className="bg-white p-4 md:p-6 dark:bg-black">
                <MaterialReactTable table={table} />
            </div>
        </AppLayout>
    );
}
