"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2 } from "lucide-react"

const mockCourses = [
  {
    id: 1,
    nombre: "Matemáticas Avanzadas",
    descripcion: "Curso de matemáticas para estudiantes avanzados",
    profesor: "Dr. Ana Martinez",
    duracion: "6 Meses",
  },
  {
    id: 2,
    nombre: "Ciencias Naturales",
    descripcion: "Introducción a las ciencias naturales",
    profesor: "Prof. Carlos Rodriguez",
    duracion: "3 Meses",
  },
  {
    id: 3,
    nombre: "Historia Universal",
    descripcion: "Recorrido por la historia mundial",
    profesor: "Dra. Maria Lopez",
    duracion: "1 Año",
  },
  {
    id: 4,
    nombre: "Literatura Clásica",
    descripcion: "Análisis de obras literarias clásicas",
    profesor: "Prof. Luis Garcia",
    duracion: "2 Meses",
  },
]

interface CourseListProps {
  onEdit: (course: any) => void
}

export function CourseList({ onEdit }: CourseListProps) {
  const [courses, setCourses] = useState(mockCourses)

  const handleDelete = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profesor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duración
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.nombre}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{course.descripcion}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.profesor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.duracion}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(course)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(course.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
