import type {Meta, StoryObj} from '@storybook/react';
import {Toast} from 'components/feedback';
import {useState} from 'react';
import {Button} from 'components/ui';

const meta = {
    title: 'Feedback/Toast',
    component: Toast,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        severity: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
        },
        position: {
            control: 'select',
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
        },
        duration: {
            control: {type: 'range', min: 1000, max: 10000, step: 500},
        },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastWithTrigger = (args: any) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Show Toast</Button>
            <Toast {...args} open={open} onClose={() => setOpen(false)}/>
        </>
    );
};

export const Success: Story = {
    render: (args) => <ToastWithTrigger {...args} />,
    args: {
        message: 'Operation completed successfully!',
        severity: 'success',
    },
};

export const Error: Story = {
    render: (args) => <ToastWithTrigger {...args} />,
    args: {
        message: 'An error occurred!',
        severity: 'error',
    },
};

export const Warning: Story = {
    render: (args) => <ToastWithTrigger {...args} />,
    args: {
        message: 'Warning: Please check your input',
        severity: 'warning',
    },
};

export const Info: Story = {
    render: (args) => <ToastWithTrigger {...args} />,
    args: {
        message: 'New update available',
        severity: 'info',
    },
};

export const LongDuration: Story = {
    render: (args) => <ToastWithTrigger {...args} />,
    args: {
        message: 'This toast will stay for 8 seconds',
        severity: 'info',
        duration: 8000,
    },
};

