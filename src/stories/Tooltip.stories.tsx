import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from 'components/ui';
import { Button } from 'components/ui';

const meta: Meta<typeof Tooltip> = {
  title: 'Basic/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DefaultTooltip: Story = {
  args: {
    title: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>,
  },
};

export const TopTooltip: Story = {
  args: {
    title: 'Top tooltip',
    placement: 'top',
    children: <Button variant="outline">Top</Button>,
  },
};

export const RightTooltip: Story = {
  args: {
    title: 'Right tooltip',
    placement: 'right',
    children: <Button variant="outline">Right</Button>,
  },
};

export const BottomTooltip: Story = {
  args: {
    title: 'Bottom tooltip',
    placement: 'bottom',
    children: <Button variant="outline">Bottom</Button>,
  },
};

export const LeftTooltip: Story = {
  args: {
    title: 'Left tooltip',
    placement: 'left',
    children: <Button variant="outline">Left</Button>,
  },
};

