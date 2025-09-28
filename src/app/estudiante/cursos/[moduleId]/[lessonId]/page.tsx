'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, Play } from 'lucide-react';
import { useState } from 'react';

export default function LessonPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;
  const [completed, setCompleted] = useState(false);

  // Datos de las lecciones (en una app real vendrían del backend)
  const lessons = {
    '1': {
      '1': {
        title: 'Introducción a la Computación Cuántica',
        type: 'leccion',
        content: `
          <h2>¡Bienvenido al mundo cuántico!</h2>
          <p>La computación cuántica representa una revolución en la forma de procesar información. A diferencia de los computadores clásicos que utilizan bits (0 o 1), los computadores cuánticos utilizan qubits que pueden existir en múltiples estados simultáneamente.</p>
          
          <h3>Historia y Evolución</h3>
          <p>El concepto de computación cuántica fue propuesto por primera vez por Richard Feynman en 1982, quien sugirió que los sistemas cuánticos podrían simular otros sistemas cuánticos de manera más eficiente que los computadores clásicos.</p>
          
          <h3>Ventajas de la Computación Cuántica</h3>
          <ul>
            <li><strong>Paralelismo cuántico:</strong> Capacidad de procesar múltiples posibilidades simultáneamente</li>
            <li><strong>Superposición:</strong> Los qubits pueden estar en múltiples estados a la vez</li>
            <li><strong>Entrelazamiento:</strong> Conexión instantánea entre qubits sin importar la distancia</li>
          </ul>
          
          <h3>Aplicaciones Actuales</h3>
          <p>Aunque aún estamos en las primeras etapas, la computación cuántica promete revolucionar áreas como:</p>
          <ul>
            <li>Criptografía y seguridad</li>
            <li>Simulación molecular y desarrollo de medicamentos</li>
            <li>Optimización de rutas y logística</li>
            <li>Inteligencia artificial y machine learning</li>
          </ul>
        `,
        duration: '15 min',
        points: 50
      },
      '2': {
        title: 'Qubits y Estados Cuánticos',
        type: 'leccion',
        content: `
          <h2>Los Qubits: Unidades Fundamentales</h2>
          <p>Un qubit (quantum bit) es la unidad básica de información en computación cuántica. Mientras que un bit clásico puede ser 0 o 1, un qubit puede existir en una superposición de ambos estados.</p>
          
          <h3>Representación Matemática</h3>
          <p>Un qubit se representa como: |ψ⟩ = α|0⟩ + β|1⟩</p>
          <p>Donde α y β son amplitudes complejas que satisfacen |α|² + |β|² = 1</p>
          
          <h3>Estados Cuánticos Básicos</h3>
          <ul>
            <li><strong>|0⟩:</strong> Estado base, equivalente al bit clásico 0</li>
            <li><strong>|1⟩:</strong> Estado excitado, equivalente al bit clásico 1</li>
            <li><strong>|+⟩:</strong> Superposición igual de |0⟩ y |1⟩</li>
            <li><strong>|-⟩:</strong> Superposición con fase opuesta</li>
          </ul>
          
          <h3>Medición Cuántica</h3>
          <p>Cuando medimos un qubit, colapsa a uno de los estados base (|0⟩ o |1⟩) con probabilidades determinadas por |α|² y |β|².</p>
        `,
        duration: '20 min',
        points: 75
      },
      '3': {
        title: 'Puertas Cuánticas Básicas',
        type: 'practica',
        content: `
          <h2>Puertas Cuánticas: Operaciones Fundamentales</h2>
          <p>Las puertas cuánticas son operaciones unitarias que manipulan el estado de los qubits. Son los bloques de construcción de los algoritmos cuánticos.</p>
          
          <h3>Puertas de Un Qubit</h3>
          <h4>Puerta X (NOT cuántica)</h4>
          <p>Invierte el estado del qubit: |0⟩ → |1⟩ y |1⟩ → |0⟩</p>
          
          <h4>Puerta H (Hadamard)</h4>
          <p>Crea superposición: |0⟩ → (|0⟩ + |1⟩)/√2</p>
          
          <h4>Puerta Z</h4>
          <p>Aplica una fase: |1⟩ → -|1⟩, |0⟩ permanece igual</p>
          
          <h3>Puertas de Dos Qubits</h3>
          <h4>Puerta CNOT</h4>
          <p>NOT controlado: invierte el qubit objetivo si el qubit control está en |1⟩</p>
          
          <h3>Ejercicio Práctico</h3>
          <p>Construye un circuito que:</p>
          <ol>
            <li>Aplique una puerta H al primer qubit</li>
            <li>Use una puerta CNOT entre el primer y segundo qubit</li>
            <li>Mida ambos qubits</li>
          </ol>
          <p>Este circuito crea un estado de Bell, un ejemplo de entrelazamiento cuántico.</p>
        `,
        duration: '30 min',
        points: 100
      }
    },
    '2': {
      '1': {
        title: 'Superposición y Entrelazamiento',
        type: 'leccion',
        content: `
          <h2>Fenómenos Cuánticos Fundamentales</h2>
          <p>La superposición y el entrelazamiento son los fenómenos que otorgan a la computación cuántica su poder único.</p>
          
          <h3>Superposición Cuántica</h3>
          <p>La superposición permite que un qubit exista en múltiples estados simultáneamente hasta que es medido.</p>
          
          <h3>Entrelazamiento Cuántico</h3>
          <p>El entrelazamiento crea correlaciones entre qubits que no pueden ser explicadas por la física clásica.</p>
        `,
        duration: '25 min',
        points: 75
      }
    }
  };

  const currentLesson = lessons[moduleId as keyof typeof lessons]?.[lessonId as keyof typeof lessons[keyof typeof lessons]];

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Lección no encontrada</h1>
          <Link href="/estudiante/cursos" className="text-blue-300 hover:text-blue-200">
            ← Volver a cursos
          </Link>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);
    // Aquí se enviarían los datos al backend para actualizar el progreso
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href={`/estudiante/cursos/${moduleId}`}
                className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <ArrowLeft size={20} />
                Volver al módulo
              </Link>
              <div className="h-6 w-px bg-white/30" />
              <div className="flex items-center gap-2 text-white">
                <BookOpen size={20} />
                <span className="font-medium">Módulo {moduleId} - Lección {lessonId}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm">{currentLesson.duration}</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold">
                +{currentLesson.points} pts
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden">
          {/* Lesson Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <div className="flex items-center gap-3 mb-4">
              {currentLesson.type === 'leccion' && <BookOpen size={28} className="text-white" />}
              {currentLesson.type === 'practica' && <Play size={28} className="text-white" />}
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium text-white capitalize">
                {currentLesson.type}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {currentLesson.title}
            </h1>
          </div>

          {/* Lesson Content */}
          <div className="p-8">
            <div 
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: currentLesson.content }}
              style={{
                color: '#e2e8f0',
                lineHeight: '1.7'
              }}
            />
          </div>

          {/* Lesson Actions */}
          <div className="p-8 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {completed && (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle size={20} />
                    <span className="font-medium">¡Lección completada!</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                {!completed && (
                  <button
                    onClick={handleComplete}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <CheckCircle size={20} />
                    Marcar como completada
                  </button>
                )}
                <Link
                  href={`/estudiante/cursos/${moduleId}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Continuar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
