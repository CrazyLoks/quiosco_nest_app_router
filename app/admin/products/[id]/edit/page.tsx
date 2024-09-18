import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation";

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({ // se trae el primer registro que encuentre
        where: {
            id
        }
    })
    if (!product) {
        notFound(); // Esta funcion propia de next, va a buscar el componente not-found de esta seccion
    }

    return product;
}

export default async function EditProductsPage({ params } : { params: { id: string }}) {

    const product = await getProductById(+params.id)

    return (
        <div>page</div>
    )
}
