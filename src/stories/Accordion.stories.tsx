import type {Meta, StoryObj} from '@storybook/react';
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from '../components/ui';
import {Box} from '@chakra-ui/react';

const meta: Meta<typeof Accordion> = {
    title: 'UI/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'An accordion component built with Chakra UI for collapsible content sections.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        allowMultiple: {
            control: {type: 'boolean'},
            description: 'Allow multiple items to be expanded at once',
        },
        allowToggle: {
            control: {type: 'boolean'},
            description: 'Allow items to be toggled',
        },
        defaultIndex: {
            control: {type: 'number'},
            description: 'Default expanded item index',
        },
        variant: {
            control: {type: 'select'},
            options: ['outline', 'filled', 'unstyled'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Accordion defaultIndex={[0]} allowMultiple width="400px">
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Section 1 title
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Section 2 title
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const SingleAllowed: Story = {
    render: () => (
        <Accordion allowToggle width="400px">
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Click to expand
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Only one item can be open at a time.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            Another section
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Opening this will close the previous one.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const FAQ: Story = {
    render: () => (
        <Accordion defaultIndex={[0]} allowMultiple width="500px">
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontWeight="medium">
                            How do I change my password?
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    You can change your password by going to Settings → Security → Change Password.
                    Make sure to use a strong password with at least 8 characters.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontWeight="medium">
                            Can I cancel my subscription?
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Yes, you can cancel your subscription at any time from your account dashboard.
                    Your access will remain active until the end of your current billing period.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" fontWeight="medium">
                            Is my data secure?
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    We take data security seriously. All data is encrypted in transit and at rest,
                    and we follow industry best practices for data protection.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        controls: {disable: true},
    },
};

