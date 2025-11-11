import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from 'components/forms';

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Checkbox Label',
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked Checkbox',
        defaultChecked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Checkbox',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled Checked',
        defaultChecked: true,
        disabled: true,
    },
};

export const Required: Story = {
    args: {
        label: 'Required Checkbox *',
        required: true,
    },
};

export const NoLabel: Story = {
    args: {},
};
