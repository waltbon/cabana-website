/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: a wireframe/prototype box validated by a user check mark.
 */
interface DiscoveryPrototypeProps {
  className?: string;
}

export function DiscoveryPrototype({ className }: DiscoveryPrototypeProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {/* wireframe frame */}
      <rect x={40} y={30} width={200} height={160} rx={10} fill="none" stroke="#0048ff" strokeWidth={4} />
      <line x1={40} y1={65} x2={240} y2={65} stroke="#0048ff" strokeWidth={4} />
      <circle cx={56} cy={47} r={5} fill="#0048ff" />
      <rect x={56} y={85} width={90} height={12} rx={4} fill="#0048ff" opacity={0.4} />
      <rect x={56} y={107} width={140} height={12} rx={4} fill="#0048ff" opacity={0.25} />
      <rect x={56} y={140} width={70} height={26} rx={6} fill="#0048ff" opacity={0.15} />

      {/* validation check */}
      <circle cx={280} cy={150} r={36} fill="#57ff8f" />
      <path
        d="M264 150 L276 162 L298 136"
        fill="none"
        stroke="#16364d"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
