import type {Meta, StoryObj} from '@storybook/react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '../components/ui';
import {Box, Stack, Text} from '@chakra-ui/react';

const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tabs component built with Chakra UI for organizing content in tabbed sections.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['line', 'enclosed', 'enclosed-colored', 'soft-rounded', 'solid-rounded', 'unstyled'],
            description: 'Variant of the tabs',
        },
        colorScheme: {
            control: {type: 'select'},
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
            description: 'Color scheme of the tabs',
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
            description: 'Size of the tabs',
        },
        orientation: {
            control: {type: 'select'},
            options: ['horizontal', 'vertical'],
            description: 'Orientation of the tabs',
        },
        isLazy: {
            control: {type: 'boolean'},
            description: 'Lazy load tab panels',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tabs width="400px">
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>Panel 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </TabPanel>
                <TabPanel>
                    <p>Panel 2 - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </TabPanel>
                <TabPanel>
                    <p>Panel 3 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={8}>
            <Box>
                <Text fontWeight="bold" mb={4}>Line (default)</Text>
                <Tabs variant="line" width="400px">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Line variant content</TabPanel>
                        <TabPanel>Content for tab 2</TabPanel>
                        <TabPanel>Content for tab 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={4}>Enclosed</Text>
                <Tabs variant="enclosed" width="400px">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Enclosed variant content</TabPanel>
                        <TabPanel>Content for tab 2</TabPanel>
                        <TabPanel>Content for tab 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={4}>Soft Rounded</Text>
                <Tabs variant="soft-rounded" colorScheme="green" width="400px">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Soft rounded variant content</TabPanel>
                        <TabPanel>Content for tab 2</TabPanel>
                        <TabPanel>Content for tab 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={4}>Solid Rounded</Text>
                <Tabs variant="solid-rounded" colorScheme="blue" width="400px">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Solid rounded variant content</TabPanel>
                        <TabPanel>Content for tab 2</TabPanel>
                        <TabPanel>Content for tab 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={6}>
            <Box>
                <Text fontWeight="bold" mb={4}>Small</Text>
                <Tabs size="sm" width="400px">
                    <TabList>
                        <Tab>Small Tab</Tab>
                        <Tab>Another Tab</Tab>
                        <Tab>Third Tab</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Small size content</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={4}>Medium (default)</Text>
                <Tabs size="md" width="400px">
                    <TabList>
                        <Tab>Medium Tab</Tab>
                        <Tab>Another Tab</Tab>
                        <Tab>Third Tab</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Medium size content</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={4}>Large</Text>
                <Tabs size="lg" width="400px">
                    <TabList>
                        <Tab>Large Tab</Tab>
                        <Tab>Another Tab</Tab>
                        <Tab>Third Tab</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Large size content</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Vertical: Story = {
    render: () => (
        <Tabs orientation="vertical" variant="line" height="300px" width="400px">
            <TabList>
                <Tab>Settings</Tab>
                <Tab>Billing</Tab>
                <Tab>Security</Tab>
                <Tab>Notifications</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Text>Settings Panel</Text>
                    <Text mt={2}>Configure your application settings here.</Text>
                </TabPanel>
                <TabPanel>
                    <Text>Billing Panel</Text>
                    <Text mt={2}>Manage your subscription and billing information.</Text>
                </TabPanel>
                <TabPanel>
                    <Text>Security Panel</Text>
                    <Text mt={2}>Update your password and security settings.</Text>
                </TabPanel>
                <TabPanel>
                    <Text>Notifications Panel</Text>
                    <Text mt={2}>Configure your notification preferences.</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ApplicationExample: Story = {
    render: () => (
        <Tabs variant="enclosed" width="500px">
            <TabList>
                <Tab>Dashboard</Tab>
                <Tab>Analytics</Tab>
                <Tab>Reports</Tab>
                <Tab>Settings</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Stack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Dashboard Overview</Text>
                        <Text>Welcome to your dashboard. Here you can see an overview of your account activity.</Text>
                        <Box p={4} bg="blue.50" borderRadius="md">
                            <Text fontWeight="medium">Quick Stats</Text>
                            <Text fontSize="sm">• 25 active projects</Text>
                            <Text fontSize="sm">• 142 completed tasks</Text>
                            <Text fontSize="sm">• 8 team members</Text>
                        </Box>
                    </Stack>
                </TabPanel>

                <TabPanel>
                    <Stack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Analytics</Text>
                        <Text>View detailed analytics and insights about your data.</Text>
                        <Box p={4} bg="green.50" borderRadius="md">
                            <Text fontWeight="medium">Performance Metrics</Text>
                            <Text fontSize="sm">• 45% increase in user engagement</Text>
                            <Text fontSize="sm">• 23% growth in revenue</Text>
                            <Text fontSize="sm">• 67% customer satisfaction</Text>
                        </Box>
                    </Stack>
                </TabPanel>

                <TabPanel>
                    <Stack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Reports</Text>
                        <Text>Generate and download various reports.</Text>
                        <Box p={4} bg="purple.50" borderRadius="md">
                            <Text fontWeight="medium">Available Reports</Text>
                            <Text fontSize="sm">• Monthly sales report</Text>
                            <Text fontSize="sm">• User activity summary</Text>
                            <Text fontSize="sm">• Performance analysis</Text>
                        </Box>
                    </Stack>
                </TabPanel>

                <TabPanel>
                    <Stack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Settings</Text>
                        <Text>Configure your account and application preferences.</Text>
                        <Box p={4} bg="orange.50" borderRadius="md">
                            <Text fontWeight="medium">Quick Actions</Text>
                            <Text fontSize="sm">• Update profile information</Text>
                            <Text fontSize="sm">• Change password</Text>
                            <Text fontSize="sm">• Notification preferences</Text>
                        </Box>
                    </Stack>
                </TabPanel>
            </TabPanels>
        </Tabs>
    ),
    parameters: {
        controls: {disable: true},
    },
};

