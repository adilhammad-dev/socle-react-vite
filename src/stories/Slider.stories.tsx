import type {Meta, StoryObj} from '@storybook/react';
import {Slider} from '../components/ui';
import {Box, FormControl, FormLabel, Stack, Text} from '@chakra-ui/react';
import {useState} from 'react';

const meta: Meta<typeof Slider> = {
    title: 'UI/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A slider component for selecting values within a range.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        min: {
            control: {type: 'number'},
            description: 'Minimum value',
        },
        max: {
            control: {type: 'number'},
            description: 'Maximum value',
        },
        step: {
            control: {type: 'number'},
            description: 'Step increment',
        },
        defaultValue: {
            control: {type: 'number'},
            description: 'Default value',
        },
        isDisabled: {
            control: {type: 'boolean'},
            description: 'Whether the slider is disabled',
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
            description: 'Size of the slider',
        },
        colorScheme: {
            control: {type: 'select'},
            options: ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
            description: 'Color scheme of the slider',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: 50,
        min: 0,
        max: 100,
    },
    render: (args) => (
        <div style={{width: '300px'}}>
            <Slider {...args} />
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={6} width="300px">
            <FormControl>
                <FormLabel fontSize="sm">Small</FormLabel>
                <Slider size="sm" defaultValue={30}/>
            </FormControl>

            <FormControl>
                <FormLabel>Medium (default)</FormLabel>
                <Slider size="md" defaultValue={50}/>
            </FormControl>

            <FormControl>
                <FormLabel fontSize="lg">Large</FormLabel>
                <Slider size="lg" defaultValue={70}/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <FormControl>
                <FormLabel>Blue (default)</FormLabel>
                <Slider colorScheme="blue" defaultValue={25}/>
            </FormControl>

            <FormControl>
                <FormLabel>Green</FormLabel>
                <Slider colorScheme="green" defaultValue={40}/>
            </FormControl>

            <FormControl>
                <FormLabel>Red</FormLabel>
                <Slider colorScheme="red" defaultValue={60}/>
            </FormControl>

            <FormControl>
                <FormLabel>Purple</FormLabel>
                <Slider colorScheme="purple" defaultValue={80}/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithSteps: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <FormControl>
                <FormLabel>Step by 1 (default)</FormLabel>
                <Slider min={0} max={10} step={1} defaultValue={5}/>
            </FormControl>

            <FormControl>
                <FormLabel>Step by 5</FormLabel>
                <Slider min={0} max={100} step={5} defaultValue={25}/>
            </FormControl>

            <FormControl>
                <FormLabel>Step by 10</FormLabel>
                <Slider min={0} max={100} step={10} defaultValue={50}/>
            </FormControl>

            <FormControl>
                <FormLabel>Decimal steps (0.1)</FormLabel>
                <Slider min={0} max={1} step={0.1} defaultValue={0.5}/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Controlled: Story = {
    render: () => {
        const [volume, setVolume] = useState(50);
        const [brightness, setBrightness] = useState(75);
        const [temperature, setTemperature] = useState(22);

        return (
            <Stack spacing={6} width="350px">
                <FormControl>
                    <FormLabel>Volume: {volume}%</FormLabel>
                    <Slider
                        min={0}
                        max={100}
                        value={volume}
                        onChange={setVolume}
                        colorScheme="blue"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Brightness: {brightness}%</FormLabel>
                    <Slider
                        min={0}
                        max={100}
                        value={brightness}
                        onChange={setBrightness}
                        colorScheme="yellow"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Temperature: {temperature}°C</FormLabel>
                    <Slider
                        min={10}
                        max={35}
                        value={temperature}
                        onChange={setTemperature}
                        colorScheme="red"
                    />
                </FormControl>

                <Box p={4} bg="gray.50" borderRadius="md">
                    <Text fontSize="sm" fontWeight="bold">Current Settings:</Text>
                    <Text fontSize="sm">Volume: {volume}% | Brightness: {brightness}% |
                        Temperature: {temperature}°C</Text>
                </Box>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="300px">
            <FormControl>
                <FormLabel>Normal</FormLabel>
                <Slider defaultValue={50}/>
            </FormControl>

            <FormControl isDisabled>
                <FormLabel>Disabled</FormLabel>
                <Slider defaultValue={30} isDisabled/>
            </FormControl>

            <FormControl>
                <FormLabel>Different range (10-90)</FormLabel>
                <Slider min={10} max={90} defaultValue={50}/>
            </FormControl>

            <FormControl>
                <FormLabel>Negative range (-50 to 50)</FormLabel>
                <Slider min={-50} max={50} defaultValue={0}/>
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ApplicationExamples: Story = {
    render: () => {
        const [priceRange, setPriceRange] = useState(250);
        const [ageRange, setAgeRange] = useState(25);

        return (
            <Stack spacing={8} width="400px">
                <Box p={6} border="1px" borderColor="gray.200" borderRadius="md">
                    <Text fontWeight="bold" mb={4}>Product Filters</Text>

                    <FormControl mb={4}>
                        <FormLabel>Price Range: ${priceRange[0]} - ${priceRange[1]}</FormLabel>
                        <Slider
                            min={0}
                            max={1000}
                            step={25}
                            defaultValue={priceRange}
                            colorScheme="green"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Maximum Age: {ageRange} years</FormLabel>
                        <Slider
                            min={18}
                            max={65}
                            value={ageRange}
                            onChange={setAgeRange}
                            colorScheme="blue"
                        />
                    </FormControl>
                </Box>

                <Box p={6} border="1px" borderColor="gray.200" borderRadius="md">
                    <Text fontWeight="bold" mb={4}>Media Player</Text>

                    <FormControl mb={4}>
                        <FormLabel>Progress: 2:45 / 4:32</FormLabel>
                        <Slider
                            min={0}
                            max={272}
                            defaultValue={165}
                            colorScheme="purple"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Volume: 65%</FormLabel>
                        <Slider
                            min={0}
                            max={100}
                            defaultValue={65}
                            size="sm"
                            colorScheme="blue"
                        />
                    </FormControl>
                </Box>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

