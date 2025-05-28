import { NavigationLink } from '../types';

export const generalLinks: NavigationLink[] = [
  {
    id: '1',
    name: 'Dashboard',
    icon: 'layout-dashboard',
    path: '/',
  },
  {
    id: '2',
    name: 'History',
    icon: 'history',
    path: '/history',
  },
  {
    id: '3',
    name: 'Calendar',
    icon: 'calendar',
    path: '/calendar',
  },
  {
    id: '4',
    name: 'Appointments',
    icon: 'clipboard-list',
    path: '/appointments',
  },
  {
    id: '5',
    name: 'Statistics',
    icon: 'bar-chart-2',
    path: '/statistics',
  },
  {
    id: '6',
    name: 'Tests',
    icon: 'flask-conical',
    path: '/tests',
  },
];

export const toolsLinks: NavigationLink[] = [
  {
    id: '7',
    name: 'Chat',
    icon: 'message-circle',
    path: '/chat',
  },
  {
    id: '8',
    name: 'Support',
    icon: 'help-circle',
    path: '/support',
  },
  {
    id: '9',
    name: 'Setting',
    icon: 'settings',
    path: '/settings',
  },
];