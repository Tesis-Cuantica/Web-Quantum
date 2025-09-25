"use client";
import { Edit } from "lucide-react";

// Datos de ejemplo
const courses = [
  { id: 1, name: "Física Cuántica", section: "A", cycle: "2025-II" },
  { id: 2, name: "Termodinámica", section: "B", cycle: "2025-II" },
  { id: 3, name: "Cálculo Avanzado", section: "C", cycle: "2025-I" },
];

export function CourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-5 rounded-lg shadow-md relative">
          <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
          <p className="text-sm text-gray-500">Sección: {course.section}</p>
          <p className="text-sm text-gray-500">Ciclo: {course.cycle}</p>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600">
            {/* Este botón sería para editar. Llevaría a /profesor/cursos/editar/[id] */}
            <Edit className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}