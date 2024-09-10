"use server"
import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/schema"
import { revalidatePath } from "next/cache";

 // aunque sea un componente de servidor, en los actions hay que poner esto

export async function completeOrder(formData: FormData) {
    const data = {
        orderId: formData.get('order_id')
    }

    const result = OrderIdSchema.safeParse(data);

    if (result.success) {
        try {
            await prisma.order.update({
                where: {
                    id: result.data.orderId
                },
                data: {
                    status: true,
                    orderReadyAt: new Date(Date.now())
                }
            })

            revalidatePath('/admin/orders');
        } catch (error) {
            console.log(error);
        }
    }
}