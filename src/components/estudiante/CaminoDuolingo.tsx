// Componente CaminoDuolingo: Ruta de Aprendizaje Cuántico interactiva estilo Duolingo
// Camino vertical con curvaturas suaves, módulos como hitos principales expandibles
// Colores rojo/azul, diseño premium, totalmente responsivo

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Diamond, CheckCircle2, Flag, Lock } from "lucide-react";
import Link from "next/link";

// Iconos SVG mejorados para bandera y estados
const FlagIcon = ({ color = "#1976d2", size = 28 }) => (
  <Flag size={size} color={color} fill={color} strokeWidth={2.2} />
);

const LockIcon = ({ size = 18 }) => (
  <Lock size={size} color="#94a3b8" strokeWidth={2} />
);

// Estructura de módulos y subtemas tipo Duolingo - Ruta de Aprendizaje Cuántico
const MODULOS = [
  {
    id: 1,
    titulo: "Fundamentos de la Computación Cuántica",
    estado: "completo", // completo, activo, pendiente
    subtemas: [
      { 
        id: 1, 
        titulo: "Introducción", 
        texto: "¡Bienvenido! Descubre los conceptos básicos de la computación cuántica, su historia revolucionaria y por qué está transformando el mundo de la tecnología.", 
        tipo: "leccion",
        estado: "completo",
        nuevo: true 
      },
      { 
        id: 2, 
        titulo: "Qubits y Estados Cuánticos", 
        texto: "Aprende sobre los qubits, la unidad básica de información cuántica y cómo se diferencia de los bits clásicos.", 
        tipo: "leccion",
        estado: "disponible" 
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
    estado: "activo",
    subtemas: [
      { 
        id: 1, 
        titulo: "Superposición y Entrelazamiento", 
        texto: "Domina los fenómenos cuánticos más poderosos que hacen posible la ventaja cuántica.", 
        tipo: "leccion",
        estado: "disponible" 
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

export default function CaminoDuolingo({ onBack }: { onBack?: () => void }) {
  const [moduloExpandido, setModuloExpandido] = useState<number | null>(null);

  // Función para obtener el icono según el tipo de subtema
  const getSubtemaIcon = (tipo: string, estado: string) => {
    if (estado === "bloqueado") return <LockIcon />;
    switch (tipo) {
      case "leccion": return <BookOpen size={18} />;
      case "practica": return <Diamond size={18} />;
      case "examen": return <CheckCircle2 size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  // Función para obtener el color del módulo según su estado
  const getModuloColor = (estado: string) => {
    switch (estado) {
      case "completo": return "#22c55e";
      case "activo": return "#e53935";
      case "pendiente": return "#6b7280";
      default: return "#1976d2";
    }
  };  return (
    <div className="camino-bg-dark camino-container camino-fadein">
      {onBack && (
        <button className="camino-back-top-left" onClick={onBack}>
          ← Volver a cursos
        </button>
      )}
      <h2 className="camino-titulo-principal">Ruta de aprendizaje cuántico</h2>
      <div className="camino-camino-vertical">
        {MODULOS.map((mod, idx) => (
          <div key={idx} className={`camino-modulo-hito ${idx % 2 === 0 ? 'left' : 'right'}`}>
            {/* Línea de conexión superior */}
            {idx > 0 && <div className="camino-linea-zigzag" />}
            {/* Módulo principal */}
            <button
              className={`camino-modulo-btn ${moduloExpandido === idx ? 'expandido' : ''} ${mod.estado}`}
              onClick={() => setModuloExpandido(moduloExpandido === idx ? null : idx)}
            >
              <span className="camino-modulo-icono">
                <FlagIcon color={getModuloColor(mod.estado)} size={32} />
              </span>
              <span className="camino-modulo-contenido">
                <span className="camino-modulo-numero">Módulo {mod.id}:</span>
                <span className="camino-modulo-titulo">{mod.titulo}</span>
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {mod.estado === "completo" && <CheckCircle2 size={20} color="#22c55e" />}
                <span className="camino-chevron">
                  {moduloExpandido === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </div>
            </button>            {/* Subtemas expandibles */}
            {moduloExpandido === idx && (
              <div className="camino-subtemas-lista">
                {mod.subtemas.map((sub, sidx) => (
                  <div key={sidx} className="camino-subtema-row-horizontal">
                    {/* Subtema con ícono y título al lado */}
                    {sub.estado === "bloqueado" ? (
                      <div className="camino-subtema-item-horizontal">
                        <div className={`camino-subtema-btn ${sub.estado}`}>
                          <span className="camino-subtema-icono">
                            {getSubtemaIcon(sub.tipo, sub.estado)}
                          </span>
                        </div>
                        <div className="camino-subtema-info-horizontal">
                          <h4 className="camino-subtema-titulo">{sub.titulo}</h4>
                          {sub.nuevo && (
                            <span className="camino-nuevo-badge">¡Nuevo!</span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/estudiante/cursos/${mod.id}/${sub.id}`}
                        className="camino-subtema-item-horizontal"
                      >
                        <div className={`camino-subtema-btn ${sub.estado}`}>
                          <span className="camino-subtema-icono">
                            {getSubtemaIcon(sub.tipo, sub.estado)}
                          </span>
                        </div>
                        <div className="camino-subtema-info-horizontal">
                          <h4 className="camino-subtema-titulo">{sub.titulo}</h4>
                          {sub.nuevo && (
                            <span className="camino-nuevo-badge">¡Nuevo!</span>
                          )}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>        ))}
      </div>
    </div>
  );
}
// Comentarios:
// - Cada módulo es un hito principal con banderita, flecha expandible y estado de completitud.
// - Subtemas aparecen como botones con iconos y estado de progreso, y son links dinámicos.
// - El camino es vertical, zigzagueante y visualmente atractivo, con fondo oscuro y gradiente.
// - Todo es responsivo y no choca con el resto del diseño.

