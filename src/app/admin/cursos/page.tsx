"use client"

import { useState } from "react"
import { CourseList } from "@/components/admin/course-list"
import { CourseForm } from "@/components/admin/course-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function CursosPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)

  const handleAddCourse = () => {
    setEditingCourse(null)
    setShowForm(true)
  }

  const handleEditCourse = (course: any) => {
    setEditingCourse(course)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingCourse(null)
  }

  if (showForm) {
    return <CourseForm course={editingCourse} onClose={handleCloseForm} onSave={handleCloseForm} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Cursos</h1>
        <Button onClick={handleAddCourse} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Agregar
        </Button>
      </div>
      <CourseList onEdit={handleEditCourse} />
    </div>
  )
}
