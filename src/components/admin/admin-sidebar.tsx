"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Users, GraduationCap, UserCheck, BookOpen, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    name: "Usuarios",
    href: "/admin/usuarios",
    icon: Users,
  },
  {
    name: "Profesores",
    href: "/admin/profesores",
    icon: GraduationCap,
  },
  {
    name: "Alumnos",
    href: "/admin/alumnos",
    icon: UserCheck,
  },
  {
    name: "Cursos",
    href: "/admin/cursos",
    icon: BookOpen,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white shadow-md"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className={cn("admin-sidebar", isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0")}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-center border-b border-slate-700 px-4">
            <h2 className="text-lg font-semibold text-white hidden md:block">Panel Admin</h2>
            <Users className="h-6 w-6 text-white md:hidden" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn("sidebar-nav-item", isActive && "active")}
                >
                  <item.icon className="sidebar-nav-icon" />
                  <span className="sidebar-nav-text">{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
