// SVG graphic for the Asset Management department panel

export function AssetManagement() {
  // Stylized equity line + sector bars
  const linePoints = [
    [0, 260], [30, 240], [60, 255], [90, 220], [120, 200], [150, 215],
    [180, 185], [210, 165], [240, 175], [270, 150], [300, 130], [330, 145],
    [360, 115], [390, 95], [420, 80], [460, 60],
  ]
  const pointStr = linePoints.map(([x, y]) => `${x},${y}`).join(' ')

  const sectors = [
    { label: 'Technology', pct: 32 },
    { label: 'Finance', pct: 18 },
    { label: 'Healthcare', pct: 14 },
    { label: 'Industrials', pct: 14 },
    { label: 'Energy & Defense', pct: 13 },
    { label: 'Commodities', pct: 9 },
  ]

  return (
    <div className="w-full h-full flex flex-col gap-6 p-2">
      {/* Chart */}
      <div className="flex-1 relative border border-[#080808]/10">
        <span className="absolute top-3 left-4 font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase">
          PORTFOLIO PERFORMANCE
        </span>
        <svg viewBox="0 0 480 300" className="w-full h-full" aria-hidden="true">
          {/* Grid */}
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1={10} y1={y} x2={470} y2={y}
              stroke="rgba(8,8,8,0.06)" strokeWidth={1} />
          ))}
          {/* Benchmark (gray) */}
          <polyline
            points="0,260 80,250 160,235 240,220 320,205 400,190 460,178"
            fill="none" stroke="rgba(8,8,8,0.15)" strokeWidth={1.5}
            strokeDasharray="4,3"
          />
          {/* Portfolio line (blue) */}
          <polyline
            points={pointStr}
            fill="none" stroke="#0066ff" strokeWidth={2.5}
            strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Endpoint dot */}
          <circle cx={460} cy={60} r={4} fill="#0066ff" />
          <text x={468} y={64} fontSize={9} fontFamily="IBM Plex Mono, monospace"
            fill="#0066ff">+↑</text>
          {/* Year labels */}
          {['2020','2021','2022','2023','2024'].map((yr, i) => (
            <text key={yr} x={80 + i * 85} y={295} fontSize={9}
              fontFamily="IBM Plex Mono, monospace" fill="rgba(8,8,8,0.3)"
              textAnchor="middle">{yr}</text>
          ))}
        </svg>
      </div>

      {/* Sector bars */}
      <div className="shrink-0 space-y-2 px-1">
        <span className="font-mono text-[10px] text-[#080808]/40 tracking-widest uppercase block mb-3">
          SECTOR ALLOCATION
        </span>
        {sectors.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[#080808]/50 w-32 shrink-0">{s.label}</span>
            <div className="flex-1 h-1.5 bg-[#080808]/6">
              <div
                className="h-full bg-[#080808]"
                style={{ width: `${s.pct * 3}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-[#080808]/50 w-8 text-right">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
