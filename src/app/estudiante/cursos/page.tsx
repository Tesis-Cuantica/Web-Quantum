'use client';

import { useState, useEffect } from 'react';

export default function CursosPage() {
  // Estado para simular datos del usuario autenticado
  const [userData, setUserData] = useState({
    nombre: '',
    ciclo: '',
    carrera: '',
    isLoading: true
  });

  // Simulación de carga de datos del usuario (como si viniera del backend/auth)
  useEffect(() => {
    // Simular llamada a API o datos de autenticación
    const simulateUserDataFetch = async () => {
      // Simular delay de carga
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Datos simulados que vendrían del backend
      setUserData({
        nombre: 'Juan Carlos',
        ciclo: '8vo Ciclo', 
        carrera: 'Ingeniería de Sistemas',
        isLoading: false
      });
    };

    simulateUserDataFetch();
  }, []);

  // Mostrar estado de carga mientras se obtienen los datos
  if (userData.isLoading) {
    return (
      <div className="courses-loading">
        <div className="loading-spinner"></div>
        <p>Cargando información del estudiante...</p>
      </div>
    );
  }

  return (
    <div className="student-courses-container">
      {/* Header con bienvenida personalizada - Datos vienen del estado/auth */}
      <div className="courses-header">
        <h1 className="welcome-message">
          Bienvenido <span className="student-name">{userData.nombre}</span>
        </h1>
        <p className="courses-subtitle">Panel de Cursos - QuantumEd</p>
      </div>

      {/* Contenedor principal de las dos tarjetas */}
      <div className="cards-container">
        
        {/* Tarjeta 1: Información del Estudiante (Azul) */}
        <div className="info-card student-info-card">
          <div className="card-header">
            <div className="card-icon student-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 className="card-title">Información Personal</h2>
          </div>
          
          <div className="card-content">
            {/* Datos dinámicos del estudiante */}
            <div className="info-row">
              <span className="info-label">Nombre</span>
              <span className="info-value">{userData.nombre}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Ciclo</span>
              <span className="info-value">{userData.ciclo}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Carrera</span>
              <span className="info-value">{userData.carrera}</span>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Mensaje de Ciberseguridad (Roja) */}
        <div className="info-card security-card">
          <div className="card-header">
            <div className="card-icon security-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
              </svg>
            </div>
            <h2 className="card-title">Ciberseguridad</h2>
          </div>
          
          <div className="card-content">
            <div className="security-message">
              <p className="primary-message">
                Por ahora solo tienes acceso al curso de:
              </p>
              
              {/* Badge del curso disponible */}
              <div className="course-badge">
                <div className="badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                  </svg>
                </div>
                <span className="badge-text">Ciberseguridad</span>
              </div>
              
              <p className="secondary-message">
                Más cursos estarán disponibles próximamente
              </p>
              
              {/* Indicador de progreso */}
              <div className="progress-indicator">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
                <span className="progress-text">Acceso: 1 de 4 cursos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección adicional con estadísticas rápidas */}
      <div className="quick-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19Z"/>
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-number">1</div>
            <div className="stat-label">Curso Activo</div>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2L13.09,8.26L22,9L14.5,13.74L17.18,22L12,17.27L6.82,22L9.5,13.74L2,9L10.91,8.26L12,2Z"/>
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-number">∞</div>
            <div className="stat-label">Posibilidades</div>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Disponible</div>
          </div>
        </div>
      </div>
    </div>
  );
}