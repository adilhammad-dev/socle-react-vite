import type {Meta, StoryObj} from '@storybook/react';
import {Loader} from 'components/feedback';

const meta = {
    title: 'Feedback/Loader',
    component: Loader,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithText: Story = {
    args: {
        text: 'Loading your data...',
    },
};

export const Processing: Story = {
    args: {
        text: 'Processing files, please wait...',
    },
};

export const Uploading: Story = {
    args: {
        text: 'Uploading... This may take a few moments.',
    },
};

