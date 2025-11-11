import type {Meta, StoryObj} from '@storybook/react';
import {Tabs} from 'components/navigation';
import {Box, Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const meta = {
    title: 'Navigation/Tabs',
    component: Tabs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['standard', 'scrollable', 'fullWidth'],
        },
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [
            {
                label: 'Tab 1',
                content: <Typography>Content for Tab 1</Typography>,
            },
            {
                label: 'Tab 2',
                content: <Typography>Content for Tab 2</Typography>,
            },
            {
                label: 'Tab 3',
                content: <Typography>Content for Tab 3</Typography>,
            },
        ],
    },
};

export const WithIcons: Story = {
    args: {
        tabs: [
            {
                label: 'Info',
                icon: <InfoIcon/>,
                content: (
                    <Box p={2}>
                        <Typography variant="h6">Information</Typography>
                        <Typography>This tab contains general information.</Typography>
                    </Box>
                ),
            },
            {
                label: 'Profile',
                icon: <PersonIcon/>,
                content: (
                    <Box p={2}>
                        <Typography variant="h6">Profile</Typography>
                        <Typography>This tab contains profile settings.</Typography>
                    </Box>
                ),
            },
            {
                label: 'Settings',
                icon: <SettingsIcon/>,
                content: (
                    <Box p={2}>
                        <Typography variant="h6">Settings</Typography>
                        <Typography>This tab contains system settings.</Typography>
                    </Box>
                ),
            },
        ],
    },
};

export const WithDisabledTab: Story = {
    args: {
        tabs: [
            {
                label: 'Active Tab',
                content: <Typography>This tab is active</Typography>,
            },
            {
                label: 'Disabled Tab',
                content: <Typography>This content is not accessible</Typography>,
                disabled: true,
            },
            {
                label: 'Another Active',
                content: <Typography>This tab is also active</Typography>,
            },
        ],
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'fullWidth',
        tabs: [
            {
                label: 'Overview',
                content: <Typography>Overview content</Typography>,
            },
            {
                label: 'Details',
                content: <Typography>Detailed information</Typography>,
            },
            {
                label: 'Statistics',
                content: <Typography>Statistical data</Typography>,
            },
        ],
    },
};

export const Scrollable: Story = {
    args: {
        variant: 'scrollable',
        tabs: [
            {label: 'Tab 1', content: <Typography>Content 1</Typography>},
            {label: 'Tab 2', content: <Typography>Content 2</Typography>},
            {label: 'Tab 3', content: <Typography>Content 3</Typography>},
            {label: 'Tab 4', content: <Typography>Content 4</Typography>},
            {label: 'Tab 5', content: <Typography>Content 5</Typography>},
            {label: 'Tab 6', content: <Typography>Content 6</Typography>},
            {label: 'Tab 7', content: <Typography>Content 7</Typography>},
        ],
    },
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        tabs: [
            {
                label: 'General',
                content: <Typography>General settings content</Typography>,
            },
            {
                label: 'Security',
                content: <Typography>Security settings content</Typography>,
            },
            {
                label: 'Privacy',
                content: <Typography>Privacy settings content</Typography>,
            },
            {
                label: 'Notifications',
                content: <Typography>Notification settings content</Typography>,
            },
        ],
    },
};

