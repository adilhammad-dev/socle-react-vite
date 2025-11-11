import type {Meta, StoryObj} from '@storybook/react';
import {StatsCard} from 'components/data-display';

const meta = {
    title: 'Data Display/StatsCard',
    component: StatsCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Users: Story = {
    args: {
        label: 'Total Users',
        value: '1,234',
        color: '#4caf50',
    },
};

export const Revenue: Story = {
    args: {
        label: 'Revenue',
        value: '$45.2K',
        sublabel: '+12% from last month',
        color: '#2196f3',
    },
};

export const Orders: Story = {
    args: {
        label: 'Orders',
        value: '856',
        sublabel: 'This month',
        color: '#ff9800',
    },
};

export const ActiveNow: Story = {
    args: {
        label: 'Active Now',
        value: '42',
        color: '#f44336',
    },
};

export const WithPercentage: Story = {
    args: {
        label: 'Conversion Rate',
        value: '23.5%',
        sublabel: '+5.2% from last week',
        color: '#9c27b0',
    },
};

export const LargeNumber: Story = {
    args: {
        label: 'Total Views',
        value: '1,234,567',
        sublabel: 'All time',
        color: '#00bcd4',
    },
};

