import { create } from "zustand";
import { OrderItem } from "./types";

interface Store {
    order: OrderItem[]
}

export const useStore = create<Store>(() => ({ // Creamos función para obtener el store (como un contexto)
    order: []
}))