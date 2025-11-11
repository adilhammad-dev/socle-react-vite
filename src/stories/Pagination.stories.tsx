import type {Meta, StoryObj} from '@storybook/react';
import {Pagination} from 'components/navigation';

const meta = {
    title: 'Navigation/Pagination',
    component: Pagination,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: {type: 'range', min: 1, max: 50, step: 1},
        },
        page: {
            control: {type: 'range', min: 1, max: 10, step: 1},
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'standard'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        count: 10,
        page: 1,
    },
};

export const CurrentPage: Story = {
    args: {
        count: 10,
        page: 5,
    },
};

export const ManyPages: Story = {
    args: {
        count: 20,
        page: 1,
    },
};

export const Secondary: Story = {
    args: {
        count: 10,
        page: 1,
        color: 'secondary',
    },
};

export const Small: Story = {
    args: {
        count: 10,
        page: 1,
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        count: 10,
        page: 1,
        size: 'large',
    },
};

