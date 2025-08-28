"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface TeacherFormProps {
  teacher?: any
  onClose: () => void
  onSave: (teacher: any) => void
}

export function TeacherForm({ teacher, onClose, onSave }: TeacherFormProps) {
  const [formData, setFormData] = useState({
    nombre: teacher?.nombre || "",
    correo: teacher?.correo || "",
    especialidad: teacher?.especialidad || "",
    telefono: teacher?.telefono || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Button variant="ghost" onClick={onClose} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            {teacher ? "Editar Profesor" : "Agregar Profesor"}
          </CardTitle>
          <p className="text-center text-sm text-gray-600">Todos los valores tienen que ser llenados</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="correo">Correo</Label>
              <Input
                id="correo"
                type="email"
                value={formData.correo}
                onChange={(e) => handleInputChange("correo", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="especialidad">Especialidad</Label>
              <Select value={formData.especialidad} onValueChange={(value) => handleInputChange("especialidad", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matematicas">Matemáticas</SelectItem>
                  <SelectItem value="ciencias">Ciencias</SelectItem>
                  <SelectItem value="historia">Historia</SelectItem>
                  <SelectItem value="literatura">Literatura</SelectItem>
                  <SelectItem value="ingles">Inglés</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="px-8">
                {teacher ? "Actualizar" : "Agregar"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
