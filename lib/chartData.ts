export interface Candle {
  open: number
  close: number
  high: number
  low: number
}

// 30 candlestick data points — normalized 0–100
export const CANDLES: Candle[] = [
  { open: 42, close: 48, high: 51, low: 39 },
  { open: 48, close: 45, high: 52, low: 43 },
  { open: 45, close: 53, high: 56, low: 44 },
  { open: 53, close: 50, high: 57, low: 48 },
  { open: 50, close: 58, high: 61, low: 49 },
  { open: 58, close: 54, high: 62, low: 52 },
  { open: 54, close: 62, high: 65, low: 53 },
  { open: 62, close: 59, high: 66, low: 57 },
  { open: 59, close: 67, high: 70, low: 58 },
  { open: 67, close: 63, high: 71, low: 61 },
  { open: 63, close: 71, high: 74, low: 62 },
  { open: 71, close: 68, high: 75, low: 66 },
  { open: 68, close: 76, high: 79, low: 67 },
  { open: 76, close: 72, high: 80, low: 70 },
  { open: 72, close: 65, high: 76, low: 63 },
  { open: 65, close: 60, high: 68, low: 58 },
  { open: 60, close: 68, high: 71, low: 59 },
  { open: 68, close: 75, high: 78, low: 67 },
  { open: 75, close: 71, high: 79, low: 69 },
  { open: 71, close: 79, high: 82, low: 70 },
  { open: 79, close: 76, high: 83, low: 74 },
  { open: 76, close: 84, high: 87, low: 75 },
  { open: 84, close: 80, high: 88, low: 78 },
  { open: 80, close: 88, high: 91, low: 79 },
  { open: 88, close: 85, high: 92, low: 83 },
  { open: 85, close: 78, high: 89, low: 76 },
  { open: 78, close: 86, high: 89, low: 77 },
  { open: 86, close: 83, high: 90, low: 81 },
  { open: 83, close: 91, high: 94, low: 82 },
  { open: 91, close: 88, high: 95, low: 86 },
]

export interface EquityPoint {
  year: number
  value: number // normalized 0–100
  label?: string
}

// Equity curve 2019–2025 with annotations
export const EQUITY_CURVE: EquityPoint[] = [
  { year: 2019, value: 10 },
  { year: 2019.25, value: 18 },
  { year: 2019.5, value: 24 },
  { year: 2019.75, value: 22 },
  { year: 2020, value: 28, label: 'COVID Crash' },
  { year: 2020.25, value: 8 },
  { year: 2020.5, value: 22, label: 'Recovery' },
  { year: 2020.75, value: 38 },
  { year: 2021, value: 44 },
  { year: 2021.25, value: 52 },
  { year: 2021.5, value: 58, label: 'Bull Run' },
  { year: 2021.75, value: 62 },
  { year: 2022, value: 55, label: 'Rate Hikes' },
  { year: 2022.25, value: 44 },
  { year: 2022.5, value: 40 },
  { year: 2022.75, value: 48 },
  { year: 2023, value: 54 },
  { year: 2023.25, value: 61 },
  { year: 2023.5, value: 68, label: 'AI Surge' },
  { year: 2023.75, value: 72 },
  { year: 2024, value: 76 },
  { year: 2024.25, value: 80 },
  { year: 2024.5, value: 85 },
  { year: 2024.75, value: 88 },
  { year: 2025, value: 92, label: '+840% Total' },
]
