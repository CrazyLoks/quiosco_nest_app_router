import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import page from './new/page';
import { redirect } from "next/navigation";

async function productCount() {
  return await prisma.product.count(); // Retorna cuantos productos hay en la DB
}

async function getProducts(page: number, pageSize: number) {

  const skip = (page - 1) * pageSize; // Calculamos en que página estamos

  const products = await prisma.product.findMany({ // Nos traemos todos los productos
    take: pageSize, // take es cuantos registros va a tomar
    skip, // skip es cuantosa registros se va a 'saltar'
    include: {
      category: true
    }
  });

  return products;
}

export default async function ProductsPage({searchParams} : { searchParams: {page: string}}) { // searchParams es interno de Next, es para recuperar los parámetros de la URL

  const page = +searchParams.page || 1; // si no existe el parámetro page, se asignará 1
  const pageSize = 10;

  if (page < 0) redirect('/admin/products');

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData]); // Se hacen ambas consultas al mismo tiempo porque ninguna depende de la otra
  const totalPages = Math.ceil(totalProducts / pageSize); // Ceil va a redondear hacia arriba siempre

  if (page > totalPages) redirect('/admin/products');

  return (
    <>
        <Heading>Administrar Productos</Heading>

        <ProductsTable 
          products={products}
        />

        <ProductsPagination 
          page={page}
          totalPages={totalPages}
        />
    </>
  )
}
