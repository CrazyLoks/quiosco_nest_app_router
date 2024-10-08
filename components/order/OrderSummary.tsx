"use client" // Si queremos usar hooks de React o Zustand (por ejemplo), el componente debe ser de cliente (usando Next.js)
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/lib/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrderSummary() {

  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      total,
      order
    }

    const result = OrderSchema.safeParse(data); // Comprobamos que sea igual al schema de zod
    if (!result.success) { // Validación del lado del servidor
      result.error.issues.forEach((issue) => {
        toast.error(issue.message); // Mostramos con una alerta el mensaje de error
      })
      return;
    }

    const response = await createOrder(data); // Action que se ejecuta del lado del servidor
    if (response?.errors) { // Validación del lado del servidor
        response.errors.forEach((issue) => {
          toast.error(issue.message); // Mostramos con una alerta el mensaje de error
        })
    }

    toast.success('Pedido Realizado Correctamente');
    clearOrder();
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

        {order.length === 0 ? <p className="text-center my-10">El pedido está vacío</p> : (
          <div className="mt-5">
            {order.map(item => (
              <ProductDetails 
                key={item.id}
                item={item}
              />
            ))}

            <p className="text-2xl mt-20 text-center">
              Total a pagar: {''}
              <span className="font-bold">{formatCurrency(total)}</span>
            </p>

            <form
              className="w-full mt-10 space-y-5"
              action={handleCreateOrder} // Los action son funciones de Next para interactuar con la DB, las funciones son asyncronas y se ejecutan del lado del servidor pero se pueden llamar desde cualquier tipo de componente
            >
              <input
                type="text"
                placeholder="Tu Nombre"
                className="bg-white border border-gray-100 p-2 w-full"
                name="name"
              />

              <input
                type="submit"
                className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
                value='Confirmar pedido'
              />
            </form>
          </div>
        )}
    </aside>
  )
}
