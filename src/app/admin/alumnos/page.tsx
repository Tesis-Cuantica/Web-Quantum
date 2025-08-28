"use client"

import { useState } from "react"
import { StudentList } from "@/components/admin/student-list"
import { StudentForm } from "@/components/admin/student-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AlumnosPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)

  const handleAddStudent = () => {
    setEditingStudent(null)
    setShowForm(true)
  }

  const handleEditStudent = (student: any) => {
    setEditingStudent(student)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingStudent(null)
  }

  if (showForm) {
    return <StudentForm student={editingStudent} onClose={handleCloseForm} onSave={handleCloseForm} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Alumnos</h1>
        <Button onClick={handleAddStudent} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar
        </Button>
      </div>
      <StudentList onEdit={handleEditStudent} />
    </div>
  )
}
