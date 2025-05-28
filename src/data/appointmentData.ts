import { DetailedAppointment, UpcomingAppointment } from '../types';


export const detailedAppointments: DetailedAppointment[] = [
  {
    id: '1',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    icon: 'Teeth',
    color: 'indigo-700',
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djoenes',
    time: '11:00-12:00',
    icon: 'User',
    color: 'indigo-700',

  },
];

export const upcomingAppointments: UpcomingAppointment[] = [
  {
    id: '1',
    title: 'Health checkup complete',
    time: '11:00 AM',
    icon: 'Stethoscope',
    day: 'Thursday',
    iconColor: 'rose-500',
  },
  {
    id: '2',
    title: 'Ophthalmologist',
    time: '14:00 PM',
    icon: 'Eye',
    day: 'Thursday',
    iconColor: 'blue-500',
  },
  {
    id: '3',
    title: 'Cardiologist',
    time: '12:00 AM',
    icon: 'Heart',
    day: 'Saturday',
    iconColor: 'red-500',
  },
  {
    id: '4',
    title: 'Neurologist',
    time: '16:00 PM',
    icon: 'Brain',
    day: 'Saturday',
    iconColor: 'violet-500',
  },
  
];

export const activityData = [
  { day: 'Mon', count: 2 },
  { day: 'Tues', count: 3 },
  { day: 'Wed', count: 1 },
  { day: 'Thurs', count: 4 },
  { day: 'Fri', count: 2 },
  { day: 'Sat', count: 3 },
  { day: 'Sun', count: 1 },
];