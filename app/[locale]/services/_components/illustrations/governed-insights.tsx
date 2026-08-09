/**
 * Hand-authored SVG — Dashboards & Analytics Interfaces hero.
 * Concept: raw metric streams flowing through a governance gate (lock) into
 * role-specific panels — each role sees only what it should.
 */
interface GovernedInsightsProps {
  className?: string;
}

export function GovernedInsights({ className }: GovernedInsightsProps) {
  const sources = [80, 130, 180, 230];

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {/* raw metric streams */}
      {sources.map((y, i) => (
        <line key={i} x1={30} y1={y} x2={170} y2={200} stroke="#16364d" strokeWidth={3} opacity={0.35} />
      ))}
      {sources.map((y, i) => (
        <circle key={i} cx={30} cy={y} r={7} fill="#0048ff" />
      ))}

      {/* governance gate */}
      <rect x={170} y={175} width={50} height={50} rx={10} fill="#0048ff" />
      <rect x={183} y={195} width={24} height={18} rx={3} fill="none" stroke="#ffffff" strokeWidth={3} />
      <path d="M188 195 v-8 a7 7 0 0 1 14 0 v8" fill="none" stroke="#ffffff" strokeWidth={3} />

      {/* role-specific panels, different sizes = different access */}
      <rect x={260} y={90} width={90} height={60} rx={8} fill="#57ff8f" />
      <rect x={260} y={170} width={70} height={45} rx={8} fill="#0048ff" opacity={0.7} />
      <rect x={260} y={235} width={50} height={35} rx={8} fill="#0048ff" opacity={0.4} />

      <line x1={220} y1={200} x2={260} y2={120} stroke="#57ff8f" strokeWidth={3} />
      <line x1={220} y1={200} x2={260} y2={192} stroke="#0048ff" strokeWidth={3} opacity={0.7} />
      <line x1={220} y1={200} x2={260} y2={252} stroke="#0048ff" strokeWidth={3} opacity={0.4} />
    </svg>
  );
}
