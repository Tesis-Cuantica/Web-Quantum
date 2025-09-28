'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Módulo no encontrado</h1>
          <Link href="/estudiante/cursos" className="text-blue-300 hover:text-blue-200">
            ← Volver a cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/estudiante/cursos"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al camino
          </Link>
        </div>

        {/* Module Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Módulo {moduleId}: {currentModule.title}
          </h1>
          <p className="text-blue-200 text-lg">
            {currentModule.description}
          </p>
        </div>

        {/* Lessons List */}
        <div className="grid gap-4">
          {currentModule.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/estudiante/cursos/${moduleId}/${lesson.id}`}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Lección {lesson.id}: {lesson.title}
                  </h3>
                  <p className="text-blue-200">
                    {lesson.description}
                  </p>
                </div>
                <div className="text-blue-300 group-hover:text-white transition-colors">
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
