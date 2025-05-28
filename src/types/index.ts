export interface NavigationLink {
  id: string;
  name: string;
  icon: string;
  path: string;
}

export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  date: string;
  icon?: string;
  position?: {
    top: string;
    left: string;
  };
}

export interface AppointmentTime {
  time: string;
  available: boolean;
}

export interface CalendarDay {
  date: number;
  appointments: AppointmentTime[];
}

export interface CalendarData {
  month: string;
  year: number;
  days: CalendarDay[];
}

export interface DetailedAppointment {
  id: string;
  title: string;
  doctor: string;
  time: string;
  icon: string;
  color: string;
}

export interface UpcomingAppointment {
  id: string;
  title: string;
  time: string;
  icon: string;
  day: 'Thursday' | 'Saturday';
  iconColor?: string;
}

export interface ActivityData {
  day: string;
  count: number;
}