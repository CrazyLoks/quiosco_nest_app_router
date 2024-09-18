import { prisma } from "@/src/lib/prisma"

export async function GET() { // Se crea en automatico una ruta GET

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

    return Response.json(orders);
}