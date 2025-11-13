import type {Meta, StoryObj} from '@storybook/react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '../components/ui';
import {Stack} from '@chakra-ui/react';
import {FaAngleRight, FaChevronRight, FaHome} from 'react-icons/fa';

const meta: Meta<typeof Breadcrumb> = {
    title: 'UI/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A breadcrumb component built with Chakra UI for navigation hierarchy.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        spacing: {
            control: {type: 'text'},
            description: 'Spacing between breadcrumb items',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithCustomSeparator: Story = {
    render: () => (
        <Stack spacing={4}>
            <Breadcrumb separator={<FaChevronRight color="gray"/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb separator={<FaAngleRight color="gray"/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Profile</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb separator="→">
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Phones</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithIcons: Story = {
    render: () => (
        <Breadcrumb separator={<FaChevronRight color="gray"/>}>
            <BreadcrumbItem>
                <BreadcrumbLink href="#" display="flex" alignItems="center" gap={1}>
                    <FaHome/>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Navigation</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const ApplicationExample: Story = {
    render: () => (
        <Stack spacing={6}>
            <div>
                <h4 style={{marginBottom: '1rem'}}>E-commerce Navigation</h4>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="blue.500">Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="blue.500">Computers</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="blue.500">Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Gaming Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div>
                <h4 style={{marginBottom: '1rem'}}>Documentation Site</h4>
                <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500"/>}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="purple.500">Docs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="purple.500">Getting Started</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Installation</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div>
                <h4 style={{marginBottom: '1rem'}}>Admin Dashboard</h4>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="green.500">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="green.500">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" color="green.500">Manage</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Edit User</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </Stack>
    ),
    parameters: {
        controls: {disable: true},
    },
};

