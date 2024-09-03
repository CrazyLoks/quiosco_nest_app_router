import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeItem: (id: Product['id']) => void
}

export const useStore = create<Store>((set, get) => ({ // Creamos función para obtener el store (como un contexto), set es para escribir en el contexto
    order: [],
    addToOrder: (product) => {

        const { categoryId, image, ...data } = product;
        let order : OrderItem[] = [];
        if ( get().order.find( item => item.id === product.id )) { // comprobamos si ya existe el producto que estamos agregando
            order = get().order.map( item => item.id === product.id ? { // si ya existe, modificamos la cantidad
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item )
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }
        set(() => ({ // set es para modificar el estado o el store
            order
        }))
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => item.id === id ? { // si ya existe, modificamos la cantidad
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item )
        }))
    },
    decreaseQuantity: (id) => {
        const order = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        } : item )

        set(() => ({
            order
        }))
    },
    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    }
}))