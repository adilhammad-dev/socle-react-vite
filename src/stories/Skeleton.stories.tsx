import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from 'components/feedback';

const meta = {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        lines: {
            control: {type: 'range', min: 1, max: 10, step: 1},
        },
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        lines: 3,
    },
};

export const SingleLine: Story = {
    args: {
        lines: 1,
    },
};

export const ManyLines: Story = {
    args: {
        lines: 7,
    },
};

export const Article: Story = {
    args: {
        lines: 5,
    },
};

