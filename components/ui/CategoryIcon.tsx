"use client" // Decimos que será un componente de cliente
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category // Cuando creamos nuestros modelos, prisma crea los types en automático
}

export default function CategoryIcon({category} : CategoryIconProps) {

    const params = useParams<{category: string}>(); // useParams solo se puede usar en archivos de cliente (page, router, layout)
    console.log(params);
    return (
        <div
            className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            <div className="w-16 h-16 relative">
                <Image // Componente de Next.js para optimizar las imagenes
                    fill // el componente necesita un width y height, con fill hacemos que dependa del div padre
                    src={`/icon_${category.slug}.svg`}
                    alt="Imagen Categoría" // Obligatorio
                />
            </div>

            <Link
                className="text-xl font-bold"
                href={`/order/${category.slug}`}
            >
                {category.name}
            </Link>
        </div>
    )
}
