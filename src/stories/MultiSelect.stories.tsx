import type {Meta, StoryObj} from '@storybook/react';
import {MultiSelect} from '../components/ui';
import {FormControl, FormLabel, Stack} from '@chakra-ui/react';
import {useState} from 'react';

const meta: Meta<typeof MultiSelect> = {
    title: 'UI/MultiSelect',
    component: MultiSelect,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A multi-select dropdown component for selecting multiple options from a list.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: {type: 'text'},
            description: 'Placeholder text for the select',
        },
        isDisabled: {
            control: {type: 'boolean'},
            description: 'Whether the select is disabled',
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
            description: 'Size of the select',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
    {value: 'react', label: 'React'},
    {value: 'vue', label: 'Vue.js'},
    {value: 'angular', label: 'Angular'},
    {value: 'svelte', label: 'Svelte'},
    {value: 'nextjs', label: 'Next.js'},
    {value: 'nuxt', label: 'Nuxt.js'},
    {value: 'gatsby', label: 'Gatsby'},
    {value: 'remix', label: 'Remix'},
];

const skillOptions = [
    {value: 'javascript', label: 'JavaScript'},
    {value: 'typescript', label: 'TypeScript'},
    {value: 'python', label: 'Python'},
    {value: 'java', label: 'Java'},
    {value: 'csharp', label: 'C#'},
    {value: 'go', label: 'Go'},
    {value: 'rust', label: 'Rust'},
    {value: 'php', label: 'PHP'},
];

export const Default: Story = {
    render: () => (
        <div style={{width: '280px'}}>
            <MultiSelect
                options={sampleOptions}
                placeholder="Select frameworks..."
            />
        </div>
    ),
    parameters: {
        controls: {disable: true},
        layout: 'padded',
        docs: {
            story: {
                inline: true,
                height: '60px',
            },
        },
    },
};

export const WithPreselected: Story = {
    render: () => (
        <div style={{width: '280px'}}>
            <MultiSelect
                options={sampleOptions}
                defaultValue={['react', 'nextjs']}
                placeholder="Select frameworks..."
            />
        </div>
    ),
    parameters: {
        controls: {disable: true},
        actions: {disable: true},
        layout: 'padded',
        docs: {
            source: {
                code: `<div style={{width: '300px'}}>
  <MultiSelect
    options={sampleOptions}
    defaultValue={['react', 'nextjs']}
    placeholder="Select frameworks..."
  />
</div>`
            },
            story: {
                inline: true,
                height: '100px',
            },
        }
    },
};

export const Controlled: Story = {
    render: () => {
        const [selectedValues, setSelectedValues] = useState<string[]>(['javascript', 'typescript']);

        return (
            <Stack spacing={4} width="350px">
                <FormControl>
                    <FormLabel>Programming Skills</FormLabel>
                    <MultiSelect
                        options={skillOptions}
                        value={selectedValues}
                        onChange={(value: string[]) => setSelectedValues(value)}
                        placeholder="Select your skills..."
                    />
                </FormControl>

                <div style={{
                    padding: '1rem',
                    backgroundColor: '#f7fafc',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                }}>
                    <strong>Selected:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}
                </div>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={4} width="350px">
            <FormControl>
                <FormLabel fontSize="sm">Small</FormLabel>
                <MultiSelect
                    size="sm"
                    options={sampleOptions.slice(0, 4)}
                    placeholder="Small multi-select"
                />
            </FormControl>

            <FormControl>
                <FormLabel>Medium (default)</FormLabel>
                <MultiSelect
                    size="md"
                    options={sampleOptions.slice(0, 4)}
                    placeholder="Medium multi-select"
                />
            </FormControl>

            <FormControl>
                <FormLabel fontSize="lg">Large</FormLabel>
                <MultiSelect
                    size="lg"
                    options={sampleOptions.slice(0, 4)}
                    placeholder="Large multi-select"
                />
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const States: Story = {
    render: () => (
        <Stack spacing={4} width="350px">
            <FormControl>
                <FormLabel>Normal</FormLabel>
                <MultiSelect
                    options={sampleOptions}
                    placeholder="Select options..."
                />
            </FormControl>

            <FormControl>
                <FormLabel>With default selection</FormLabel>
                <MultiSelect
                    options={sampleOptions}
                    defaultValue={['react', 'vue']}
                    placeholder="Select options..."
                />
            </FormControl>

            <FormControl isDisabled>
                <FormLabel>Disabled</FormLabel>
                <MultiSelect
                    options={sampleOptions}
                    placeholder="Disabled select"
                    isDisabled
                />
            </FormControl>

            <FormControl>
                <FormLabel>Many options selected</FormLabel>
                <MultiSelect
                    options={sampleOptions}
                    defaultValue={['react', 'vue', 'angular', 'svelte', 'nextjs']}
                    placeholder="Select options..."
                />
            </FormControl>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const FormExample: Story = {
    render: () => {
        const [formData, setFormData] = useState<{
            frameworks: string[];
            skills: string[];
            interests: string[];
        }>({
            frameworks: [],
            skills: [],
            interests: []
        });

        const interestOptions = [
            {value: 'frontend', label: 'Frontend Development'},
            {value: 'backend', label: 'Backend Development'},
            {value: 'mobile', label: 'Mobile Development'},
            {value: 'devops', label: 'DevOps'},
            {value: 'design', label: 'UI/UX Design'},
            {value: 'data', label: 'Data Science'},
        ];

        return (
            <Stack spacing={6} maxW="400px" p={6} border="1px" borderColor="gray.200" borderRadius="md">
                <div>
                    <h3 style={{margin: 0, marginBottom: '0.5rem'}}>Developer Profile</h3>
                    <p style={{margin: 0, fontSize: '0.875rem', color: '#718096'}}>
                        Tell us about your technical background
                    </p>
                </div>

                <FormControl>
                    <FormLabel>Preferred Frameworks</FormLabel>
                    <MultiSelect
                        options={sampleOptions}
                        value={formData.frameworks}
                        onChange={(value: string[]) => setFormData(prev => ({...prev, frameworks: value}))}
                        placeholder="Select frameworks you use..."
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Programming Languages</FormLabel>
                    <MultiSelect
                        options={skillOptions}
                        value={formData.skills}
                        onChange={(value: string[]) => setFormData(prev => ({...prev, skills: value}))}
                        placeholder="Select your skills..."
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Areas of Interest</FormLabel>
                    <MultiSelect
                        options={interestOptions}
                        value={formData.interests}
                        onChange={(value: string[]) => setFormData(prev => ({...prev, interests: value}))}
                        placeholder="What interests you..."
                    />
                </FormControl>

                <div style={{
                    padding: '1rem',
                    backgroundColor: '#edf2f7',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem'
                }}>
                    <strong>Summary:</strong>
                    <div>Frameworks: {formData.frameworks.length}</div>
                    <div>Skills: {formData.skills.length}</div>
                    <div>Interests: {formData.interests.length}</div>
                </div>
            </Stack>
        );
    },
    parameters: {
        controls: {disable: true},
    },
};

