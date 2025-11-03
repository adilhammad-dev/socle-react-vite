import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'UI/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  args: { label: 'Date' },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {};
export const WithError: Story = { args: { error: 'Please select a date' } };


