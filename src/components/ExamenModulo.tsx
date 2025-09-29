'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, Award, BookOpen, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

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
  };  if (!mostrarExamen) {
    return (
      <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-in-out">
        <div className="container mx-auto px-4 py-8">
          {/* Botón de volver */}
          <div className="mb-8">
            <Link 
              href={`/estudiante/cursos/${moduleId}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Volver al módulo
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6 border-4 border-blue-100">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Evaluación del Módulo 1
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fundamentos de Computación Cuántica
            </p>
          </div>

          {/* Información del examen */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lado izquierdo - Información */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  📋 Información del Examen
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">12</span>
                    </div>
                    <span className="text-gray-700">Preguntas totales</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">20-25 minutos estimados</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Subtemas evaluados</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Temas a evaluar:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Introducción a la Computación Cuántica
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Qubits y Estados Cuánticos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Puertas Cuánticas Básicas
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lado derecho - Instrucciones */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  📖 Instrucciones
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                    <p>Lee cada pregunta cuidadosamente antes de seleccionar tu respuesta.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                    <p>Solo puedes seleccionar una respuesta por pregunta.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                    <p>Una vez seleccionada, haz clic en "Siguiente" para continuar.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                    <p>Al finalizar, verás tus resultados detallados con explicaciones.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="font-semibold text-yellow-800">Importante</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Asegúrate de tener suficiente tiempo disponible antes de comenzar.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón de inicio */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={iniciarExamen}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
      </div>
    );
  }  if (mostrarResultados) {
    const puntaje = calcularPuntaje();
    const nivel = obtenerNivel(puntaje);
    
    return (
      <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-in-out">
        <div className="container mx-auto px-4 py-8">
          {/* Botón de volver */}
          <div className="mb-8">
            <Link 
              href={`/estudiante/cursos/${moduleId}`}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Volver al módulo
            </Link>
          </div>

          {/* Header de resultados */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6 border-4 border-blue-100">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Examen Completado!
            </h1>
          </div>

          {/* Resultados principales */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full shadow-lg mb-6 ${nivel.bg} border-4 border-gray-100`}>
                <Award className={`w-12 h-12 ${nivel.color}`} />
              </div>
              <h2 className={`text-3xl font-bold mb-3 ${nivel.color}`}>{nivel.nivel}</h2>
              <div className="text-6xl font-bold text-gray-900 mb-2">
                {Math.round((puntaje / preguntas.length) * 100)}%
              </div>
              <p className="text-xl text-gray-600 mb-6">
                {puntaje} de {preguntas.length} preguntas correctas
              </p>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="font-bold text-green-600 text-lg">{puntaje}</div>
                  <div className="text-sm text-gray-600">Correctas</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="font-bold text-red-600 text-lg">{preguntas.length - puntaje}</div>
                  <div className="text-sm text-gray-600">Incorrectas</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-blue-600 text-lg">{preguntas.length}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revisión detallada */}
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📋 Revisión Detallada
            </h3>
            
            <div className="space-y-6">
              {preguntas.map((pregunta, index) => {
                const respuestaUsuario = respuestas[index];
                const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
                
                return (
                  <div key={pregunta.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center font-bold
                        ${esCorrecta ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                      `}>
                        {esCorrecta ? <CheckCircle size={24} /> : <XCircle size={24} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-bold text-gray-900">Pregunta {index + 1}</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {pregunta.tema}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            esCorrecta ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {esCorrecta ? 'Correcta' : 'Incorrecta'}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">{pregunta.pregunta}</h4>
                        
                        <div className="space-y-3 mb-6">
                          {pregunta.opciones.map((opcion, opcionIndex) => {
                            let claseOpcion = "p-4 rounded-lg border-2 text-sm flex items-center gap-3 ";
                            
                            if (opcionIndex === pregunta.respuestaCorrecta) {
                              claseOpcion += "border-green-500 bg-green-50 text-green-900";
                            } else if (opcionIndex === respuestaUsuario && !esCorrecta) {
                              claseOpcion += "border-red-500 bg-red-50 text-red-900";
                            } else {
                              claseOpcion += "border-gray-200 bg-gray-50 text-gray-700";
                            }
                            
                            return (
                              <div key={opcionIndex} className={claseOpcion}>
                                <div className={`
                                  w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                  ${opcionIndex === pregunta.respuestaCorrecta 
                                    ? 'bg-green-500 text-white' 
                                    : opcionIndex === respuestaUsuario && !esCorrecta
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-300 text-gray-600'
                                  }
                                `}>
                                  {String.fromCharCode(65 + opcionIndex)}
                                </div>
                                <span className="flex-1">{opcion}</span>
                                {opcionIndex === pregunta.respuestaCorrecta && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {opcionIndex === respuestaUsuario && !esCorrecta && (
                                  <XCircle className="w-5 h-5 text-red-600" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-900 mb-2">💡 Explicación:</h5>
                          <p className="text-blue-800 text-sm leading-relaxed">{pregunta.explicacion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-4 justify-center max-w-4xl mx-auto">
            <button
              onClick={reiniciarExamen}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <RefreshCw size={20} />
              Intentar de Nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }
  // Vista del examen en progreso
  const pregunta = preguntas[preguntaActual];
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
  return (
    <div className="min-h-screen bg-gray-50 transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4 py-8">
        {/* Botón de volver */}
        <div className="mb-8">
          <Link 
            href={`/estudiante/cursos/${moduleId}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Volver al módulo
          </Link>
        </div>

        {/* Header del examen */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Evaluación en Progreso
          </h1>
          <p className="text-gray-600">Módulo 1: Fundamentos de Computación Cuántica</p>
        </div>

        {/* Barra de progreso mejorada */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {preguntaActual + 1}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Pregunta {preguntaActual + 1} de {preguntas.length}
                </p>
                <p className="text-sm text-gray-600">{pregunta.tema}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{Math.round(progreso)}%</p>
              <p className="text-sm text-gray-600">Completado</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progreso}%` }}
            ></div>
          </div>
        </div>

        {/* Pregunta principal */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {pregunta.tema}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
              {pregunta.pregunta}
            </h2>
          </div>

          {/* Opciones mejoradas */}
          <div className="space-y-4">
            {pregunta.opciones.map((opcion, index) => (
              <button
                key={index}
                onClick={() => seleccionarRespuesta(index)}
                className={`
                  w-full text-left p-6 rounded-xl border-2 transition-all duration-200 group
                  ${respuestaSeleccionada === index 
                    ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25 hover:shadow-sm'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors
                    ${respuestaSeleccionada === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-900 font-medium">
                    {opcion}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Controles de navegación */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {respuestaSeleccionada !== null ? (
                <span className="flex items-center gap-2 text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Respuesta seleccionada
                </span>
              ) : (
                <span className="text-gray-500">Selecciona una respuesta para continuar</span>
              )}
            </div>
            
            <button
              onClick={siguientePregunta}
              disabled={respuestaSeleccionada === null}
              className={`
                px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-3
                ${respuestaSeleccionada !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
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
                  Siguiente Pregunta
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
