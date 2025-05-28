import React from 'react';
import { UpcomingAppointment } from '../../types';
import * as LucideIcons from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

interface AppointmentCardProps {
  appointment: UpcomingAppointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const iconMap = LucideIcons;
  const IconComponent =
    appointment.icon && appointment.icon !== 'Teeth'
      ? (iconMap[appointment.icon as keyof typeof LucideIcons] as React.FC<React.ComponentProps<'svg'>>)
      : null;

  const getIconColor = () => {
    if (appointment.iconColor) {
      return `text-${appointment.iconColor}`;
    }
    return 'text-blue-500';
  };
  
  return (
    <div className="bg-blue-100 rounded-xl p-4 flex justify-between items-center min-h-[85px]">
      <div className="flex items-center">
        {appointment.icon === 'Teeth' ? (
          <div className={`mr-3 ${getIconColor()}`}>
            <FontAwesomeIcon icon={faTooth} className="w-5 h-5 text-gray-600" />
          </div>
        ) : (
          IconComponent && (
            <div className={`mr-3 ${getIconColor()}`}>
              <IconComponent className="w-5 h-5 text-gray-600" />
            </div>
          )
        )}
        <div>
          <h4 className="text-sm font-medium text-gray-800">{appointment.title}</h4>
          <p className="text-xs text-gray-500">{appointment.time}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;