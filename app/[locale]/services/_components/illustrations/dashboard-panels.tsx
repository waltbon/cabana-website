/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: data resolving into panels people actually read — bar + line + KPI card.
 */
interface DashboardPanelsProps {
  className?: string;
}

export function DashboardPanels({ className }: DashboardPanelsProps) {
  const bars = [40, 70, 50, 90, 60];

  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {/* bar chart panel */}
      <rect x={30} y={30} width={180} height={160} rx={10} fill="none" stroke="#0048ff" strokeWidth={4} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={50 + i * 32}
          y={170 - h}
          width={18}
          height={h}
          rx={4}
          fill={i === 3 ? "#57ff8f" : "#0048ff"}
          opacity={i === 3 ? 1 : 0.55}
        />
      ))}

      {/* KPI card panel */}
      <rect x={230} y={30} width={100} height={70} rx={10} fill="#0048ff" />
      <rect x={245} y={50} width={50} height={10} rx={4} fill="#ffffff" opacity={0.85} />
      <rect x={245} y={68} width={30} height={16} rx={4} fill="#57ff8f" />

      {/* trend line panel */}
      <rect x={230} y={115} width={100} height={75} rx={10} fill="none" stroke="#0048ff" strokeWidth={4} />
      <polyline
        points="245,175 265,150 285,160 305,130 320,140"
        fill="none"
        stroke="#57ff8f"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
