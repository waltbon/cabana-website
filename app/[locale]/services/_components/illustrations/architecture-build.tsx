/**
 * Hand-authored SVG — Application Development hero.
 * Concept: a stable foundation stacking upward into a solid structure,
 * topped by a cloud — architecture that holds weight, not a quick patch.
 */
interface ArchitectureBuildProps {
  className?: string;
}

export function ArchitectureBuild({ className }: ArchitectureBuildProps) {
  const blocks = [
    { y: 250, w: 200, opacity: 1 },
    { y: 210, w: 170, opacity: 0.85 },
    { y: 170, w: 140, opacity: 0.7 },
    { y: 130, w: 110, opacity: 0.55 },
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={200 - b.w / 2}
          y={b.y}
          width={b.w}
          height={32}
          rx={6}
          fill="#0048ff"
          opacity={b.opacity}
        />
      ))}

      {/* code bracket motif embedded in the base */}
      <text x={200} y={272} textAnchor="middle" fontSize={20} fontWeight={700} fill="#ffffff">
        {"</>"}
      </text>

      {/* cloud on top */}
      <circle cx={175} cy={95} r={26} fill="#57ff8f" />
      <circle cx={205} cy={80} r={32} fill="#57ff8f" />
      <circle cx={235} cy={98} r={24} fill="#57ff8f" />
      <rect x={165} y={95} width={90} height={28} rx={14} fill="#57ff8f" />
    </svg>
  );
}
