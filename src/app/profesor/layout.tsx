// src/app/profesor/layout.tsx
"use client"; // Necesario para usar hooks como useState

import { useState } from "react";
import { ProfessorNavbar } from "@/components/profesor/profesor-navbar";

export default function ProfessorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado para controlar si el sidebar está colapsado o expandido
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Renderizamos el Navbar del Profesor */}
      <ProfessorNavbar 
        collapsed={collapsed} 
        onToggle={handleToggleSidebar} 
      />

      {/* Contenedor principal que se ajustará si el sidebar está colapsado */}
      <main 
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          collapsed ? "ml-[72px]" : "ml-[250px]"
        }`}
      >
        {/* Aquí es donde se renderizará cada página (Dashboard, Cursos, etc.) */}
        {children}
      </main>
    </div>
  );
}