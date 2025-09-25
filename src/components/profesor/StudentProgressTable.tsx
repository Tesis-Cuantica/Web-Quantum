"use client";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

type Student = {
  name: string;
  progress: string;
  grade: string;
};

const studentData: Record<string, Student[]> = {
  "seccion-a": [
    { name: "Juan Pérez", progress: "80%", grade: "A" },
    { name: "Ana Gómez", progress: "90%", grade: "A+" },
  ],
  "seccion-b": [
    { name: "Luis Martínez", progress: "70%", grade: "B" },
    { name: "María López", progress: "85%", grade: "A" },
  ],
};

export function StudentProgressTable() {
  const [selectedSection, setSelectedSection] = useState("seccion-a");
  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSection(e.target.value);
  };
  const currentStudents: Student[] = studentData[selectedSection] || [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Progreso de Estudiantes</h2>
          <p className="text-sm text-gray-600 mt-1">Selecciona un curso para ver el detalle.</p>
        </div>
        <select 
          id="course-select"
          value={selectedSection}
          onChange={handleSectionChange}
          className="w-full sm:w-auto border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="seccion-a">Física Cuántica - Sección A</option>
          <option value="seccion-b">Termodinámica - Sección B</option>
        </select>
      </div>
      
      {/* Contenedor para hacer la tabla scrollable en móvil */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold text-sm text-gray-600">Nombre</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Progreso</th>
              <th className="p-4 font-semibold text-sm text-gray-600">Nota Final</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentStudents.map((student: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; progress: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; grade: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 whitespace-nowrap text-sm text-gray-800">{student.name}</td>
                <td className="p-4 whitespace-nowrap text-sm text-gray-600">{student.progress}</td>
                <td className="p-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}