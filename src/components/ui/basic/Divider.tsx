
import { Divider as MuiDivider } from '@mui/material';
import type { DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Text content */
  text?: string;
  /** Text alignment */
  textAlign?: 'left' | 'center' | 'right';
}

/**
 * Divider component for visual separation
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider text="OR" textAlign="center" />
 * <Divider orientation="vertical" />
 * ```
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  text,
  textAlign = 'center',
  ...props
}) => {
  if (text) {
    return (
      <MuiDivider
        orientation={orientation}
        textAlign={textAlign}
        {...props}
      >
        {text}
      </MuiDivider>
    );
  }

  return <MuiDivider orientation={orientation} {...props} />;
};


