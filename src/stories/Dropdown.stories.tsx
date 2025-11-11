import type {Meta, StoryObj} from '@storybook/react';
import {Dropdown} from 'components/ui';

const meta = {
    title: 'UI/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium'],
        },
        fullWidth: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Select Option',
        options: [
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
            {label: 'Option 3', value: '3'},
        ],
    },
};

export const Countries: Story = {
    args: {
        label: 'Country',
        options: [
            {label: 'United States', value: 'us'},
            {label: 'United Kingdom', value: 'uk'},
            {label: 'Canada', value: 'ca'},
            {label: 'Australia', value: 'au'},
        ],
    },
};

export const WithDefaultValue: Story = {
    args: {
        label: 'Language',
        value: 'en',
        options: [
            {label: 'English', value: 'en'},
            {label: 'Spanish', value: 'es'},
            {label: 'French', value: 'fr'},
        ],
    },
};

export const Small: Story = {
    args: {
        label: 'Small Dropdown',
        size: 'small',
        options: [
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
        ],
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width',
        fullWidth: true,
        options: [
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
            {label: 'Option 3', value: '3'},
        ],
    },
    parameters: {
        layout: 'padded',
    },
};

