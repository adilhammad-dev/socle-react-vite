import type {Meta, StoryObj} from '@storybook/react';
import {SearchBar} from 'components/forms';

const meta = {
    title: 'Forms/SearchBar',
    component: SearchBar,
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
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Search...',
    },
};

export const WithValue: Story = {
    args: {
        placeholder: 'Search...',
        value: 'React components',
    },
};

export const CustomPlaceholder: Story = {
    args: {
        placeholder: 'Search products...',
    },
};

export const Small: Story = {
    args: {
        placeholder: 'Search...',
        size: 'small',
    },
};

export const FullWidth: Story = {
    args: {
        placeholder: 'Search across entire database...',
        fullWidth: true,
    },
};

export const WithSearch: Story = {
    args: {
        placeholder: 'Type and press Enter...',
        onSearch: (value) => alert(`Searching for: ${value}`),
    },
};

