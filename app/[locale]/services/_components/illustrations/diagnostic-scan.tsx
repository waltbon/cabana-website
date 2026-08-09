/**
 * Hand-authored SVG — Data Health Check hero.
 * Concept: a diagnostic scan line sweeping across stacked data layers,
 * revealing a hidden crack underneath a clean-looking surface.
 */
interface DiagnosticScanProps {
  className?: string;
}

export function DiagnosticScan({ className }: DiagnosticScanProps) {
  const layers = [
    { y: 90, w: 260 },
    { y: 150, w: 260 },
    { y: 210, w: 260 },
    { y: 270, w: 260 },
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {layers.map((l, i) => (
        <rect key={i} x={70} y={l.y} width={l.w} height={36} rx={8} fill="#0048ff" opacity={0.18 + i * 0.14} />
      ))}

      {/* crack in the third layer, hidden under the surface */}
      <path
        d="M150 210 L170 228 L155 240 L185 246"
        fill="none"
        stroke="#16364d"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* scan line sweeping across, revealing it */}
      <line x1={330} y1={70} x2={330} y2={310} stroke="#57ff8f" strokeWidth={6} strokeLinecap="round" />
      <circle cx={330} cy={70} r={10} fill="#57ff8f" />
      <circle cx={330} cy={310} r={10} fill="#57ff8f" />

      {/* flagged result marker */}
      <circle cx={185} cy={246} r={10} fill="#57ff8f" />
    </svg>
  );
}
