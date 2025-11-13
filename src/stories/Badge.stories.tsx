import type {Meta, StoryObj} from '@storybook/react';
import {Badge} from '../components/ui';
import {Stack, Wrap, WrapItem} from '@chakra-ui/react';

const meta: Meta<typeof Badge> = {
    title: 'UI/Badge',
    component: Badge,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A badge component built with Chakra UI for highlighting status, notifications, or labels.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
        variant: {
            control: 'select',
            options: ['subtle', 'solid', 'outline'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Wrap spacing={2} width="fit-content" maxWidth="350px">
            <WrapItem>
                <Badge colorScheme="gray">Gray</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="blue">Blue</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="green">Green</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="red">Red</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="orange">Orange</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="yellow">Yellow</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="purple">Purple</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="pink">Pink</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="teal">Teal</Badge>
            </WrapItem>
            <WrapItem>
                <Badge colorScheme="cyan">Cyan</Badge>
            </WrapItem>
        </Wrap>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Wrap spacing={2}>
  <WrapItem><Badge colorScheme="gray">Gray</Badge></WrapItem>
  <WrapItem><Badge colorScheme="blue">Blue</Badge></WrapItem>
  <WrapItem><Badge colorScheme="green">Green</Badge></WrapItem>
  <WrapItem><Badge colorScheme="red">Red</Badge></WrapItem>
  <WrapItem><Badge colorScheme="orange">Orange</Badge></WrapItem>
  <WrapItem><Badge colorScheme="yellow">Yellow</Badge></WrapItem>
  <WrapItem><Badge colorScheme="purple">Purple</Badge></WrapItem>
  <WrapItem><Badge colorScheme="pink">Pink</Badge></WrapItem>
  <WrapItem><Badge colorScheme="teal">Teal</Badge></WrapItem>
  <WrapItem><Badge colorScheme="cyan">Cyan</Badge></WrapItem>
</Wrap>`
            },
            story: {
                inline: true,
                height: '80px',
            },
        }
    },
};

export const Variants: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Badge variant="subtle" colorScheme="green">
                Subtle
            </Badge>
            <Badge variant="solid" colorScheme="green">
                Solid
            </Badge>
            <Badge variant="outline" colorScheme="green">
                Outline
            </Badge>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" spacing={4} align="center">
            <Badge size="sm" colorScheme="blue">
                Small
            </Badge>
            <Badge size="md" colorScheme="blue">
                Medium
            </Badge>
            <Badge size="lg" colorScheme="blue">
                Large
            </Badge>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const StatusBadges: Story = {
    render: () => (
        <Stack spacing={3}>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <span>Status:</span>
                <Badge colorScheme="green">Active</Badge>
                <Badge colorScheme="red">Inactive</Badge>
                <Badge colorScheme="orange">Pending</Badge>
                <Badge colorScheme="blue">Processing</Badge>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <span>Priority:</span>
                <Badge colorScheme="red" variant="solid">High</Badge>
                <Badge colorScheme="yellow" variant="solid">Medium</Badge>
                <Badge colorScheme="gray" variant="solid">Low</Badge>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <span>Version:</span>
                <Badge variant="outline" colorScheme="purple">v1.0.0</Badge>
                <Badge variant="outline" colorScheme="purple">v2.0.0-beta</Badge>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithNumbers: Story = {
    render: () => (
        <Stack direction="row" spacing={4} align="center">
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <span>Notifications</span>
                <Badge colorScheme="red" variant="solid" borderRadius="full">
                    3
                </Badge>
            </div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <span>Messages</span>
                <Badge colorScheme="blue" variant="solid" borderRadius="full">
                    12
                </Badge>
            </div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <span>Cart</span>
                <Badge colorScheme="orange" variant="solid" borderRadius="full">
                    5
                </Badge>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const InText: Story = {
    render: () => (
        <Stack spacing={3}>
            <p>
                This is a paragraph with an{' '}
                <Badge colorScheme="green" variant="subtle">
                    inline badge
                </Badge>{' '}
                in the middle of the text.
            </p>
            <p>
                You can also have{' '}
                <Badge colorScheme="red" variant="solid">
                    multiple
                </Badge>{' '}
                <Badge colorScheme="blue" variant="outline">
                    badges
                </Badge>{' '}
                in the same sentence.
            </p>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

