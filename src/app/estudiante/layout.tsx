"use client"

import { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { studentNavItems } from "@/lib/nsvigation";

export default function EstudianteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-screen">
      <AppSidebar 
        navItems={studentNavItems} 
        collapsed={collapsed}
        onToggle={handleToggle}
      />
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
