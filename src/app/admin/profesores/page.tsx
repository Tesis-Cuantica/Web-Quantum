"use client"

import { useState } from "react"
import { TeacherList } from "@/components/admin/teacher-list"
import { TeacherForm } from "@/components/admin/teacher-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProfesoresPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingTeacher, setEditingTeacher] = useState(null)

  const handleAddTeacher = () => {
    setEditingTeacher(null)
    setShowForm(true)
  }

  const handleEditTeacher = (teacher: any) => {
    setEditingTeacher(teacher)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingTeacher(null)
  }

  if (showForm) {
    return <TeacherForm teacher={editingTeacher} onClose={handleCloseForm} onSave={handleCloseForm} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profesores</h1>
        <Button onClick={handleAddTeacher} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar
        </Button>
      </div>
      <TeacherList onEdit={handleEditTeacher} />
    </div>
  )
}
