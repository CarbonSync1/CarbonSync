import 'leaflet/dist/leaflet.css';
import '@/components/dashboard/dashboard-styles.css';
import DashboardApp from '@/components/DashboardApp';

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <DashboardApp />
    </div>
  );
}
