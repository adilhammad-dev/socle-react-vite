import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from '../components/ui';
import {
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import {useRef, useState} from 'react';

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A modal component built with Chakra UI for displaying content in an overlay.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
        },
        isCentered: {
            control: 'boolean',
        },
        scrollBehavior: {
            control: 'select',
            options: ['inside', 'outside'],
        },
        motionPreset: {
            control: 'select',
            options: ['slideInBottom', 'slideInRight', 'scale', 'none'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const {isOpen, onOpen, onClose} = useDisclosure();

        return (
            <>
                <Button onClick={onOpen}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Text>This is a basic modal with a title, close button, body, and footer.</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Save
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => {
        const [size, setSize] = useState('md');
        const {isOpen, onOpen, onClose} = useDisclosure();

        const handleSizeClick = (newSize: string) => {
            setSize(newSize);
            onOpen();
        };

        return (
            <>
                <Stack direction="row" spacing={4}>
                    <Button onClick={() => handleSizeClick('xs')}>xs</Button>
                    <Button onClick={() => handleSizeClick('sm')}>sm</Button>
                    <Button onClick={() => handleSizeClick('md')}>md</Button>
                    <Button onClick={() => handleSizeClick('lg')}>lg</Button>
                    <Button onClick={() => handleSizeClick('xl')}>xl</Button>
                    <Button onClick={() => handleSizeClick('full')}>full</Button>
                </Stack>

                <Modal size={size} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Modal Size: {size}</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Text>This modal is using the {size} size.</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Centered: Story = {
    render: () => {
        const {isOpen, onOpen, onClose} = useDisclosure();

        return (
            <>
                <Button onClick={onOpen}>Open Centered Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Centered Modal</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Text>This modal is centered on the screen.</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const ScrollBehavior: Story = {
    render: () => {
        const {isOpen, onOpen, onClose} = useDisclosure();
        const [scrollBehavior, setScrollBehavior] = useState<'inside' | 'outside'>('inside');

        const btnRef = useRef(null);

        return (
            <>
                <Stack direction="row" spacing={4}>
                    <Button
                        onClick={() => {
                            setScrollBehavior('inside');
                            onOpen();
                        }}
                    >
                        Open Modal - Inside Scroll
                    </Button>
                    <Button
                        onClick={() => {
                            setScrollBehavior('outside');
                            onOpen();
                        }}
                    >
                        Open Modal - Outside Scroll
                    </Button>
                </Stack>

                <Modal
                    onClose={onClose}
                    isOpen={isOpen}
                    scrollBehavior={scrollBehavior}
                >
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            <Text mt={4}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </Text>
                            <Text mt={4}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </Text>
                            <Text mt={4}>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </Text>
                            <Text mt={4}>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem.
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const MotionPresets: Story = {
    render: () => {
        const {isOpen, onOpen, onClose} = useDisclosure();
        const [motionPreset, setMotionPreset] = useState<'slideInBottom' | 'slideInRight' | 'scale' | 'none'>('slideInBottom');

        const handleMotionClick = (preset: 'slideInBottom' | 'slideInRight' | 'scale' | 'none') => {
            setMotionPreset(preset);
            onOpen();
        };

        return (
            <>
                <Stack direction="row" spacing={2} wrap="wrap">
                    <Button onClick={() => handleMotionClick('slideInBottom')}>
                        Slide In Bottom
                    </Button>
                    <Button onClick={() => handleMotionClick('slideInRight')}>
                        Slide In Right
                    </Button>
                    <Button onClick={() => handleMotionClick('scale')}>
                        Scale
                    </Button>
                    <Button onClick={() => handleMotionClick('none')}>
                        None
                    </Button>
                </Stack>

                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    motionPreset={motionPreset}
                >
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Motion Preset: {motionPreset}</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Text>This modal uses the {motionPreset} motion preset.</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};


