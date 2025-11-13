import type {Meta, StoryObj} from '@storybook/react';
import {Divider} from '../components/ui';
import {AbsoluteCenter, Box, HStack, Stack, Text, VStack} from '@chakra-ui/react';

const meta: Meta<typeof Divider> = {
    title: 'UI/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A divider component built with Chakra UI for separating content.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: {type: 'select'},
            options: ['horizontal', 'vertical'],
            description: 'Orientation of the divider',
        },
        variant: {
            control: {type: 'select'},
            options: ['solid', 'dashed'],
            description: 'Variant of the divider',
        },
        colorScheme: {
            control: {type: 'select'},
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
            description: 'Color scheme of the divider',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Box width="300px">
            <Text>Content above the divider</Text>
            <Divider/>
            <Text>Content below the divider</Text>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Horizontal: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Text>Section 1</Text>
            <Divider/>
            <Text>Section 2</Text>
            <Divider variant="dashed"/>
            <Text>Section 3</Text>
            <Divider colorScheme="blue"/>
            <Text>Section 4</Text>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Vertical: Story = {
    render: () => (
        <HStack spacing={4} height="100px">
            <Text>Left Content</Text>
            <Divider orientation="vertical"/>
            <Text>Middle Content</Text>
            <Divider orientation="vertical" variant="dashed"/>
            <Text>Right Content</Text>
        </HStack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={6} width="300px">
            <Box>
                <Text fontWeight="bold" mb={2}>Solid (default)</Text>
                <Divider variant="solid"/>
            </Box>

            <Box>
                <Text fontWeight="bold" mb={2}>Dashed</Text>
                <Divider variant="dashed"/>
            </Box>

            <HStack spacing={6} height="80px">
                <VStack>
                    <Text fontWeight="bold" fontSize="sm">Vertical Solid</Text>
                    <Divider orientation="vertical" variant="solid" height="50px"/>
                </VStack>
                <VStack>
                    <Text fontWeight="bold" fontSize="sm">Vertical Dashed</Text>
                    <Divider orientation="vertical" variant="dashed" height="50px"/>
                </VStack>
            </HStack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Box>
                <Text fontSize="sm" color="gray.600" mb={1}>Gray (default)</Text>
                <Divider colorScheme="gray"/>
            </Box>
            <Box>
                <Text fontSize="sm" color="blue.600" mb={1}>Blue</Text>
                <Divider colorScheme="blue"/>
            </Box>
            <Box>
                <Text fontSize="sm" color="green.600" mb={1}>Green</Text>
                <Divider colorScheme="green"/>
            </Box>
            <Box>
                <Text fontSize="sm" color="red.600" mb={1}>Red</Text>
                <Divider colorScheme="red"/>
            </Box>
            <Box>
                <Text fontSize="sm" color="purple.600" mb={1}>Purple</Text>
                <Divider colorScheme="purple"/>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithText: Story = {
    render: () => (
        <Stack spacing={8} width="400px">
            <Box position="relative" padding="4">
                <Divider/>
                <AbsoluteCenter bg="white" px="4">
                    <Text fontSize="sm" color="gray.500">OR</Text>
                </AbsoluteCenter>
            </Box>

            <Box position="relative" padding="4">
                <Divider/>
                <AbsoluteCenter bg="white" px="4">
                    <Text fontSize="sm" fontWeight="bold" color="blue.500">CONTINUE READING</Text>
                </AbsoluteCenter>
            </Box>

            <Box position="relative" padding="4">
                <Divider colorScheme="purple"/>
                <AbsoluteCenter bg="white" px="4">
                    <Text fontSize="xs" color="purple.500">✨ FEATURED CONTENT ✨</Text>
                </AbsoluteCenter>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const InCards: Story = {
    render: () => (
        <Box maxW="400px" borderWidth="1px" borderRadius="lg" p={6}>
            <Text fontSize="xl" fontWeight="bold">Card Title</Text>
            <Text mt={2} color="gray.600">Some introductory content goes here.</Text>

            <Divider my={4}/>

            <Text fontSize="lg" fontWeight="semibold">Features</Text>
            <Text mt={2}>• Feature 1: Something awesome</Text>
            <Text>• Feature 2: Something even better</Text>

            <Divider my={4} variant="dashed"/>

            <Text fontSize="lg" fontWeight="semibold">Pricing</Text>
            <Text mt={2} fontSize="2xl" fontWeight="bold" color="green.500">$29/month</Text>

            <Divider my={4} colorScheme="blue"/>

            <HStack justify="space-between">
                <Text fontSize="sm" color="gray.500">Valid until Dec 31</Text>
                <Text fontSize="sm" color="blue.500" fontWeight="medium">Learn more</Text>
            </HStack>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const SectionSeparators: Story = {
    render: () => (
        <Box maxW="500px">
            <Box mb={6}>
                <Text fontSize="2xl" fontWeight="bold">Article Title</Text>
                <Text color="gray.500" mt={1}>Published on January 15, 2024</Text>
            </Box>

            <Divider mb={6}/>

            <Box mb={6}>
                <Text fontSize="lg" fontWeight="semibold" mb={3}>Introduction</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</Text>
            </Box>

            <Divider variant="dashed" mb={6}/>

            <Box mb={6}>
                <Text fontSize="lg" fontWeight="semibold" mb={3}>Main Content</Text>
                <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</Text>
            </Box>

            <Divider colorScheme="blue" mb={6}/>

            <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={3}>Conclusion</Text>
                <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.</Text>
            </Box>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
    },
};

