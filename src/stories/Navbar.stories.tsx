import type {Meta, StoryObj} from '@storybook/react';
import {Navbar} from 'components/navigation';

const meta = {
    title: 'Navigation/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        showMenuButton: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'My Application',
        items: [
            {label: 'Home', onClick: () => console.log('Home')},
            {label: 'About', onClick: () => console.log('About')},
            {label: 'Contact', onClick: () => console.log('Contact')},
        ],
    },
};

export const WithMenuButton: Story = {
    args: {
        title: 'Dashboard',
        showMenuButton: true,
        items: [
            {label: 'Home', onClick: () => console.log('Home')},
            {label: 'Products', onClick: () => console.log('Products')},
            {label: 'Settings', onClick: () => console.log('Settings')},
        ],
        onMenuClick: () => console.log('Menu clicked'),
    },
};

export const ManyItems: Story = {
    args: {
        title: 'App Name',
        items: [
            {label: 'Home', onClick: () => console.log('Home')},
            {label: 'About', onClick: () => console.log('About')},
            {label: 'Services', onClick: () => console.log('Services')},
            {label: 'Products', onClick: () => console.log('Products')},
            {label: 'Blog', onClick: () => console.log('Blog')},
            {label: 'Contact', onClick: () => console.log('Contact')},
        ],
    },
};

