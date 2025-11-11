import type {Meta, StoryObj} from '@storybook/react';
import {Button, Tooltip} from 'components/ui';

const meta = {
    title: 'UI/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
        },
        arrow: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'This is a tooltip',
        children: <Button>Hover Me</Button>,
    },
};

export const Top: Story = {
    args: {
        title: 'Tooltip on top',
        placement: 'top',
        children: <Button>Top</Button>,
    },
};

export const Bottom: Story = {
    args: {
        title: 'Tooltip on bottom',
        placement: 'bottom',
        children: <Button>Bottom</Button>,
    },
};

export const Left: Story = {
    args: {
        title: 'Tooltip on left',
        placement: 'left',
        children: <Button>Left</Button>,
    },
};

export const Right: Story = {
    args: {
        title: 'Tooltip on right',
        placement: 'right',
        children: <Button>Right</Button>,
    },
};

export const NoArrow: Story = {
    args: {
        title: 'Tooltip without arrow',
        arrow: false,
        children: <Button>No Arrow</Button>,
    },
};

export const LongText: Story = {
    args: {
        title: 'This is a longer tooltip with more text to demonstrate how tooltips handle longer content',
        children: <Button>Hover for Long Text</Button>,
    },
};

