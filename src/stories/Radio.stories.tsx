import type {Meta, StoryObj} from '@storybook/react';
import {Radio} from '../components/ui';
import {RadioGroup, Stack, VStack} from '@chakra-ui/react';
import {useState} from 'react';

const meta: Meta<typeof Radio> = {
    title: 'UI/Radio',
    component: Radio,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A radio button component built with Chakra UI for single selection from multiple options.',
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
        isInvalid: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Radio option',
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4}>
            <Radio size="sm">Small radio</Radio>
            <Radio size="md">Medium radio</Radio>
            <Radio size="lg">Large radio</Radio>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={3}>
            <Radio colorScheme="blue" defaultChecked name="colors">Blue</Radio>
            <Radio colorScheme="green" name="colors">Green</Radio>
            <Radio colorScheme="red" name="colors">Red</Radio>
            <Radio colorScheme="orange" name="colors">Orange</Radio>
            <Radio colorScheme="purple" name="colors">Purple</Radio>
            <Radio colorScheme="teal" name="colors">Teal</Radio>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={3}>
            <Radio name="states1">Unchecked</Radio>
            <Radio name="states2" defaultChecked>Checked</Radio>
            <Radio name="states3" isDisabled>Disabled</Radio>
            <Radio name="states4" isDisabled defaultChecked>Disabled Checked</Radio>
            <Radio name="states5" isInvalid>Invalid</Radio>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const RadioGroupExample: Story = {
    render: () => {
        const [value, setValue] = useState('1');

        return (
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column" spacing={3}>
                    <Radio value="1">First</Radio>
                    <Radio value="2">Second</Radio>
                    <Radio value="3">Third</Radio>
                </Stack>
            </RadioGroup>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const HorizontalGroup: Story = {
    render: () => (
        <RadioGroup defaultValue="medium">
            <Stack direction="row" spacing={5}>
                <Radio value="small">Small</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="large">Large</Radio>
            </Stack>
        </RadioGroup>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const NestedOptions: Story = {
    render: () => (
        <VStack align="start" spacing={3}>
            <RadioGroup defaultValue="option1">
                <Stack spacing={2}>
                    <Radio value="option1">Option 1</Radio>
                    <VStack align="start" spacing={1} ml={6}>
                        <Radio value="sub1" size="sm">Sub-option 1.1</Radio>
                        <Radio value="sub2" size="sm">Sub-option 1.2</Radio>
                    </VStack>
                    <Radio value="option2">Option 2</Radio>
                    <Radio value="option3">Option 3</Radio>
                </Stack>
            </RadioGroup>
        </VStack>
    ),
    parameters: {
        controls: {disable: true},
    },
};
