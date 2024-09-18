"use client"
import OrderCard from '@/components/order/OrderCard'
import Heading from '@/components/ui/Heading'
import { OrderWithProducts } from '@/src/types';
import React from 'react'
import useSWR from 'swr';

export default function OrdersPage() {

  const url = '/admin/orders/api';
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, { // useSWR es para tener un comportamiento real y tener los datos actualizados, como reactQuery
    refreshInterval: 60000, // cada minuto va a actualizar los datos
    revalidateOnFocus: false // esto refresca cada que regresamos al código, por eso se inhabilita
  })

  if (isLoading) return 'Cargando...';

  if (data) return (
    <>
        <Heading>Administrar Ordenes</Heading>

        {data.length ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            {data.map(order => (
              <OrderCard 
                key={order.id}
                order={order}
              />
            ))}
          </div>
        ) : <p className='text-center'>No hay ordenes Pendientes</p>}
    </>
  )
}
