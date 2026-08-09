/**
 * Hand-authored SVG illustration — no AI image generation.
 * Deterministic, exact brand colors, flat (no shadows/gradients), scales crisply at any size.
 *
 * Visual metaphor: scattered data points converging into one resolved, ordered path.
 * Shared across service hero sections so the product line reads as one visual system.
 */

const SCATTER_POINTS = [
  { cx: 40, cy: 60, r: 5 },
  { cx: 75, cy: 40, r: 4 },
  { cx: 30, cy: 110, r: 6 },
  { cx: 90, cy: 95, r: 4 },
  { cx: 55, cy: 150, r: 5 },
  { cx: 100, cy: 150, r: 4 },
  { cx: 35, cy: 190, r: 4 },
  { cx: 80, cy: 210, r: 6 },
  { cx: 50, cy: 250, r: 4 },
  { cx: 105, cy: 240, r: 5 },
  { cx: 25, cy: 280, r: 5 },
  { cx: 70, cy: 300, r: 4 },
  { cx: 115, cy: 190, r: 4 },
  { cx: 65, cy: 330, r: 5 },
];

const GRID_COLS = [190, 225, 260, 295];
const GRID_ROWS = [130, 165, 200, 235, 270];

interface DataConvergenceProps {
  className?: string;
}

export function DataConvergence({ className }: DataConvergenceProps) {
  const gridNodes = GRID_COLS.flatMap((cx) =>
    GRID_ROWS.map((cy) => ({ cx, cy })),
  );
  const centerRow = GRID_ROWS[Math.floor(GRID_ROWS.length / 2)];
  const outputX = 340;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {/* scattered points, left */}
      {SCATTER_POINTS.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#0048ff" />
      ))}

      {/* converging lines from scatter into the grid's leftmost column */}
      {SCATTER_POINTS.filter((_, i) => i % 2 === 0).map((p, i) => (
        <line
          key={i}
          x1={p.cx}
          y1={p.cy}
          x2={GRID_COLS[0]}
          y2={centerRow}
          stroke="#16364d"
          strokeWidth={2}
          opacity={0.4}
        />
      ))}

      {/* ordered grid lattice, right */}
      {GRID_COLS.map((cx, ci) =>
        ci < GRID_COLS.length - 1
          ? GRID_ROWS.map((cy, ri) => (
              <line
                key={`h-${ci}-${ri}`}
                x1={cx}
                y1={cy}
                x2={GRID_COLS[ci + 1]}
                y2={cy}
                stroke="#0048ff"
                strokeWidth={3}
              />
            ))
          : null,
      )}
      {GRID_COLS.map((cx) =>
        GRID_ROWS.slice(0, -1).map((cy, ri) => (
          <line
            key={`v-${cx}-${ri}`}
            x1={cx}
            y1={cy}
            x2={cx}
            y2={GRID_ROWS[ri + 1]}
            stroke="#0048ff"
            strokeWidth={3}
          />
        )),
      )}
      {gridNodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={6} fill="#ffffff" stroke="#0048ff" strokeWidth={3} />
      ))}

      {/* connector from grid's rightmost column into the resolved output point */}
      <line
        x1={GRID_COLS[GRID_COLS.length - 1]}
        y1={centerRow}
        x2={outputX}
        y2={centerRow}
        stroke="#0048ff"
        strokeWidth={3}
      />

      {/* resolved output point + line */}
      <circle cx={outputX} cy={centerRow} r={9} fill="#57ff8f" />
      <line
        x1={outputX}
        y1={centerRow}
        x2={380}
        y2={centerRow}
        stroke="#57ff8f"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}
