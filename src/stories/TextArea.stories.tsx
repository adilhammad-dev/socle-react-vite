import type {Meta, StoryObj} from '@storybook/react';
import {TextArea} from 'components/forms';

const meta = {
    title: 'Forms/TextArea',
    component: TextArea,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        rows: {
            control: {type: 'range', min: 2, max: 10, step: 1},
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
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter description...',
        rows: 4,
    },
};

export const WithValue: Story = {
    args: {
        label: 'Comments',
        value: 'This is a sample comment with multiple lines.\nYou can add more text here.',
        rows: 4,
    },
};

export const Required: Story = {
    args: {
        label: 'Required Field',
        required: true,
        placeholder: 'This field is required',
        rows: 3,
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Feedback',
        helperText: 'Please provide detailed feedback',
        rows: 4,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled TextArea',
        value: 'This text area is disabled',
        disabled: true,
        rows: 3,
    },
};

export const Small: Story = {
    args: {
        label: 'Small TextArea',
        rows: 2,
        placeholder: 'Small size...',
    },
};

export const Large: Story = {
    args: {
        label: 'Large TextArea',
        rows: 8,
        placeholder: 'Large size for longer content...',
    },
};

