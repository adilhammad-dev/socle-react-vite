import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from 'components/ui';

const meta: Meta<typeof Divider> = {
  title: 'Basic/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const HorizontalDivider: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const VerticalDivider: Story = {
  args: {
    orientation: 'vertical',
    flexItem: true,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', height: 100 }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
};

