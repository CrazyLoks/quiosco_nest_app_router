import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // PrismaClient es la 'funcion' para interactuar con la DB

async function main() {
    try {
        await prisma.category.createMany({ // tomamos un arreglo (categories) y le decimos que eso lo agregue a la DB, 'category' es el modelo, la tabla 
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error); 
    }
}

main()
    .then( async () => { // si todo sale bien después de agregar los registros
        await prisma.$disconnect(); // Nos desconectamos de la Db
    })
    .catch( async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })