//* Con la carpeta llamada asi, entre corchetes, va a ser dinámica, por cada categoria vamos a tener este archivo, una page

import { prisma } from "@/src/lib/prisma"


async function getProducts( category: string ) {
  const products = await prisma.product.findMany({ // buscamos todos los productos cuya categoria sea igual a la que estamos pasando
    where: {
      category: {
        slug: category // que el slug sea igual a la category que estamos pasando
      }
    }
  })

  return products;
}

export default async function OrderPage({params} : { params: { category : string }}) { // Next permite componentes asyncronos

  const products = await getProducts(params.category);
  console.log(products);
  
  return (
    <div>OrderPage</div>
  )
}
