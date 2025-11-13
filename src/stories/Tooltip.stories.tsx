import type {Meta, StoryObj} from '@storybook/react';
import {Tooltip} from '../components/ui';
import {Box, Button, IconButton, Stack, Text, Wrap, WrapItem} from '@chakra-ui/react';
import {FaCopy, FaEdit, FaInfo, FaTrash} from 'react-icons/fa';

const meta: Meta<typeof Tooltip> = {
    title: 'UI/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tooltip component built with Chakra UI for displaying helpful information on hover.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: {type: 'select'},
            options: [
                'auto', 'top', 'top-start', 'top-end',
                'right', 'right-start', 'right-end',
                'bottom', 'bottom-start', 'bottom-end',
                'left', 'left-start', 'left-end'
            ],
            description: 'Placement of the tooltip',
        },
        label: {
            control: {type: 'text'},
            description: 'The tooltip content',
        },
        hasArrow: {
            control: {type: 'boolean'},
            description: 'Whether to show an arrow',
        },
        isOpen: {
            control: {type: 'boolean'},
            description: 'Control tooltip visibility',
        },
        openDelay: {
            control: {type: 'number'},
            description: 'Delay before showing tooltip (ms)',
        },
        closeDelay: {
            control: {type: 'number'},
            description: 'Delay before hiding tooltip (ms)',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tooltip label="This is a tooltip">
            <Button>Hover me</Button>
        </Tooltip>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Placements: Story = {
    render: () => (
        <Box p={12}>
            <Stack spacing={8} align="center">
                <Stack direction="row" spacing={4}>
                    <Tooltip label="Top start" placement="top-start">
                        <Button size="sm">Top Start</Button>
                    </Tooltip>
                    <Tooltip label="Top center" placement="top">
                        <Button size="sm">Top</Button>
                    </Tooltip>
                    <Tooltip label="Top end" placement="top-end">
                        <Button size="sm">Top End</Button>
                    </Tooltip>
                </Stack>

                <Stack direction="row" spacing={12} align="center">
                    <Stack spacing={4}>
                        <Tooltip label="Left start" placement="left-start">
                            <Button size="sm">Left Start</Button>
                        </Tooltip>
                        <Tooltip label="Left center" placement="left">
                            <Button size="sm">Left</Button>
                        </Tooltip>
                        <Tooltip label="Left end" placement="left-end">
                            <Button size="sm">Left End</Button>
                        </Tooltip>
                    </Stack>

                    <Box p={8} border="1px" borderColor="gray.200" borderRadius="md">
                        <Text textAlign="center" color="gray.500">Hover buttons around me</Text>
                    </Box>

                    <Stack spacing={4}>
                        <Tooltip label="Right start" placement="right-start">
                            <Button size="sm">Right Start</Button>
                        </Tooltip>
                        <Tooltip label="Right center" placement="right">
                            <Button size="sm">Right</Button>
                        </Tooltip>
                        <Tooltip label="Right end" placement="right-end">
                            <Button size="sm">Right End</Button>
                        </Tooltip>
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={4}>
                    <Tooltip label="Bottom start" placement="bottom-start">
                        <Button size="sm">Bottom Start</Button>
                    </Tooltip>
                    <Tooltip label="Bottom center" placement="bottom">
                        <Button size="sm">Bottom</Button>
                    </Tooltip>
                    <Tooltip label="Bottom end" placement="bottom-end">
                        <Button size="sm">Bottom End</Button>
                    </Tooltip>
                </Stack>
            </Stack>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithArrow: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Tooltip label="Tooltip without arrow" hasArrow={false}>
                <Button>No Arrow</Button>
            </Tooltip>
            <Tooltip label="Tooltip with arrow" hasArrow>
                <Button>With Arrow</Button>
            </Tooltip>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithIcons: Story = {
    render: () => (
        <Wrap spacing={4}>
            <WrapItem>
                <Tooltip label="More information">
                    <IconButton aria-label="Info" icon={<FaInfo/>}/>
                </Tooltip>
            </WrapItem>
            <WrapItem>
                <Tooltip label="Edit item">
                    <IconButton aria-label="Edit" icon={<FaEdit/>} colorScheme="blue"/>
                </Tooltip>
            </WrapItem>
            <WrapItem>
                <Tooltip label="Delete item">
                    <IconButton aria-label="Delete" icon={<FaTrash/>} colorScheme="red"/>
                </Tooltip>
            </WrapItem>
            <WrapItem>
                <Tooltip label="Copy to clipboard">
                    <IconButton aria-label="Copy" icon={<FaCopy/>} colorScheme="green"/>
                </Tooltip>
            </WrapItem>
        </Wrap>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Delays: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Tooltip label="Opens immediately" openDelay={0}>
                <Button>No Delay</Button>
            </Tooltip>
            <Tooltip label="Opens after 500ms" openDelay={500}>
                <Button>500ms Delay</Button>
            </Tooltip>
            <Tooltip label="Opens after 1 second" openDelay={1000}>
                <Button>1s Delay</Button>
            </Tooltip>
            <Tooltip label="Slow to close" closeDelay={1000}>
                <Button>Slow Close</Button>
            </Tooltip>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const LongContent: Story = {
    render: () => (
        <Stack direction="row" spacing={4}>
            <Tooltip label="Short tooltip">
                <Button>Short</Button>
            </Tooltip>
            <Tooltip
                label="This is a longer tooltip with more content to demonstrate how it handles multiple lines and longer text">
                <Button>Long Content</Button>
            </Tooltip>
            <Tooltip
                label={
                    <Box>
                        <Text fontWeight="bold">Formatted Tooltip</Text>
                        <Text fontSize="sm">You can include any React element in tooltips</Text>
                        <Text fontSize="xs" color="gray.300">• Multiple lines</Text>
                        <Text fontSize="xs" color="gray.300">• Different formatting</Text>
                    </Box>
                }
            >
                <Button colorScheme="purple">Rich Content</Button>
            </Tooltip>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const AlwaysOpen: Story = {
    render: () => (
        <Tooltip label="This tooltip is always visible" isOpen hasArrow>
            <Button>Always Visible</Button>
        </Tooltip>
    ),
    parameters: {
        controls: {disable: true},
    },
};

