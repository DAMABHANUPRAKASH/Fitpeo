import React from 'react';
import { calendarData } from '../../data/calendarData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { detailedAppointments } from '../../data/appointmentData';
import * as LucideIcons from 'lucide-react';

const CalendarView: React.FC = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">This Week</span>
          <span className="text-xs">▼</span>
        </div>
        
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mr-4">{calendarData.month} {calendarData.year}</h2>
          
          <div className="flex space-x-2">
            <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4 mb-4">
        {days.map((day, index) => (
          <div key={index} className="text-center text-sm text-gray-600 font-medium">
            {day}
          </div>
        ))}
        
        {calendarData.days.map((day, index) => (
          <div 
            key={index} 
            className="text-center py-2"
          >
            <div className="mb-2 text-sm font-semibold">{day.date}</div>
            <div className="space-y-1.5">
              {day.appointments.map((appointment, i) => (
                <div 
                  key={i} 
                  className={`text-xs rounded py-0.5 px-1 mx-auto max-w-[85%] ${
                    appointment.available 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {appointment.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {detailedAppointments.map((appointment) => {
          const IconComponent = LucideIcons[appointment.icon as keyof typeof LucideIcons] as React.FC<React.ComponentProps<'svg'>>;
          return (
            <div 
              key={appointment.id} 
              className={`bg-${appointment.color} text-white rounded-xl p-4`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">{appointment.title}</h3>
                {IconComponent && <IconComponent className="w-5 h-5" />}
              </div>
              <div className="text-sm">{appointment.time}</div>
              <div className="text-sm opacity-80">{appointment.doctor}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;