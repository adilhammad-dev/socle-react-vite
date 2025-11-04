import type { Meta, StoryObj } from '@storybook/react';
import { Gauge } from 'components/ui';

const meta: Meta<typeof Gauge> = {
  title: 'Visualization/Gauge',
  component: Gauge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: 'number' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: { type: 'range', min: 100, max: 400, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Gauge>;

export const Default: Story = {
  args: {
    value: 75,
    max: 100,
    label: 'Performance',
    color: 'primary',
    size: 200,
    showValue: true,
  },
};

export const Success: Story = {
  args: {
    value: 85,
    max: 100,
    label: 'Health Score',
    color: 'success',
    size: 200,
    showValue: true,
  },
};

export const Warning: Story = {
  args: {
    value: 45,
    max: 100,
    label: 'Storage Used',
    color: 'warning',
    size: 200,
    showValue: true,
  },
};

export const Error: Story = {
  args: {
    value: 20,
    max: 100,
    label: 'Battery Low',
    color: 'error',
    size: 200,
    showValue: true,
  },
};

export const Large: Story = {
  args: {
    value: 90,
    max: 100,
    label: 'Completion',
    color: 'success',
    size: 300,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 60,
    max: 100,
    label: 'Progress',
    color: 'primary',
    size: 150,
    showValue: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 750,
    max: 1000,
    label: 'Sales Target',
    color: 'info',
    size: 200,
    showValue: true,
  },
};

