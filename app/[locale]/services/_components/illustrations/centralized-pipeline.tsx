/**
 * Hand-authored SVG — Data Engineering hero.
 * Concept: fragmented sources (CRM/ERP/spreadsheets) flowing through a
 * pipeline into a central warehouse, branching out to a predictive model.
 */
interface CentralizedPipelineProps {
  className?: string;
}

export function CentralizedPipeline({ className }: CentralizedPipelineProps) {
  const sources = [
    { x: 30, y: 80 },
    { x: 30, y: 150 },
    { x: 30, y: 220 },
    { x: 30, y: 290 },
  ];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {/* fragmented sources */}
      {sources.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y - 16} width={40} height={32} rx={6} fill="#16364d" opacity={0.5} />
          <line x1={s.x + 40} y1={s.y} x2={150} y2={185} stroke="#16364d" strokeWidth={3} opacity={0.35} />
        </g>
      ))}

      {/* pipeline funnel into the warehouse */}
      <path
        d="M150 165 L150 205 L200 195 L200 175 Z"
        fill="#0048ff"
      />

      {/* central warehouse */}
      <rect x={200} y={140} width={90} height={110} rx={12} fill="#0048ff" />
      <line x1={200} y1={170} x2={290} y2={170} stroke="#ffffff" strokeWidth={3} opacity={0.5} />
      <line x1={200} y1={200} x2={290} y2={200} stroke="#ffffff" strokeWidth={3} opacity={0.5} />
      <line x1={200} y1={230} x2={290} y2={230} stroke="#ffffff" strokeWidth={3} opacity={0.5} />

      {/* branching out to a predictive model */}
      <line x1={290} y1={195} x2={345} y2={195} stroke="#57ff8f" strokeWidth={6} strokeLinecap="round" />
      <circle cx={345} cy={195} r={22} fill="#57ff8f" />
      <path
        d="M334 200 L342 208 L358 186"
        fill="none"
        stroke="#16364d"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
