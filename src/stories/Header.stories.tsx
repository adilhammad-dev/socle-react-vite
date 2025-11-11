import type {Meta, StoryObj} from '@storybook/react';
import {Header} from 'components/layout';

const meta = {
    title: 'Layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        showMenu: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'FS-AI-App',
    },
};

export const WithMenuButton: Story = {
    args: {
        title: 'My Application',
        showMenu: true,
        onMenuClick: () => alert('Menu clicked!'),
    },
};

export const WithUserName: Story = {
    args: {
        title: 'Dashboard',
        showMenu: true,
        userName: 'John Doe',
    },
};

export const WithAvatar: Story = {
    args: {
        title: 'Dashboard',
        showMenu: true,
        userName: 'Jane Smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=5',
    },
};

export const CustomTitle: Story = {
    args: {
        title: 'Project Management System',
        showMenu: true,
        userName: 'Admin User',
    },
};

