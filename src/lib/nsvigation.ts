import {
  Home,
  BarChart3,
  Trophy,
  FlaskConical,
  UserCircle,
  BookOpen, 
  Users,    
} from "lucide-react";

import type { NavItem } from "@/components/layout/AppSidebar";

export const studentNavItems: NavItem[] = [
  { href: "/estudiante", icon: Home, label: "Inicio", color: "red" },
  { href: "/estudiante/progreso", icon: BarChart3, label: "Progreso", color: "blue" },
  { href: "/estudiante/logros", icon: Trophy, label: "Logros", color: "yellow" },
  { href: "/estudiante/laboratorio", icon: FlaskConical, label: "Laboratorio", color: "green" },
  { href: "/estudiante/perfil", icon: UserCircle, label: "Perfil", color: "purple" },
];

// Enlaces para el rol de Profesor (TODOS con color "red")
export const professorNavItems: NavItem[] = [
  { href: "/profesor", icon: Home, label: "Dashboard", color: "red" },
  { href: "/profesor/cursos", icon: BookOpen, label: "Mis Cursos", color: "red" }, // Cambiado
  { href: "/profesor/perfil", icon: UserCircle, label: "Perfil", color: "red" }, // Cambiado
];