"use client";

export function CourseForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario a la API
    alert("Curso agregado (simulación)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del Curso</label>
        <input type="text" id="nombre" name="nombre" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="seccion" className="block text-sm font-medium text-gray-700">Sección</label>
        <input type="text" id="seccion" name="seccion" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="ciclo" className="block text-sm font-medium text-gray-700">Ciclo</label>
        <input type="text" id="ciclo" name="ciclo" placeholder="Ej: 2025-II" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="punto-inicio" className="block text-sm font-medium text-gray-700">Punto de Inicio</label>
        <select id="punto-inicio" name="punto-inicio" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          <option>Módulo 1: Introducción</option>
          <option>Módulo 2: Conceptos Básicos</option>
          {/* ... más opciones */}
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">Cancelar</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Guardar Curso</button>
      </div>
    </form>
  );
}