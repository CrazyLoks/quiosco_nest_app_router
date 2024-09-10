import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import React from 'react'

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: { // traemos la relación que establecimos en prismala relación la hace prsima, no está directamente en la base de datos
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return orders
}

export default async function OrdersPage() {
  const orders = await getPendingOrders();

  return (
    <>
        <Heading>Administrar Ordenes</Heading>
    </>
  )
}
