'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Award, BookOpen, ArrowRight, RefreshCw } from 'lucide-react';

interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  tema: string;
}

interface ExamenModuloProps {
  moduleId: string;
}

export default function ExamenModulo({ moduleId }: ExamenModuloProps) {
  const [mostrarExamen, setMostrarExamen] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<number[]>([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
  // Preguntas del examen para el Módulo 1 - 12 preguntas cubriendo los 3 subtemas
  const preguntas: Pregunta[] = [
    // INTRODUCCIÓN (4 preguntas)
    {
      id: 1,
      pregunta: "¿Qué característica fundamental distingue a la computación cuántica de la clásica?",
      opciones: [
        "Utiliza bits en lugar de qubits",
        "Permite superposición y entrelazamiento cuántico",
        "Es más lenta pero más precisa",
        "Solo funciona a temperatura ambiente"
      ],
      respuestaCorrecta: 1,
      explicacion: "La computación cuántica utiliza qubits que pueden existir en superposición, permitiendo procesar múltiples estados simultáneamente, a diferencia de los bits clásicos que solo pueden ser 0 o 1.",
      tema: "Introducción"
    },
    {
      id: 2,
      pregunta: "¿Cuál fue uno de los primeros algoritmos cuánticos que demostró ventaja exponencial?",
      opciones: [
        "Algoritmo de ordenamiento burbuja",
        "Algoritmo de Shor para factorización",
        "Algoritmo de búsqueda lineal",
        "Algoritmo de multiplicación de matrices"
      ],
      respuestaCorrecta: 1,
      explicacion: "El algoritmo de Shor, desarrollado por Peter Shor en 1994, demostró que la computación cuántica puede factorizar números enteros exponencialmente más rápido que los mejores algoritmos clásicos conocidos.",
      tema: "Introducción"
    },
    {
      id: 3,
      pregunta: "¿Por qué las computadoras cuánticas actuales requieren temperaturas extremadamente bajas?",
      opciones: [
        "Para acelerar los cálculos",
        "Para mantener la coherencia cuántica y evitar decoherencia",
        "Para reducir el consumo de energía",
        "Para aumentar la velocidad de los fotones"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las temperaturas ultra-bajas (cerca del cero absoluto) son necesarias para mantener los estados cuánticos coherentes y evitar que el ruido térmico destruya la superposición y el entrelazamiento.",
      tema: "Introducción"
    },
    {
      id: 4,
      pregunta: "¿Cuál es la principal promesa de la computación cuántica en criptografía?",
      opciones: [
        "Crear contraseñas más fuertes",
        "Romper sistemas criptográficos actuales y crear nuevos métodos seguros",
        "Acelerar la transmisión de datos",
        "Reducir el tamaño de los archivos"
      ],
      respuestaCorrecta: 1,
      explicacion: "La computación cuántica puede romper muchos sistemas criptográficos actuales (como RSA) pero también permite desarrollar nuevos métodos de criptografía cuántica que son teóricamente irrompibles.",
      tema: "Introducción"
    },
    
    // QUBITS Y ESTADOS CUÁNTICOS (4 preguntas)
    {
      id: 5,
      pregunta: "¿Cuántos estados clásicos puede representar simultáneamente un qubit en superposición?",
      opciones: [
        "Solo uno a la vez",
        "Exactamente dos",
        "Ambos estados |0⟩ y |1⟩ simultáneamente",
        "Infinitos estados"
      ],
      respuestaCorrecta: 2,
      explicacion: "Un qubit en superposición puede existir en una combinación lineal de los estados |0⟩ y |1⟩, representando ambos estados simultáneamente hasta que se mida.",
      tema: "Qubits y Estados Cuánticos"
    },
    {
      id: 6,
      pregunta: "¿Qué representa la notación |ψ⟩ = α|0⟩ + β|1⟩ en un qubit?",
      opciones: [
        "La suma de dos bits clásicos",
        "El estado de superposición con amplitudes α y β",
        "La multiplicación de dos qubits",
        "Un error en la medición"
      ],
      respuestaCorrecta: 1,
      explicacion: "Esta notación representa el estado de superposición de un qubit, donde α y β son las amplitudes de probabilidad para los estados |0⟩ y |1⟩ respectivamente.",
      tema: "Qubits y Estados Cuánticos"
    },
    {
      id: 7,
      pregunta: "¿Qué condición deben cumplir las amplitudes α y β en un qubit normalizado?",
      opciones: [
        "α + β = 1",
        "|α|² + |β|² = 1",
        "α = β siempre",
        "α - β = 0"
      ],
      respuestaCorrecta: 1,
      explicacion: "La condición de normalización |α|² + |β|² = 1 garantiza que las probabilidades de medir |0⟩ o |1⟩ sumen exactamente 100%.",
      tema: "Qubits y Estados Cuánticos"
    },
    {
      id: 8,
      pregunta: "¿Qué sucede cuando medimos un qubit en superposición?",
      opciones: [
        "Obtenemos ambos valores simultáneamente",
        "El qubit colapsa a un estado definido (|0⟩ o |1⟩)",
        "El qubit se destruye",
        "No podemos obtener ningún resultado"
      ],
      respuestaCorrecta: 1,      explicacion: "Al medir un qubit en superposición, el estado colapsa probabilísticamente a |0⟩ o |1⟩, con probabilidades determinadas por |α|² y |β|².",
      tema: "Qubits y Estados Cuánticos"
    },

    // PUERTAS CUÁNTICAS BÁSICAS (4 preguntas)
    {
      id: 9,
      pregunta: "¿Qué hace la puerta cuántica X (Pauli-X)?",
      opciones: [
        "Crea superposición en el qubit",
        "Invierte el estado del qubit (NOT cuántico)",
        "Mide el estado del qubit",
        "Entrelaza dos qubits"
      ],
      respuestaCorrecta: 1,
      explicacion: "La puerta X actúa como una puerta NOT cuántica, invirtiendo el estado del qubit: |0⟩ → |1⟩ y |1⟩ → |0⟩.",
      tema: "Puertas Cuánticas Básicas"
    },
    {
      id: 10,
      pregunta: "¿Cuál es la función principal de la puerta Hadamard (H)?",
      opciones: [
        "Invertir el estado del qubit",
        "Crear una superposición equiprobable",
        "Medir el qubit",
        "Aplicar una fase"
      ],
      respuestaCorrecta: 1,
      explicacion: "La puerta Hadamard crea una superposición equiprobable: H|0⟩ = (|0⟩ + |1⟩)/√2 y H|1⟩ = (|0⟩ - |1⟩)/√2.",
      tema: "Puertas Cuánticas Básicas"
    },
    {
      id: 11,
      pregunta: "¿Qué característica especial tiene la puerta CNOT (Controlled-NOT)?",
      opciones: [
        "Solo afecta a un qubit",
        "Crea entrelazamiento entre dos qubits",
        "Siempre invierte ambos qubits",
        "No puede ser implementada físicamente"
      ],
      respuestaCorrecta: 1,
      explicacion: "La puerta CNOT puede crear entrelazamiento entre dos qubits. Invierte el qubit objetivo solo si el qubit control está en |1⟩, creando correlaciones cuánticas.",
      tema: "Puertas Cuánticas Básicas"
    },
    {
      id: 12,
      pregunta: "¿Qué ocurre si aplicamos la puerta Hadamard dos veces consecutivas al mismo qubit?",
      opciones: [
        "El qubit se destruye",
        "Se crea más superposición",
        "El qubit regresa a su estado original",
        "Se produce entrelazamiento"
      ],
      respuestaCorrecta: 2,
      explicacion: "La puerta Hadamard es su propia inversa: H·H = I (identidad). Aplicarla dos veces consecutivas devuelve el qubit a su estado original.",
      tema: "Puertas Cuánticas Básicas"
    }
  ];

  const iniciarExamen = () => {
    setMostrarExamen(true);
    setPreguntaActual(0);
    setRespuestas([]);
    setMostrarResultados(false);
    setRespuestaSeleccionada(null);
  };

  const seleccionarRespuesta = (indice: number) => {
    setRespuestaSeleccionada(indice);
  };

  const siguientePregunta = () => {
    if (respuestaSeleccionada !== null) {
      const nuevasRespuestas = [...respuestas, respuestaSeleccionada];
      setRespuestas(nuevasRespuestas);
      
      if (preguntaActual < preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null);
      } else {
        setMostrarResultados(true);
      }
    }
  };

  const reiniciarExamen = () => {
    setMostrarExamen(false);
    setPreguntaActual(0);
    setRespuestas([]);
    setMostrarResultados(false);
    setRespuestaSeleccionada(null);
  };

  const calcularPuntaje = () => {
    let correctas = 0;
    respuestas.forEach((respuesta, index) => {
      if (respuesta === preguntas[index].respuestaCorrecta) {
        correctas++;
      }
    });
    return correctas;
  };

  const obtenerNivel = (puntaje: number) => {
    const porcentaje = (puntaje / preguntas.length) * 100;
    if (porcentaje >= 85) return { nivel: "Excelente", color: "text-green-600", bg: "bg-green-50" };
    if (porcentaje >= 70) return { nivel: "Muy Bien", color: "text-blue-600", bg: "bg-blue-50" };
    if (porcentaje >= 50) return { nivel: "Bien", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { nivel: "Necesitas Practicar", color: "text-red-600", bg: "bg-red-50" };
  };
  if (!mostrarExamen) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-red-600 p-4 rounded-2xl shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              📝 Evaluación Primer Módulo
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Demuestra tu dominio de los fundamentos de la computación cuántica
            </p>
            <div className="flex flex-wrap gap-3 mb-6">              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                12 preguntas
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Nivel Principiante
              </span>              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                20-25 minutos
              </span>
            </div>
            <button
              onClick={iniciarExamen}
              className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Comenzar Evaluación
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mostrarResultados) {
    const puntaje = calcularPuntaje();
    const nivel = obtenerNivel(puntaje);
    
    return (
      <div className="max-w-4xl mx-auto">
        {/* Resultados principales */}
        <div className={`${nivel.bg} border-2 border-gray-200 rounded-3xl p-8 mb-6`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
              <Award className={`w-10 h-10 ${nivel.color}`} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Examen Completado!</h2>
            <p className={`text-xl font-semibold ${nivel.color} mb-2`}>{nivel.nivel}</p>
            <p className="text-gray-600">
              Has respondido correctamente {puntaje} de {preguntas.length} preguntas 
              <span className="font-semibold"> ({Math.round((puntaje / preguntas.length) * 100)}%)</span>
            </p>
          </div>
        </div>

        {/* Revisión detallada */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Revisión Detallada</h3>
          {preguntas.map((pregunta, index) => {
            const respuestaUsuario = respuestas[index];
            const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
            
            return (
              <div key={pregunta.id} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${esCorrecta ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                  `}>
                    {esCorrecta ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-500">Pregunta {index + 1}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {pregunta.tema}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3">{pregunta.pregunta}</h4>
                    
                    <div className="space-y-2 mb-4">
                      {pregunta.opciones.map((opcion, opcionIndex) => {
                        let claseOpcion = "p-3 rounded-lg border text-sm ";
                        if (opcionIndex === pregunta.respuestaCorrecta) {
                          claseOpcion += "bg-green-50 border-green-200 text-green-800";
                        } else if (opcionIndex === respuestaUsuario && !esCorrecta) {
                          claseOpcion += "bg-red-50 border-red-200 text-red-800";
                        } else {
                          claseOpcion += "bg-gray-50 border-gray-200 text-gray-600";
                        }
                        
                        return (
                          <div key={opcionIndex} className={claseOpcion}>
                            <span className="font-medium mr-2">
                              {String.fromCharCode(65 + opcionIndex)}.
                            </span>
                            {opcion}
                            {opcionIndex === pregunta.respuestaCorrecta && (
                              <span className="ml-2 text-green-600">✓ Correcta</span>
                            )}
                            {opcionIndex === respuestaUsuario && !esCorrecta && (
                              <span className="ml-2 text-red-600">✗ Tu respuesta</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        <span className="font-medium">💡 Explicación:</span> {pregunta.explicacion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={reiniciarExamen}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={20} />
            Intentar de Nuevo
          </button>
        </div>
      </div>
    );
  }

  // Vista del examen en progreso
  const pregunta = preguntas[preguntaActual];
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Barra de progreso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progreso)}% completado
          </span>
        </div>        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
      </div>

      {/* Pregunta */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
            {preguntaActual + 1}
          </div>
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              {pregunta.tema}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
              {pregunta.pregunta}
            </h3>
          </div>
        </div>

        {/* Opciones */}
        <div className="space-y-3">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => seleccionarRespuesta(index)}
              className={`
                w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                ${respuestaSeleccionada === index 
                  ? 'border-blue-500 bg-blue-50 text-blue-900' 
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <span className="font-medium mr-3 text-gray-500">
                {String.fromCharCode(65 + index)}.
              </span>
              {opcion}
            </button>
          ))}
        </div>
      </div>

      {/* Botón siguiente */}
      <div className="flex justify-end">
        <button
          onClick={siguientePregunta}
          disabled={respuestaSeleccionada === null}
          className={`
            px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2
            ${respuestaSeleccionada !== null
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {preguntaActual === preguntas.length - 1 ? (
            <>
              <Award size={20} />
              Ver Resultados
            </>
          ) : (
            <>
              Siguiente
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
