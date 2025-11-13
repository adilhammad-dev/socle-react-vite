import type {Meta, StoryObj} from '@storybook/react';
import {Avatar, AvatarGroup} from '../components/ui';
import {Stack, Wrap, WrapItem} from '@chakra-ui/react';

const meta: Meta<typeof Avatar> = {
    title: 'UI/Avatar',
    component: Avatar,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'An avatar component built with Chakra UI for displaying user profile pictures or initials.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        name: {
            control: 'text',
        },
        src: {
            control: 'text',
        },
        showBorder: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'John Doe',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" spacing={4} align="center">
            <Avatar size="2xs" name="John Doe"/>
            <Avatar size="xs" name="John Doe"/>
            <Avatar size="sm" name="John Doe"/>
            <Avatar size="md" name="John Doe"/>
            <Avatar size="lg" name="John Doe"/>
            <Avatar size="xl" name="John Doe"/>
            <Avatar size="2xl" name="John Doe"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithImage: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Avatar
                size="md"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
            />
            <Avatar
                size="md"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
            />
            <Avatar
                size="md"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
            />
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Fallback: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Avatar name="John Doe"/>
            <Avatar name="Jane Smith"/>
            <Avatar name="Robert Johnson"/>
            <Avatar name="Maria Garcia"/>
            <Avatar name="A"/>
            <Avatar/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithBorder: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Avatar name="John Doe" showBorder/>
            <Avatar name="Jane Smith" showBorder borderColor="blue.500"/>
            <Avatar name="Robert Johnson" showBorder borderColor="green.500"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const AvatarGroupStory: Story = {
    render: () => (
        <Stack spacing={6}>
            <div>
                <h3>Default Avatar Group</h3>
                <AvatarGroup size="md" max={2}>
                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba"/>
                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast"/>
                </AvatarGroup>
            </div>

            <div>
                <h3>Different Sizes</h3>
                <Stack spacing={4}>
                    <AvatarGroup size="sm" max={3}>
                        <Avatar name="Ryan Florence"/>
                        <Avatar name="Segun Adebayo"/>
                        <Avatar name="Kent Dodds"/>
                        <Avatar name="Prosper Otemuyiwa"/>
                        <Avatar name="Christian Nwamba"/>
                    </AvatarGroup>

                    <AvatarGroup size="lg" max={3}>
                        <Avatar name="Ryan Florence"/>
                        <Avatar name="Segun Adebayo"/>
                        <Avatar name="Kent Dodds"/>
                        <Avatar name="Prosper Otemuyiwa"/>
                        <Avatar name="Christian Nwamba"/>
                    </AvatarGroup>
                </Stack>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Colors: Story = {
    render: () => (
        <Wrap spacing={4}>
            <WrapItem>
                <Avatar bg="red.500" name="John Doe"/>
            </WrapItem>
            <WrapItem>
                <Avatar bg="teal.500" name="Jane Smith"/>
            </WrapItem>
            <WrapItem>
                <Avatar bg="blue.500" name="Robert Johnson"/>
            </WrapItem>
            <WrapItem>
                <Avatar bg="green.500" name="Maria Garcia"/>
            </WrapItem>
            <WrapItem>
                <Avatar bg="purple.500" name="David Wilson"/>
            </WrapItem>
            <WrapItem>
                <Avatar bg="orange.500" name="Lisa Anderson"/>
            </WrapItem>
        </Wrap>
    ),
    parameters: {
        controls: {disable: true},
    },
};

