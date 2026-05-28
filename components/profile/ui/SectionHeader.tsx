export const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold font-headline text-on-surface">{title}</h2>
    <p className="text-on-surface-variant text-sm mt-1">{subtitle}</p>
  </div>
);
