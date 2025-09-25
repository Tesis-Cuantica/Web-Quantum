import { AppSidebar } from "@/components/layout/AppSidebar"; 
import { professorNavItems } from "@/lib/nsvigation"; 

type ProfessorNavbarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function ProfessorNavbar({ collapsed, onToggle }: ProfessorNavbarProps) {
  return (
    <AppSidebar
      collapsed={collapsed}
      onToggle={onToggle}
      navItems={professorNavItems} // <--- Solo pasa los enlaces del profesor
    />
  );
}