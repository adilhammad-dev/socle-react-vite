import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'components/ui';
import { Button } from 'components/ui';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a simple card with content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    children: 'This card has both title and subtitle.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature photography',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    children: 'A stunning view of mountains and sky.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Product Card',
    children: 'Product description goes here.',
    footer: (
      <>
        <Button variant="outline" size="small">Cancel</Button>
        <Button variant="primary" size="small">Buy Now</Button>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'This card is clickable.',
    onClick: () => alert('Card clicked!'),
  },
};

