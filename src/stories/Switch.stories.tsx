import type {Meta, StoryObj} from '@storybook/react';
import {ToggleSwitch as Switch} from '../components/ui';
import {FormControl, FormLabel, Stack} from '@chakra-ui/react';
import {useState} from 'react';

const meta: Meta<typeof Switch> = {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A switch component built with Chakra UI for toggling between two states.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
        isChecked: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
        },
        isReadOnly: {
            control: 'boolean',
        },
        isInvalid: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Enable notifications',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4}>
            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="small-switch" mb="0" fontSize="sm">
                    Small switch
                </FormLabel>
                <Switch id="small-switch" size="sm"/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="medium-switch" mb="0">
                    Medium switch
                </FormLabel>
                <Switch id="medium-switch" size="md"/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="large-switch" mb="0" fontSize="lg">
                    Large switch
                </FormLabel>
                <Switch id="large-switch" size="lg"/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={3}>
            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="blue-switch" mb="0">Blue</FormLabel>
                <Switch id="blue-switch" colorScheme="blue" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="green-switch" mb="0">Green</FormLabel>
                <Switch id="green-switch" colorScheme="green" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="red-switch" mb="0">Red</FormLabel>
                <Switch id="red-switch" colorScheme="red" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="orange-switch" mb="0">Orange</FormLabel>
                <Switch id="orange-switch" colorScheme="orange" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="purple-switch" mb="0">Purple</FormLabel>
                <Switch id="purple-switch" colorScheme="purple" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="teal-switch" mb="0">Teal</FormLabel>
                <Switch id="teal-switch" colorScheme="teal" defaultChecked/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={3}>
            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="normal-switch" mb="0">Normal</FormLabel>
                <Switch id="normal-switch"/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="checked-switch" mb="0">Checked</FormLabel>
                <Switch id="checked-switch" defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="disabled-switch" mb="0">Disabled</FormLabel>
                <Switch id="disabled-switch" isDisabled/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="disabled-checked-switch" mb="0">Disabled Checked</FormLabel>
                <Switch id="disabled-checked-switch" isDisabled defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="readonly-switch" mb="0">Read Only</FormLabel>
                <Switch id="readonly-switch" isReadOnly defaultChecked/>
            </FormControl>

            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="invalid-switch" mb="0">Invalid</FormLabel>
                <Switch id="invalid-switch" isInvalid/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithForm: Story = {
    render: () => {
        const [notifications, setNotifications] = useState(true);
        const [marketing, setMarketing] = useState(false);
        const [updates, setUpdates] = useState(true);

        return (
            <Stack spacing={4} maxW="300px">
                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                    <FormLabel htmlFor="email-notifications" mb="0">
                        Email notifications
                    </FormLabel>
                    <Switch
                        id="email-notifications"
                        isChecked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                    />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                    <FormLabel htmlFor="marketing-emails" mb="0">
                        Marketing emails
                    </FormLabel>
                    <Switch
                        id="marketing-emails"
                        colorScheme="green"
                        isChecked={marketing}
                        onChange={(e) => setMarketing(e.target.checked)}
                    />
                </FormControl>

                <FormControl display="flex" alignItems="center" justifyContent="space-between">
                    <FormLabel htmlFor="product-updates" mb="0">
                        Product updates
                    </FormLabel>
                    <Switch
                        id="product-updates"
                        colorScheme="purple"
                        isChecked={updates}
                        onChange={(e) => setUpdates(e.target.checked)}
                    />
                </FormControl>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Controlled: Story = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        return (
            <Stack spacing={4}>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="controlled-switch" mb="0">
                        Controlled Switch (Currently: {isChecked ? 'On' : 'Off'})
                    </FormLabel>
                    <Switch
                        id="controlled-switch"
                        isChecked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </FormControl>

                <div style={{fontSize: '0.875rem', color: 'gray'}}>
                    The switch state is controlled by React state: {JSON.stringify(isChecked)}
                </div>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

