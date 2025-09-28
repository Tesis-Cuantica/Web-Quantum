'use client';

import { useState, useEffect } from 'react';

export interface SubtemaProgreso {
  id: number;
  titulo: string;
  texto: string;
  tipo: string;
  estado: 'disponible' | 'completo' | 'bloqueado';
  nuevo?: boolean;
}

export interface ModuloProgreso {
  id: number;
  titulo: string;
  estado: 'completo' | 'activo' | 'pendiente';
  subtemas: SubtemaProgreso[];
}

const MODULOS_INICIAL: ModuloProgreso[] = [
  {
    id: 1,
    titulo: "Fundamentos de la Computación Cuántica",
    estado: "activo",
    subtemas: [
      { 
        id: 1, 
        titulo: "Introducción", 
        texto: "¡Bienvenido! Descubre los conceptos básicos de la computación cuántica, su historia revolucionaria y por qué está transformando el mundo de la tecnología.", 
        tipo: "leccion",
        estado: "disponible",
        nuevo: true 
      },
      { 
        id: 2, 
        titulo: "Qubits y Estados Cuánticos", 
        texto: "Aprende sobre los qubits, la unidad básica de información cuántica y cómo se diferencia de los bits clásicos.", 
        tipo: "leccion",
        estado: "bloqueado"
      },
      { 
        id: 3, 
        titulo: "Puertas Cuánticas Básicas", 
        texto: "Explora las puertas cuánticas fundamentales: X, H, Z y CNOT, y cómo manipulan los estados cuánticos.", 
        tipo: "practica",
        estado: "bloqueado"
      },
    ],
  },
  {
    id: 2,
    titulo: "Algoritmos Cuánticos Básicos",
    estado: "pendiente",
    subtemas: [
      { 
        id: 1, 
        titulo: "Superposición y Entrelazamiento", 
        texto: "Domina los fenómenos cuánticos más poderosos que hacen posible la ventaja cuántica.", 
        tipo: "leccion",
        estado: "bloqueado"
      },
      { 
        id: 2, 
        titulo: "Algoritmo de Deutsch-Jozsa", 
        texto: "Primer algoritmo cuántico que demuestra ventaja exponencial sobre los algoritmos clásicos.", 
        tipo: "practica",
        estado: "bloqueado"
      },
      { 
        id: 3, 
        titulo: "Examen del Módulo", 
        texto: "Evalúa tu comprensión de los algoritmos cuánticos básicos.", 
        tipo: "examen",
        estado: "bloqueado"
      },
    ],
  },
  {
    id: 3,
    titulo: "Aplicaciones y Seguridad Cuántica",
    estado: "pendiente",
    subtemas: [
      { 
        id: 1, 
        titulo: "Ciberseguridad Cuántica", 
        texto: "Descubre cómo la computación cuántica revoluciona la criptografía y la seguridad digital.", 
        tipo: "leccion",
        estado: "bloqueado"
      },
      { 
        id: 2, 
        titulo: "Retos y Futuro Cuántico", 
        texto: "Explora los desafíos actuales y las oportunidades futuras en el campo cuántico.", 
        tipo: "leccion",
        estado: "bloqueado"
      },
    ],
  },
];

export function useProgreso() {
  const [modulos, setModulos] = useState<ModuloProgreso[]>(MODULOS_INICIAL);

  // Cargar progreso desde localStorage al inicializar
  useEffect(() => {
    const progresoGuardado = localStorage.getItem('progreso-cuantico');
    if (progresoGuardado) {
      try {
        const progreso = JSON.parse(progresoGuardado);
        setModulos(progreso);
      } catch (error) {
        console.error('Error al cargar progreso:', error);
        localStorage.setItem('progreso-cuantico', JSON.stringify(MODULOS_INICIAL));
      }
    } else {
      localStorage.setItem('progreso-cuantico', JSON.stringify(MODULOS_INICIAL));
    }
  }, []);

  // Función para marcar una lección como completada
  const completarLeccion = (moduleId: number, lessonId: number) => {
    const nuevosModulos = modulos.map(mod => {
      if (mod.id === moduleId) {
        const nuevosSubtemas = mod.subtemas.map((sub, index) => {
          // Marcar la lección actual como completada
          if (sub.id === lessonId) {
            return { ...sub, estado: 'completo' as const };
          }
          // Desbloquear la siguiente lección si existe
          if (sub.id === lessonId + 1 && sub.estado === 'bloqueado') {
            return { ...sub, estado: 'disponible' as const };
          }
          return sub;
        });
        return { ...mod, subtemas: nuevosSubtemas };
      }
      return mod;
    });
    
    setModulos(nuevosModulos);
    localStorage.setItem('progreso-cuantico', JSON.stringify(nuevosModulos));
  };

  // Función para verificar si todos los subtemas de un módulo están completos
  const todosLosSubtemasCompletos = (moduleId: number) => {
    const modulo = modulos.find(mod => mod.id === moduleId);
    return modulo ? modulo.subtemas.every(sub => sub.estado === 'completo') : false;
  };

  // Función para verificar si una lección está disponible
  const esLeccionDisponible = (moduleId: number, lessonId: number) => {
    const modulo = modulos.find(mod => mod.id === moduleId);
    if (!modulo) return false;
    
    const subtema = modulo.subtemas.find(sub => sub.id === lessonId);
    return subtema ? subtema.estado !== 'bloqueado' : false;
  };

  // Función para obtener el estado de una lección
  const obtenerEstadoLeccion = (moduleId: number, lessonId: number) => {
    const modulo = modulos.find(mod => mod.id === moduleId);
    if (!modulo) return 'bloqueado';
    
    const subtema = modulo.subtemas.find(sub => sub.id === lessonId);
    return subtema ? subtema.estado : 'bloqueado';
  };

  return {
    modulos,
    completarLeccion,
    todosLosSubtemasCompletos,
    esLeccionDisponible,
    obtenerEstadoLeccion
  };
}
