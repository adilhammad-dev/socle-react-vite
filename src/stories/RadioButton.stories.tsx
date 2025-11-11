import type {Meta, StoryObj} from '@storybook/react';
import {RadioButton} from 'components/forms';

const meta = {
    title: 'Forms/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Choose an option',
        options: [
            {label: 'Option 1', value: 'option1'},
            {label: 'Option 2', value: 'option2'},
            {label: 'Option 3', value: 'option3'},
        ],
    },
};

export const WithDefaultValue: Story = {
    args: {
        label: 'Subscription Plan',
        options: [
            {label: 'Free', value: 'free'},
            {label: 'Pro', value: 'pro'},
            {label: 'Enterprise', value: 'enterprise'},
        ],
        value: 'pro',
    },
};

export const Horizontal: Story = {
    args: {
        label: 'Size',
        options: [
            {label: 'Small', value: 's'},
            {label: 'Medium', value: 'm'},
            {label: 'Large', value: 'l'},
        ],
        row: true,
    },
};

export const ManyOptions: Story = {
    args: {
        label: 'Select Country',
        options: [
            {label: 'United States', value: 'us'},
            {label: 'United Kingdom', value: 'uk'},
            {label: 'Canada', value: 'ca'},
            {label: 'Australia', value: 'au'},
            {label: 'Germany', value: 'de'},
            {label: 'France', value: 'fr'},
        ],
    },
};

