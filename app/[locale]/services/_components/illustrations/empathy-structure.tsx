/**
 * Hand-authored SVG — Product Design & Discovery hero.
 * Concept: a research lens over scattered user signals, resolving into an
 * organized wireframe structure.
 */
interface EmpathyStructureProps {
  className?: string;
}

export function EmpathyStructure({ className }: EmpathyStructureProps) {
  const users = [
    { cx: 60, cy: 90 },
    { cx: 100, cy: 60 },
    { cx: 50, cy: 150 },
    { cx: 110, cy: 180 },
    { cx: 70, cy: 230 },
    { cx: 120, cy: 270 },
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {/* scattered user signals */}
      {users.map((u, i) => (
        <circle key={i} cx={u.cx} cy={u.cy} r={9} fill="#0048ff" opacity={0.7} />
      ))}

      {/* research lens */}
      <circle cx={90} cy={160} r={70} fill="none" stroke="#16364d" strokeWidth={5} opacity={0.5} />
      <line x1={138} y1={208} x2={165} y2={235} stroke="#16364d" strokeWidth={7} strokeLinecap="round" opacity={0.5} />

      {/* resolving into a structured wireframe */}
      <rect x={220} y={90} width={150} height={190} rx={10} fill="none" stroke="#0048ff" strokeWidth={4} />
      <line x1={220} y1={125} x2={370} y2={125} stroke="#0048ff" strokeWidth={4} />
      <circle cx={236} cy={107} r={4} fill="#0048ff" />
      <rect x={236} y={145} width={100} height={12} rx={4} fill="#0048ff" opacity={0.4} />
      <rect x={236} y={170} width={70} height={12} rx={4} fill="#0048ff" opacity={0.25} />
      <rect x={236} y={205} width={60} height={24} rx={6} fill="#57ff8f" />
    </svg>
  );
}
