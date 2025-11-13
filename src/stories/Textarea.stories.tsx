import type {Meta, StoryObj} from '@storybook/react';
import {Textarea} from '../components/ui';
import {Stack} from '@chakra-ui/react';

const meta: Meta<typeof Textarea> = {
    title: 'UI/Textarea',
    component: Textarea,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A textarea component built with Chakra UI for multi-line text input.',
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
        resize: {
            control: 'select',
            options: ['horizontal', 'vertical', 'both', 'none'],
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
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your message...',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Textarea placeholder="Extra small textarea" size="xs"/>
            <Textarea placeholder="Small textarea" size="sm"/>
            <Textarea placeholder="Medium textarea" size="md"/>
            <Textarea placeholder="Large textarea" size="lg"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Textarea placeholder="Outline variant" variant="outline"/>
            <Textarea placeholder="Filled variant" variant="filled"/>
            <Textarea placeholder="Flushed variant" variant="flushed"/>
            <Textarea placeholder="Unstyled variant" variant="unstyled"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Resize: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Textarea placeholder="Resize horizontal" resize="horizontal"/>
            <Textarea placeholder="Resize vertical" resize="vertical"/>
            <Textarea placeholder="Resize both" resize="both"/>
            <Textarea placeholder="No resize" resize="none"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Textarea placeholder="Normal textarea"/>
            <Textarea placeholder="Focused textarea" focusBorderColor="blue.400"/>
            <Textarea placeholder="Invalid textarea" isInvalid errorBorderColor="red.300"/>
            <Textarea placeholder="Disabled textarea" isDisabled/>
            <Textarea placeholder="Read only textarea" isReadOnly value="This content cannot be edited"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithRows: Story = {
    render: () => (
        <Stack spacing={4} width="400px">
            <Textarea placeholder="2 rows" rows={2}/>
            <Textarea placeholder="4 rows" rows={4}/>
            <Textarea placeholder="6 rows" rows={6}/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

