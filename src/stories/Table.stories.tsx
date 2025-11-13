import type {Meta, StoryObj} from '@storybook/react';
import {Table} from '../components/ui';
import {
    Avatar,
    Badge,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import {FaChevronDown, FaEdit, FaTrash} from 'react-icons/fa';

const meta: Meta<typeof Table> = {
    title: 'UI/Table',
    component: Table,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A table component built with Chakra UI for displaying tabular data.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['simple', 'striped', 'unstyled'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink', 'teal', 'cyan'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <TableContainer>
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div>
                <h4>Simple</h4>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Position</Th>
                                <Th>Company</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>John Doe</Td>
                                <Td>Developer</Td>
                                <Td>Tech Corp</Td>
                            </Tr>
                            <Tr>
                                <Td>Jane Smith</Td>
                                <Td>Designer</Td>
                                <Td>Design Studio</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <h4>Striped</h4>
                <TableContainer>
                    <Table variant="striped" colorScheme="teal">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Position</Th>
                                <Th>Company</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>John Doe</Td>
                                <Td>Developer</Td>
                                <Td>Tech Corp</Td>
                            </Tr>
                            <Tr>
                                <Td>Jane Smith</Td>
                                <Td>Designer</Td>
                                <Td>Design Studio</Td>
                            </Tr>
                            <Tr>
                                <Td>Bob Johnson</Td>
                                <Td>Manager</Td>
                                <Td>Business Inc</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div>
                <h4>Small</h4>
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>John Doe</Td>
                                <Td>john@example.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <h4>Medium</h4>
                <TableContainer>
                    <Table size="md">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>John Doe</Td>
                                <Td>john@example.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>

            <div>
                <h4>Large</h4>
                <TableContainer>
                    <Table size="lg">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>John Doe</Td>
                                <Td>john@example.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};

export const WithContent: Story = {
    render: () => (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Status</Th>
                        <Th>Role</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                <Avatar size="sm" name="John Doe"/>
                                <div>
                                    <div style={{fontWeight: 'medium'}}>John Doe</div>
                                    <div style={{fontSize: '0.875rem', color: 'gray'}}>john@example.com</div>
                                </div>
                            </div>
                        </Td>
                        <Td>
                            <Badge colorScheme="green">Active</Badge>
                        </Td>
                        <Td>Admin</Td>
                        <Td>
                            <Menu>
                                <MenuButton as={IconButton} icon={<FaChevronDown/>} size="sm" variant="ghost"/>
                                <MenuList>
                                    <MenuItem icon={<FaEdit/>}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrash/>} color="red.500">Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                <Avatar size="sm" name="Jane Smith"/>
                                <div>
                                    <div style={{fontWeight: 'medium'}}>Jane Smith</div>
                                    <div style={{fontSize: '0.875rem', color: 'gray'}}>jane@example.com</div>
                                </div>
                            </div>
                        </Td>
                        <Td>
                            <Badge colorScheme="red">Inactive</Badge>
                        </Td>
                        <Td>User</Td>
                        <Td>
                            <Menu>
                                <MenuButton as={IconButton} icon={<FaChevronDown/>} size="sm" variant="ghost"/>
                                <MenuList>
                                    <MenuItem icon={<FaEdit/>}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrash/>} color="red.500">Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                <Avatar size="sm" name="Bob Johnson"/>
                                <div>
                                    <div style={{fontWeight: 'medium'}}>Bob Johnson</div>
                                    <div style={{fontSize: '0.875rem', color: 'gray'}}>bob@example.com</div>
                                </div>
                            </div>
                        </Td>
                        <Td>
                            <Badge colorScheme="yellow">Pending</Badge>
                        </Td>
                        <Td>Moderator</Td>
                        <Td>
                            <Menu>
                                <MenuButton as={IconButton} icon={<FaChevronDown/>} size="sm" variant="ghost"/>
                                <MenuList>
                                    <MenuItem icon={<FaEdit/>}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrash/>} color="red.500">Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    ),
    parameters: {
        controls: {disable: true},
    },
};

