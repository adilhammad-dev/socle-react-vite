
import {
  Button as MuiButton,
  CircularProgress,
} from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon to display before text */
  startIcon?: React.ReactNode;
  /** Icon to display after text */
  endIcon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Children content */
  children: React.ReactNode;
}

const StyledButton = styled(MuiButton)<{ customvariant?: string }>(
  ({ theme, customvariant }) => {
    const variants = {
      primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
      secondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      },
      danger: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.error.dark,
        },
      },
    };

    return variants[customvariant as keyof typeof variants] || variants.primary;
  }
);

/**
 * Button component with multiple variants and states
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 *
 * <Button variant="outline" startIcon={<Icon />} loading>
 *   Loading...
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  startIcon,
  endIcon,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      customvariant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      startIcon={loading ? undefined : startIcon}
      endIcon={loading ? undefined : endIcon}
      onClick={onClick}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};


