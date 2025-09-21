"use client"

import Image from "next/image";

import Link from "next/link"
import { usePathname } from "next/navigation"

import { 
  Home, 
  BarChart3, 
  Trophy, 
  FlaskConical, 
  UserCircle, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface StudentNavbarProps {
  collapsed: boolean
  onToggle: () => void
}

export function StudentNavbar({ collapsed, onToggle }: StudentNavbarProps) {
  const pathname = usePathname()

 
  const navItems = [
    { href: "/estudiante", icon: Home, label: "Inicio", color: "red" },
    { href: "/estudiante/progreso", icon: BarChart3, label: "Progreso", color: "blue" },
    { href: "/estudiante/logros", icon: Trophy, label: "Logros", color: "yellow" },
    { href: "/estudiante/laboratorio", icon: FlaskConical, label: "Laboratorio", color: "green" },
    { href: "/estudiante/perfil", icon: UserCircle, label: "Perfil", color: "purple" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className={`quantum-lab-sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="quantum-lab-sidebar-toggle"
        onClick={onToggle}
        aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Logo Section */}
       <div className="quantum-lab-sidebar-header">
        <div className="quantum-lab-logo">
          <Image
            src="/logo.png"          
            alt="QuantumTec Logo"   
            width={40}              
            height={40}            
            className="rounded-full object-cover" 
          />
          {!collapsed && <span className="quantum-lab-logo-text">QuantumTec</span>}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="quantum-lab-sidebar-menu">
        {navItems.map((item) => {
       
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`quantum-lab-sidebar-item ${isActive(item.href) ? "active" : ""}`}
              data-color={item.color}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="quantum-lab-sidebar-icon" size={22} strokeWidth={1.75} />
              {!collapsed && <span className="quantum-lab-sidebar-label">{item.label}</span>}
            </Link>
          )
        })}

        {/* Logout Button */}
        <button
          className="quantum-lab-sidebar-item quantum-lab-sidebar-logout"
          title={collapsed ? "Cerrar Sesión" : undefined}
        >
          <LogOut className="quantum-lab-sidebar-icon" size={22} strokeWidth={1.75} />
          {!collapsed && <span className="quantum-lab-sidebar-label">Cerrar Sesión</span>}
        </button>
      </div>
    </nav>
  )
}