import type {Meta, StoryObj} from '@storybook/react';
import {Alert} from 'components/feedback';

const meta = {
    title: 'Feedback/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        severity: {
            control: 'select',
            options: ['error', 'warning', 'info', 'success'],
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined', 'standard'],
        },
        closable: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        severity: 'success',
        message: 'This is a success alert!',
    },
};

export const Info: Story = {
    args: {
        severity: 'info',
        message: 'This is an informational alert.',
    },
};

export const Warning: Story = {
    args: {
        severity: 'warning',
        message: 'This is a warning alert!',
    },
};

export const Error: Story = {
    args: {
        severity: 'error',
        message: 'This is an error alert!',
    },
};

export const WithTitle: Story = {
    args: {
        severity: 'info',
        title: 'Information',
        message: 'This alert has both a title and a message.',
    },
};

export const FilledVariant: Story = {
    args: {
        severity: 'success',
        variant: 'filled',
        message: 'This is a filled success alert',
    },
};

export const OutlinedVariant: Story = {
    args: {
        severity: 'warning',
        variant: 'outlined',
        message: 'This is an outlined warning alert',
    },
};

export const NotClosable: Story = {
    args: {
        severity: 'info',
        message: 'This alert cannot be closed',
        closable: false,
    },
};

export const LongMessage: Story = {
    args: {
        severity: 'warning',
        title: 'Important Notice',
        message: 'This is a longer alert message that demonstrates how alerts handle more text content. You can include detailed information that users need to read carefully.',
    },
};

