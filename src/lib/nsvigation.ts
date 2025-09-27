import {
  Home,
  BarChart3,
  Trophy,
  FlaskConical,
  UserCircle,
  BookOpen, 
  Users,
  FileText,
  Brain,    
} from "lucide-react";

import type { NavItem } from "@/components/layout/AppSidebar";

export const studentNavItems: NavItem[] = [
  { href: "/estudiante/cursos", icon: BookOpen, label: "Cursos", color: "red" },
  { href: "/estudiante/laboratorio", icon: FlaskConical, label: "Laboratorio", color: "red" },
  { href: "/estudiante/reportes", icon: FileText, label: "Reportes", color: "red" },
  { href: "/estudiante/quantumml", icon: Brain, label: "QuantumML", color: "red" },
];

// Enlaces para el rol de Profesor (TODOS con color "red")
export const professorNavItems: NavItem[] = [
  { href: "/profesor", icon: Home, label: "Dashboard", color: "red" },
  { href: "/profesor/cursos", icon: BookOpen, label: "Mis Cursos", color: "red" }, // Cambiado
  { href: "/profesor/perfil", icon: UserCircle, label: "Perfil", color: "red" }, // Cambiado
];