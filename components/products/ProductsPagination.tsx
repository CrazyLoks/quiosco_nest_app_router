import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({page, totalPages} : ProductsPaginationProps) {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1); // crea un arreglo y modificamos los valores dependiendo el indice, como: [1,2,3,4,5,6,7,8]
    return (
        <nav className='flex justify-center py-10'>

            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`} // paginacion
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &laquo;
                </Link>
            )}

            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage && 'font-black'} bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >
                    {currentPage}
                </Link>
            ))}

            {page < totalPages && ( // mientras la página sea menor al total de páginas permitidas, se va a mostrar el icono para navegar
                <Link
                    href={`/admin/products?page=${page + 1}`} // paginacion
                    className='bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
                >
                    &raquo;
                </Link>
            )}
        </nav>
    )
}
