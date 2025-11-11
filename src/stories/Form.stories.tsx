import type {Meta, StoryObj} from '@storybook/react';
import {Checkbox, Form, Input, Select, TextArea} from 'components/forms';
import {Button} from 'components/ui';

const meta = {
    title: 'Forms/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        spacing: {
            control: {type: 'range', min: 0, max: 5, step: 0.5},
        },
    },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
    args: {
        onSubmit: (e) => {
            console.log('Login form submitted', e);
            alert('Login form submitted!');
        },
        children: (
            <>
                <Input label="Email" type="email" required/>
                <Input label="Password" type="password" required/>
                <Checkbox label="Remember me"/>
                <Button type="submit" fullWidth>Login</Button>
            </>
        ),
    },
};

export const ContactForm: Story = {
    args: {
        onSubmit: (e) => {
            console.log('Contact form submitted', e);
            alert('Message sent!');
        },
        children: (
            <>
                <Input label="Name" required/>
                <Input label="Email" type="email" required/>
                <Input label="Subject" required/>
                <TextArea label="Message" rows={4} required/>
                <Button type="submit">Send Message</Button>
            </>
        ),
    },
};

export const RegistrationForm: Story = {
    args: {
        onSubmit: (e) => {
            console.log('Registration form submitted', e);
            alert('Registration submitted!');
        },
        spacing: 3,
        children: (
            <>
                <Input label="Full Name" required/>
                <Input label="Email" type="email" required/>
                <Input label="Password" type="password" required/>
                <Input label="Confirm Password" type="password" required/>
                <Select
                    label="Country"
                    options={[
                        {label: 'United States', value: 'us'},
                        {label: 'United Kingdom', value: 'uk'},
                        {label: 'Canada', value: 'ca'},
                    ]}
                />
                <Checkbox label="I agree to terms and conditions" required/>
                <Button type="submit" fullWidth>Register</Button>
            </>
        ),
    },
};

export const CustomSpacing: Story = {
    args: {
        onSubmit: (e) => alert('Form submitted!'),
        spacing: 4,
        children: (
            <>
                <Input label="Field 1"/>
                <Input label="Field 2"/>
                <Button type="submit">Submit</Button>
            </>
        ),
    },
};

