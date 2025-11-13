import type {Meta, StoryObj} from '@storybook/react';
import {Tag} from '../components/ui';
import {HStack, Stack, TagCloseButton, TagLabel, TagLeftIcon, TagRightIcon, Wrap, WrapItem} from '@chakra-ui/react';
import {FaHeart, FaStar, FaTag, FaUser} from 'react-icons/fa';

const meta: Meta<typeof Tag> = {
    title: 'UI/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tag component built with Chakra UI for labeling and categorizing content.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
            description: 'Size of the tag',
        },
        variant: {
            control: {type: 'select'},
            options: ['subtle', 'solid', 'outline'],
            description: 'Variant of the tag',
        },
        colorScheme: {
            control: {type: 'select'},
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
            description: 'Color scheme of the tag',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tag>
            <TagLabel>Default Tag</TagLabel>
        </Tag>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack direction="row" spacing={4} align="center">
            <Tag size="sm">
                <TagLabel>Small</TagLabel>
            </Tag>
            <Tag size="md">
                <TagLabel>Medium</TagLabel>
            </Tag>
            <Tag size="lg">
                <TagLabel>Large</TagLabel>
            </Tag>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4}>
            <HStack spacing={4}>
                <Tag variant="subtle" colorScheme="blue">
                    <TagLabel>Subtle</TagLabel>
                </Tag>
                <Tag variant="solid" colorScheme="blue">
                    <TagLabel>Solid</TagLabel>
                </Tag>
                <Tag variant="outline" colorScheme="blue">
                    <TagLabel>Outline</TagLabel>
                </Tag>
            </HStack>

            <HStack spacing={4}>
                <Tag variant="subtle" colorScheme="green">
                    <TagLabel>Subtle Green</TagLabel>
                </Tag>
                <Tag variant="solid" colorScheme="green">
                    <TagLabel>Solid Green</TagLabel>
                </Tag>
                <Tag variant="outline" colorScheme="green">
                    <TagLabel>Outline Green</TagLabel>
                </Tag>
            </HStack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Wrap spacing={2}>
            <WrapItem>
                <Tag colorScheme="gray">
                    <TagLabel>Gray</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="blue">
                    <TagLabel>Blue</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="green">
                    <TagLabel>Green</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="red">
                    <TagLabel>Red</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="orange">
                    <TagLabel>Orange</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="yellow">
                    <TagLabel>Yellow</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="purple">
                    <TagLabel>Purple</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="pink">
                    <TagLabel>Pink</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="teal">
                    <TagLabel>Teal</TagLabel>
                </Tag>
            </WrapItem>
            <WrapItem>
                <Tag colorScheme="cyan">
                    <TagLabel>Cyan</TagLabel>
                </Tag>
            </WrapItem>
        </Wrap>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithIcons: Story = {
    render: () => (
        <Stack spacing={4}>
            <HStack spacing={4}>
                <Tag size="sm" variant="solid" colorScheme="blue">
                    <TagLeftIcon boxSize="12px" as={FaUser}/>
                    <TagLabel>User</TagLabel>
                </Tag>
                <Tag size="md" variant="subtle" colorScheme="green">
                    <TagLeftIcon boxSize="12px" as={FaTag}/>
                    <TagLabel>Category</TagLabel>
                </Tag>
                <Tag size="lg" variant="outline" colorScheme="purple">
                    <TagLeftIcon boxSize="14px" as={FaStar}/>
                    <TagLabel>Featured</TagLabel>
                </Tag>
            </HStack>

            <HStack spacing={4}>
                <Tag variant="solid" colorScheme="red">
                    <TagLabel>Favorite</TagLabel>
                    <TagRightIcon as={FaHeart}/>
                </Tag>
                <Tag variant="subtle" colorScheme="orange">
                    <TagLabel>Important</TagLabel>
                    <TagRightIcon as={FaStar}/>
                </Tag>
            </HStack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithCloseButton: Story = {
    render: () => (
        <Stack spacing={4}>
            <HStack spacing={4}>
                <Tag size="sm" variant="solid" colorScheme="blue">
                    <TagLabel>Removable Small</TagLabel>
                    <TagCloseButton/>
                </Tag>
                <Tag size="md" variant="subtle" colorScheme="green">
                    <TagLabel>Removable Medium</TagLabel>
                    <TagCloseButton/>
                </Tag>
                <Tag size="lg" variant="outline" colorScheme="red">
                    <TagLabel>Removable Large</TagLabel>
                    <TagCloseButton/>
                </Tag>
            </HStack>

            <HStack spacing={4}>
                <Tag variant="solid" colorScheme="purple">
                    <TagLeftIcon as={FaTag}/>
                    <TagLabel>With Icon & Close</TagLabel>
                    <TagCloseButton/>
                </Tag>
            </HStack>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ApplicationExamples: Story = {
    render: () => (
        <Stack spacing={6}>
            <div>
                <h4 style={{marginBottom: '1rem'}}>Skills & Technologies</h4>
                <Wrap spacing={2}>
                    <WrapItem>
                        <Tag colorScheme="blue">
                            <TagLabel>React</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag colorScheme="green">
                            <TagLabel>TypeScript</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag colorScheme="purple">
                            <TagLabel>Node.js</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag colorScheme="orange">
                            <TagLabel>JavaScript</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag colorScheme="red">
                            <TagLabel>HTML/CSS</TagLabel>
                        </Tag>
                    </WrapItem>
                </Wrap>
            </div>

            <div>
                <h4 style={{marginBottom: '1rem'}}>Article Tags</h4>
                <Wrap spacing={2}>
                    <WrapItem>
                        <Tag variant="outline" colorScheme="gray">
                            <TagLabel>Tutorial</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag variant="outline" colorScheme="blue">
                            <TagLabel>Beginner</TagLabel>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag variant="outline" colorScheme="green">
                            <TagLabel>Web Development</TagLabel>
                        </Tag>
                    </WrapItem>
                </Wrap>
            </div>

            <div>
                <h4 style={{marginBottom: '1rem'}}>Filter Tags (removable)</h4>
                <Wrap spacing={2}>
                    <WrapItem>
                        <Tag variant="solid" colorScheme="blue">
                            <TagLabel>Price: $0-50</TagLabel>
                            <TagCloseButton/>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag variant="solid" colorScheme="green">
                            <TagLabel>Category: Electronics</TagLabel>
                            <TagCloseButton/>
                        </Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag variant="solid" colorScheme="purple">
                            <TagLabel>Brand: Apple</TagLabel>
                            <TagCloseButton/>
                        </Tag>
                    </WrapItem>
                </Wrap>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

