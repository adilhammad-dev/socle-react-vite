import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import {Sidebar} from 'components/navigation';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import {Button} from 'components/ui';
import {SidebarProps} from "components/layout/Sidebar";

const meta: Meta<SidebarProps> = {
    title: 'Navigation/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['temporary', 'persistent', 'permanent'],
        },
        width: {
            control: {type: 'range', min: 200, max: 400, step: 10},
        },
    },
};

export default meta;
type Story = StoryObj<SidebarProps>;

// Wrapper to handle controlled open state
const SidebarWithTrigger = (args: SidebarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Sidebar</Button>
            <Sidebar {...args} open={open} onClose={() => setOpen(false)}/>
        </>
    );
};

// Default sidebar
export const Default: Story = {
    render: (args) => <SidebarWithTrigger {...args} />,
    args: {
        items: [
            {label: 'Home', icon: <HomeIcon/>, onClick: () => console.log('Home')},
            {label: 'Dashboard', icon: <DashboardIcon/>, onClick: () => console.log('Dashboard')},
            {label: 'Users', icon: <PeopleIcon/>, onClick: () => console.log('Users')},
            {label: 'Settings', icon: <SettingsIcon/>, onClick: () => console.log('Settings')},
        ],
    },
};

// Sidebar with title
export const WithTitle: Story = {
    render: (args) => <SidebarWithTrigger {...args} />,
    args: {
        title: 'My Application',
        items: [
            {label: 'Home', icon: <HomeIcon/>},
            {label: 'Dashboard', icon: <DashboardIcon/>},
            {label: 'Users', icon: <PeopleIcon/>},
        ],
    },
};

// Sidebar with badges
export const WithBadges: Story = {
    render: (args) => <SidebarWithTrigger {...args} />,
    args: {
        items: [
            {label: 'Home', icon: <HomeIcon/>},
            {label: 'Messages', icon: <DashboardIcon/>, badge: 5},
            {label: 'Notifications', icon: <PeopleIcon/>, badge: 12},
            {label: 'Settings', icon: <SettingsIcon/>},
        ],
    },
};

// Wider sidebar example
export const WiderSidebar: Story = {
    render: (args) => <SidebarWithTrigger {...args} />,
    args: {
        width: 300,
        items: [
            {label: 'Home', icon: <HomeIcon/>},
            {label: 'Dashboard', icon: <DashboardIcon/>},
            {label: 'Users', icon: <PeopleIcon/>},
        ],
    },
};
