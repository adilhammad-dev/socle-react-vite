import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
}

const base = {
  fontFamily: 'inherit',
  border: '1px solid transparent',
  borderRadius: 6,
  cursor: 'pointer',
};

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: { backgroundColor: '#2563eb', color: '#fff', borderColor: '#1d4ed8' },
  secondary: { backgroundColor: '#f3f4f6', color: '#111827', borderColor: '#e5e7eb' },
  danger: { backgroundColor: '#ef4444', color: '#fff', borderColor: '#dc2626' },
  ghost: { backgroundColor: 'transparent', color: '#111827', borderColor: '#e5e7eb' },
};

const sizeStyles: Record<Size, React.CSSProperties> = {
  sm: { padding: '6px 10px', fontSize: 12 },
  md: { padding: '8px 12px', fontSize: 14 },
  lg: { padding: '10px 16px', fontSize: 16 },
};

export function Button({ children, variant = 'primary', size = 'md', block, style, ...rest }: ButtonProps) {
  return (
    <button
      style={{
        ...base,
        ...variantStyles[variant],
        ...sizeStyles[size],
        display: block ? 'block' : undefined,
        width: block ? '100%' : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;


