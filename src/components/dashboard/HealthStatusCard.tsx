import React from 'react';
import { HealthStatus } from '../../types';
import * as LucideIcons from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

interface HealthStatusCardProps {
  status: HealthStatus;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({ status }) => {
  const iconMap = LucideIcons;
  const IconComponent =
    status.icon && status.icon !== 'Teeth'
      ? (iconMap[status.icon as keyof typeof LucideIcons] as React.FC<React.ComponentProps<'svg'>>)
      : null;

  return (
    <div className="bg-blue-100 rounded-xl p-4 mb-4 last:mb-0 w-[200px] h-[120px] flex flex-col justify-between ml-auto">
      <div className="flex items-center">
        {status.icon === 'Teeth' ? (
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <FontAwesomeIcon icon={faTooth} className="w-5 h-5 text-gray-600" />
          </div>
        ) : (
          IconComponent && (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <IconComponent className="w-5 h-5 text-gray-600" />
            </div>
          )
        )}
        <div>
          <h3 className="font-medium text-gray-800">{status.name}</h3>
          <p className="text-xs text-gray-500">Date: {status.date}</p>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            status.status === 'healthy'
              ? 'bg-green-400 w-full'
              : status.status === 'warning'
              ? 'bg-yellow-400 w-2/3'
              : status.status === 'critical'
              ? 'bg-red-400 w-1/3'
              : 'bg-gray-400 w-1/2'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;