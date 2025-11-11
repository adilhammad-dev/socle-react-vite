import type {Meta, StoryObj} from '@storybook/react';
import {Select} from 'components/forms';
import {SelectProps} from "components/forms/Select";

const meta: Meta<SelectProps> = {
    title: 'Forms/Select',
    component: Select,
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
        multiple: {
            control: 'boolean',
        },
        placeholder: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<SelectProps>;

// Default single select
export const Default: Story = {
    args: {
        label: 'Choose Option',
        options: [
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
            {label: 'Option 3', value: '3'},
        ],
    },
};

// Single select with default value
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

// Multi-select example
export const MultiSelect: Story = {
    args: {
        label: 'Select Interests',
        multiple: true,
        value: ['books', 'sports'],
        options: [
            {label: 'Electronics', value: 'electronics'},
            {label: 'Clothing', value: 'clothing'},
            {label: 'Books', value: 'books'},
            {label: 'Sports', value: 'sports'},
            {label: 'Home & Garden', value: 'home'},
        ],
    },
};

// Select with placeholder
export const WithPlaceholder: Story = {
    args: {
        label: 'Select Country',
        placeholder: 'Please select a country',
        options: [
            {label: 'United States', value: 'us'},
            {label: 'United Kingdom', value: 'uk'},
            {label: 'Canada', value: 'ca'},
            {label: 'Australia', value: 'au'},
        ],
    },
};

// Small size select
export const Small: Story = {
    args: {
        label: 'Small Size',
        size: 'small',
        options: [
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
            {label: 'Option 3', value: '3'},
        ],
    },
};

// Many options example
export const ManyOptions: Story = {
    args: {
        label: 'Select Category',
        options: [
            {label: 'Electronics', value: 'electronics'},
            {label: 'Clothing', value: 'clothing'},
            {label: 'Books', value: 'books'},
            {label: 'Sports', value: 'sports'},
            {label: 'Home & Garden', value: 'home'},
            {label: 'Toys', value: 'toys'},
            {label: 'Food', value: 'food'},
        ],
    },
};
