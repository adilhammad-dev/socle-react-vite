import type {Meta, StoryObj} from '@storybook/react';
import {Select} from '../components/ui';
import {Stack} from '@chakra-ui/react';

const meta: Meta<typeof Select> = {
    title: 'UI/Select',
    component: Select,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A select dropdown component built with Chakra UI for choosing from multiple options.',
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
        placeholder: 'Select option',
        children: (
            <>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </>
        ),
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Select placeholder="Extra small select" size="xs">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Small select" size="sm">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Medium select" size="md">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Large select" size="lg">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Select placeholder="Outline variant" variant="outline">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Filled variant" variant="filled">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Flushed variant" variant="flushed">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Unstyled variant" variant="unstyled">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Select placeholder="Normal select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Focused select" focusBorderColor="blue.400">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Invalid select" isInvalid errorBorderColor="red.300">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
            <Select placeholder="Disabled select" isDisabled>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithGroups: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Select placeholder="Choose a framework">
                <optgroup label="Frontend">
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                </optgroup>
                <optgroup label="Backend">
                    <option value="node">Node.js</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </optgroup>
            </Select>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Preselected: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <Select defaultValue="option2">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2 (Default)</option>
                <option value="option3">Option 3</option>
            </Select>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

