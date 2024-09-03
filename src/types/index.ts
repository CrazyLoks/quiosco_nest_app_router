import { Product } from "@prisma/client";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price' > & { // Va a tener esos 3 atributos más los otros 2 que estamos configurando
    quantity: number
    subtotal: number
}