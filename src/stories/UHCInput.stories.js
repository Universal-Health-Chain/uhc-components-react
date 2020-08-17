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
      description: "Function to recover the input value"
    }
  },
};

const Template = (args) => <UHCInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary...",
  getValue: (value) => {},
};
