import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export default function ProductsPagination({page, totalPages} : ProductsPaginationProps) {
  return (
    <nav className='flex justify-center py-10'>

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
