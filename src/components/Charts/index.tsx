import { formatCurrency, formatDate } from 'utils/helpers';

type Point = { x: string; y: number };
export interface MiniChartProps {
  data: Point[];
  title?: string;
}

export function MiniChart({ data, title }: MiniChartProps) {
  // Placeholder chart rendering
  return (
    <div style={{ border: '1px dashed #cbd5e1', borderRadius: 6, padding: 8 }}>
      {title && <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>{title}</div>}
      <div style={{ display: 'flex', gap: 6 }}>
        {data.map((p, i) => (
          <div key={i} title={`${formatDate(p.x)}: ${formatCurrency(p.y)}`}
            style={{ height: 24, width: 8, background: '#93c5fd' }} />
        ))}
      </div>
    </div>
  );
}
