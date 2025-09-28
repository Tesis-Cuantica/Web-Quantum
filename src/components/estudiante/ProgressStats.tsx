import { useState, useEffect } from 'react';
import { Trophy, Star, Target, BookOpen } from 'lucide-react';

interface ProgressStatsProps {
  studentName: string;
  onClose?: () => void;
}

export default function ProgressStats({ studentName, onClose }: ProgressStatsProps) {
  const [stats, setStats] = useState({
    totalModules: 3,
    completedModules: 1,
    totalLessons: 8,
    completedLessons: 3,
    totalPoints: 225,
    streak: 5,
    level: 2,
    nextLevelPoints: 275
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const progressPercentage = (stats.completedLessons / stats.totalLessons) * 100;
  const levelProgress = (stats.totalPoints / stats.nextLevelPoints) * 100;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy size={36} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">¡Progreso Cuántico!</h2>
          <p className="text-blue-200">Hola {studentName}, aquí está tu progreso</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Modules Completed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <BookOpen size={24} className="text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.completedModules}/{stats.totalModules}</div>
            <div className="text-sm text-blue-200">Módulos</div>
          </div>

          {/* Total Points */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Star size={24} className="text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.totalPoints}</div>
            <div className="text-sm text-blue-200">Puntos</div>
          </div>

          {/* Streak */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Target size={24} className="text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.streak}</div>
            <div className="text-sm text-blue-200">Días seguidos</div>
          </div>

          {/* Level */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
            <Trophy size={24} className="text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">Nivel {stats.level}</div>
            <div className="text-sm text-blue-200">Cuántico</div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4 mb-6">
          {/* Lessons Progress */}
          <div>
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Lecciones completadas</span>
              <span>{stats.completedLessons}/{stats.totalLessons}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Level Progress */}
          <div>
            <div className="flex justify-between text-sm text-blue-200 mb-2">
              <span>Progreso al siguiente nivel</span>
              <span>{stats.totalPoints}/{stats.nextLevelPoints}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Últimos logros</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Trophy size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Primer Módulo Completado</div>
                <div className="text-blue-200 text-sm">Fundamentos de Computación Cuántica</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Star size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Racha de 5 días</div>
                <div className="text-blue-200 text-sm">¡Sigue así!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          Continuar aprendiendo
        </button>
      </div>
    </div>
  );
}
