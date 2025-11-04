import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from 'components/ui';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const options = [
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' },
      { label: 'France', value: 'fr' },
    ];
    const selectedLabel = options.find(opt => opt.value === value)?.label || '(none)';

    return (
      <div>
        <Select
          label="Country"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={options}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected Value:</strong> {value || '(none)'}
          <br />
          <strong>Selected Label:</strong> {selectedLabel}
        </div>
      </div>
    );
  },
};

export const WithPreselected: Story = {
  render: () => {
    const [value, setValue] = useState('ca');
    return (
      <div>
        <Select
          label="Country (Preselected)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Germany', value: 'de' },
            { label: 'France', value: 'fr' },
          ]}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected:</strong> {value}
        </div>
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ minWidth: '300px' }}>
        <Select
          label="Select an option"
          placeholder="Choose..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ]}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected:</strong> {value || '(none - showing placeholder)'}
          <br />
          <small style={{ color: '#666' }}>
            {value ? 'Label is now fixed above the field ✓' : 'Placeholder visible without label conflict ✓'}
          </small>
        </div>
      </div>
    );
  },
};

export const PlaceholderOnly: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ minWidth: '300px' }}>
        <Select
          placeholder="Select a fruit..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { label: 'Apple 🍎', value: 'apple' },
            { label: 'Banana 🍌', value: 'banana' },
            { label: 'Orange 🍊', value: 'orange' },
            { label: 'Grape 🍇', value: 'grape' },
          ]}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected:</strong> {value || '(none)'}
          <br />
          <small style={{ color: '#666' }}>
            No label - placeholder only ✓
          </small>
        </div>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Required Field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!value}
        helperText={!value ? 'This field is required' : ''}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Select
      label="Disabled Select"
      disabled={true}
      value="1"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
    />
  ),
};

export const MultipleSelect: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return (
      <div>
        <Select
          label="Select Multiple Countries"
          multiple={true}
          value={values as any}
          onChange={(e) => setValues(e.target.value)}
          options={[
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Germany', value: 'de' },
            { label: 'France', value: 'fr' },
          ]}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Selected ({values.length}):</strong> {values.join(', ') || '(none)'}
        </div>
      </div>
    );
  },
};

