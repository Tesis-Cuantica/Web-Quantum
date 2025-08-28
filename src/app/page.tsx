import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirigir directamente al dashboard de admin
  redirect("/admin/usuarios")
}
