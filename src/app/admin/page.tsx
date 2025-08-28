import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, UserCheck, BookOpen } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Usuarios",
      value: "1,234",
      description: "Usuarios registrados",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Profesores",
      value: "89",
      description: "Profesores activos",
      icon: GraduationCap,
      color: "text-green-600",
    },
    {
      title: "Alumnos",
      value: "1,145",
      description: "Alumnos matriculados",
      icon: UserCheck,
      color: "text-purple-600",
    },
    {
      title: "Cursos",
      value: "24",
      description: "Cursos disponibles",
      icon: BookOpen,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
        <p className="text-gray-600 mt-2">Gestiona usuarios, profesores, alumnos y cursos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimas acciones en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Nuevo usuario registrado</p>
                  <p className="text-xs text-gray-500">Hace 2 minutos</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Curso actualizado</p>
                  <p className="text-xs text-gray-500">Hace 15 minutos</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Profesor asignado</p>
                  <p className="text-xs text-gray-500">Hace 1 hora</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Tareas comunes de administración</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="font-medium text-sm">Agregar Usuario</div>
                <div className="text-xs text-gray-500">Crear nuevo usuario en el sistema</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="font-medium text-sm">Crear Curso</div>
                <div className="text-xs text-gray-500">Añadir nuevo curso disponible</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="font-medium text-sm">Gestionar Roles</div>
                <div className="text-xs text-gray-500">Asignar permisos y roles</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
