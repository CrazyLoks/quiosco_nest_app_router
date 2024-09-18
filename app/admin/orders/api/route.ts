import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'; // para que las API sean dinamicas y no se queden cacheadas

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