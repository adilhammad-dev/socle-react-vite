import type {Meta, StoryObj} from '@storybook/react';
import {useEffect, useState} from 'react';
import {Button, Input, Modal} from 'components/ui';
import {Stack, Typography} from '@mui/material';

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        open: {control: 'boolean'}, // add open control
        maxWidth: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        fullWidth: {
            control: 'boolean',
        },
        showCloseButton: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithTrigger = (args: React.ComponentProps<typeof Modal>) => {
    const [open, setOpen] = useState(args.open ?? false);

    // Sync with Storybook control
    useEffect(() => {
        setOpen(args.open ?? false);
    }, [args.open]);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                {...args}
                open={open}
                onClose={() => {
                    setOpen(false);
                    args.onClose?.();
                }}
            />
        </>
    );
};

export const Default: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        open: false, // default closed
        title: 'Modal Title',
        children: <Typography>This is the modal content</Typography>,
    },
};

export const WithActions: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        title: 'Confirm Action',
        children: <Typography>Are you sure you want to proceed?</Typography>,
        actions: (
            <>
                <Button variant="outlined">Cancel</Button>
                <Button>Confirm</Button>
            </>
        ),
    },
};

export const WithForm: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        title: 'User Information',
        children: (
            <Stack spacing={2}>
                <Input label="Name" required/>
                <Input label="Email" type="email" required/>
                <Input label="Phone" type="tel"/>
            </Stack>
        ),
        actions: (
            <>
                <Button variant="outlined">Cancel</Button>
                <Button>Submit</Button>
            </>
        ),
    },
};

export const Small: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        title: 'Small Modal',
        maxWidth: 'xs',
        children: <Typography>This is a small modal</Typography>,
    },
};

export const Large: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        title: 'Large Modal',
        maxWidth: 'lg',
        children: (
            <Typography>
                This is a large modal with more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        ),
    },
};

export const NoCloseButton: Story = {
    render: (args) => <ModalWithTrigger {...args} />,
    args: {
        title: 'No Close Button',
        showCloseButton: false,
        children: <Typography>This modal has no close button in the header</Typography>,
        actions: <Button>Close</Button>,
    },
};
