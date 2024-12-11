export default function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="absolute inset-0 bg-crt-lines"></div>
      <div className="absolute inset-0 bg-crt-flicker"></div>
    </div>
  )
}

