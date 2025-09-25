// src/components/profesor/DashboardStats.tsx
"use client";
import { Users, BookOpen } from "lucide-react";

// Datos de ejemplo (eventualmente vendrán de una API)
const stats = {
  totalStudents: 120,
  totalCourses: 4,
};

// Un componente reutilizable para cada tarjeta
function StatCard({ title, value, icon: Icon }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Cantidad de Estudiantes" value={stats.totalStudents} icon={Users} />
      <StatCard title="Cantidad de Cursos" value={stats.totalCourses} icon={BookOpen} />
      {/* Puedes agregar más tarjetas de estadísticas aquí si lo necesitas */}
    </div>
  );
}