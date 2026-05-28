'use client';

export default function ParticleField() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}
