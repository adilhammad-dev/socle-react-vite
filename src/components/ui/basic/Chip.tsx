
import { Chip as MuiChip } from '@mui/material';
import type { ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends Omit<MuiChipProps, 'variant' | 'color'> {
  /** Chip label */
  label: string;
  /** Chip color */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'default';
  /** Chip variant */
  variant?: 'filled' | 'outlined';
  /** Size */
  size?: 'small' | 'medium';
  /** Icon */
  icon?: React.ReactElement;
  /** Delete icon */
  onDelete?: () => void;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Chip component for tags, filters, and selections
 *
 * @example
 * ```tsx
 * <Chip label="Active" color="success" />
 * <Chip label="Tag" variant="outlined" onDelete={() => {}} />
 * <Chip label="Clickable" onClick={() => alert('Clicked')} />
 * ```
 */
export const Chip: React.FC<ChipProps> = ({
  label,
  color = 'default',
  variant = 'filled',
  size = 'medium',
  icon,
  onDelete,
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      size={size}
      icon={icon}
      onDelete={onDelete}
      onClick={onClick}
      disabled={disabled}
      {...props}
    />
  );
};


