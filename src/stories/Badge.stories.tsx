import type {Meta, StoryObj} from '@storybook/react';
import {Badge} from 'components/ui';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const meta = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
        },
        variant: {
            control: 'select',
            options: ['standard', 'dot'],
        },
        max: {
            control: {type: 'number'},
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        badgeContent: 4,
        children: <MailIcon/>,
    },
};

export const Primary: Story = {
    args: {
        badgeContent: 5,
        color: 'primary',
        children: <NotificationsIcon/>,
    },
};

export const Error: Story = {
    args: {
        badgeContent: 12,
        color: 'error',
        children: <MailIcon/>,
    },
};

export const Success: Story = {
    args: {
        badgeContent: 3,
        color: 'success',
        children: <NotificationsIcon/>,
    },
};

export const LargeNumber: Story = {
    args: {
        badgeContent: 999,
        color: 'error',
        children: <MailIcon/>,
    },
};

export const MaxValue: Story = {
    args: {
        badgeContent: 150,
        max: 99,
        color: 'primary',
        children: <NotificationsIcon/>,
    },
};

export const Dot: Story = {
    args: {
        variant: 'dot',
        color: 'error',
        children: <MailIcon/>,
    },
};

export const ShoppingCart: Story = {
    args: {
        badgeContent: 7,
        color: 'secondary',
        children: <ShoppingCartIcon/>,
    },
};

