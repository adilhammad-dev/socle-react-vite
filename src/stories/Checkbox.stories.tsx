import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from 'components/ui';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div>
        <Checkbox
          label="Accept terms and conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Status:</strong> {checked ? '✓ Checked' : '✗ Unchecked'}
        </div>
      </div>
    );
  },
};

export const DefaultCheckbox: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const CheckedCheckbox: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const DisabledCheckbox: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    checked: true,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
    helperText: 'You must accept the terms',
  },
};

