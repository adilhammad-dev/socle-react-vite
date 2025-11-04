import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from 'components/ui';
import { Star } from '@mui/icons-material';

const meta: Meta<typeof Chip> = {
  title: 'Basic/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const DefaultChip: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const PrimaryChip: Story = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
};

export const SuccessChip: Story = {
  args: {
    label: 'Success',
    color: 'success',
  },
};

export const DeletableChip: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => console.log('Deleted'),
  },
};

export const ChipWithIcon: Story = {
  args: {
    label: 'With Icon',
    icon: <Star />,
    color: 'primary',
  },
};

export const OutlinedChip: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    color: 'primary',
  },
};

export const SmallChip: Story = {
  args: {
    label: 'Small',
    size: 'small',
    color: 'secondary',
  },
};

