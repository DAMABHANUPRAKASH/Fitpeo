import { CalendarData } from '../types';

export const calendarData: CalendarData = {
  month: 'October',
  year: 2021,
  days: [
    {
      date: 25,
      appointments: [
        { time: '10:00', available: true },
        { time: '11:00', available: true },
        { time: '12:00', available: true },
      ],
    },
    {
      date: 26,
      appointments: [
        { time: '08:00', available: true },
        { time: '09:00', available: false },
        { time: '10:00', available: true },
      ],
    },
    {
      date: 27,
      appointments: [
        { time: '12:00', available: true },
        { time: '13:00', available: true },
      ],
    },
    {
      date: 28,
      appointments: [
        { time: '10:00', available: true },
        { time: '11:00', available: true },
      ],
    },
    {
      date: 29,
      appointments: [
        { time: '14:00', available: true },
        { time: '16:00', available: true },
      ],
    },
    {
      date: 30,
      appointments: [
        { time: '12:00', available: true },
        { time: '14:00', available: true },
        { time: '15:00', available: true },
      ],
    },
    {
      date: 31,
      appointments: [
        { time: '09:00', available: true },
        { time: '10:00', available: true },
        { time: '11:00', available: true },
      ],
    },
  ],
};