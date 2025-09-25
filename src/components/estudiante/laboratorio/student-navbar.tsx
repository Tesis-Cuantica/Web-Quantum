// Tu archivo original, ahora simplificado
// src/components/StudentNavbar.tsx

"use client"
// RUTA CORREGIDA: Usamos '@/' que apunta directamente a la carpeta 'src'
import { AppSidebar } from "@/components/layout/AppSidebar"; 

// RUTA Y NOMBRE CORREGIDOS: Tu archivo se llama 'nsvigation.ts' (con 's' y 'v')
import { professorNavItems, studentNavItems } from "@/lib/nsvigation"; 

interface StudentNavbarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function StudentNavbar({ collapsed, onToggle }: StudentNavbarProps) {
  return (
    <AppSidebar
      collapsed={collapsed}
      onToggle={onToggle}
      navItems={studentNavItems} // ¡Aquí le pasas los enlaces del estudiante!
    />
  );
}