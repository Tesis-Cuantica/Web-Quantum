"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface CourseFormProps {
  course?: any
  onClose: () => void
  onSave: (course: any) => void
}

export function CourseForm({ course, onClose, onSave }: CourseFormProps) {
  const [formData, setFormData] = useState({
    nombre: course?.nombre || "",
    descripcion: course?.descripcion || "",
    profesor: course?.profesor || "",
    duracion: course?.duracion || "",
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
            {course ? "Editar Curso" : "Agregar Curso"}
          </CardTitle>
          <p className="text-center text-sm text-gray-600">Todos los valores tienen que ser llenados</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre del Curso</Label>
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
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                value={formData.descripcion}
                onChange={(e) => handleInputChange("descripcion", e.target.value)}
                className="w-full"
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profesor">Profesor</Label>
              <Select value={formData.profesor} onValueChange={(value) => handleInputChange("profesor", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar profesor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-ana-martinez">Dr. Ana Martinez</SelectItem>
                  <SelectItem value="prof-carlos-rodriguez">Prof. Carlos Rodriguez</SelectItem>
                  <SelectItem value="dra-maria-lopez">Dra. Maria Lopez</SelectItem>
                  <SelectItem value="prof-luis-garcia">Prof. Luis Garcia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duracion">Duración</Label>
              <Select value={formData.duracion} onValueChange={(value) => handleInputChange("duracion", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar duración" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-mes">1 Mes</SelectItem>
                  <SelectItem value="2-meses">2 Meses</SelectItem>
                  <SelectItem value="3-meses">3 Meses</SelectItem>
                  <SelectItem value="6-meses">6 Meses</SelectItem>
                  <SelectItem value="1-año">1 Año</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" className="px-8">
                {course ? "Actualizar" : "Agregar"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
