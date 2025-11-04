import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from 'components/ui';

// TextArea Stories
const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number', min: 2, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div>
        <TextArea
          label="Description"
          placeholder="Enter description..."
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
          <strong>Character Count:</strong> {value.length}
          <br />
          <strong>Word Count:</strong> {value.trim() ? value.trim().split(/\s+/).length : 0}
        </div>
      </div>
    );
  },
};

export const DefaultTextArea: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Comments',
    error: true,
    helperText: 'This field is required',
    rows: 4,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Long Text',
    placeholder: 'Type a longer message...',
    rows: 8,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    disabled: true,
    value: 'This text cannot be edited',
    rows: 4,
  },
};


