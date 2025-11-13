import type {Meta, StoryObj} from '@storybook/react';
import {ProgressBar as Progress} from '../components/ui';
import {Box, Stack, Text} from '@chakra-ui/react';

const meta: Meta<typeof Progress> = {
    title: 'UI/Progress',
    component: Progress,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A progress component built with Chakra UI for showing completion status.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: {type: 'range', min: 0, max: 100, step: 1},
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
        hasStripe: {
            control: 'boolean',
        },
        isAnimated: {
            control: 'boolean',
        },
        isIndeterminate: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 64,
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Box>
                <Text fontSize="sm" mb={2}>Extra Small</Text>
                <Progress value={32} size="xs"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Small</Text>
                <Progress value={48} size="sm"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Medium</Text>
                <Progress value={64} size="md"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Large</Text>
                <Progress value={80} size="lg"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={3} width="300px">
            <Box>
                <Text fontSize="sm" mb={1}>Blue (default)</Text>
                <Progress value={64} colorScheme="blue"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={1}>Green</Text>
                <Progress value={64} colorScheme="green"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={1}>Red</Text>
                <Progress value={64} colorScheme="red"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={1}>Orange</Text>
                <Progress value={64} colorScheme="orange"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={1}>Purple</Text>
                <Progress value={64} colorScheme="purple"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={1}>Teal</Text>
                <Progress value={64} colorScheme="teal"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithStripes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Box>
                <Text fontSize="sm" mb={2}>Static Stripes</Text>
                <Progress value={64} hasStripe/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Animated Stripes</Text>
                <Progress value={64} hasStripe isAnimated/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Colored Animated Stripes</Text>
                <Progress value={64} hasStripe isAnimated colorScheme="green"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Indeterminate: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Box>
                <Text fontSize="sm" mb={2}>Indeterminate Progress</Text>
                <Progress isIndeterminate/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Indeterminate with Color</Text>
                <Progress isIndeterminate colorScheme="green"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>Indeterminate Large</Text>
                <Progress isIndeterminate size="lg" colorScheme="purple"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithLabels: Story = {
    render: () => (
        <Stack spacing={6} width="400px">
            <Box>
                <Text fontSize="sm" mb={2} fontWeight="medium">File Upload Progress</Text>
                <Progress value={32} colorScheme="blue"/>
                <Text fontSize="xs" color="gray.500" mt={1}>32% complete</Text>
            </Box>

            <Box>
                <Text fontSize="sm" mb={2} fontWeight="medium">Installation Progress</Text>
                <Progress value={87} colorScheme="green" hasStripe isAnimated/>
                <Text fontSize="xs" color="gray.500" mt={1}>Installing dependencies... 87%</Text>
            </Box>

            <Box>
                <Text fontSize="sm" mb={2} fontWeight="medium">Profile Completion</Text>
                <Progress value={45} colorScheme="purple"/>
                <Text fontSize="xs" color="gray.500" mt={1}>Complete your profile to unlock all features (45%)</Text>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const DifferentValues: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Box>
                <Text fontSize="sm" mb={2}>0% - Just started</Text>
                <Progress value={0} colorScheme="gray"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>25% - Quarter way</Text>
                <Progress value={25} colorScheme="red"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>50% - Half way</Text>
                <Progress value={50} colorScheme="yellow"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>75% - Almost there</Text>
                <Progress value={75} colorScheme="blue"/>
            </Box>
            <Box>
                <Text fontSize="sm" mb={2}>100% - Complete!</Text>
                <Progress value={100} colorScheme="green"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

