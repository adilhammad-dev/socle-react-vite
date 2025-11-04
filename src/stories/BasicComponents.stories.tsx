import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'components/ui';

// Typography Stories
const meta: Meta<typeof Typography> = {
  title: 'Basic/Typography',
  component: Typography,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
    },
  },
};

export default meta;

export const Heading1: StoryObj<typeof Typography> = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: StoryObj<typeof Typography> = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: StoryObj<typeof Typography> = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: StoryObj<typeof Typography> = {
  args: {
    variant: 'body1',
    children: 'Body 1 text - Regular paragraph text',
  },
};

export const Body2: StoryObj<typeof Typography> = {
  args: {
    variant: 'body2',
    children: 'Body 2 text - Smaller paragraph text',
  },
};

export const Caption: StoryObj<typeof Typography> = {
  args: {
    variant: 'caption',
    children: 'Caption text - Very small text',
  },
};

// Badge Stories
const badgeMeta: Meta<typeof Badge> = {
  title: 'Basic/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const StandardBadge: StoryObj<typeof Badge> = {
  args: {
    content: 5,
    color: 'error',
    children: <Mail />,
  },
};

export const DotBadge: StoryObj<typeof Badge> = {
  args: {
    variant: 'dot',
    color: 'success',
    children: <Star />,
  },
};

// Chip Stories
const chipMeta: Meta<typeof Chip> = {
  title: 'Basic/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const DefaultChip: StoryObj<typeof Chip> = {
  args: {
    label: 'Default Chip',
  },
};

export const PrimaryChip: StoryObj<typeof Chip> = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
};

export const SuccessChip: StoryObj<typeof Chip> = {
  args: {
    label: 'Success',
    color: 'success',
  },
};

export const DeletableChip: StoryObj<typeof Chip> = {
  args: {
    label: 'Deletable',
    onDelete: () => alert('Deleted!'),
  },
};

export const ChipWithIcon: StoryObj<typeof Chip> = {
  args: {
    label: 'Favorite',
    icon: <Favorite />,
    color: 'error',
  },
};

// Tooltip Stories
const tooltipMeta: Meta<typeof Tooltip> = {
  title: 'Basic/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const DefaultTooltip: StoryObj<typeof Tooltip> = {
  args: {
    title: 'Helpful tooltip text',
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const TopTooltip: StoryObj<typeof Tooltip> = {
  args: {
    title: 'Top tooltip',
    placement: 'top',
    arrow: true,
    children: <Button variant="outline">Top</Button>,
  },
};

export const RightTooltip: StoryObj<typeof Tooltip> = {
  args: {
    title: 'Right tooltip',
    placement: 'right',
    arrow: true,
    children: <Button variant="outline">Right</Button>,
  },
};

// Divider Stories
const dividerMeta: Meta<typeof Divider> = {
  title: 'Basic/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const HorizontalDivider: StoryObj<typeof Divider> = {
  args: {},
};

export const DividerWithText: StoryObj<typeof Divider> = {
  args: {
    text: 'OR',
    textAlign: 'center',
  },
};

