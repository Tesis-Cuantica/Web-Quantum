'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.moduleId as string;

  // Datos de los módulos (en una app real vendrían del backend)
  const modules = {
    '1': {
      title: 'Fundamentos de la Computación Cuántica',
      description: 'Descubre los conceptos básicos de la computación cuántica',
      lessons: [
        { id: 1, title: 'Introducción', description: 'Conceptos básicos y historia' },
        { id: 2, title: 'Qubits y Estados Cuánticos', description: 'La unidad básica de información cuántica' },
        { id: 3, title: 'Puertas Cuánticas Básicas', description: 'X, H, Z y CNOT gates' }
      ]
    },
    '2': {
      title: 'Algoritmos Cuánticos Básicos',
      description: 'Aprende los algoritmos fundamentales',
      lessons: [
        { id: 1, title: 'Superposición y Entrelazamiento', description: 'Fenómenos cuánticos fundamentales' },
        { id: 2, title: 'Algoritmo de Deutsch-Jozsa', description: 'Primer algoritmo con ventaja cuántica' },
        { id: 3, title: 'Examen del Módulo', description: 'Evalúa tu comprensión' }
      ]
    },
    '3': {
      title: 'Aplicaciones y Seguridad Cuántica',
      description: 'Aplicaciones prácticas de la computación cuántica',
      lessons: [
        { id: 1, title: 'Ciberseguridad Cuántica', description: 'Revolución en criptografía' },
        { id: 2, title: 'Retos y Futuro Cuántico', description: 'Desafíos y oportunidades' }
      ]
    }
  };

  const currentModule = modules[moduleId as keyof typeof modules];
  if (!currentModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Módulo no encontrado</h1>
          <Link href="/estudiante/cursos" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Volver a cursos
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link            href="/estudiante/cursos"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
            onClick={() => {
              // Esto hará que al llegar a /estudiante/cursos se muestre el camino
              if (typeof window !== 'undefined') {
                window.sessionStorage.setItem('mostrarCamino', 'true');
              }
            }}
          >
            <ArrowLeft size={20} />
            Volver al camino
          </Link>
        </div>

        {/* Module Info */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="bg-blue-600 p-4 rounded-2xl shadow-sm">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Módulo {moduleId}: {currentModule.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {currentModule.description}
              </p>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Lecciones del módulo</h2>
          {currentModule.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/estudiante/cursos/${moduleId}/${lesson.id}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white
                    ${index % 2 === 0 ? 'bg-blue-600' : 'bg-red-600'}
                  `}>
                    {lesson.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                  <ArrowLeft className="rotate-180" size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
