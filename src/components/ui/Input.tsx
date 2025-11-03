import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, id, ...rest }: InputProps) {
  const inputId = id || rest.name;
  return (
    <label style={{ display: 'grid', gap: 6 }} htmlFor={inputId}>
      {label && <span style={{ fontSize: 12, color: '#374151' }}>{label}</span>}
      <input
        id={inputId}
        style={{
          padding: '8px 10px',
          border: '1px solid #e5e7eb',
          borderRadius: 6,
          outline: 'none',
          fontSize: 14,
          ...(error ? { borderColor: '#ef4444' } : null),
          ...style,
        }}
        {...rest}
      />
      {error && <span style={{ color: '#ef4444', fontSize: 12 }}>{error}</span>}
    </label>
  );
}

export default Input;


