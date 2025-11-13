import type {Meta, StoryObj} from '@storybook/react';
import {Alert} from '../components/ui';
import {AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Stack} from '@chakra-ui/react';

const meta: Meta<typeof Alert> = {
    title: 'UI/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'An alert component built with Chakra UI for displaying important messages to users.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['info', 'warning', 'success', 'error', 'loading'],
        },
        variant: {
            control: 'select',
            options: ['subtle', 'left-accent', 'top-accent', 'solid'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        status: 'info',
        children: (
            <>
                <AlertIcon/>
                Data uploaded to the server. Fire on!
            </>
        ),
    },
    parameters: {
        controls: {disable: true},
    },
};

export const StatusTypes: Story = {
    render: () => (
        <Stack spacing={3} width="380px" maxWidth="100%">
            <Alert status="error">
                <AlertIcon/>
                There was an error processing your request
            </Alert>
            <Alert status="success">
                <AlertIcon/>
                Data uploaded to the server. Fire on!
            </Alert>
            <Alert status="warning">
                <AlertIcon/>
                Seems your account is about to expire, upgrade now
            </Alert>
            <Alert status="info">
                <AlertIcon/>
                Chakra is going live on August 30th. Get ready!
            </Alert>
            <Alert status="loading">
                <AlertIcon/>
                Uploading your files...
            </Alert>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={3} width="400px">
  <Alert status="error">
    <AlertIcon/>
    There was an error processing your request
  </Alert>
  <Alert status="success">
    <AlertIcon/>
    Data uploaded to the server. Fire on!
  </Alert>
  <Alert status="warning">
    <AlertIcon/>
    Seems your account is about to expire, upgrade now
  </Alert>
  <Alert status="info">
    <AlertIcon/>
    Chakra is going live on August 30th. Get ready!
  </Alert>
</Stack>`
            },
            story: {
                inline: true,
                height: '300px',
            },
        }
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={3} width="400px">
            <Alert status="success" variant="subtle">
                <AlertIcon/>
                Subtle variant
            </Alert>
            <Alert status="success" variant="left-accent">
                <AlertIcon/>
                Left accent variant
            </Alert>
            <Alert status="success" variant="top-accent">
                <AlertIcon/>
                Top accent variant
            </Alert>
            <Alert status="success" variant="solid">
                <AlertIcon/>
                Solid variant
            </Alert>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithTitleAndDescription: Story = {
    render: () => (
        <Stack spacing={3} width="400px">
            <Alert status="error">
                <AlertIcon/>
                <Box>
                    <AlertTitle>Your browser is outdated!</AlertTitle>
                    <AlertDescription>
                        Your Chakra experience may be degraded.
                    </AlertDescription>
                </Box>
            </Alert>
            <Alert status="success">
                <AlertIcon/>
                <Box>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        Your application has been received. We will review your application and respond within the next
                        48 hours.
                    </AlertDescription>
                </Box>
            </Alert>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithCloseButton: Story = {
    render: () => (
        <Stack spacing={3} width="400px">
            <Alert status="warning" variant="left-accent">
                <AlertIcon/>
                <Box>
                    <AlertTitle>Warning!</AlertTitle>
                    <AlertDescription>
                        Your session will expire in 5 minutes.
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf="flex-start"
                    position="relative"
                    right={-1}
                    top={-1}
                />
            </Alert>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const CustomContent: Story = {
    render: () => (
        <Stack spacing={3} width="400px">
            <Alert status="info" variant="top-accent">
                <AlertIcon/>
                <Box flex="1">
                    <AlertTitle>Holy guacamole!</AlertTitle>
                    <AlertDescription display="block">
                        Something just happened! You should check it out.
                    </AlertDescription>
                </Box>
                <CloseButton position="absolute" right="8px" top="8px"/>
            </Alert>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};


