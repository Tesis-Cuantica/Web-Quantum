import Link from 'next/link';
import { CourseList } from '@/components/profesor/CourseList';
import { PlusCircle } from 'lucide-react';

export default function MyCoursesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mis Cursos</h1>
        <Link href="/profesor/cursos/agregar">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
            <PlusCircle className="h-5 w-5 mr-2" />
            Agregar Curso
          </button>
        </Link>
      </div>
      
      <CourseList />
    </div>
  );
}