import { prisma } from "@/src/lib/prisma"

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({ // se trae el primer registro que encuentre
        where: {
            id
        }
    })
    if (!product) {
        
    }

    return product;
}

export default async function EditProductsPage({ params } : { params: { id: string }}) {

    const product = await getProductById(+params.id)

    return (
        <div>page</div>
    )
}
