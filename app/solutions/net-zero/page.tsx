import dynamic from 'next/dynamic';

const NetZeroApp = dynamic(() => import('@/components/NetZeroApp'), { ssr: false });

export default function NetZeroPage() {
  return <NetZeroApp />;
}
