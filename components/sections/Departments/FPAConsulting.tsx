// SVG graphic for the FP&A department panel

export function FPAConsulting() {
  const bars = [
    { label: 'Revenue', value: 84, color: '#080808' },
    { label: 'COGS', value: -32, color: '#080808' },
    { label: 'Gross Profit', value: 52, color: '#0066ff' },
    { label: 'OpEx', value: -22, color: '#080808' },
    { label: 'EBITDA', value: 30, color: '#00994d' },
  ]

  const roles = [
    { title: 'Engagement Lead', note: 'Project & client relationship' },
    { title: 'Senior Consultant', note: 'Analysis & coordination' },
    { title: 'Consultant', note: 'Research & insights' },
    { title: 'Analyst', note: 'Data gathering & analysis' },
  ]

  return (
    <div className="w-full h-full flex flex-col gap-6 p-2">
      {/* Waterfall chart */}
      <div className="flex-1 relative border border-[#080808]/10">
        <span className="absolute top-3 left-4 font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase">
          FINANCIAL MODEL — WATERFALL
        </span>
        <svg viewBox="0 0 480 280" className="w-full h-full" aria-hidden="true">
          {/* Grid */}
          {[70, 120, 170, 220].map((y) => (
            <line key={y} x1={60} y1={y} x2={460} y2={y}
              stroke="rgba(8,8,8,0.06)" strokeWidth={1} />
          ))}
          {/* Zero line */}
          <line x1={60} y1={170} x2={460} y2={170}
            stroke="rgba(8,8,8,0.15)" strokeWidth={1} />

          {/* Bars */}
          {bars.map((b, i) => {
            const x = 70 + i * 78
            const barH = Math.abs(b.value) * 1.3
            const y = b.value >= 0 ? 170 - barH : 170
            return (
              <g key={b.label}>
                <rect x={x} y={y} width={50} height={barH}
                  fill={b.color} fillOpacity={b.value < 0 ? 0.15 : 0.9}
                  stroke={b.color} strokeWidth={1}
                />
                <text x={x + 25} y={265} fontSize={8.5}
                  fontFamily="IBM Plex Mono, monospace"
                  fill="rgba(8,8,8,0.45)" textAnchor="middle">
                  {b.label}
                </text>
                <text x={x + 25} y={y - 5} fontSize={9}
                  fontFamily="IBM Plex Mono, monospace"
                  fill={b.color} textAnchor="middle">
                  {b.value > 0 ? '+' : ''}{b.value}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Project team structure */}
      <div className="shrink-0 border border-[#080808]/10 divide-y divide-[#080808]/6">
        <span className="font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase block px-4 py-2">
          PROJECT STRUCTURE
        </span>
        {roles.map((r, i) => (
          <div key={r.title} className="flex items-center justify-between px-4 py-2">
            <span className="font-mono text-[10px] text-[#080808]/30 mr-3">0{i+1}</span>
            <span className="font-mono text-[11px] text-[#080808] font-medium flex-1">{r.title}</span>
            <span className="font-mono text-[10px] text-[#080808]/40">{r.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
