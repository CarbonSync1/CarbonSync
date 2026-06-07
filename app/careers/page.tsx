import dynamic from 'next/dynamic';

const CareerPage = dynamic(() => import('@/components/CareerPage'), { ssr: false });

export default function CareersPage() {
  return <CareerPage />;
}
