import type { Meta, StoryObj } from '@storybook/react';
import { ChartWrapper } from 'components/ui';

const meta: Meta<typeof ChartWrapper> = {
  title: 'Visualization/ChartWrapper',
  component: ChartWrapper,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'gray' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChartWrapper>;

const sampleData = [
  { label: 'Jan', value: 45, color: '#2563eb' },
  { label: 'Feb', value: 52, color: '#3b82f6' },
  { label: 'Mar', value: 48, color: '#60a5fa' },
  { label: 'Apr', value: 65, color: '#93c5fd' },
  { label: 'May', value: 58, color: '#2563eb' },
];

export const BarChart: Story = {
  args: {
    type: 'bar',
    title: 'Monthly Sales',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};

export const LineChart: Story = {
  args: {
    type: 'line',
    title: 'Trend Analysis',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};

export const PieChart: Story = {
  args: {
    type: 'pie',
    title: 'Market Share',
    data: sampleData,
    height: 300,
    showLegend: true,
  },
};


