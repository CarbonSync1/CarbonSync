import { MetricsData, PerformanceData, CategoryData, Activity, Recommendation, Task } from './types';

export const METRICS: MetricsData[] = [
  {
    label: 'Total Sales',
    value: '124,590',
    unit: 'USD',
    comparison: 'vs 112,200 last month',
    status: 'Good',
    trend: [60, 75, 65, 90, 80, 105, 95],
    target: '150k',
    progress: 83,
  },
  {
    label: 'Active Batches',
    value: '842',
    unit: 'UNITS',
    comparison: 'vs 710 last month',
    status: 'Stable',
    trend: [40, 50, 45, 60, 75, 100, 105],
    target: '1.2k',
    progress: 70,
  },
  {
    label: 'Pending Requests',
    value: '12',
    unit: 'ALERTS',
    comparison: 'vs 8 yesterday',
    status: 'Warning',
    trend: [10, 12, 8, 15, 13, 10, 12],
    target: '0',
    progress: 12,
  },
  {
    label: 'Revenue Growth',
    value: '24.8',
    unit: '%',
    comparison: 'vs 18.5% last month',
    status: 'Good',
    trend: [15, 18, 20, 22, 21, 24, 25],
    target: '30%',
    progress: 82,
  },
];

export const PERFORMANCE_DATA: PerformanceData[] = [
  { month: 'JAN', retail: 4200, agriculture: 5800, online: 8300 },
  { month: 'FEB', retail: 4500, agriculture: 6000, online: 8500 },
  { month: 'MAR', retail: 4000, agriculture: 5500, online: 8000 },
  { month: 'APR', retail: 3800, agriculture: 5200, online: 7800 },
  { month: 'MAY', retail: 4400, agriculture: 5900, online: 8800 },
  { month: 'JUN', retail: 4600, agriculture: 6500, online: 9200 },
  { month: 'JUL (P)', retail: 5200, agriculture: 7200, online: 10500, isPredicted: true },
];

export const CATEGORIES: CategoryData[] = [
  { name: 'Yield Optimization', value: 45, color: '#00e5ff' }, // Cyan
  { name: 'Carbon Sequestration', value: 25, color: '#39ff14' }, // Neon Green
  { name: 'Retail Distribution', value: 20, color: '#00b0ff' }, // Blue
  { name: 'Waste Reduction', value: 10, color: '#00ff9d' }, // Cyan-Green
  { name: 'Others', value: 5, color: '#94a3b8' },
];


export const ACTIVITIES: Activity[] = [
  { id: '1', user: 'Batch #482', action: 'completed harvesting phase', timestamp: '14 mins ago', type: 'harvest' },
  { id: '2', user: 'Sensor A-12', action: 'detected low soil moisture', timestamp: '2 hours ago', type: 'alert' },
  { id: '3', user: 'Order #9281', action: 'processed for distribution', timestamp: '5 hours ago', type: 'order' },
  { id: '4', user: 'System', action: 'updated predictive yield model', timestamp: 'Yesterday', type: 'system' },
];

export const RECOMMENDATIONS: Recommendation[] = [
  { id: '1', title: 'Optimize irrigation schedule for Sector 7.', category: 'Water Mgmt', impact: 'High', isActionable: true },
  { id: '2', title: 'Increase distribution to East Coast retail hubs.', category: 'Logistics', impact: 'Medium', isActionable: true },
  { id: '3', title: 'Prepare for early harvest in Corn Field B.', category: 'Harvest', impact: 'High', isActionable: true },
];

export const TASKS: Task[] = [
  { id: 'T-101', title: 'Quality Audit - Batch #480', status: 'approved', date: '22 Apr' },
  { id: 'T-102', title: 'Supply Chain Review', status: 'pending', date: '23 Apr' },
  { id: 'T-103', title: 'Sensor Maintenance', status: 'rejected', date: '21 Apr' },
];

