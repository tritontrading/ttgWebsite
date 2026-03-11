// SVG graphic for the Quantitative Finance department panel

export function QuantFinance() {
  // Generate two signal lines
  const points1: [number, number][] = []
  const points2: [number, number][] = []
  for (let i = 0; i <= 46; i++) {
    const x = i * 10
    const y1 = 130 + Math.sin(i * 0.55) * 50 + Math.sin(i * 1.1) * 20
    const y2 = 130 + Math.cos(i * 0.4) * 35 + Math.sin(i * 0.9) * 25
    points1.push([x, y1])
    points2.push([x, y2])
  }
  const str1 = points1.map(([x, y]) => `${x},${y}`).join(' ')
  const str2 = points2.map(([x, y]) => `${x},${y}`).join(' ')

  // Entry/exit markers (long = green triangle, short = red triangle)
  const signals = [
    { x: 80, y: 105, type: 'long' },
    { x: 180, y: 118, type: 'short' },
    { x: 290, y: 95, type: 'long' },
    { x: 380, y: 128, type: 'short' },
    { x: 440, y: 102, type: 'long' },
  ]

  const tools = ['Python', 'QuantConnect', 'Alpaca', 'Statistical modeling workflows']

  return (
    <div className="w-full h-full flex flex-col gap-6 p-2">
      {/* Signal chart */}
      <div className="flex-1 relative border border-[#080808]/10">
        <span className="absolute top-3 left-4 font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase">
          ALGORITHMIC SIGNAL CHART
        </span>
        <svg viewBox="0 0 470 280" className="w-full h-full" aria-hidden="true">
          {/* Grid */}
          {[60, 110, 160, 210].map((y) => (
            <line key={y} x1={10} y1={y} x2={460} y2={y}
              stroke="rgba(8,8,8,0.06)" strokeWidth={1} />
          ))}
          {/* Signal 2 (gray) */}
          <polyline points={str2} fill="none"
            stroke="rgba(8,8,8,0.18)" strokeWidth={1.5}
            strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Signal 1 (blue - main) */}
          <polyline points={str1} fill="none"
            stroke="#0066ff" strokeWidth={2}
            strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Entry/exit triangles */}
          {signals.map((s, i) => (
            <g key={i}>
              {s.type === 'long' ? (
                <polygon
                  points={`${s.x},${s.y - 10} ${s.x - 6},${s.y + 2} ${s.x + 6},${s.y + 2}`}
                  fill="#00994d"
                />
              ) : (
                <polygon
                  points={`${s.x},${s.y + 10} ${s.x - 6},${s.y - 2} ${s.x + 6},${s.y - 2}`}
                  fill="#cc2222"
                />
              )}
            </g>
          ))}
          {/* Legend */}
          <circle cx={20} cy={255} r={3} fill="#00994d" />
          <text x={28} y={259} fontSize={8.5} fontFamily="IBM Plex Mono, monospace" fill="rgba(8,8,8,0.4)">LONG</text>
          <circle cx={75} cy={255} r={3} fill="#cc2222" />
          <text x={83} y={259} fontSize={8.5} fontFamily="IBM Plex Mono, monospace" fill="rgba(8,8,8,0.4)">SHORT</text>
          <line x1={130} y1={252} x2={155} y2={252} stroke="#0066ff" strokeWidth={2} />
          <text x={160} y={259} fontSize={8.5} fontFamily="IBM Plex Mono, monospace" fill="rgba(8,8,8,0.4)">FACTOR SIGNAL</text>
        </svg>
      </div>

      {/* Tools */}
      <div className="shrink-0">
        <span className="font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase block mb-3">
          TOOLS & TECH STACK
        </span>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="font-mono text-[10px] text-[#080808] border border-[#080808]/20 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
