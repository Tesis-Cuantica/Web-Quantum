"use client"

import { useState } from "react"
import { UserList } from "@/components/admin/user-list"
import { UserForm } from "@/components/admin/user-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function UsuariosPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const handleAddUser = () => {
    setEditingUser(null)
    setShowForm(true)
  }

  const handleEditUser = (user: any) => {
    setEditingUser(user)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingUser(null)
  }

  if (showForm) {
    return (
      <div className="admin-main">
        <div className="admin-content">
          <UserForm user={editingUser} onClose={handleCloseForm} onSave={handleCloseForm} />
        </div>
      </div>
    )
  }

  return (
    <div className="admin-main">
      <div className="admin-header">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
          <Button onClick={handleAddUser} className="admin-button-primary flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>

      <div className="admin-content fade-in">
        <UserList onEdit={handleEditUser} />
      </div>
    </div>
  )
}
