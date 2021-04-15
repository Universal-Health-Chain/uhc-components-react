import React from "react";

import { UHCInput } from "../components";

export default {
  title: "Example/UHCInput",
  component: UHCInput,
  argTypes: {
    placeholder: {
      description: "Input placeholder text",
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
    disabled: {
      description: "Defines if the input has writing permissions",
      table: { defaultValue: { summary: "false" } },
      control: {
        type: "boolean",
      },
    },
    format: {
      description: "Defines the type of the input",
      table: { defaultValue: { summary: "text" } },
      control: {
        type: "select",
        options: ["text", "password", "number", "date", "time"],
      },
    },
    placeholder: {
      description: "Input default value",
    },
  },
};

const Template = (args) => <UHCInput {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  placeholder: "Email",
  getValue: (value) => {},
  format: "text",
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

export const DateInput = Template.bind({});
DateInput.args = {
  placeholder: "Date",
  getValue: (value) => {},
  format: "date",
};

export const Multiline = Template.bind({});
Multiline.args = {
  placeholder: "TextArea...",
  getValue: (value) => {},
  multiline: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  placeholder: "Default value",
  getValue: (value) => {},
  defaultValue: "This is a default value",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled",
  getValue: (value) => {},
  disabled: true,
};
