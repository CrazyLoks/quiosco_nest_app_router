//* Este es un archivo especial en Next.js
//* El page.tsx es un archivo que se va a mostrar cada vez que visites una carpeta, cada carpeta es una url
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/order/cafe');
}
