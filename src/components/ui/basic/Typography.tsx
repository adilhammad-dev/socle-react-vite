
import {
  Typography as MuiTypography,
} from '@mui/material';
import type { TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant'> {
  /** Typography variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  /** Text color */
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'success';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Text decoration */
  gutterBottom?: boolean;
  /** No wrap */
  noWrap?: boolean;
  /** Children content */
  children: React.ReactNode;
}

/**
 * Typography component for consistent text styling
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Main Heading</Typography>
 * <Typography variant="body1" color="textSecondary">
 *   Description text
 * </Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'textPrimary',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  children,
  ...props
}) => {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};


