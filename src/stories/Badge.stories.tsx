import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'components/ui';
import { Mail, Star, Favorite } from '@mui/icons-material';

const meta: Meta<typeof Badge> = {
  title: 'Basic/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const StandardBadge: Story = {
  args: {
    content: 5,
    color: 'error',
    children: <Mail />,
  },
};

export const DotBadge: Story = {
  args: {
    variant: 'dot',
    color: 'success',
    children: <Star />,
  },
};

export const PrimaryBadge: Story = {
  args: {
    content: 99,
    color: 'primary',
    children: <Favorite />,
  },
};

export const WithMaxValue: Story = {
  args: {
    content: 1000,
    max: 999,
    color: 'secondary',
    children: <Mail />,
  },
};

