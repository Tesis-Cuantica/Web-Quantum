// src/app/profesor/page.tsx
import { DashboardStats } from "@/components/profesor/DashboardStats";
import { StudentProgressTable } from "@/components/profesor/StudentProgressTable";

export default function ProfessorDashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Componente para las tarjetas de estadísticas */}
      <DashboardStats />

      {/* Separador visual */}
      <div className="my-8 border-t border-gray-200"></div>

      {/* Componente para la tabla de progreso de estudiantes */}
      <StudentProgressTable />
    </div>
  );
}