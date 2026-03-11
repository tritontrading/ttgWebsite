export function AdvisoryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-[-8%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(8,8,8,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8,8,8,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
