"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2 } from "lucide-react"

const mockTeachers = [
  {
    id: 1,
    nombre: "Dr. Ana Martinez",
    correo: "ana.martinez@email.com",
    especialidad: "Matemáticas",
    telefono: "+1234567890",
  },
  {
    id: 2,
    nombre: "Prof. Carlos Rodriguez",
    correo: "carlos.rodriguez@email.com",
    especialidad: "Ciencias",
    telefono: "+1234567891",
  },
  {
    id: 3,
    nombre: "Dra. Maria Lopez",
    correo: "maria.lopez@email.com",
    especialidad: "Historia",
    telefono: "+1234567892",
  },
  {
    id: 4,
    nombre: "Prof. Luis Garcia",
    correo: "luis.garcia@email.com",
    especialidad: "Literatura",
    telefono: "+1234567893",
  },
]

interface TeacherListProps {
  onEdit: (teacher: any) => void
}

export function TeacherList({ onEdit }: TeacherListProps) {
  const [teachers, setTeachers] = useState(mockTeachers)

  const handleDelete = (id: number) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id))
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
                  Correo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Especialidad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.correo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.especialidad}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.telefono}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(teacher)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(teacher.id)}
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
