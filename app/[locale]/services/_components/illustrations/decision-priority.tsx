/**
 * Hand-authored SVG — Data Analytics Use Case (DUC) hero.
 * Concept: a single question branching into several possible paths of
 * varying weight, one clearly prioritized (thick, green) as the quick win.
 */
interface DecisionPriorityProps {
  className?: string;
}

export function DecisionPriority({ className }: DecisionPriorityProps) {
  const branches = [
    { y: 100, weight: 3, color: "#16364d", opacity: 0.3 },
    { y: 160, weight: 3, color: "#16364d", opacity: 0.45 },
    { y: 220, weight: 8, color: "#57ff8f", opacity: 1 },
    { y: 280, weight: 3, color: "#16364d", opacity: 0.3 },
    { y: 330, weight: 3, color: "#16364d", opacity: 0.45 },
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      <circle cx={60} cy={220} r={14} fill="#0048ff" />
      <text
        x={60}
        y={225}
        textAnchor="middle"
        fontSize={16}
        fontWeight={700}
        fill="#ffffff"
      >
        ?
      </text>

      {branches.map((b, i) => (
        <g key={i}>
          <line x1={60} y1={220} x2={230} y2={b.y} stroke={b.color} strokeWidth={b.weight} opacity={b.opacity} />
          <circle cx={230} cy={b.y} r={b.weight + 3} fill={b.color} opacity={b.opacity} />
        </g>
      ))}

      {/* the prioritized path continues on to execution */}
      <line x1={230} y1={220} x2={340} y2={220} stroke="#57ff8f" strokeWidth={8} strokeLinecap="round" />
      <circle cx={340} cy={220} r={12} fill="#57ff8f" />
    </svg>
  );
}
