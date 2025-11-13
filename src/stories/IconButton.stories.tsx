import type {Meta, StoryObj} from '@storybook/react';
import {IconButton} from '../components/ui';
import {FaCog, FaEdit, FaEnvelope, FaHeart, FaPlus, FaTrash} from 'react-icons/fa';

const meta: Meta<typeof IconButton> = {
    title: 'UI/IconButton',
    component: IconButton,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'An icon button component built with Chakra UI for actions that can be represented by an icon.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost'],
        },
        isRound: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        'aria-label': 'Email',
        icon: <FaEnvelope/>,
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <IconButton aria-label="Extra Small" icon={<FaHeart/>} size="xs"/>
            <IconButton aria-label="Small" icon={<FaHeart/>} size="sm"/>
            <IconButton aria-label="Medium" icon={<FaHeart/>} size="md"/>
            <IconButton aria-label="Large" icon={<FaHeart/>} size="lg"/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <IconButton aria-label="Blue" icon={<FaHeart/>} colorScheme="blue"/>
            <IconButton aria-label="Green" icon={<FaHeart/>} colorScheme="green"/>
            <IconButton aria-label="Red" icon={<FaHeart/>} colorScheme="red"/>
            <IconButton aria-label="Orange" icon={<FaHeart/>} colorScheme="orange"/>
            <IconButton aria-label="Purple" icon={<FaHeart/>} colorScheme="purple"/>
            <IconButton aria-label="Teal" icon={<FaHeart/>} colorScheme="teal"/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <IconButton aria-label="Solid" icon={<FaCog/>} variant="solid" colorScheme="blue"/>
            <IconButton aria-label="Outline" icon={<FaCog/>} variant="outline" colorScheme="blue"/>
            <IconButton aria-label="Ghost" icon={<FaCog/>} variant="ghost" colorScheme="blue"/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Shapes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <IconButton aria-label="Square" icon={<FaPlus/>} colorScheme="blue"/>
            <IconButton aria-label="Round" icon={<FaPlus/>} colorScheme="blue" isRound/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Actions: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '0.5rem'}}>
            <IconButton aria-label="Add" icon={<FaPlus/>} colorScheme="green"/>
            <IconButton aria-label="Edit" icon={<FaEdit/>} colorScheme="blue"/>
            <IconButton aria-label="Delete" icon={<FaTrash/>} colorScheme="red"/>
            <IconButton aria-label="Settings" icon={<FaCog/>} colorScheme="gray"/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem'}}>
            <IconButton aria-label="Normal" icon={<FaHeart/>} colorScheme="blue"/>
            <IconButton aria-label="Loading" icon={<FaHeart/>} colorScheme="blue" isLoading/>
            <IconButton aria-label="Disabled" icon={<FaHeart/>} colorScheme="blue" isDisabled/>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

