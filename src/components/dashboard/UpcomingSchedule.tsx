import React from 'react';
import { upcomingAppointments } from '../../data/appointmentData';
import AppointmentCard from './AppointmentCard';

const UpcomingSchedule: React.FC = () => {
  const thursdayAppointments = upcomingAppointments.filter(
    (appointment) => appointment.day === 'Thursday'
  );
  
  const saturdayAppointments = upcomingAppointments.filter(
    (appointment) => appointment.day === 'Saturday'
  );
  
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">The Upcoming Schedule</h2>
        <div className="flex items-center">
          <span className="text-xs text-blue-600 mr-1">Details</span>
          <span className="text-blue-600">→</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thursdayAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saturdayAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;