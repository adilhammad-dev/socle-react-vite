import type {Meta, StoryObj} from '@storybook/react';
import {Button} from 'components/ui';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'contained',
        color: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'contained',
        color: 'secondary',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined Button',
        variant: 'outlined',
    },
};

export const Text: Story = {
    args: {
        children: 'Text Button',
        variant: 'text',
    },
};

export const WithStartIcon: Story = {
    args: {
        children: 'Home',
        startIcon: <HomeIcon/>,
    },
};

export const WithEndIcon: Story = {
    args: {
        children: 'Send',
        endIcon: <SendIcon/>,
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'large',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        color: 'success',
    },
};

export const Error: Story = {
    args: {
        children: 'Delete',
        color: 'error',
        startIcon: <DeleteIcon/>,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};

