
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Modal as MuiModal,
  Alert as MuiAlert,
  AlertTitle,
  Snackbar as MuiSnackbar,
  LinearProgress,
  CircularProgress,
  Skeleton as MuiSkeleton,
  Box,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import { Close } from '@mui/icons-material';

// ============ Modal Component ============
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  maxWidth = 'md',
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          maxWidth: maxWidth,
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          p: 3,
          borderRadius: 2,
        }}
      >
        {children}
      </Paper>
    </MuiModal>
  );
};

// ============ Dialog Component ============
export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  fullWidth = true,
}) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="dialog-title"
    >
      {title && (
        <DialogTitle id="dialog-title">
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
};

// ============ Alert Component ============
export interface AlertProps {
  severity?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  variant?: 'standard' | 'filled' | 'outlined';
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  severity = 'info',
  title,
  children,
  onClose,
  variant = 'standard',
  icon,
}) => {
  return (
    <MuiAlert
      severity={severity}
      onClose={onClose}
      variant={variant}
      icon={icon}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
};

// ============ Toast/Snackbar Component ============
export interface ToastProps {
  open: boolean;
  message: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
  autoHideDuration?: number;
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

export const Toast: React.FC<ToastProps> = ({
  open,
  message,
  severity = 'info',
  onClose,
  autoHideDuration = 6000,
  position = { vertical: 'bottom', horizontal: 'left' },
}) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={position}
    >
      <MuiAlert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export const Snackbar = Toast;

// ============ ProgressBar Component ============
export interface ProgressBarProps {
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  variant = 'determinate',
  color = 'primary',
  showLabel = false,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant={variant}
        value={value}
        color={color}
      />
      {showLabel && variant === 'determinate' && (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          {`${Math.round(value)}%`}
        </Typography>
      )}
    </Box>
  );
};

// ============ Spinner Component ============
export interface SpinnerProps {
  size?: number | 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info' | 'inherit';
  centered?: boolean;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = 'primary',
  centered = false,
  label,
}) => {
  const sizeMap: Record<string, number> = {
    small: 24,
    medium: 40,
    large: 56,
  };

  const actualSize = typeof size === 'number' ? size : sizeMap[size];

  const spinner = (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgress size={actualSize} color={color} />
      {label && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {label}
        </Typography>
      )}
    </Box>
  );

  if (centered) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 200,
        }}
      >
        {spinner}
      </Box>
    );
  }

  return spinner;
};

// ============ Skeleton Component ============
export interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | false;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  count = 1,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <MuiSkeleton
          key={index}
          variant={variant}
          width={width}
          height={height}
          animation={animation}
          sx={{ mb: count > 1 ? 1 : 0 }}
        />
      ))}
    </>
  );
};

// ============ EmptyState Component ============
export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 300,
        textAlign: 'center',
        p: 3,
      }}
    >
      {icon && (
        <Box sx={{ mb: 2, opacity: 0.5, fontSize: 64 }}>
          {icon}
        </Box>
      )}
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      {action}
    </Box>
  );
};

/**
 * Feedback components examples:
 *
 * @example
 * ```tsx
 * <Modal open={open} onClose={() => setOpen(false)}>
 *   <Typography variant="h6">Modal Content</Typography>
 * </Modal>
 *
 * <Dialog
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="Confirm Action"
 *   actions={<Button onClick={() => setOpen(false)}>OK</Button>}
 * >
 *   Are you sure?
 * </Dialog>
 *
 * <Alert severity="success" title="Success">
 *   Operation completed successfully!
 * </Alert>
 *
 * <Toast
 *   open={showToast}
 *   message="Item added to cart"
 *   severity="success"
 *   onClose={() => setShowToast(false)}
 * />
 *
 * <ProgressBar value={75} showLabel />
 * <Spinner size="large" label="Loading..." centered />
 * <Skeleton variant="rectangular" width={210} height={118} />
 *
 * <EmptyState
 *   icon={<Inbox />}
 *   title="No items found"
 *   description="Start by adding your first item"
 *   action={<Button>Add Item</Button>}
 * />
 * ```
 */

