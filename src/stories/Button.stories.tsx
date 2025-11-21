import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import Button from '../components/ui/StyledButton';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile button component built with Chakra UI that supports various sizes, colors, and states.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'The size of the button',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'md'},
            },
        },
        colorScheme: {
            control: {type: 'select'},
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
            description: 'The color scheme of the button',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'gray'},
            },
        },
        variant: {
            control: {type: 'select'},
            options: ['solid', 'outline', 'ghost', 'subtle', 'surface', 'plain'],
            description: 'The variant of the button',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'solid'},
            },
        },
        loading: {
            control: {type: 'boolean'},
            description: 'If true, the button will show a loading spinner',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        disabled: {
            control: {type: 'boolean'},
            description: 'If true, the button will be disabled',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        children: {
            control: {type: 'text'},
            description: 'The content of the button',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        size: 'md',
        colorScheme: 'gray',
        variant: 'solid',
        loading: false,
        disabled: false,
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center', width: 'fit-content'}}>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            description: {
                story: 'Different button sizes available: xs, sm, md, lg',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`,
                language: 'tsx',
                type: 'code'
            },
            story: {
                inline: true,
                height: '60px',
            },
        },
    },
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', width: 'fit-content', maxWidth: '400px'}}>
            <Button colorScheme="blue">Blue</Button>
            <Button colorScheme="green">Green</Button>
            <Button colorScheme="red">Red</Button>
            <Button colorScheme="orange">Orange</Button>
            <Button colorScheme="purple">Purple</Button>
            <Button colorScheme="teal">Teal</Button>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            description: {
                story: 'Available color schemes for buttons',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
  <Button colorScheme="blue">Blue</Button>
  <Button colorScheme="green">Green</Button>
  <Button colorScheme="red">Red</Button>
  <Button colorScheme="orange">Orange</Button>
  <Button colorScheme="purple">Purple</Button>
  <Button colorScheme="teal">Teal</Button>
</div>`,
                language: 'tsx',
                type: 'code'
            },
            story: {
                inline: true,
                height: '80px',
            },
        },
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem', width: 'fit-content'}}>
            <Button variant="solid" colorScheme="blue">Solid</Button>
            <Button variant="outline" colorScheme="blue">Outline</Button>
            <Button variant="ghost" colorScheme="blue">Ghost</Button>
            <Button variant="subtle" colorScheme="blue">Subtle</Button>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            description: {
                story: 'Available button variants: solid, outline, ghost, subtle',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '1rem' }}>
  <Button variant="solid" colorScheme="blue">Solid</Button>
  <Button variant="outline" colorScheme="blue">Outline</Button>
  <Button variant="ghost" colorScheme="blue">Ghost</Button>
  <Button variant="subtle" colorScheme="blue">Subtle</Button>
</div>`,
                language: 'tsx',
                type: 'code'
            },
            story: {
                inline: true,
                height: '50px',
            },
        },
    },
};

export const WithText: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
                <Button colorScheme="blue">
                    Email
                </Button>
                <Button colorScheme="green">
                    Download
                </Button>
                <Button colorScheme="red" variant="outline">
                    Like
                </Button>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            description: {
                story: 'Buttons with different text content and color schemes',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '1rem' }}>
  <Button colorScheme="blue">
    Email
  </Button>
  <Button colorScheme="green">
    Download
  </Button>
  <Button colorScheme="red" variant="outline">
    Like
  </Button>
</div>`
            }
        }
    },
};

export const States: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
                <Button>Normal</Button>
                <Button loading>Loading</Button>
                <Button loading>
                    Submit
                </Button>
                <Button disabled>Disabled</Button>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        docs: {
            description: {
                story: 'Different button states: normal, loading, disabled',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '1rem' }}>
  <Button>Normal</Button>
  <Button loading>Loading</Button>
  <Button loading>
    Submit
  </Button>
  <Button disabled>Disabled</Button>
</div>`
            }
        }
    },
};
 
