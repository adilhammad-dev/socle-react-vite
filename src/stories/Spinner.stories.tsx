import type {Meta, StoryObj} from '@storybook/react';
import {LoadingSpinner as Spinner} from '../components/ui';
import {Flex, Stack, Text} from '@chakra-ui/react';

const meta: Meta<typeof Spinner> = {
    title: 'UI/Spinner',
    component: Spinner,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A spinner component built with Chakra UI for indicating loading states.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        color: {
            control: 'text',
        },
        thickness: {
            control: 'text',
        },
        speed: {
            control: 'text',
        },
        emptyColor: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" spacing={4} align="center">
            <Flex direction="column" align="center" gap={2}>
                <Spinner size="xs"/>
                <Text fontSize="xs">xs</Text>
            </Flex>
            <Flex direction="column" align="center" gap={2}>
                <Spinner size="sm"/>
                <Text fontSize="sm">sm</Text>
            </Flex>
            <Flex direction="column" align="center" gap={2}>
                <Spinner size="md"/>
                <Text fontSize="md">md</Text>
            </Flex>
            <Flex direction="column" align="center" gap={2}>
                <Spinner size="lg"/>
                <Text fontSize="lg">lg</Text>
            </Flex>
            <Flex direction="column" align="center" gap={2}>
                <Spinner size="xl"/>
                <Text fontSize="xl">xl</Text>
            </Flex>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Colors: Story = {
    render: () => (
        <Stack spacing={6}>
            <Stack direction="row" spacing={4} align="center">
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="red.500"/>
                    <Text fontSize="sm">Red</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="blue.500"/>
                    <Text fontSize="sm">Blue</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="green.500"/>
                    <Text fontSize="sm">Green</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="orange.500"/>
                    <Text fontSize="sm">Orange</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="purple.500"/>
                    <Text fontSize="sm">Purple</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="pink.500"/>
                    <Text fontSize="sm">Pink</Text>
                </Flex>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="teal.500"/>
                    <Text fontSize="sm">Teal</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="cyan.500"/>
                    <Text fontSize="sm">Cyan</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="yellow.500"/>
                    <Text fontSize="sm">Yellow</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner color="gray.500"/>
                    <Text fontSize="sm">Gray</Text>
                </Flex>
            </Stack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const CustomStyles: Story = {
    render: () => (
        <Stack spacing={6}>
            <Stack direction="row" spacing={4} align="center">
                <Flex direction="column" align="center" gap={2}>
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>
                    <Text fontSize="sm">Thick & Slow</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner thickness="2px" speed="1s" emptyColor="red.200" color="red.500" size="xl"/>
                    <Text fontSize="sm">Thin & Fast</Text>
                </Flex>
                <Flex direction="column" align="center" gap={2}>
                    <Spinner thickness="6px" speed="0.4s" emptyColor="green.100" color="green.500" size="xl"/>
                    <Text fontSize="sm">Very Thick</Text>
                </Flex>
            </Stack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithText: Story = {
    render: () => (
        <Stack spacing={6}>
            <Flex align="center" gap={3}>
                <Spinner size="sm" color="blue.500"/>
                <Text>Loading...</Text>
            </Flex>

            <Flex align="center" gap={3}>
                <Spinner size="md" color="green.500"/>
                <Text>Processing your request...</Text>
            </Flex>

            <Flex align="center" gap={3}>
                <Spinner size="lg" color="purple.500"/>
                <Text fontSize="lg">Please wait while we set up your account</Text>
            </Flex>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Centered: Story = {
    render: () => (
        <Stack spacing={6}>
            <Flex direction="column" align="center" gap={3} p={8} border="1px" borderColor="gray.200" rounded="md">
                <Spinner size="xl" color="blue.500"/>
                <Text>Centered Loading State</Text>
            </Flex>

            <Flex justify="center" align="center" h="200px" bg="gray.50" rounded="md">
                <Stack align="center" spacing={4}>
                    <Spinner size="lg" color="teal.500" thickness="4px"/>
                    <Text color="gray.600">Loading content...</Text>
                </Stack>
            </Flex>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const InButton: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <button
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#3182ce',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <Spinner size="sm" color="white"/>
                Loading...
            </button>

            <button
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#38a169',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <Spinner size="sm" color="white" thickness="3px"/>
                Processing
            </button>

            <button
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#805ad5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                }}
            >
                <Spinner size="md" color="white"/>
                Submitting Form
            </button>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

