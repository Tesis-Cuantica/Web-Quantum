// src/app/profesor/cursos/agregar/page.tsx
import { CourseForm } from "@/components/profesor/CourseForm";

export default function AddCoursePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Agregar Nuevo Curso</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <CourseForm />
      </div>
    </div>
  );
}