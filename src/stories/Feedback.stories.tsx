import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Toast, Modal, Dialog, ProgressBar, Spinner, Skeleton, EmptyState } from 'components/ui';
import { Button } from 'components/ui';
import { Inbox } from '@mui/icons-material';
import { useState } from 'react';

// Alert Stories
const alertMeta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default alertMeta;

export const SuccessAlert: StoryObj<typeof Alert> = {
  args: {
    severity: 'success',
    title: 'Success',
    children: 'Operation completed successfully!',
  },
};

export const InfoAlert: StoryObj<typeof Alert> = {
  args: {
    severity: 'info',
    children: 'This is an informational message.',
  },
};

export const WarningAlert: StoryObj<typeof Alert> = {
  args: {
    severity: 'warning',
    children: 'Please be careful with this action.',
  },
};

export const ErrorAlert: StoryObj<typeof Alert> = {
  args: {
    severity: 'error',
    title: 'Error',
    children: 'Something went wrong!',
  },
};

// Progress Bar
export const ProgressBarStory: StoryObj<typeof ProgressBar> = {
  render: () => <ProgressBar value={75} showLabel />,
  name: 'Progress Bar',
};

// Spinner
export const SpinnerStory: StoryObj<typeof Spinner> = {
  render: () => <Spinner size="large" label="Loading..." />,
  name: 'Spinner',
};

// Skeleton
export const SkeletonStory: StoryObj<typeof Skeleton> = {
  render: () => (
    <div style={{ width: 300 }}>
      <Skeleton variant="text" count={3} />
      <Skeleton variant="rectangular" height={100} />
    </div>
  ),
  name: 'Skeleton',
};

// Empty State
export const EmptyStateStory: StoryObj<typeof EmptyState> = {
  render: () => (
    <EmptyState
      icon={<Inbox style={{ fontSize: 64 }} />}
      title="No items found"
      description="You don't have any items yet."
      action={<Button variant="primary">Create Item</Button>}
    />
  ),
  name: 'Empty State',
};

// Modal with state
export const ModalStory = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: 20 }}>
            <h2>Modal Title</h2>
            <p>This is modal content.</p>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  },
  name: 'Modal',
};

// Dialog with state
export const DialogStory = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          Are you sure you want to continue?
        </Dialog>
      </>
    );
  },
  name: 'Dialog',
};

