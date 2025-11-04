
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  Checkbox as MuiCheckbox,
  Radio as MuiRadio,
  RadioGroup,
  Switch as MuiSwitch,
  Slider as MuiSlider,
  Select as MuiSelect,
  MenuItem,
  InputLabel,
} from '@mui/material';

// ============ Checkbox Component ============
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  error = false,
  helperText,
  required = false,
}) => {
  return (
    <FormControl error={error} required={required}>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            inputProps={{ 'aria-label': label || 'checkbox' }}
          />
        }
        label={label || ''}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

// ============ Radio Component ============
export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  row?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  error = false,
  helperText,
  required = false,
  row = false,
}) => {
  return (
    <FormControl error={error} required={required} disabled={disabled}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup value={value} onChange={onChange} row={row}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MuiRadio />}
            label={option.label}
            disabled={option.disabled || disabled}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

// ============ Switch Component ============
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  color = 'primary',
}) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          color={color}
          inputProps={{ 'aria-label': label || 'switch' }}
        />
      }
      label={label || ''}
    />
  );
};

// ============ Slider Component ============
export interface SliderProps {
  label?: string;
  value?: number | number[];
  onChange?: (event: Event, value: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  marks?: boolean | { value: number; label?: string }[];
  disabled?: boolean;
  valueLabelDisplay?: 'auto' | 'on' | 'off';
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  disabled = false,
  valueLabelDisplay = 'auto',
}) => {
  return (
    <FormControl fullWidth>
      {label && <FormLabel sx={{ mb: 2 }}>{label}</FormLabel>}
      <MuiSlider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        marks={marks}
        disabled={disabled}
        valueLabelDisplay={valueLabelDisplay}
        aria-label={label || 'slider'}
      />
    </FormControl>
  );
};

// ============ Select Component ============
export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string | number;
  onChange?: (event: any) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value = '',
  onChange,
  placeholder,
  disabled = false,
  error = false,
  helperText,
  required = false,
  fullWidth = true,
  multiple = false,
}) => {
  // When using placeholder with label, always shrink the label to prevent overlap
  const hasValue = multiple ? (Array.isArray(value) && value.length > 0) : value !== '';
  const shouldShrink = placeholder ? true : (hasValue || undefined);

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      required={required}
      disabled={disabled}
    >
      {label && (
        <InputLabel shrink={shouldShrink}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        value={value}
        onChange={onChange}
        label={label}
        multiple={multiple}
        displayEmpty={!!placeholder}
        notched={shouldShrink}
        inputProps={{ 'aria-label': label || 'select' }}
      >
        {placeholder && value === '' && (
          <MenuItem value="" disabled>
            <em style={{ color: '#999' }}>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

/**
 * Form components examples:
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" checked={accepted} onChange={(e, checked) => setAccepted(checked)} />
 *
 * <Radio
 *   label="Choose option"
 *   options={[
 *     { label: 'Option 1', value: '1' },
 *     { label: 'Option 2', value: '2' }
 *   ]}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 *
 * <Switch label="Enable notifications" checked={enabled} onChange={(e, checked) => setEnabled(checked)} />
 *
 * <Slider label="Volume" value={volume} onChange={(e, val) => setVolume(val)} min={0} max={100} />
 *
 * <Select
 *   label="Country"
 *   options={countries}
 *   value={country}
 *   onChange={(e) => setCountry(e.target.value)}
 * />
 * ```
 */

