import { formatCurrency } from "@/src/lib/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product} : ProductCardProps) {
  return (
    <div className="border bg-white">

        <Image 
            width={400}
            height={500}
            src={`/products/${product.image}.jpg`}
            alt={`Imagen platillo ${product.name}`}
            quality={75} // Quality es la calidad de la imagen, el default (si no lo ponemos) es 75, va de 1 a 100, siendo 100 la mejor calidad
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatCurrency(product.price)}
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">
                Agregar
            </button>
        </div>
    </div>
  )
}
