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
  },
};

const Template = (args) => <UHCInput {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  placeholder: "Input...",
  getValue: (value) => {},
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  placeholder: "TextArea...",
  getValue: (value) => {},
  multiline: true,
};
