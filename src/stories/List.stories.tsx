import type {Meta, StoryObj} from '@storybook/react';
import {List} from 'components/data-display';

const meta: Meta<typeof List> = {
    title: 'Data Display/List',
    component: List,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        getLabel: (item: string) => item,
    },
};

export const Fruits: Story = {
    args: {
        items: ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry'],
        getLabel: (item: string) => item,
    },
};

export const NumberedList: Story = {
    args: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        getLabel: (item: number) => `Item #${item}`,
    },
};

export const Tasks: Story = {
    args: {
        items: [
            'Complete project documentation',
            'Review pull requests',
            'Update dependencies',
            'Write unit tests',
            'Deploy to production',
        ],
        getLabel: (item: string) => item,
    },
};
