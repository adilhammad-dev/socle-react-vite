import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from 'components/ui';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState('');
    const options = [
      { label: 'Free Plan - $0/month', value: 'free' },
      { label: 'Pro Plan - $19/month', value: 'pro' },
      { label: 'Enterprise Plan - $99/month', value: 'enterprise' },
    ];
    return (
      <div>
        <Radio
          label="Choose your plan"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          options={options}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected Plan:</strong> {selected || '(none selected)'}
        </div>
      </div>
    );
  },
};

export const DefaultRadio: Story = {
  args: {
    label: 'Choose your plan',
    options: [
      { label: 'Free Plan', value: 'free' },
      { label: 'Pro Plan', value: 'pro' },
      { label: 'Enterprise Plan', value: 'enterprise' },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Select size',
    value: 'medium',
    options: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled options',
    disabled: true,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
};

