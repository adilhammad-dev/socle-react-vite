
import { Badge as MuiBadge } from '@mui/material';
import type { BadgeProps as MuiBadgeProps } from '@mui/material';

export interface BadgeProps extends Omit<MuiBadgeProps, 'variant' | 'color' | 'badgeContent'> {
  /** Badge content */
  content?: React.ReactNode;
  /** Badge color */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  /** Badge variant */
  variant?: 'standard' | 'dot';
  /** Show zero */
  showZero?: boolean;
  /** Max count to display */
  max?: number;
  /** Children to wrap */
  children: React.ReactNode;
}

/**
 * Badge component for displaying notifications or status
 *
 * @example
 * ```tsx
 * <Badge content={5} color="error">
 *   <IconButton><Mail /></IconButton>
 * </Badge>
 *
 * <Badge variant="dot" color="success">
 *   <Avatar src="/profile.jpg" />
 * </Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  content,
  color = 'primary',
  variant = 'standard',
  showZero = false,
  max = 99,
  children,
  ...props
}) => {
  return (
    <MuiBadge
      badgeContent={content}
      color={color}
      variant={variant}
      showZero={showZero}
      max={max}
      {...props}
    >
      {children}
    </MuiBadge>
  );
};


