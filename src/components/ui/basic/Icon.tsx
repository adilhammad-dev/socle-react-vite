
import type { SvgIconProps } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';

export interface IconProps extends Omit<SvgIconProps, 'name'> {
  /** Icon name from Material Icons */
  name: keyof typeof MuiIcons;
  /** Icon size */
  size?: 'small' | 'medium' | 'large';
  /** Icon color */
  color?: 'primary' | 'secondary' | 'action' | 'disabled' | 'error' | 'inherit';
}

/**
 * Icon component wrapper for Material Icons
 *
 * @example
 * ```tsx
 * <Icon name="Home" size="medium" color="primary" />
 * <Icon name="Search" size="small" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color = 'inherit',
  ...props
}) => {
  const IconComponent = MuiIcons[name] as React.ComponentType<SvgIconProps>;

  if (!IconComponent) {
    console.warn(`Icon "${String(name)}" not found`);
    return null;
  }

  const sizeMap = {
    small: { fontSize: 'small' as const },
    medium: { fontSize: 'medium' as const },
    large: { fontSize: 'large' as const },
  };

  return (
    <IconComponent
      color={color}
      {...sizeMap[size]}
      {...props}
    />
  );
};


