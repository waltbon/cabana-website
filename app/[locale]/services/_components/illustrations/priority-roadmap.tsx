/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: a branching roadmap of use cases, one path prioritized (green).
 */
interface PriorityRoadmapProps {
  className?: string;
}

export function PriorityRoadmap({ className }: PriorityRoadmapProps) {
  const branches = [
    { y: 40, color: "#16364d", opacity: 0.35 },
    { y: 110, color: "#57ff8f", opacity: 1 },
    { y: 180, color: "#16364d", opacity: 0.35 },
  ];

  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      <circle cx={40} cy={110} r={10} fill="#0048ff" />
      {branches.map((b, i) => (
        <g key={i}>
          <line x1={40} y1={110} x2={140} y2={b.y} stroke={b.color} strokeWidth={4} opacity={b.opacity} />
          <circle cx={140} cy={b.y} r={9} fill={b.color} opacity={b.opacity} />
          {b.y === 110 && (
            <>
              <line x1={140} y1={110} x2={260} y2={110} stroke="#57ff8f" strokeWidth={4} />
              <circle cx={260} cy={110} r={9} fill="#57ff8f" />
              <line x1={260} y1={110} x2={330} y2={110} stroke="#57ff8f" strokeWidth={4} strokeLinecap="round" />
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
