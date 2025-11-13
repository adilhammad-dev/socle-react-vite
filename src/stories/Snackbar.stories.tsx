import type {Meta, StoryObj} from '@storybook/react';
import {Snackbar} from '../components/ui';
import {Button, Stack, Text, VStack} from '@chakra-ui/react';
import {useSnackbar} from "components/ui/Snackbar";

const meta: Meta<typeof Snackbar> = {
    title: 'UI/Snackbar',
    component: Snackbar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A custom snackbar/toast component built with Chakra UI useToast hook for displaying notifications.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        message: {
            control: {type: 'text'},
            description: 'The message to display in the toast',
        },
        status: {
            control: {type: 'select'},
            options: ['success', 'error', 'warning', 'info'],
            description: 'The status/type of the toast',
        },
        duration: {
            control: {type: 'number'},
            description: 'Duration in milliseconds',
        },
        isClosable: {
            control: {type: 'boolean'},
            description: 'Whether the toast can be closed manually',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: 'This is a default toast message',
        status: 'info',
        duration: 5000,
        isClosable: true,
    },
};

export const StatusTypes: Story = {
    render: () => (
        <Stack spacing={4}>
            <Snackbar
                message="Success! Operation completed successfully"
                status="success"
            />
            <Snackbar
                message="Error! Something went wrong"
                status="error"
            />
            <Snackbar
                message="Warning! Please check your input"
                status="warning"
            />
            <Snackbar
                message="Info: Here's some helpful information"
                status="info"
            />
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithHook: Story = {
    render: () => {
        const {showSnackbar} = useSnackbar();

        const handleSuccess = () => {
            showSnackbar({
                title: 'Success!',
                description: 'Your action was completed successfully.',
                status: 'success',
                duration: 3000,
            });
        };

        const handleError = () => {
            showSnackbar({
                title: 'Error!',
                description: 'Something went wrong. Please try again.',
                status: 'error',
                duration: 5000,
            });
        };

        const handleWarning = () => {
            showSnackbar({
                title: 'Warning!',
                description: 'Please review your input before proceeding.',
                status: 'warning',
                duration: 4000,
            });
        };

        const handleInfo = () => {
            showSnackbar({
                title: 'Information',
                description: 'Here is some helpful information for you.',
                status: 'info',
                duration: 3000,
            });
        };

        return (
            <VStack spacing={4}>
                <Text fontWeight="bold">Using useSnackbar Hook Directly</Text>
                <Stack direction="row" spacing={4}>
                    <Button colorScheme="green" onClick={handleSuccess}>
                        Show Success
                    </Button>
                    <Button colorScheme="red" onClick={handleError}>
                        Show Error
                    </Button>
                    <Button colorScheme="orange" onClick={handleWarning}>
                        Show Warning
                    </Button>
                    <Button colorScheme="blue" onClick={handleInfo}>
                        Show Info
                    </Button>
                </Stack>
            </VStack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Customization: Story = {
    render: () => {
        const {showSnackbar} = useSnackbar();

        const handleTopLeft = () => {
            showSnackbar({
                title: 'Top Left Toast',
                status: 'info',
                position: 'top-left',
                duration: 3000,
            });
        };

        const handleBottomRight = () => {
            showSnackbar({
                title: 'Bottom Right Toast',
                status: 'success',
                position: 'bottom-right',
                duration: 3000,
            });
        };

        const handleLongDuration = () => {
            showSnackbar({
                title: 'Long Duration Toast',
                description: 'This toast will stay for 10 seconds',
                status: 'warning',
                duration: 10000,
            });
        };

        const handleNotClosable = () => {
            showSnackbar({
                title: 'Auto Close Only',
                description: 'This toast cannot be closed manually',
                status: 'error',
                isClosable: false,
                duration: 3000,
            });
        };

        return (
            <VStack spacing={4}>
                <Text fontWeight="bold">Custom Toast Configurations</Text>
                <Stack direction="row" spacing={2} wrap="wrap">
                    <Button size="sm" onClick={handleTopLeft}>
                        Top Left
                    </Button>
                    <Button size="sm" onClick={handleBottomRight}>
                        Bottom Right
                    </Button>
                    <Button size="sm" onClick={handleLongDuration}>
                        Long Duration (10s)
                    </Button>
                    <Button size="sm" onClick={handleNotClosable}>
                        Not Closable
                    </Button>
                </Stack>
            </VStack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};
