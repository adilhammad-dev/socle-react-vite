import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox} from '../components/ui';
import {CheckboxGroup, Stack, VStack} from '@chakra-ui/react';
import {useState} from 'react';

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A checkbox component built with Chakra UI for binary choices and multiple selections.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
        isChecked: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
        },
        isIndeterminate: {
            control: 'boolean',
        },
        isInvalid: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Checkbox',
    },
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            source: {
                code: `<Stack spacing={4}>
  <Checkbox>Small checkbox</Checkbox> 
</Stack>`
            }
        }
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="fit-content">
            <Checkbox size="sm">Small checkbox</Checkbox>
            <Checkbox size="md">Medium checkbox</Checkbox>
            <Checkbox size="lg">Large checkbox</Checkbox>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={4}>
  <Checkbox size="sm">Small checkbox</Checkbox>
  <Checkbox size="md">Medium checkbox</Checkbox>
  <Checkbox size="lg">Large checkbox</Checkbox>
</Stack>`
            },
            story: {
                inline: true,
                height: '120px',
            },
        }
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <Stack spacing={3} width="fit-content">
            <Checkbox colorScheme="blue" defaultChecked>Blue</Checkbox>
            <Checkbox colorScheme="green" defaultChecked>Green</Checkbox>
            <Checkbox colorScheme="red" defaultChecked>Red</Checkbox>
            <Checkbox colorScheme="orange" defaultChecked>Orange</Checkbox>
            <Checkbox colorScheme="purple" defaultChecked>Purple</Checkbox>
            <Checkbox colorScheme="teal" defaultChecked>Teal</Checkbox>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={3}>
  <Checkbox colorScheme="blue" defaultChecked>Blue</Checkbox>
  <Checkbox colorScheme="green" defaultChecked>Green</Checkbox>
  <Checkbox colorScheme="red" defaultChecked>Red</Checkbox>
  <Checkbox colorScheme="orange" defaultChecked>Orange</Checkbox>
  <Checkbox colorScheme="purple" defaultChecked>Purple</Checkbox>
  <Checkbox colorScheme="teal" defaultChecked>Teal</Checkbox>
</Stack>`
            },
            story: {
                inline: true,
                height: '180px',
            },
        }
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={3} width="fit-content">
            <Checkbox>Unchecked</Checkbox>
            <Checkbox defaultChecked>Checked</Checkbox>
            <Checkbox isIndeterminate>Indeterminate</Checkbox>
            <Checkbox isDisabled>Disabled</Checkbox>
            <Checkbox isDisabled defaultChecked>Disabled Checked</Checkbox>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<Stack spacing={3}>
  <Checkbox>Unchecked</Checkbox>
  <Checkbox defaultChecked>Checked</Checkbox>
  <Checkbox isIndeterminate>Indeterminate</Checkbox>
  <Checkbox isDisabled>Disabled</Checkbox>
  <Checkbox isDisabled defaultChecked>Disabled Checked</Checkbox>
</Stack>`
            },
            story: {
                inline: true,
                height: '160px',
            },
        }
    },
};

export const CheckboxGroupExample: Story = {
    render: () => {
        const [checkedItems, setCheckedItems] = useState([false, false]);

        const allChecked = checkedItems.every(Boolean);
        const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

        return (
            <VStack align="start" spacing={3}>
                <Checkbox
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                >
                    Parent Checkbox
                </Checkbox>
                <Stack spacing={2} ml={6}>
                    <Checkbox
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                    >
                        Child Checkbox 1
                    </Checkbox>
                    <Checkbox
                        isChecked={checkedItems[1]}
                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                    >
                        Child Checkbox 2
                    </Checkbox>
                </Stack>
            </VStack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const MultipleCgroups: Story = {
    render: () => (
        <CheckboxGroup colorScheme="blue" defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={3}>
                <Checkbox value="naruto">Naruto</Checkbox>
                <Checkbox value="sasuke">Sasuke</Checkbox>
                <Checkbox value="kakashi">Kakashi</Checkbox>
                <Checkbox value="sakura">Sakura</Checkbox>
            </Stack>
        </CheckboxGroup>
    ),
    parameters: {
        controls: {disable: true},
    },
};


