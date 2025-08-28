"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface StudentFormProps {
  student?: any
  onClose: () => void
  onSave: (student: any) => void
}

export function StudentForm({ student, onClose, onSave }: StudentFormProps) {
  const [formData, setFormData] = useState({
    nombre: student?.nombre || "",
    correo: student?.correo || "",
    grado: student?.grado || "",
    telefono: student?.telefono || "",
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
            {student ? "Editar Alumno" : "Agregar Alumno"}
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
              <Label htmlFor="grado">Grado</Label>
              <Select value={formData.grado} onValueChange={(value) => handleInputChange("grado", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1ro">1ro</SelectItem>
                  <SelectItem value="2do">2do</SelectItem>
                  <SelectItem value="3ro">3ro</SelectItem>
                  <SelectItem value="4to">4to</SelectItem>
                  <SelectItem value="5to">5to</SelectItem>
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
                {student ? "Actualizar" : "Agregar"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
