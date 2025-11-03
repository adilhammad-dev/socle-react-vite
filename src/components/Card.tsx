import type { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function Card({ title, children, style }: CardProps) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#fff',
        ...style,
      }}
    >
      {title && (
        <h3 style={{ margin: '0 0 12px 0', fontSize: 16, fontWeight: 600, color: '#111827' }}>
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
}

export default Card;

