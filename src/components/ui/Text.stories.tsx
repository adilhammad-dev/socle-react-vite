import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title: Story = { args: { children: 'Heading', variant: 'title' } };
export const Subtitle: Story = { args: { children: 'Subheading', variant: 'subtitle' } };
export const Body: Story = { args: { children: 'Body text', variant: 'body' } };
export const Caption: Story = { args: { children: 'Caption text', variant: 'caption', muted: true } };
export const Code: Story = { args: { children: 'const x = 1;', variant: 'code' } };


