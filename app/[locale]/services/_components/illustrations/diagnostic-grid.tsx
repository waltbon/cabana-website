/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: an objective scoring grid — most cells pass (blue), one flagged (green).
 */
interface DiagnosticGridProps {
  className?: string;
}

export function DiagnosticGrid({ className }: DiagnosticGridProps) {
  const cols = [60, 140, 220, 300];
  const rows = [50, 110, 170];
  const flagged = { col: 2, row: 1 };

  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {rows.map((y, ri) =>
        cols.map((x, ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={x - 20}
            y={y - 20}
            width={40}
            height={40}
            rx={8}
            fill={ri === flagged.row && ci === flagged.col ? "#57ff8f" : "#0048ff"}
            opacity={ri === flagged.row && ci === flagged.col ? 1 : 0.15 + (ci / cols.length) * 0.5}
          />
        )),
      )}
    </svg>
  );
}
