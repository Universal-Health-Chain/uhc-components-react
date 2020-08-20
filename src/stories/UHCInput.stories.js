import React from "react";

import { UHCInput } from "../components";

export default {
  title: "Example/UHCInput",
  component: UHCInput,
  argTypes: {
    placeholder: {
      description: "Input default text",
    },
    getValue: {
      description: "Function to recover the input value",
    },
    multiline: {
      description: "Defines if the input has multiple lines",
      table: { defaultValue: { summary: "false" } },
      control: {
        type: "boolean",
      },
    },
    error: {
      description: "Shows error under input",
      control: "text",
    },
    format: {
      description: "Defines the type of the input",
      table: { defaultValue: { summary: "text" } },
      control: {
        type: "select",
        options: ["text", "password", "number"],
      },
    },
  },
};

const Template = (args) => <UHCInput {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  placeholder: "Email",
  getValue: (value) => {},
  format: "text"
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  placeholder: "Email",
  getValue: (value) => {},
  error: "Este email no es valido",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  placeholder: "Password",
  getValue: (value) => {},
  format: "password",
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  placeholder: "TextArea...",
  getValue: (value) => {},
  multiline: true,
};
