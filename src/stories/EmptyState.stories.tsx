import type {Meta, StoryObj} from '@storybook/react';
import {EmptyState} from 'components/feedback';

const meta = {
    title: 'Feedback/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'No Data',
        description: 'There is nothing to display at the moment.',
    },
};

export const NoMessages: Story = {
    args: {
        title: 'No Messages',
        description: "You don't have any messages yet. Start a conversation!",
    },
};

export const WithAction: Story = {
    args: {
        title: 'No Files',
        description: 'Upload your first file to get started.',
        actionLabel: 'Upload File',
        onAction: () => alert('Upload clicked'),
    },
};

export const NoResults: Story = {
    args: {
        title: 'No Results Found',
        description: 'Try adjusting your search or filters.',
        actionLabel: 'Clear Filters',
        onAction: () => alert('Filters cleared'),
    },
};

export const NoItems: Story = {
    args: {
        title: 'Your cart is empty',
        description: 'Add items to your cart to see them here.',
        actionLabel: 'Start Shopping',
        onAction: () => alert('Navigate to shop'),
    },
};

