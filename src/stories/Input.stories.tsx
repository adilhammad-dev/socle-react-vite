import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from 'components/ui';
import { Search } from '@mui/icons-material';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div>
        <Input
          label="Type something"
          placeholder="Enter text..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Current Value:</strong> "{value || '(empty)'}"
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    label: 'Text Input',
    placeholder: 'Enter text',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: true,
    helperText: 'This field is required',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const WithStartAdornment: Story = {
  render: () => (
    <Input
      label="Search"
      placeholder="Search..."
      startAdornment={<Search />}
    />
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Full width',
    fullWidth: true,
  },
};

