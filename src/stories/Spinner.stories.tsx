import type {Meta, StoryObj} from '@storybook/react';
import {Spinner} from 'components/feedback';

const meta = {
    title: 'Feedback/Spinner',
    component: Spinner,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'range', min: 20, max: 100, step: 5},
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
        },
        thickness: {
            control: {type: 'range', min: 1, max: 10, step: 0.5},
        },
        fullScreen: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithText: Story = {
    args: {
        text: 'Loading...',
    },
};

export const Small: Story = {
    args: {
        size: 24,
        text: 'Loading',
    },
};

export const Large: Story = {
    args: {
        size: 60,
        text: 'Please wait...',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
        text: 'Processing...',
    },
};

export const Success: Story = {
    args: {
        color: 'success',
        text: 'Success loading',
    },
};

export const Error: Story = {
    args: {
        color: 'error',
        text: 'Retrying...',
    },
};

export const ThickBorder: Story = {
    args: {
        thickness: 8,
        size: 50,
    },
};

export const ThinBorder: Story = {
    args: {
        thickness: 2,
        size: 50,
    },
};

