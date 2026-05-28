export type MetricsData = {
  label: string;
  value: string;
  unit: string;
  comparison: string;
  status: 'Good' | 'Warning' | 'Stable' | 'Critical';
  trend: number[];
  target: string;
  progress: number;
};

export type PerformanceData = {
  month: string;
  retail: number;
  agriculture: number;
  online: number;
  isPredicted?: boolean;
};

export type CategoryData = {
  name: string;
  value: number;
  color: string;
};

export type Activity = {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  type: 'order' | 'harvest' | 'alert' | 'system';
};

export type Recommendation = {
  id: string;
  title: string;
  category: string;
  impact: 'High' | 'Medium' | 'Low';
  isActionable: boolean;
};

export type Task = {
  id: string;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
};
