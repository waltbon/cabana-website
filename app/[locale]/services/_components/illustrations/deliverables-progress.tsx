/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: raw findings maturing into an executable plan —
 * three stacked bars going from sparse/dashed to fully solid, the final one highlighted.
 */
interface DeliverablesProgressProps {
  className?: string;
}

export function DeliverablesProgress({ className }: DeliverablesProgressProps) {
  const bars = [
    { y: 60, width: 140, opacity: 0.35 },
    { y: 160, width: 190, opacity: 0.65 },
    { y: 260, width: 240, opacity: 1 },
  ];

  return (
    <svg
      viewBox="0 0 320 400"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {bars.map((bar, i) => {
        const isLast = i === bars.length - 1;
        return (
          <g key={i}>
            <rect
              x={20}
              y={bar.y}
              width={bar.width}
              height={36}
              rx={8}
              fill={isLast ? "#57ff8f" : "#0048ff"}
              opacity={bar.opacity}
            />
            <circle
              cx={20 + bar.width + 20}
              cy={bar.y + 18}
              r={9}
              fill={isLast ? "#57ff8f" : "#16364d"}
              opacity={isLast ? 1 : bar.opacity}
            />
          </g>
        );
      })}
    </svg>
  );
}
