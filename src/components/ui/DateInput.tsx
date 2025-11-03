import type { InputHTMLAttributes } from 'react';

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export function DateInput({ label, error, style, id, ...rest }: DateInputProps) {
  const inputId = id || rest.name;
  return (
    <label style={{ display: 'grid', gap: 6 }} htmlFor={inputId}>
      {label && <span style={{ fontSize: 12, color: '#374151' }}>{label}</span>}
      <input
        type="date"
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

export default DateInput;


