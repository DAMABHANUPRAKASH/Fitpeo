import React from 'react';
import { healthStatuses } from '../../data/healthData';
import { HealthStatus } from '../../types';
import * as LucideIcons from 'lucide-react';

const ZoomIn = LucideIcons.ZoomIn;

const AnatomySection: React.FC = () => {
  const iconMap: Record<string, any> = LucideIcons;

  const getStatusColor = (status: HealthStatus['status']) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-400';
      case 'warning':
        return 'bg-yellow-400';
      case 'critical':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusBgColor = (status: HealthStatus['status']) => {
    switch (status) {
      case 'healthy':
        return 'bg-cyan-400';
      case 'warning':
        return 'bg-yellow-100';
      case 'critical':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getStatusTextColor = (status: HealthStatus['status']) => {
    switch (status) {
      case 'healthy':
        return 'text-white';
      case 'warning':
        return 'text-yellow-700';
      case 'critical':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="relative w-full h-full flex-1">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Zoom Icon */}
        <button className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition" title="Zoom">
          <ZoomIn className="w-6 h-6 text-blue-500" />
        </button>
        {/* Anatomy Image */}
        <img 
          src="/muscle-anatomy.png" 
          alt="Human Anatomy" 
          className="w-full h-full object-contain opacity-90"
        />
        
        {/* Position Indicators */}
        {healthStatuses
          .filter(status => status.position)
          .map((status) => (
            <div 
              key={status.id}
              className={`absolute ${getStatusBgColor(status.status)} ${getStatusTextColor(status.status)} px-3 py-1.5 rounded-lg text-xs font-medium`}
              style={{ 
                top: status.position?.top, 
                left: status.position?.left ? `calc(${status.position.left} + 10px)` : undefined,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {status.name}
            </div>
          ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default AnatomySection;