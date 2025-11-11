import type {Meta, StoryObj} from '@storybook/react';
import {Table} from 'components/data-display';

const meta = {
    title: 'Data Display/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        columns: [
            {key: 'name', label: 'Name'},
            {key: 'email', label: 'Email'},
            {key: 'role', label: 'Role'},
        ],
        data: [
            {name: 'John Doe', email: 'john@example.com', role: 'Admin'},
            {name: 'Jane Smith', email: 'jane@example.com', role: 'User'},
            {name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor'},
        ],
    },
};

export const WithManyColumns: Story = {
    args: {
        columns: [
            {key: 'id', label: 'ID'},
            {key: 'name', label: 'Name'},
            {key: 'email', label: 'Email'},
            {key: 'phone', label: 'Phone'},
            {key: 'department', label: 'Department'},
            {key: 'status', label: 'Status'},
        ],
        data: [
            {
                id: '001',
                name: 'Alice Williams',
                email: 'alice@example.com',
                phone: '555-0101',
                department: 'Engineering',
                status: 'Active',
            },
            {
                id: '002',
                name: 'Bob Smith',
                email: 'bob@example.com',
                phone: '555-0102',
                department: 'Marketing',
                status: 'Active',
            },
            {
                id: '003',
                name: 'Carol Brown',
                email: 'carol@example.com',
                phone: '555-0103',
                department: 'Sales',
                status: 'Inactive',
            },
        ],
    },
};

export const Products: Story = {
    args: {
        columns: [
            {key: 'product', label: 'Product'},
            {key: 'price', label: 'Price'},
            {key: 'stock', label: 'Stock'},
            {key: 'category', label: 'Category'},
        ],
        data: [
            {product: 'Laptop', price: '$999', stock: '23', category: 'Electronics'},
            {product: 'Mouse', price: '$29', stock: '150', category: 'Accessories'},
            {product: 'Keyboard', price: '$79', stock: '87', category: 'Accessories'},
            {product: 'Monitor', price: '$399', stock: '42', category: 'Electronics'},
            {product: 'Webcam', price: '$89', stock: '64', category: 'Electronics'},
        ],
    },
};

export const EmptyTable: Story = {
    args: {
        columns: [
            {key: 'name', label: 'Name'},
            {key: 'email', label: 'Email'},
            {key: 'role', label: 'Role'},
        ],
        data: [],
    },
};

export const SingleRow: Story = {
    args: {
        columns: [
            {key: 'title', label: 'Title'},
            {key: 'description', label: 'Description'},
            {key: 'date', label: 'Date'},
        ],
        data: [
            {
                title: 'System Update',
                description: 'New features and bug fixes',
                date: '2025-11-11',
            },
        ],
    },
};

