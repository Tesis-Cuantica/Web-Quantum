"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

// Datos de ejemplo
const mockUsers = [
  { id: 1, nombre: "Roberto Gutierrez", correo: "roberto@email.com", rol: "Administrador" },
  { id: 2, nombre: "Elizabeth Cruz", correo: "elizabeth@email.com", rol: "Profesor" },
  { id: 3, nombre: "Carlos Martinez", correo: "carlos@email.com", rol: "Alumno" },
  { id: 4, nombre: "Ana Rodriguez", correo: "ana@email.com", rol: "Profesor" },
  { id: 5, nombre: "Luis Garcia", correo: "luis@email.com", rol: "Alumno" },
  { id: 6, nombre: "Maria Lopez", correo: "maria@email.com", rol: "Alumno" },
]

interface UserListProps {
  onEdit: (user: any) => void
}

export function UserList({ onEdit }: UserListProps) {
  const [users, setUsers] = useState(mockUsers)

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="admin-table">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="font-medium text-gray-900">{user.nombre}</td>
                <td className="text-blue-600">{user.correo}</td>
                <td>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.rol === "Administrador"
                        ? "bg-purple-100 text-purple-800"
                        : user.rol === "Profesor"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.rol}
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(user)}
                      className="admin-button-secondary text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(user.id)}
                      className="admin-button-secondary text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
