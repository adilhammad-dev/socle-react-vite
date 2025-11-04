
import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextAreaProps extends Omit<MuiTextFieldProps, 'multiline' | 'variant'> {
  /** Label */
  label?: string;
  /** Placeholder */
  placeholder?: string;
  /** Number of rows */
  rows?: number;
  /** Min rows */
  minRows?: number;
  /** Max rows */
  maxRows?: number;
  /** Error state */
  error?: boolean;
  /** Helper text */
  helperText?: string;
  /** Required */
  required?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Value */
  value?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * TextArea component for multi-line text input
 *
 * @example
 * ```tsx
 * <TextArea
 *   label="Description"
 *   placeholder="Enter description"
 *   rows={4}
 *   fullWidth
 * />
 * ```
 */
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  rows = 4,
  minRows,
  maxRows,
  error = false,
  helperText,
  required = false,
  fullWidth = true,
  ...props
}) => {
  return (
    <MuiTextField
      label={label}
      placeholder={placeholder}
      multiline
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      error={error}
      helperText={helperText}
      required={required}
      fullWidth={fullWidth}
      variant="outlined"
      inputProps={{
        'aria-invalid': error,
        'aria-required': required,
      }}
      {...props}
    />
  );
};


