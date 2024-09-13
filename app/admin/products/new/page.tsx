import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>

      <AddProductForm>
        <ProductForm /> {/*componente del servidor, se manda como children porque no se puede tener un componente de servidor, despues de cliente y despues de servidor, pero de esta manera si se puede, detecta que hay un componente del servidor y registra o guarda ese espacio para el componente (composicion) */}
      </AddProductForm>
    </>
  )
}
