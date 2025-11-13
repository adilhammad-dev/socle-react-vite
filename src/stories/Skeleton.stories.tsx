import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import {Skeleton} from '../components/ui';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    SkeletonCircle,
    SkeletonText,
    Spacer,
    Stack
} from '@chakra-ui/react';

const meta: Meta<typeof Skeleton> = {
    title: 'UI/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A skeleton component built with Chakra UI for showing loading placeholders.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isLoaded: {
            control: 'boolean',
        },
        fadeDuration: {
            control: 'number',
        },
        speed: {
            control: 'number',
        },
        startColor: {
            control: 'text',
        },
        endColor: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Stack spacing={3}>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const SkeletonTypes: Story = {
    render: () => (
        <Stack spacing={6}>
            <Box>
                <h4 style={{marginBottom: '1rem'}}>Skeleton Lines</h4>
                <Stack spacing={3}>
                    <Skeleton height="20px"/>
                    <Skeleton height="20px"/>
                    <Skeleton height="20px"/>
                </Stack>
            </Box>

            <Box>
                <h4 style={{marginBottom: '1rem'}}>Skeleton Text</h4>
                <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2"/>
            </Box>

            <Box>
                <h4 style={{marginBottom: '1rem'}}>Skeleton Circle</h4>
                <Flex align="center" gap={4}>
                    <SkeletonCircle size="50"/>
                    <SkeletonCircle size="75"/>
                    <SkeletonCircle size="100"/>
                </Flex>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const LoadingStates: Story = {
    render: () => {
        const [isLoaded, setIsLoaded] = useState(false);

        setTimeout(() => setIsLoaded(true), 3000);

        return (
            <Box maxW="400px">
                <Skeleton isLoaded={isLoaded}>
                    <Box p={4} bg="blue.50" rounded="md">
                        Content has loaded! This text appears after the skeleton animation.
                    </Box>
                </Skeleton>

                <Box mt={4} fontSize="sm" color="gray.500">
                    {isLoaded ? 'Content loaded!' : 'Loading... (will load in 3 seconds)'}
                </Box>
            </Box>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const CardSkeleton: Story = {
    render: () => (
        <Card maxW="sm">
            <CardHeader>
                <Flex>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <SkeletonCircle size="10"/>
                        <Box>
                            <Skeleton height="20px" width="100px"/>
                            <Skeleton height="15px" width="150px" mt={2}/>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2"/>
            </CardBody>
            <CardFooter>
                <Flex gap={2}>
                    <Skeleton height="30px" width="80px"/>
                    <Skeleton height="30px" width="80px"/>
                </Flex>
            </CardFooter>
        </Card>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const UserProfileSkeleton: Story = {
    render: () => (
        <Stack spacing={6} maxW="300px">
            {/* Profile Header */}
            <Flex align="center" gap={4}>
                <SkeletonCircle size="60"/>
                <Box flex="1">
                    <Skeleton height="20px" mb={2}/>
                    <Skeleton height="15px" width="80%"/>
                </Box>
            </Flex>

            {/* Profile Details */}
            <Stack spacing={3}>
                <Skeleton height="15px"/>
                <Skeleton height="15px" width="90%"/>
                <Skeleton height="15px" width="70%"/>
            </Stack>

            {/* Action Buttons */}
            <Flex gap={2}>
                <Skeleton height="35px" flex={1}/>
                <Skeleton height="35px" flex={1}/>
            </Flex>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ArticleSkeleton: Story = {
    render: () => (
        <Box maxW="600px">
            {/* Article Title */}
            <Skeleton height="30px" mb={4}/>
            <Skeleton height="20px" width="60%" mb={6}/>

            {/* Article Meta */}
            <Flex align="center" gap={4} mb={6}>
                <SkeletonCircle size="8"/>
                <Skeleton height="15px" width="100px"/>
                <Spacer/>
                <Skeleton height="15px" width="80px"/>
            </Flex>

            {/* Article Content */}
            <SkeletonText noOfLines={8} spacing="4" skeletonHeight="3"/>
        </Box>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const CustomColors: Story = {
    render: () => (
        <Stack spacing={4}>
            <Box>
                <h4 style={{marginBottom: '1rem'}}>Default Colors</h4>
                <Stack spacing={2}>
                    <Skeleton height="20px"/>
                    <Skeleton height="20px"/>
                </Stack>
            </Box>

            <Box>
                <h4 style={{marginBottom: '1rem'}}>Custom Colors</h4>
                <Stack spacing={2}>
                    <Skeleton height="20px" startColor="pink.500" endColor="orange.500"/>
                    <Skeleton height="20px" startColor="blue.100" endColor="blue.300"/>
                    <Skeleton height="20px" startColor="green.100" endColor="green.300"/>
                </Stack>
            </Box>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

