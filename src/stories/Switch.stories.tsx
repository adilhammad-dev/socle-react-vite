import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from 'components/ui';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div>
        <Switch
          label="Enable notifications"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Status:</strong> {enabled ? '🟢 ON' : '⚫ OFF'}
        </div>
      </div>
    );
  },
};

export const DefaultSwitch: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const CheckedSwitch: Story = {
  args: {
    label: 'Dark mode',
    checked: true,
  },
};

export const DisabledSwitch: Story = {
  args: {
    label: 'Disabled switch',
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

export const WithHelperText: Story = {
  args: {
    label: 'Auto-save',
    helperText: 'Automatically save your changes',
  },
};

