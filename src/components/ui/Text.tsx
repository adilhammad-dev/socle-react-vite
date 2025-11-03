import type { HTMLAttributes, ReactNode } from 'react';

type Variant = 'title' | 'subtitle' | 'body' | 'caption' | 'code';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: Variant;
  muted?: boolean;
}

const styles: Record<Variant, React.CSSProperties> = {
  title: { fontSize: 24, fontWeight: 700, lineHeight: 1.2 },
  subtitle: { fontSize: 18, fontWeight: 600, lineHeight: 1.3 },
  body: { fontSize: 14, lineHeight: 1.6 },
  caption: { fontSize: 12, lineHeight: 1.4 },
  code: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: 13 },
};

export function Text({ children, variant = 'body', muted, style, ...rest }: TextProps) {
  return (
    <p style={{ ...styles[variant], color: muted ? '#6b7280' : undefined, margin: 0, ...style }} {...rest}>
      {children}
    </p>
  );
}

export default Text;


