/**
 * Hand-authored SVG illustration — no AI image generation.
 * Visual metaphor: validated design blocks assembling into a cloud-native build.
 */
interface CloudBuildProps {
  className?: string;
}

export function CloudBuild({ className }: CloudBuildProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label=""
      focusable="false"
    >
      {/* cloud shape, built from overlapping circles */}
      <circle cx={140} cy={110} r={40} fill="#0048ff" opacity={0.9} />
      <circle cx={190} cy={90} r={50} fill="#0048ff" />
      <circle cx={245} cy={115} r={38} fill="#0048ff" opacity={0.9} />
      <rect x={120} y={110} width={150} height={45} rx={22} fill="#0048ff" />

      {/* assembling blocks below */}
      <rect x={70} y={175} width={30} height={30} rx={6} fill="#16364d" opacity={0.4} />
      <rect x={110} y={175} width={30} height={30} rx={6} fill="#16364d" opacity={0.65} />
      <rect x={150} y={175} width={30} height={30} rx={6} fill="#57ff8f" />

      <line x1={100} y1={190} x2={150} y2={190} stroke="#16364d" strokeWidth={3} opacity={0.5} />
      <line x1={140} y1={190} x2={165} y2={175} stroke="#16364d" strokeWidth={3} opacity={0.5} />
    </svg>
  );
}
