import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Database, Play, BookOpen } from "lucide-react";

export default function QuantumMLPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="h-8 w-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">QuantumML</h1>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
          Machine Learning Cuántico
        </span>
      </div>

      {/* Introducción */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-red-600" />
            Aprendizaje Automático Cuántico
          </CardTitle>
          <CardDescription>
            Explora el fascinante mundo del machine learning cuántico con algoritmos 
            híbridos y simulaciones interactivas.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Algoritmos Disponibles */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-red-600" />
              Variational Quantum Eigensolver (VQE)
            </CardTitle>
            <CardDescription>Optimización de estados fundamentales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Encuentra el estado fundamental de moléculas usando circuitos cuánticos parametrizados.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-red-600" />
              Quantum Support Vector Machine
            </CardTitle>
            <CardDescription>Clasificación cuántica</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Implementa SVM usando mapas de características cuánticas para problemas de clasificación.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              Quantum Neural Networks
            </CardTitle>
            <CardDescription>Redes neuronales híbridas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Combina capas clásicas y cuánticas para crear redes neuronales híbridas potentes.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-red-600" />
              Quantum Approximate Optimization Algorithm (QAOA)
            </CardTitle>
            <CardDescription>Optimización combinatoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Resuelve problemas de optimización combinatoria usando algoritmos cuánticos aproximados.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-red-600" />
              Quantum Clustering
            </CardTitle>
            <CardDescription>Agrupamiento cuántico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Aplica técnicas de clustering usando algoritmos cuánticos para encontrar patrones.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              Quantum Reinforcement Learning
            </CardTitle>
            <CardDescription>Aprendizaje por refuerzo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Implementa agentes de aprendizaje por refuerzo usando circuitos cuánticos.
              </p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                  <Play className="h-3 w-3" />
                  Ejecutar
                </button>
                <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <BookOpen className="h-3 w-3" />
                  Teoría
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tutoriales Recomendados */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Tutoriales Recomendados</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Introducción al ML Cuántico</CardTitle>
              <CardDescription>Conceptos fundamentales y primeros pasos</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">
                Comenzar Tutorial
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Circuitos Parametrizados</CardTitle>
              <CardDescription>Aprende a diseñar y optimizar circuitos</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">
                Comenzar Tutorial
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
