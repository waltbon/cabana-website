/**
 * Hand-authored SVG — Digital Product hero.
 * Concept: a cracked, patched legacy structure on the left rebuilt as a
 * clean, solid structure on the right.
 */
interface LegacyRebuildProps {
  className?: string;
}

export function LegacyRebuild({ className }: LegacyRebuildProps) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {/* legacy structure, cracked and patched */}
      <rect x={40} y={140} width={120} height={160} rx={8} fill="none" stroke="#16364d" strokeWidth={4} opacity={0.5} />
      <path
        d="M40 200 L80 210 L65 230 L100 245 L90 260"
        fill="none"
        stroke="#16364d"
        strokeWidth={3}
        opacity={0.6}
      />
      <rect x={100} y={255} width={28} height={20} rx={4} fill="#16364d" opacity={0.35} />
      <rect x={55} y={165} width={24} height={18} rx={4} fill="#16364d" opacity={0.35} />

      {/* arrow of transformation */}
      <line x1={175} y1={220} x2={225} y2={220} stroke="#0048ff" strokeWidth={5} strokeLinecap="round" />
      <path d="M212 205 L228 220 L212 235" fill="none" stroke="#0048ff" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />

      {/* rebuilt structure, solid and clean */}
      <rect x={245} y={110} width={130} height={190} rx={10} fill="#0048ff" />
      <rect x={265} y={135} width={60} height={10} rx={4} fill="#ffffff" opacity={0.85} />
      <rect x={265} y={155} width={90} height={10} rx={4} fill="#ffffff" opacity={0.55} />
      <rect x={265} y={255} width={50} height={26} rx={6} fill="#57ff8f" />
    </svg>
  );
}
