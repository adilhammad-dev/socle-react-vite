import type {Meta, StoryObj} from '@storybook/react';
import {Breadcrumb} from 'components/navigation';

const meta = {
    title: 'Navigation/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {label: 'Home', href: '/'},
            {label: 'Products', href: '/products'},
            {label: 'Details'},
        ],
    },
};

export const ThreeLevels: Story = {
    args: {
        items: [
            {label: 'Dashboard', href: '/dashboard'},
            {label: 'Users', href: '/users'},
            {label: 'Profile'},
        ],
    },
};

export const DeepNesting: Story = {
    args: {
        items: [
            {label: 'Home', href: '/'},
            {label: 'Categories', href: '/categories'},
            {label: 'Electronics', href: '/categories/electronics'},
            {label: 'Computers', href: '/categories/electronics/computers'},
            {label: 'Laptops'},
        ],
    },
};

export const CustomSeparator: Story = {
    args: {
        items: [
            {label: 'Home', href: '/'},
            {label: 'Settings', href: '/settings'},
            {label: 'Profile'},
        ],
        separator: '>',
    },
};

