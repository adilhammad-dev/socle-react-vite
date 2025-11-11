import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from 'components/data-display';
import {Typography} from '@mui/material';

const meta = {
    title: 'Data Display/Accordion',
    component: Accordion,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        defaultExpanded: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Accordion Title',
        children: <Typography>This is the accordion content that can be expanded and collapsed.</Typography>,
    },
};

export const Expanded: Story = {
    args: {
        title: 'Expanded by Default',
        defaultExpanded: true,
        children: <Typography>This accordion is expanded by default.</Typography>,
    },
};

export const WithRichContent: Story = {
    args: {
        title: 'Features',
        children: (
            <div>
                <Typography paragraph>This accordion contains rich content:</Typography>
                <ul>
                    <li>Feature 1: Advanced analytics</li>
                    <li>Feature 2: Real-time updates</li>
                    <li>Feature 3: Cloud storage</li>
                    <li>Feature 4: Team collaboration</li>
                </ul>
            </div>
        ),
    },
};

export const FAQ: Story = {
    args: {
        title: 'How do I reset my password?',
        children: (
            <Typography>
                To reset your password, go to the login page and click "Forgot Password".
                You'll receive an email with instructions to create a new password.
            </Typography>
        ),
    },
};

