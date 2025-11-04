
import { Tooltip as MuiTooltip } from '@mui/material';
import type { TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends Omit<MuiTooltipProps, 'title'> {
  /** Tooltip content */
  title: React.ReactNode;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  /** Arrow */
  arrow?: boolean;
  /** Children to wrap */
  children: React.ReactElement;
}

/**
 * Tooltip component for contextual information
 *
 * @example
 * ```tsx
 * <Tooltip title="Delete item" placement="top" arrow>
 *   <IconButton><Delete /></IconButton>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = 'top',
  arrow = false,
  children,
  ...props
}) => {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      arrow={arrow}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};


