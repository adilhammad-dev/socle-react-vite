import type {Meta, StoryObj} from '@storybook/react';
import {Button, Card} from 'components/ui';
import {Typography} from '@mui/material';

const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: {type: 'range', min: 0, max: 24, step: 1},
        },
        variant: {
            control: 'select',
            options: ['elevation', 'outlined'],
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Typography>This is card content</Typography>,
    },
};

export const WithTitle: Story = {
    args: {
        title: 'Card Title',
        children: <Typography>This is card content with a title</Typography>,
    },
};

export const WithSubtitle: Story = {
    args: {
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        children: <Typography>This is card content with title and subtitle</Typography>,
    },
};

export const WithActions: Story = {
    args: {
        title: 'Card with Actions',
        children: <Typography>This card has action buttons</Typography>,
        actions: (
            <>
                <Button size="small" variant="text">Cancel</Button>
                <Button size="small">Confirm</Button>
            </>
        ),
    },
};

export const WithImage: Story = {
    args: {
        title: 'Beautiful Landscape',
        subtitle: 'Photo by Nature',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        children: <Typography>A stunning mountain landscape at sunrise</Typography>,
        actions: <Button size="small">View More</Button>,
    },
};

export const Outlined: Story = {
    args: {
        title: 'Outlined Card',
        variant: 'outlined',
        children: <Typography>This card uses the outlined variant</Typography>,
    },
};

export const HighElevation: Story = {
    args: {
        title: 'High Elevation',
        elevation: 10,
        children: <Typography>This card has high elevation shadow</Typography>,
    },
};

export const Clickable: Story = {
    args: {
        title: 'Clickable Card',
        children: <Typography>Click this card to trigger an action</Typography>,
        onClick: () => alert('Card clicked!'),
    },
};

