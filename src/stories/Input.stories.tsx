import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Input} from '../components/ui';
import {InputGroup, InputLeftElement, InputRightElement, Stack} from '@chakra-ui/react';
import {FaEye, FaSearch, FaUser} from 'react-icons/fa';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A versatile input component built with Chakra UI for collecting user data.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'flushed', 'unstyled'],
        },
        placeholder: {
            control: 'text',
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
        focusBorderColor: {
            control: 'text',
        },
        errorBorderColor: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="280px">
            <Input placeholder="Extra small" size="xs"/>
            <Input placeholder="Small" size="sm"/>
            <Input placeholder="Medium" size="md"/>
            <Input placeholder="Large" size="lg"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={4} width="300px">
  <Input placeholder="Extra small" size="xs"/>
  <Input placeholder="Small" size="sm"/>
  <Input placeholder="Medium" size="md"/>
  <Input placeholder="Large" size="lg"/>
</Stack>`
            },
            story: {
                inline: true,
                height: '200px',
            },
        }
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} width="280px">
            <Input placeholder="Outline variant" variant="outline"/>
            <Input placeholder="Filled variant" variant="filled"/>
            <Input placeholder="Flushed variant" variant="flushed"/>
            <Input placeholder="Unstyled variant" variant="unstyled"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={4} width="300px">
  <Input placeholder="Outline variant" variant="outline"/>
  <Input placeholder="Filled variant" variant="filled"/>
  <Input placeholder="Flushed variant" variant="flushed"/>
  <Input placeholder="Unstyled variant" variant="unstyled"/>
</Stack>`
            },
            story: {
                inline: true,
                height: '200px',
            },
        }
    },
};

export const WithIcons: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <InputGroup>
                <InputLeftElement>
                    <FaSearch color="gray"/>
                </InputLeftElement>
                <Input placeholder="Search..."/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement>
                    <FaUser color="gray"/>
                </InputLeftElement>
                <Input placeholder="Username"/>
            </InputGroup>

            <InputGroup>
                <Input placeholder="Password" type="password"/>
                <InputRightElement>
                    <FaEye color="gray"/>
                </InputRightElement>
            </InputGroup>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Input placeholder="Normal input"/>
            <Input placeholder="Focused input" focusBorderColor="blue.400"/>
            <Input placeholder="Invalid input" isInvalid errorBorderColor="red.300"/>
            <Input placeholder="Disabled input" isDisabled/>
            <Input placeholder="Read only input" isReadOnly value="Cannot be edited"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Types: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Input placeholder="Text input" type="text"/>
            <Input placeholder="Email input" type="email"/>
            <Input placeholder="Password input" type="password"/>
            <Input placeholder="Number input" type="number"/>
            <Input placeholder="Date input" type="date"/>
            <Input placeholder="URL input" type="url"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};


