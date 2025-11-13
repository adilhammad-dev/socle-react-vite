import type {Meta, StoryObj} from '@storybook/react';
import {Card} from '../components/ui';
import {
    Button,
    ButtonGroup,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A card component built with Chakra UI for displaying content in a structured format.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'elevated', 'unstyled'],
        },
        direction: {
            control: 'select',
            options: ['column', 'row'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <Heading size="md">Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
            </>
        ),
    },
    parameters: {
        controls: {disable: true},
    },
};

export const WithImage: Story = {
    render: () => (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                        Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4}>
            <Card size="sm">
                <CardHeader>
                    <Heading size="sm">Small Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize="sm">This is a small card with compact content.</Text>
                </CardBody>
            </Card>

            <Card size="md">
                <CardHeader>
                    <Heading size="md">Medium Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This is a medium card with regular content.</Text>
                </CardBody>
            </Card>

            <Card size="lg">
                <CardHeader>
                    <Heading size="lg">Large Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize="lg">This is a large card with expanded content.</Text>
                </CardBody>
            </Card>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={4} maxW="sm">
            <Card variant="outline">
                <CardHeader>
                    <Heading size="md">Outline Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This card has an outline variant.</Text>
                </CardBody>
            </Card>

            <Card variant="filled">
                <CardHeader>
                    <Heading size="md">Filled Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This card has a filled variant.</Text>
                </CardBody>
            </Card>

            <Card variant="elevated">
                <CardHeader>
                    <Heading size="md">Elevated Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text>This card has an elevated variant with shadow.</Text>
                </CardBody>
            </Card>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Horizontal: Story = {
    render: () => (
        <Card
            direction={{base: 'column', sm: 'row'}}
            overflow="hidden"
            variant="outline"
        >
            <Image
                objectFit="cover"
                maxW={{base: '100%', sm: '200px'}}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
            />

            <Stack>
                <CardBody>
                    <Heading size="md">The perfect latte</Heading>

                    <Text py="2">
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                        Buy Latte
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Simple: Story = {
    render: () => (
        <Stack spacing={4} maxW="sm">
            <Card>
                <CardBody>
                    <Text>Simple card with just body content.</Text>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>
                    <Heading size="md">With Header</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Card with header and body.</Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Text>Card with body and footer.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme="blue">Action</Button>
                </CardFooter>
            </Card>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};



