import { HealthStatus } from '../types';

export const healthStatuses: HealthStatus[] = [
  {
    id: '1',
    name: 'Healthy Heart',
    status: 'healthy',
    date: '',
    position: {
      top: '30%',
      left: '55%',
    },
  },
  {
    id: '2',
    name: 'Lungs',
    status: 'critical',
    date: '24 Oct 2021',
    icon: 'Lungs',
  },
  {
    id: '3',
    name: 'Teeth',
    status: 'healthy',
    date: '24 Oct 2021',
    icon: 'Teeth',
  },
  {
    id: '4',
    name: 'Bone',
    status: 'warning',
    date: '24 Oct 2021',
    icon: 'Bone',
  },
  {
    id: '5',
    name: 'Healthy Leg',
    status: 'healthy',
    date: '',
    position: {
      top: '72%',
      left: '42%',
    },
  },
];