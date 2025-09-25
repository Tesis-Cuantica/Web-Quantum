"use client";

import { useState } from 'react';
import Image from 'next/image';
import { User, Lock } from 'lucide-react';

export function ProfileForm() {
  // Estado para manejar la previsualización de la imagen
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perfil actualizado (simulación)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col items-center">
          <label htmlFor="photo-upload" className="cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2 relative group">
              {imagePreview ? (
                <Image src={imagePreview} alt="Vista previa" layout="fill" objectFit="cover" />
              ) : (
                <User className="w-16 h-16 text-gray-400" />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm text-center">Cambiar foto</p>
              </div>
            </div>
          </label>
          <input 
            type="file" 
            id="photo-upload" 
            name="photo"
            accept="image/*" 
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        
        <div className="flex-1 w-full space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" defaultValue="Nombre del Profesor" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción Breve</label>
            <textarea id="descripcion" name="descripcion" rows={3} defaultValue="Profesor apasionado por la física cuántica y la enseñanza." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-lg font-semibold flex items-center text-gray-800">
          <Lock className="w-5 h-5 mr-2" />
          Cambiar Contraseña
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
            <input type="password" id="new-password" name="new-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}