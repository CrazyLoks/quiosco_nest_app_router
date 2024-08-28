import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category // Cuando creamos nuestros modelos, prisma crea los types en automático
}

export default function CategoryIcon({category} : CategoryIconProps) {
  return (
    <div>{category.name}</div>
  )
}
