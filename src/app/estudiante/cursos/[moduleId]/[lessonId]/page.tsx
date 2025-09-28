'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, Play, Atom, Zap, Lock, Cpu, Brain, Beaker, Settings, RotateCw, Target, Layers } from 'lucide-react';
import { useState } from 'react';

// Componente interactivo para Qubits y Estados Cuánticos
function QubitsInteractivo() {
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [qubitState, setQubitState] = useState({ alpha: 1, beta: 0 });
  const [showSimulation, setShowSimulation] = useState(false);

  const sections = [
    {
      id: 0,
      title: "¿Qué es un Qubit?",
      icon: <Atom className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "La revolución de la información cuántica",
        description: "Un qubit (quantum bit) es la unidad fundamental de información en computación cuántica. A diferencia de un bit clásico que solo puede ser 0 o 1, un qubit puede existir en una superposición de ambos estados simultáneamente, lo que le otorga un poder computacional exponencial.",
        facts: [
          "Comparación clave: Un bit clásico es como un interruptor (ON/OFF), mientras que un qubit es como una esfera que puede apuntar en cualquier dirección",
          "Capacidad exponencial: 2 qubits pueden representar 4 estados simultáneamente, 3 qubits = 8 estados, n qubits = 2^n estados",
          "Fragilidad cuántica: Los qubits son extremadamente sensibles al entorno y pierden su coherencia en microsegundos",
          "Implementación física: Se pueden crear usando electrones, fotones, átomos atrapados, o circuitos superconductores"
        ]
      }
    },
    {
      id: 1,
      title: "Matemáticas del Qubit",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "Representación matemática y álgebra lineal",
        description: "Los qubits se describen matemáticamente usando el formalismo de Dirac y álgebra lineal. La ecuación fundamental |ψ⟩ = α|0⟩ + β|1⟩ define completamente el estado de un qubit, donde α y β son números complejos llamados amplitudes de probabilidad.",
        facts: [
          "Notación bra-ket: |ψ⟩ se lee 'ket psi' y representa un vector de estado cuántico en el espacio de Hilbert",
          "Condición de normalización: |α|² + |β|² = 1, lo que garantiza que las probabilidades sumen 100%",
          "Estados base: |0⟩ = [1,0] y |1⟩ = [0,1] forman la base computacional estándar",
          "Esfera de Bloch: Representa geométricamente todos los estados posibles de un qubit en una esfera unitaria"
        ]
      }
    },
    {
      id: 2,
      title: "Estados Cuánticos Especiales",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "Estados fundamentales y superposiciones importantes",
        description: "Existen estados cuánticos especiales que son particularmente importantes en algoritmos cuánticos. Estos estados tienen nombres específicos y propiedades únicas que los hacen útiles para diferentes aplicaciones computacionales.",
        facts: [
          "Estado |+⟩ = (|0⟩ + |1⟩)/√2: Superposición perfecta, 50% probabilidad de medir 0 o 1",
          "Estado |-⟩ = (|0⟩ - |1⟩)/√2: Superposición con fase opuesta, crucial para interferencia cuántica",
          "Estados |i⟩ y |-i⟩: Involucran números complejos y representan rotaciones en el plano complejo",
          "Estados de Bell: Cuando múltiples qubits se entrelazan, crean estados no separables fundamentales"
        ]
      }
    },
    {
      id: 3,
      title: "Medición y Colapso",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "El proceso de medición cuántica",
        description: "La medición en mecánica cuántica es fundamentalmente diferente a la medición clásica. Cuando medimos un qubit, su estado colapsa probabilísticamente a uno de los estados base, destruyendo la superposición pero revelando información clásica.",
        facts: [
          "Colapso del estado: La medición fuerza al qubit a 'elegir' entre |0⟩ o |1⟩ según las probabilidades |α|² y |β|²",
          "Irreversibilidad: Una vez medido, no podemos recuperar el estado original de superposición",
          "Medición repetida: Si medimos el mismo qubit múltiples veces consecutivas, obtenemos el mismo resultado",
          "Bases de medición: Podemos medir en diferentes bases (X, Y, Z) para obtener información complementaria"
        ]
      }
    }
  ];

  const handleSectionClick = (id: number) => {
    setActiveSection(id);
    if (!completedSections.includes(id)) {
      setCompletedSections([...completedSections, id]);
    }
  };

  const updateQubitState = (alpha: number, beta: number) => {
    const norm = Math.sqrt(alpha * alpha + beta * beta);
    setQubitState({ alpha: alpha / norm, beta: beta / norm });
  };
  return (
    <div className="space-y-16">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .video-container { transition: transform 0.3s ease; }
        .video-container:hover { transform: translateY(-2px); }
        .simulator-range {
          -webkit-appearance: none;
          height: 8px;
          border-radius: 4px;
          outline: none;
        }
        .simulator-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1f2937;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .formula-glow {
          animation: pulse 2s infinite;
        }
      ` }} />
      {/* Header elegante */}
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
          <Atom className="w-6 h-6 text-blue-600" />
          <span className="text-gray-800 font-semibold text-lg">Qubits y Estados Cuánticos</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La Unidad Fundamental de la<br />
            <span className="text-blue-600">Computación Cuántica</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Descubre cómo los qubits revolucionan el procesamiento de información y explora los fascinantes estados cuánticos que hacen posible la ventaja cuántica.
          </p>
        </div>
      </div>      {/* Video educativo */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Video Educativo</h2>
          <p className="text-gray-600">Explicación visual de expertos en computación cuántica</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Video único centrado */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 video-container">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-200 shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/X2q1PuI2RFI"
                title="¿Qué es un Qubit? - Explicación Visual"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">¿Qué es un Qubit?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Explicación visual y conceptual de los qubits y sus propiedades fundamentales por expertos de IBM Research</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">12 min</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Principiante</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación de secciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`
              group relative rounded-xl transition-all duration-500 text-left border
              ${activeSection === section.id 
                ? `${section.color} border-transparent text-white shadow-lg` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }
            `}
          >
            <div className="p-6">
              <div className="flex items-center justify-start mb-4">
                <div className={`
                  p-3 rounded-lg transition-all duration-300 
                  ${activeSection === section.id 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-gray-50 group-hover:bg-gray-100'
                  }
                `}>
                  <div className={`w-6 h-6 ${activeSection === section.id ? 'text-white' : 'text-gray-600'}`}>
                    {section.icon}
                  </div>
                </div>
              </div>
              
              <h3 className={`font-semibold text-base mb-3 leading-tight ${
                activeSection === section.id ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h3>
              
              <div className="flex items-center gap-2">
                {completedSections.includes(section.id) && (
                  <CheckCircle className={`w-4 h-4 ${activeSection === section.id ? 'text-white' : 'text-green-500'}`} />
                )}
                <div className={`h-1 flex-1 rounded-full ${
                  activeSection === section.id ? 'bg-white bg-opacity-30' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeSection === section.id ? 'bg-white' : 
                      completedSections.includes(section.id) ? section.color : 'bg-transparent'
                    }`}
                    style={{ 
                      width: activeSection === section.id || completedSections.includes(section.id) ? '100%' : '0%' 
                    }}
                  />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Contenido de la sección activa */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="flex items-start gap-6 mb-8 pb-6 border-b border-gray-100">
            <div className={`${sections[activeSection].color} p-4 rounded-xl shadow-sm`}>
              <div className="text-white w-8 h-8">
                {sections[activeSection].icon}
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {sections[activeSection].title}
              </h2>
              <p className="text-gray-600 text-lg mb-3">
                {sections[activeSection].content.subtitle}
              </p>
              <div className={`h-0.5 w-16 ${sections[activeSection].color} rounded-full`}></div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-gray-800 text-lg leading-relaxed">
                {sections[activeSection].content.description}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conceptos clave:</h3>
            {sections[activeSection].content.facts.map((fact, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${sections[activeSection].color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Simulador interactivo */}
          {activeSection === 1 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600" />
                Simulador de Estados de Qubit
              </h3>
              <p className="text-gray-600 mb-6">Ajusta los valores de α y β para explorar diferentes estados cuánticos</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amplitud α (componente |0⟩)
                    </label>                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={qubitState.alpha}
                      onChange={(e) => updateQubitState(parseFloat(e.target.value), qubitState.beta)}
                      className="w-full simulator-range bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dbeafe, #3b82f6)` }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">α = {qubitState.alpha.toFixed(3)}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        |α|² = {(qubitState.alpha * qubitState.alpha).toFixed(3)}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amplitud β (componente |1⟩)
                    </label>                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={qubitState.beta}
                      onChange={(e) => updateQubitState(qubitState.alpha, parseFloat(e.target.value))}
                      className="w-full simulator-range bg-gradient-to-r from-red-200 to-red-400 rounded-lg cursor-pointer"
                      style={{ background: `linear-gradient(to right, #fecaca, #ef4444)` }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">β = {qubitState.beta.toFixed(3)}</span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        |β|² = {(qubitState.beta * qubitState.beta).toFixed(3)}
                      </span>
                    </div>
                  </div>
                </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Atom className="w-5 h-5 text-purple-600" />
                    Estado actual del qubit:
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border formula-glow">
                      <p className="text-xl font-mono text-center">
                        |ψ⟩ = <span className="text-blue-600">{qubitState.alpha.toFixed(3)}</span>|0⟩ + <span className="text-red-600">{qubitState.beta.toFixed(3)}</span>|1⟩
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {(qubitState.alpha * qubitState.alpha * 100).toFixed(1)}%
                          </div>
                          <div className="text-sm text-gray-600">P(|0⟩)</div>
                          <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${qubitState.alpha * qubitState.alpha * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600 mb-1">
                            {(qubitState.beta * qubitState.beta * 100).toFixed(1)}%
                          </div>
                          <div className="text-sm text-gray-600">P(|1⟩)</div>
                          <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-red-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${qubitState.beta * qubitState.beta * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button
                        onClick={() => {
                          const randomAlpha = Math.random();
                          const randomBeta = Math.sqrt(1 - randomAlpha * randomAlpha);
                          updateQubitState(randomAlpha, randomBeta);
                        }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                      >
                        <Zap className="w-4 h-4" />
                        Estado Aleatorio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>      {/* Fórmulas matemáticas importantes */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-3xl border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            Fórmulas Fundamentales
          </h3>
          <p className="text-gray-600">Matemáticas esenciales para entender los qubits</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fórmula 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Estado General</h4>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 mb-3">
              <div className="font-mono text-center text-lg text-gray-800">
                |ψ⟩ = α|0⟩ + β|1⟩
              </div>
            </div>
            <p className="text-sm text-gray-600">Donde |α|² + |β|² = 1 (normalización)</p>
          </div>
          
          {/* Fórmula 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Estados Base</h4>
            </div>
            <div className="space-y-2 mb-3">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-3 rounded-lg border border-red-200">
                <div className="font-mono text-center text-sm">|0⟩ = [1, 0]ᵀ</div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-3 rounded-lg border border-red-200">
                <div className="font-mono text-center text-sm">|1⟩ = [0, 1]ᵀ</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Base computacional estándar</p>
          </div>
          
          {/* Fórmula 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h4 className="font-semibold text-lg text-gray-900">Estados ±</h4>
            </div>
            <div className="space-y-2 mb-3">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border border-purple-200">
                <div className="font-mono text-center text-sm">|+⟩ = (|0⟩ + |1⟩)/√2</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border border-purple-200">
                <div className="font-mono text-center text-sm">|-⟩ = (|0⟩ - |1⟩)/√2</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Estados de superposición pura</p>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-green-600" />
            Estados de Bell (Entrelazamiento)
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="font-mono text-center mb-2">|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</div>
              <p className="text-xs text-gray-600 text-center">Estado Bell maximamente entrelazado</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="font-mono text-center mb-2">|Φ⁻⟩ = (|00⟩ - |11⟩)/√2</div>
              <p className="text-xs text-gray-600 text-center">Estado Bell con fase opuesta</p>
            </div>          </div>
        </div>
      </div>

      {/* Conceptos clave para recordar */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <CheckCircle className="w-7 h-7 text-amber-600" />
            Puntos Clave para Recordar
          </h3>
          <p className="text-gray-600">Conceptos fundamentales que debes dominar</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Superposición ≠ Probabilidad</h4>
                  <p className="text-gray-700 text-sm">Un qubit en superposición no está "50% en |0⟩ y 50% en |1⟩", está literalmente en ambos estados simultáneamente hasta la medición.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">La Medición Destruye</h4>
                  <p className="text-gray-700 text-sm">Medir un qubit colapsa irreversiblemente su estado de superposición. No podemos "espiar" sin alterar el sistema.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Amplitudes vs Probabilidades</h4>
                  <p className="text-gray-700 text-sm">Las amplitudes α y β pueden ser números complejos, pero las probabilidades |α|² y |β|² son siempre reales y positivas.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Escalabilidad Exponencial</h4>
                  <p className="text-gray-700 text-sm">Cada qubit adicional duplica el espacio de estados. 300 qubits pueden representar más estados que átomos en el universo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz interactivo */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <BookOpen className="w-7 h-7 text-green-600" />
            Comprueba tu Comprensión
          </h3>
          <p className="text-gray-600">Mini ejercicios para reforzar el aprendizaje</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">💭 Pregunta Conceptual</h4>
            <p className="text-gray-700 mb-4">Si un qubit está en el estado |ψ⟩ = 0.6|0⟩ + 0.8|1⟩, ¿cuál es la probabilidad de medir el estado |0⟩?</p>
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-green-800 font-medium">Respuesta: |0.6|² = 0.36 = 36%</p>
              <p className="text-sm text-gray-600 mt-1">Recuerda: La probabilidad es el cuadrado de la amplitud</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">🔬 Ejercicio Práctico</h4>
            <p className="text-gray-700 mb-4">Usa el simulador arriba para crear un estado donde la probabilidad de medir |1⟩ sea exactamente 75%.</p>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="text-blue-800 font-medium">Pista: Necesitas β = √0.75 ≈ 0.866</p>
              <p className="text-sm text-gray-600 mt-1">Ajusta los controles deslizantes para experimentar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente interactivo para la introducción
function IntroduccionInteractiva() {
  const [activeSection, setActiveSection] = useState(0);  const [completedSections, setCompletedSections] = useState<number[]>([]);

  // Agregar estilos CSS personalizados
  const customStyles = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }
    
    .hover-scale-102:hover {
      transform: scale(1.02);
    }
    
    .video-container {
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    
    .video-container:hover {
      transform: translateY(-2px);
    }
    
    .simulator-range {
      -webkit-appearance: none;
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(to right, #3b82f6, #ef4444);
      outline: none;
    }
    
    .simulator-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1f2937;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .formula-container {
      position: relative;
      overflow: hidden;
    }
    
    .formula-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s;
    }
    
    .formula-container:hover::before {
      left: 100%;
    }
  `;
  const sections = [
    {
      id: 0,
      title: "¿Qué es la Computación Cuántica?",
      icon: <Atom className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "Una revolución en el procesamiento de información",
        description: "La computación cuántica utiliza las propiedades extraordinarias de la mecánica cuántica para resolver problemas que son imposibles para las computadoras tradicionales. Imagina una computadora que puede explorar millones de soluciones simultáneamente.",
        facts: [
          "Diferencia clave: Los bits clásicos son como interruptores (encendido/apagado), los qubits son como esferas que pueden rotar en cualquier dirección",
          "Capacidad exponencial: Con solo 300 qubits, podrías representar más estados que partículas hay en el universo observable",
          "Procesamiento paralelo: Una computadora cuántica puede probar todas las combinaciones de una contraseña al mismo tiempo",
          "Aplicación práctica: Ya se usan para optimizar rutas de entrega, análisis financiero y desarrollo de nuevos materiales"
        ]
      }
    },
    {
      id: 1,
      title: "Los Súper Poderes Cuánticos",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "Fenómenos que desafían nuestra intuición",
        description: "La mecánica cuántica nos regala tres fenómenos extraordinarios que hacen posible la computación cuántica. Estos 'súper poderes' permiten que las partículas se comporten de maneras que parecen mágicas.",
        facts: [
          "Superposición: Como una moneda girando en el aire, un qubit puede ser 0 y 1 al mismo tiempo hasta que lo observamos",
          "Entrelazamiento: Dos partículas pueden estar conectadas instantáneamente, sin importar la distancia (Einstein lo llamó 'acción fantasmal')",
          "Interferencia cuántica: Los estados cuánticos pueden sumarse y cancelarse como ondas, amplificando respuestas correctas",
          "Decoherencia: El gran desafío - mantener estos estados es como equilibrar una pelota en la punta de una aguja"
        ]
      }
    },
    {
      id: 2,
      title: "Aplicaciones que Cambiarán el Mundo",
      icon: <Brain className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "Revolucionando industrias completas",
        description: "La computación cuántica no es solo teoría - ya está transformando sectores clave de nuestra economía y sociedad. Desde la medicina hasta la inteligencia artificial, sus aplicaciones son ilimitadas.",
        facts: [
          "Medicina personalizada: Simulación de moléculas para crear medicamentos específicos para tu ADN en días, no años",
          "Criptografía inquebrantable: Comunicaciones absolutamente seguras usando las leyes de la física",
          "Inteligencia artificial súper poderosa: Algoritmos de aprendizaje que pueden procesar patrones inimaginablemente complejos",
          "Sostenibilidad: Optimización de redes eléctricas, desarrollo de baterías súper eficientes y captura de carbono"
        ]
      }
    },
    {
      id: 3,
      title: "El Futuro Está Aquí",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "La nueva era tecnológica ya comenzó",
        description: "No es ciencia ficción - las computadoras cuánticas ya existen y están resolviendo problemas reales. Grandes empresas y gobiernos invierten billones en esta tecnología que definirá el próximo siglo.",
        facts: [
          "Inversión masiva: IBM, Google, Microsoft, Amazon y China invierten más de $25 mil millones anuales",
          "Logros actuales: Ya se han logrado 'ventajas cuánticas' en problemas específicos de optimización y química",
          "Acceso democratizado: Puedes usar computadoras cuánticas reales a través de la nube desde tu casa",
          "Impacto laboral: Se estima que se crearán 2 millones de empleos cuánticos en los próximos 10 años"
        ]
      }
    }
  ];

  const handleSectionClick = (id: number) => {
    setActiveSection(id);
    if (!completedSections.includes(id)) {
      setCompletedSections([...completedSections, id]);
    }
  };  return (
    <div className="space-y-20">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Header elegante y minimalista */}
      <div className="text-center space-y-12 relative">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
            <Atom className="w-6 h-6 text-blue-600" />
            <span className="text-gray-800 font-semibold text-lg">Introducción Interactiva</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Fundamentos de la<br />
            <span className="text-blue-600">Computación Cuántica</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            Una introducción completa a los conceptos fundamentales que están revolucionando la tecnología del futuro.
          </p>
        </div>
      </div>      {/* Navegación de secciones elegante */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`
              group relative rounded-xl transition-all duration-500 text-left border
              ${activeSection === section.id 
                ? `${section.color} border-transparent text-white shadow-lg` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }
            `}
          >
            <div className="p-6">
              {/* Header del card */}              <div className="flex items-center justify-start mb-4">
                <div className={`
                  p-3 rounded-lg transition-all duration-300 
                  ${activeSection === section.id 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-gray-50 group-hover:bg-gray-100'
                  }
                `}>
                  <div className={`w-6 h-6 ${activeSection === section.id ? 'text-white' : 'text-gray-600'}`}>
                    {section.icon}
                  </div>
                </div>
              </div>
              
              {/* Título */}
              <h3 className={`font-semibold text-base mb-3 leading-tight ${
                activeSection === section.id ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h3>
              
              {/* Indicador de estado */}
              <div className="flex items-center gap-2">
                {completedSections.includes(section.id) && (
                  <CheckCircle className={`w-4 h-4 ${activeSection === section.id ? 'text-white' : 'text-green-500'}`} />
                )}
                <div className={`h-1 flex-1 rounded-full ${
                  activeSection === section.id ? 'bg-white bg-opacity-30' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeSection === section.id ? 'bg-white' : 
                      completedSections.includes(section.id) ? section.color : 'bg-transparent'
                    }`}
                    style={{ 
                      width: activeSection === section.id || completedSections.includes(section.id) ? '100%' : '0%' 
                    }}
                  />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>      {/* Contenido de la sección activa elegante */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8">
          {/* Header de la sección */}
          <div className="flex items-start gap-6 mb-8 pb-6 border-b border-gray-100">
            <div className={`${sections[activeSection].color} p-4 rounded-xl shadow-sm`}>
              <div className="text-white w-8 h-8">
                {sections[activeSection].icon}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {sections[activeSection].title}
                </h2>
                <span className={`px-3 py-1 ${sections[activeSection].color} text-white text-xs font-semibold rounded-full`}>
                  {String(activeSection + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-gray-600 text-lg mb-3">
                {sections[activeSection].content.subtitle}
              </p>
              <div className={`h-0.5 w-16 ${sections[activeSection].color} rounded-full`}></div>
            </div>
          </div>

          {/* Descripción principal */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-gray-800 text-lg leading-relaxed">
                {sections[activeSection].content.description}
              </p>
            </div>
          </div>

          {/* Facts con diseño limpio */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Puntos clave:</h3>
            {sections[activeSection].content.facts.map((fact, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${sections[activeSection].color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>      {/* Sección de datos curiosos elegante */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Datos Fascinantes</h3>
            </div>
            <p className="text-gray-600">Hechos sorprendentes sobre la computación cuántica</p>
          </div>
          
          {/* Cards de datos */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 - Velocidad */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Velocidad Increíble</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong className="text-red-600">Google's Sycamore</strong> resolvió en <strong>200 segundos</strong> un cálculo que tomaría <strong className="text-red-600">10,000 años</strong> a la supercomputadora más potente del mundo.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Temperatura */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">❄️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Frío Extremo</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Las computadoras cuánticas operan a <strong className="text-blue-600">-273°C</strong>, más frío que el espacio exterior, para mantener la <strong>coherencia cuántica</strong>.
                  </p>
                </div>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  );
}

// Componente interactivo para Puertas Cuánticas Básicas
function PuertasCuanticasInteractivo() {
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [selectedGate, setSelectedGate] = useState('X');
  const [circuitState, setCircuitState] = useState([{ gate: 'H', qubit: 0 }, { gate: 'X', qubit: 1 }]);
  const [showSimulator, setShowSimulator] = useState(false);

  const sections = [
    {
      id: 0,
      title: "¿Qué son las Puertas Cuánticas?",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "Los bloques de construcción de la computación cuántica",
        description: "Las puertas cuánticas son operaciones matemáticas que modifican el estado de los qubits de manera controlada y reversible. Son como las operaciones lógicas en computación clásica (AND, OR, NOT), pero mucho más poderosas porque pueden crear y manipular superposiciones cuánticas.",
        facts: [
          "Reversibilidad: Todas las puertas cuánticas son reversibles, a diferencia de las puertas clásicas como AND u OR",
          "Unitariedad: Las puertas cuánticas son transformaciones unitarias que preservan las probabilidades",
          "Universalidad: Con solo unas pocas puertas básicas puedes construir cualquier algoritmo cuántico",
          "Analogía útil: Si los qubits son como instrumentos musicales, las puertas cuánticas son como las técnicas para tocarlos"
        ]
      }
    },
    {
      id: 1,
      title: "Puertas de Un Solo Qubit",
      icon: <Target className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "Operaciones fundamentales en qubits individuales",
        description: "Las puertas de un qubit actúan sobre un solo qubit a la vez, permitiendo rotaciones y reflexiones en la esfera de Bloch. Estas son las operaciones más básicas pero fundamentales en cualquier circuito cuántico.",
        facts: [
          "Puerta X (NOT cuántica): Voltea completamente el qubit |0⟩ ↔ |1⟩, como un bit flip clásico",
          "Puerta Z (Phase flip): Aplica una fase negativa a |1⟩: |1⟩ → -|1⟩, |0⟩ permanece igual",
          "Puerta Y: Combina X y Z, causando both bit flip y phase flip simultáneamente",
          "Puerta Hadamard (H): La más importante - crea superposición perfecta desde estados clásicos"
        ]
      }
    },
    {
      id: 2,
      title: "La Puerta Hadamard Especial",
      icon: <RotateCw className="w-8 h-8" />,
      color: "bg-blue-600",
      content: {
        subtitle: "El generador de superposición cuántica",
        description: "La puerta Hadamard es especial porque transforma estados clásicos definidos en superposiciones cuánticas perfectas. Es la puerta más utilizada en algoritmos cuánticos porque 'democratiza' las probabilidades.",
        facts: [
          "Transformación mágica: H|0⟩ = (|0⟩ + |1⟩)/√2 - crea 50% probabilidad para cada estado",
          "Auto-inversa: Aplicar H dos veces consecutivas regresa al estado original",
          "Base diferente: Mide en la 'base X' en lugar de la base computacional tradicional",
          "Algoritmos famosos: Fundamental en Grover, Deutsch-Jozsa, y Shor - todos usan Hadamard extensivamente"
        ]
      }
    },
    {
      id: 3,
      title: "Puertas de Múltiples Qubits",
      icon: <Layers className="w-8 h-8" />,
      color: "bg-red-600",
      content: {
        subtitle: "Creando entrelazamiento y correlaciones cuánticas",
        description: "Las puertas de múltiples qubits pueden crear entrelazamiento - correlaciones cuánticas imposibles de explicar clásicamente. La puerta CNOT es la más importante y permite construir cualquier operación cuántica multi-qubit.",
        facts: [
          "CNOT (Controlled-NOT): Aplica X al qubit objetivo solo si el qubit control está en |1⟩",
          "Entrelazamiento: CNOT + Hadamard pueden crear estados de Bell, máximamente entrelazados",
          "Universalidad cuántica: CNOT + todas las puertas de un qubit = computación cuántica universal",
          "Control distribuido: Puertas como Toffoli (CCNOT) requieren múltiples qubits de control"
        ]
      }
    }
  ];

  const quantumGates = [
    {
      name: 'X',
      symbol: 'X',
      description: 'Puerta NOT cuántica - voltea el qubit',
      matrix: [[0, 1], [1, 0]],      effect: '|0⟩ → |1⟩, |1⟩ → |0⟩',
      color: 'bg-red-500'
    },
    {
      name: 'Y',
      symbol: 'Y', 
      description: 'Rotación alrededor del eje Y',
      matrix: [[0, '-i'], ['i', 0]],
      effect: '|0⟩ → i|1⟩, |1⟩ → -i|0⟩',
      color: 'bg-green-500'
    },
    {
      name: 'Z',
      symbol: 'Z',
      description: 'Puerta de fase - aplica fase negativa a |1⟩',
      matrix: [[1, 0], [0, -1]],
      effect: '|0⟩ → |0⟩, |1⟩ → -|1⟩',
      color: 'bg-blue-500'
    },
    {
      name: 'H',
      symbol: 'H',
      description: 'Hadamard - crea superposición',
      matrix: [['1/√2', '1/√2'], ['1/√2', '-1/√2']],
      effect: '|0⟩ → (|0⟩+|1⟩)/√2',
      color: 'bg-purple-500'
    }
  ];

  const handleSectionClick = (id: number) => {
    setActiveSection(id);
    if (!completedSections.includes(id)) {
      setCompletedSections([...completedSections, id]);
    }
  };

  return (
    <div className="space-y-16">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gateGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        .gate-button:hover {
          animation: gateGlow 2s infinite;
        }
        .matrix-cell {
          font-family: 'Courier New', monospace;
          font-size: 14px;
        }
        .circuit-wire {
          border-top: 2px solid #374151;
          position: relative;
        }
        .quantum-gate {
          border: 2px solid #374151;
          border-radius: 8px;
          padding: 8px 16px;
          background: white;
          font-weight: bold;
          position: relative;
          z-index: 10;
        }
      ` }} />

      {/* Header elegante */}
      <div className="text-center space-y-8">
        <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
          <Settings className="w-6 h-6 text-blue-600" />
          <span className="text-gray-800 font-semibold text-lg">Puertas Cuánticas Básicas</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Los Bloques de Construcción de<br />
            <span className="text-blue-600">Los Algoritmos Cuánticos</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Descubre cómo las puertas cuánticas manipulan los qubits para crear superposiciones, entrelazamiento y algoritmos cuánticos poderosos.
          </p>
        </div>
      </div>

      {/* Video educativo */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Video Educativo</h2>
          <p className="text-gray-600">Visualización de puertas cuánticas y circuitos</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-200 shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/F_Riqjdh2oM"
                title="Puertas Cuánticas Explicadas"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Puertas Cuánticas y Circuitos</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Introducción visual a las operaciones cuánticas fundamentales y cómo construir circuitos cuánticos</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">18 min</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Intermedio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación de secciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`
              group relative rounded-xl transition-all duration-500 text-left border
              ${activeSection === section.id 
                ? `${section.color} border-transparent text-white shadow-lg` 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }
            `
            }
          >
            <div className="p-6">
              <div className="flex items-center justify-start mb-4">
                <div className={`
                  p-3 rounded-lg transition-all duration-300 
                  ${activeSection === section.id 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-gray-50 group-hover:bg-gray-100'
                  }
                `}>
                  <div className={`w-6 h-6 ${activeSection === section.id ? 'text-white' : 'text-gray-600'}`}>
                    {section.icon}
                  </div>
                </div>
              </div>
              
              <h3 className={`font-semibold text-base mb-3 leading-tight ${
                activeSection === section.id ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h3>
              
              <div className="flex items-center gap-2">
                {completedSections.includes(section.id) && (
                  <CheckCircle className={`w-4 h-4 ${activeSection === section.id ? 'text-white' : 'text-green-500'}`} />
                )}
                <div className={`h-1 flex-1 rounded-full ${
                  activeSection === section.id ? 'bg-white bg-opacity-30' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeSection === section.id ? 'bg-white' : 
                      completedSections.includes(section.id) ? section.color : 'bg-transparent'
                    }`}
                    style={{ 
                      width: activeSection === section.id || completedSections.includes(section.id) ? '100%' : '0%' 
                    }}
                  />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Contenido de la sección activa */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="flex items-start gap-6 mb-8 pb-6 border-b border-gray-100">
            <div className={`${sections[activeSection].color} p-4 rounded-xl shadow-sm`}>
              <div className="text-white w-8 h-8">
                {sections[activeSection].icon}
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {sections[activeSection].title}
              </h2>
              <p className="text-gray-600 text-lg mb-3">
                {sections[activeSection].content.subtitle}
              </p>
              <div className={`h-0.5 w-16 ${sections[activeSection].color} rounded-full`}></div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-gray-800 text-lg leading-relaxed">
                {sections[activeSection].content.description}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conceptos clave:</h3>
            {sections[activeSection].content.facts.map((fact, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${sections[activeSection].color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Simulador de puertas cuánticas */}
          {activeSection === 1 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600" />
                Simulador de Puertas Cuánticas
              </h3>
              <p className="text-gray-600 mb-6">Explora cómo cada puerta transforma el estado de un qubit</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Selector de puertas */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Selecciona una puerta:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {quantumGates.map((gate) => (
                      <button
                        key={gate.name}
                        onClick={() => setSelectedGate(gate.name)}
                        className={`
                          gate-button p-4 rounded-lg border-2 transition-all duration-300 text-left
                          ${selectedGate === gate.name 
                            ? `${gate.color} border-transparent text-white shadow-lg` 
                            : 'bg-white border-gray-200 hover:border-gray-300'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`
                            w-8 h-8 rounded-lg flex items-center justify-center font-bold
                            ${selectedGate === gate.name ? 'bg-white bg-opacity-20 text-white' : 'bg-gray-100 text-gray-700'}
                          `}>
                            {gate.symbol}
                          </div>
                          <span className={`font-semibold ${selectedGate === gate.name ? 'text-white' : 'text-gray-900'}`}>
                            {gate.name}
                          </span>
                        </div>
                        <p className={`text-sm ${selectedGate === gate.name ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
                          {gate.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Información de la puerta seleccionada */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  {(() => {
                    const currentGate = quantumGates.find(g => g.name === selectedGate);
                    return currentGate ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`${currentGate.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                            <span className="text-white font-bold text-lg">{currentGate.symbol}</span>
                          </div>
                          <h4 className="font-semibold text-lg text-gray-900">Puerta {currentGate.name}</h4>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Efecto:</h5>
                            <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                              {currentGate.effect}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Matriz (representación matemática):</h5>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="inline-flex">
                                <div className="border-l-2 border-gray-400 mr-2"></div>
                                <div className="grid grid-cols-2 gap-4">
                                  {currentGate.matrix.flat().map((cell, idx) => (
                                    <div key={idx} className="matrix-cell text-center min-w-[60px]">
                                      {cell}
                                    </div>
                                  ))}
                                </div>
                                <div className="border-r-2 border-gray-400 ml-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Circuito cuántico interactivo */}
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 rounded-3xl border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Layers className="w-8 h-8 text-blue-600" />
            Construye tu Primer Circuito Cuántico
          </h3>
          <p className="text-gray-600">Circuito de Bell: Creando entrelazamiento cuántico</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Representación visual del circuito */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Circuito de Bell Clásico:</h4>
              <div className="space-y-6">
                {/* Qubit 0 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm font-mono text-gray-600">|0⟩ —</div>
                  <div className="circuit-wire flex-1 relative flex items-center">
                    <div className="quantum-gate bg-purple-500 text-white mx-4">H</div>
                    <div className="flex-1 border-top-2 border-gray-400"></div>
                    <div className="quantum-gate bg-red-500 text-white mx-4">•</div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">📊</div>
                </div>
                
                {/* Qubit 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm font-mono text-gray-600">|0⟩ —</div>
                  <div className="circuit-wire flex-1 relative flex items-center">
                    <div className="mx-4 w-16"></div>
                    <div className="flex-1 border-top-2 border-gray-400"></div>
                    <div className="quantum-gate bg-red-500 text-white mx-4">⊕</div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">📊</div>
                </div>
              </div>
            </div>

            {/* Explicación paso a paso */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-500 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Puerta Hadamard</h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Aplicamos H al primer qubit para crear superposición: |0⟩ → (|0⟩ + |1⟩)/√2
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Puerta CNOT</h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  CNOT entrelaza los qubits. El primer qubit controla si se aplica X al segundo.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">Estado Final</h5>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Resultado: (|00⟩ + |11⟩)/√2 - ¡Máximo entrelazamiento cuántico!
                </p>
              </div>
            </div>

            {/* Resultado matemático */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Transformación Matemática Completa
              </h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 w-24">Inicial:</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">|00⟩</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 w-24">Después de H:</span>
                  <span className="bg-purple-100 px-3 py-1 rounded">(|0⟩ + |1⟩)/√2 ⊗ |0⟩ = (|00⟩ + |10⟩)/√2</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 w-24">Después de CNOT:</span>
                  <span className="bg-green-100 px-3 py-1 rounded">(|00⟩ + |11⟩)/√2</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium">
                  🎯 <strong>¡Logro desbloqueado!</strong> Has creado un estado de Bell - la forma más pura de entrelazamiento cuántico. 
                  Los qubits ahora están 100% correlacionados: medir uno instantáneamente determina el estado del otro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conceptos clave para recordar */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <CheckCircle className="w-7 h-7 text-amber-600" />
            Puntos Clave sobre Puertas Cuánticas
          </h3>
          <p className="text-gray-600">Conceptos esenciales que debes dominar</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Todas son Reversibles</h4>
                  <p className="text-gray-700 text-sm">A diferencia de las puertas clásicas, todas las puertas cuánticas son reversibles. Puedes 'deshacer' cualquier operación.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hadamard es Especial</h4>
                  <p className="text-gray-700 text-sm">La puerta H es tu mejor amiga - aparece en casi todos los algoritmos cuánticos para crear superposición.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">CNOT Crea Entrelazamiento</h4>
                  <p className="text-gray-700 text-sm">Para entrelazar qubits necesitas puertas de múltiples qubits. CNOT es la más común y poderosa.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-amber-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="bg-amber-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universalidad Cuántica</h4>
                  <p className="text-gray-700 text-sm">Con H, las rotaciones de un qubit, y CNOT puedes construir cualquier algoritmo cuántico posible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz interactivo */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <BookOpen className="w-7 h-7 text-green-600" />
            Desafíos de Puertas Cuánticas
          </h3>
          <p className="text-gray-600">Pon a prueba tu comprensión</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">🤔 Pregunta Conceptual</h4>
            <p className="text-gray-700 mb-4">¿Qué pasa si aplicamos la puerta Hadamard dos veces consecutivas al mismo qubit inicialmente en |0⟩?</p>
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-green-800 font-medium">Respuesta: Regresa a |0⟩</p>
              <p className="text-sm text-gray-600 mt-1">H es su propia inversa: H·H = I (identidad)</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">⚡ Desafío Práctico</h4>
            <p className="text-gray-700 mb-4">¿Qué secuencia de puertas transformaría |0⟩ en |1⟩ pasando por una superposición?</p>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="text-blue-800 font-medium">Respuesta: H, luego Z, luego H</p>
              <p className="text-sm text-gray-600 mt-1">H|0⟩ → |+⟩, Z|+⟩ → |-⟩, H|-⟩ → |1⟩</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LessonPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;
  const [completed, setCompleted] = useState(false);

  // Datos de las lecciones (en una app real vendrían del backend)
  const lessons = {
    '1': {      '1': {
        title: 'Introducción a la Computación Cuántica',
        type: 'leccion',
        isInteractive: true,
        duration: '15 min',
        points: 50
      },      '2': {
        title: 'Qubits y Estados Cuánticos',
        type: 'leccion',
        isInteractive: true,
        duration: '35 min',
        points: 120
      },
      '3': {
        title: 'Puertas Cuánticas Básicas',
        type: 'leccion',
        isInteractive: true,
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

  const currentLesson = lessons[moduleId as keyof typeof lessons]?.[lessonId as keyof typeof lessons[keyof typeof lessons]];  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Lección no encontrada</h1>
          <Link href="/estudiante/cursos" className="text-blue-600 hover:text-blue-700">
            ← Volver a cursos
          </Link>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);
    // Aquí se enviarían los datos al backend para actualizar el progreso
  };  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">            <div className="flex items-center gap-4">
              <Link 
                href={`/estudiante/cursos/${moduleId}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft size={20} />
                Volver al módulo
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-800">
                <BookOpen size={20} />
                <span className="font-medium">Módulo {moduleId} - Lección {lessonId}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">{currentLesson.duration}</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                +{currentLesson.points} pts
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl">
          {/* Lesson Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-10 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  {currentLesson.type === 'leccion' && <BookOpen size={32} className="text-white" />}
                  {currentLesson.type === 'practica' && <Play size={32} className="text-white" />}
                </div>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-white capitalize tracking-wide">
                  {currentLesson.type}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
                {currentLesson.title}
              </h1>
              <div className="w-20 h-1 bg-white/30 rounded-full" />
            </div>
          </div>          {/* Lesson Content */}
          <div className="p-10">
            {moduleId === '1' && lessonId === '1' ? (
              <IntroduccionInteractiva />
            ) : moduleId === '1' && lessonId === '2' ? (
              <QubitsInteractivo />
            ) : moduleId === '1' && lessonId === '3' ? (
              <PuertasCuanticasInteractivo />
            ) : (
              <div 
                className="prose prose-invert prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: 'content' in currentLesson ? currentLesson.content : '' }}
                style={{
                  color: '#e2e8f0',
                  lineHeight: '1.7'
                }}
              />
            )}
          </div>{/* Lesson Actions */}
          <div className="p-10 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {completed && (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle size={20} />
                    <span className="font-medium">¡Lección completada!</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">                {!completed && (
                  <button
                    onClick={handleComplete}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <CheckCircle size={22} />
                    Marcar como completada
                  </button>
                )}
                <Link
                  href={`/estudiante/cursos/${moduleId}`}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
