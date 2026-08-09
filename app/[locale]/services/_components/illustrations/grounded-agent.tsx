/**
 * Hand-authored SVG — Custom AI Agents hero.
 * Concept: an agent node solidly grounded to a real data source, executing
 * real actions — contrasted with a faded, crossed-out disconnected cloud
 * (the generic-AI hallucination risk it avoids). No literal robot/brain.
 */
interface GroundedAgentProps {
  className?: string;
}

export function GroundedAgent({ className }: GroundedAgentProps) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="" focusable="false">
      {/* faded, disconnected cloud — generic AI without grounding */}
      <circle cx={70} cy={80} r={22} fill="#16364d" opacity={0.18} />
      <circle cx={95} cy={65} r={26} fill="#16364d" opacity={0.18} />
      <circle cx={120} cy={82} r={20} fill="#16364d" opacity={0.18} />
      <line x1={55} y1={55} x2={135} y2={110} stroke="#16364d" strokeWidth={4} opacity={0.35} strokeLinecap="round" />
      <line x1={135} y1={55} x2={55} y2={110} stroke="#16364d" strokeWidth={4} opacity={0.35} strokeLinecap="round" />

      {/* agent node, hexagonal — not a literal robot */}
      <polygon
        points="200,140 240,165 240,215 200,240 160,215 160,165"
        fill="#0048ff"
      />
      <circle cx={200} cy={190} r={14} fill="#ffffff" />

      {/* solid ground connection to real data source */}
      <rect x={175} y={280} width={50} height={40} rx={8} fill="#16364d" />
      <line x1={200} y1={240} x2={200} y2={280} stroke="#0048ff" strokeWidth={6} />

      {/* executed actions branching out, each a completed check */}
      <line x1={240} y1={175} x2={310} y2={140} stroke="#57ff8f" strokeWidth={5} strokeLinecap="round" />
      <circle cx={320} cy={135} r={16} fill="#57ff8f" />
      <path d="M312 135 L318 142 L330 125" fill="none" stroke="#16364d" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />

      <line x1={240} y1={200} x2={320} y2={200} stroke="#57ff8f" strokeWidth={5} strokeLinecap="round" />
      <circle cx={330} cy={200} r={16} fill="#57ff8f" />
      <path d="M322 200 L328 207 L340 190" fill="none" stroke="#16364d" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
