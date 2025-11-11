import type {Meta, StoryObj} from '@storybook/react';
import {Input} from 'components/ui';

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
        },
        variant: {
            control: 'select',
            options: ['outlined', 'filled', 'standard'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium'],
        },
        error: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        multiline: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Text Input',
        placeholder: 'Enter text...',
    },
};

export const WithValue: Story = {
    args: {
        label: 'Name',
        value: 'John Doe',
    },
};

export const Email: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'your@email.com',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        helperText: 'Choose a unique username',
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        type: 'email',
        value: 'invalid-email',
        error: true,
        helperText: 'Please enter a valid email address',
    },
};

export const Required: Story = {
    args: {
        label: 'Required Field',
        required: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        value: 'Cannot edit',
        disabled: true,
    },
};

export const Multiline: Story = {
    args: {
        label: 'Description',
        multiline: true,
        rows: 4,
        placeholder: 'Enter description...',
    },
};

export const Small: Story = {
    args: {
        label: 'Small Input',
        size: 'small',
    },
};

export const Filled: Story = {
    args: {
        label: 'Filled Variant',
        variant: 'filled',
    },
};

export const Standard: Story = {
    args: {
        label: 'Standard Variant',
        variant: 'standard',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width',
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};

