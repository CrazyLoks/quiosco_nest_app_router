import { formatCurrency, getImagePath } from "@/src/lib/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"
import { products } from '../../prisma/data/products';

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product} : ProductCardProps) {
    
    const imagePath = getImagePath(product.image);
    return (
        <div className="border bg-white">

            <Image 
                width={400}
                height={500}
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
                quality={75} // Quality es la calidad de la imagen, el default (si no lo ponemos) es 75, va de 1 a 100, siendo 100 la mejor calidad
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductButton // Ejecutamos solamente e botón del dalo del cliente, el resto de este componente es del servidor
                    product={product}
                /> 
            </div>
        </div>
    )
}
