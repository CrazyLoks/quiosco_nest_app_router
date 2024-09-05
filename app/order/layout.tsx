import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";
import ToastNotification from "@/components/ui/ToastNotification";

//* Todas las carpetas dentro de 'order' van a tener el mismo diseño
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { // en el children se va a inyectar el page de la carpeta

    return (
        <>
            <div className="md:flex">
                <OrderSidebar />

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>

                <OrderSummary />
            </div>

            <ToastNotification />
        </>
    )

}