import {FormControl, InputLabel, MenuItem, Select as MuiSelect, type SelectChangeEvent} from '@mui/material';
import {useState} from 'react';

export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    label?: string;
    options: SelectOption[];
    value?: string | string[];
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    size?: 'small' | 'medium';
    multiple?: boolean;
    placeholder?: string;
}

const Select = ({
                    label,
                    options,
                    value,
                    onChange,
                    fullWidth = true,
                    size = 'medium',
                    multiple = false,
                    placeholder
                }: SelectProps) => {
    const defaultValue = multiple ? [] : (options[0]?.value || '');
    const [internal, setInternal] = useState(defaultValue);
    const current = value ?? internal;

    const handleChange = (e: SelectChangeEvent<string | string[]>) => {
        const val = e.target.value;
        if (value === undefined) {
            setInternal(val as any);
        }
        onChange?.(val as string);
    };

    return (
        <FormControl fullWidth={fullWidth} size={size}>
            {label && <InputLabel>{label}</InputLabel>}
            <MuiSelect
                label={label}
                value={current as any}
                onChange={handleChange}
                multiple={multiple}
                displayEmpty={!!placeholder}
                renderValue={
                    placeholder && !current
                        ? () => <span style={{color: '#999'}}>{placeholder}</span>
                        : undefined
                }
            >
                {placeholder && !multiple && (
                    <MenuItem value="" disabled>
                        {placeholder}
                    </MenuItem>
                )}
                {options.map(opt => (
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;

