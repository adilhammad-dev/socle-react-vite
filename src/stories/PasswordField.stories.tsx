import type {Meta, StoryObj} from '@storybook/react';
import {PasswordField} from '../components/ui';
import {FormControl, FormHelperText, FormLabel, Stack} from '@chakra-ui/react';

const meta: Meta<typeof PasswordField> = {
    title: 'UI/PasswordField',
    component: PasswordField,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A password input field component with show/hide toggle functionality.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Size of the password field',
        },
        variant: {
            control: {type: 'select'},
            options: ['outline', 'filled', 'flushed', 'unstyled'],
            description: 'Variant of the password field',
        },
        placeholder: {
            control: {type: 'text'},
            description: 'Placeholder text',
        },
        isDisabled: {
            control: {type: 'boolean'},
            description: 'Whether the field is disabled',
        },
        isInvalid: {
            control: {type: 'boolean'},
            description: 'Whether the field is in invalid state',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your password',
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <div>
                <FormLabel fontSize="xs">Extra Small</FormLabel>
                <PasswordField size="xs" placeholder="Password"/>
            </div>
            <div>
                <FormLabel fontSize="sm">Small</FormLabel>
                <PasswordField size="sm" placeholder="Password"/>
            </div>
            <div>
                <FormLabel>Medium</FormLabel>
                <PasswordField size="md" placeholder="Password"/>
            </div>
            <div>
                <FormLabel fontSize="lg">Large</FormLabel>
                <PasswordField size="lg" placeholder="Password"/>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <div>
                <FormLabel>Outline (default)</FormLabel>
                <PasswordField variant="outline" placeholder="Outline password"/>
            </div>
            <div>
                <FormLabel>Filled</FormLabel>
                <PasswordField variant="filled" placeholder="Filled password"/>
            </div>
            <div>
                <FormLabel>Flushed</FormLabel>
                <PasswordField variant="flushed" placeholder="Flushed password"/>
            </div>
            <div>
                <FormLabel>Unstyled</FormLabel>
                <PasswordField variant="unstyled" placeholder="Unstyled password"/>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <FormControl>
                <FormLabel>Normal</FormLabel>
                <PasswordField placeholder="Enter password"/>
            </FormControl>

            <FormControl isDisabled>
                <FormLabel>Disabled</FormLabel>
                <PasswordField placeholder="Disabled password"/>
            </FormControl>

            <FormControl isInvalid>
                <FormLabel>Invalid</FormLabel>
                <PasswordField placeholder="Invalid password"/>
                <FormHelperText color="red.500">Password is required</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel>With Helper Text</FormLabel>
                <PasswordField placeholder="Create password"/>
                <FormHelperText>Password must be at least 8 characters long</FormHelperText>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const FormExample: Story = {
    render: () => (
        <Stack spacing={6} maxW="400px" p={6} border="1px" borderColor="gray.200" borderRadius="md">
            <div>
                <h3 style={{margin: 0, marginBottom: '1rem'}}>Create Account</h3>
            </div>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <PasswordField type="email" placeholder="Enter your email"/>
            </FormControl>

            <FormControl>
                <FormLabel>Password</FormLabel>
                <PasswordField placeholder="Create a password"/>
                <FormHelperText>Must be at least 8 characters with numbers and symbols</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <PasswordField placeholder="Confirm your password"/>
            </FormControl>

            <div style={{paddingTop: '1rem'}}>
                <button
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        cursor: 'pointer'
                    }}
                >
                    Sign Up
                </button>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

