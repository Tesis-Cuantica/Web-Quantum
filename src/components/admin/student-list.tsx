"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2 } from "lucide-react"

const mockStudents = [
  { id: 1, nombre: "Juan Pérez", correo: "juan.perez@email.com", grado: "3ro", telefono: "+1234567890" },
  { id: 2, nombre: "Sofia González", correo: "sofia.gonzalez@email.com", grado: "2do", telefono: "+1234567891" },
  { id: 3, nombre: "Diego Ramírez", correo: "diego.ramirez@email.com", grado: "4to", telefono: "+1234567892" },
  { id: 4, nombre: "Isabella Torres", correo: "isabella.torres@email.com", grado: "1ro", telefono: "+1234567893" },
  { id: 5, nombre: "Mateo Silva", correo: "mateo.silva@email.com", grado: "5to", telefono: "+1234567894" },
]

interface StudentListProps {
  onEdit: (student: any) => void
}

export function StudentList({ onEdit }: StudentListProps) {
  const [students, setStudents] = useState(mockStudents)

  const handleDelete = (id: number) => {
    setStudents(students.filter((student) => student.id !== id))
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
                  Grado
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
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.correo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grado}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.telefono}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(student)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(student.id)}
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
