"use server"
import { OrderSchema } from "@/src/schema"

 // Ejecutamos las accions en el server

export async function createOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {

    } catch (error) {
        console.log(error);
    }
}