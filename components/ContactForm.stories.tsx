import ContactForm from "./ContactForm";
import { StoryObj, Meta } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ar } from "date-fns/locale";

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  title: "Components/ContactForm",
  parameters:{
    actions: {
      argTypesRegex: "^on.*",
    },
    controls:{
      hideNoControlsWarning: true,
    }
  },
  argTypes:{
    onSubmit: { action: 'submit' },
  },
  args: {
    onSubmit(event) {
        event.preventDefault();
    },
  }
};

export default meta;
type Story = StoryObj<typeof ContactForm>;


export const Default: Story = {};

export const EmptyFormSubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByText('Send', {
      selector: 'button',
    });
    await userEvent.click(submitButton);
  },
};

export const FillOutForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByLabelText('Name:', {
      selector: 'input',
    });
    const emailInput = canvas.getByLabelText('Email:', {
      selector: 'input',
    });
    const subjectInput = canvas.getByLabelText('Subject:', {
      selector: 'input',
    });
    const messageInput = canvas.getByLabelText('Your message:', {
      selector: 'textarea',
    });
    const submitButton = canvas.getByText('Send', {
      selector: 'button',
    });
    await userEvent.click(submitButton);
    await userEvent.type(nameInput, 'Omar White');
    await userEvent.type(emailInput, 'omar@louiswhite.me');
    await userEvent.type(subjectInput, 'This is a test');
    await userEvent.type(messageInput, 'This is a test message. YEAAAAAH BOIIIIIII!!!!!!!!!!!!');
    await userEvent.click(submitButton);
  },
};