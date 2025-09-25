"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react"; 

export interface NavItem {
  href: string;
  icon: LucideIcon; 
  label: string;
  color: string;
}

// Props que recibirá nuestro componente genérico
interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  navItems: NavItem[]; 
}

export function AppSidebar({ collapsed, onToggle, navItems }: AppSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={`quantum-lab-sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="quantum-lab-sidebar-toggle"
        onClick={onToggle}
        aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Logo Section (sin cambios) */}
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

      {/* Navigation Items (ahora usa la prop navItems) */}
      <div className="quantum-lab-sidebar-menu">
        {navItems.map((item) => {
          const Icon = item.icon;

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
          );
        })}

        {/* Logout Button (sin cambios) */}
        <button
          className="quantum-lab-sidebar-item quantum-lab-sidebar-logout"
          title={collapsed ? "Cerrar Sesión" : undefined}
        >
          <LogOut className="quantum-lab-sidebar-icon" size={22} strokeWidth={1.75} />
          {!collapsed && <span className="quantum-lab-sidebar-label">Cerrar Sesión</span>}
        </button>
      </div>
    </nav>
  );
}