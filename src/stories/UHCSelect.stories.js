import React from "react";

import { UHCSelect, UHCSelectItem } from "../components";

export default {
  title: "Example/UHCSelect",
  component: UHCSelect,
  argTypes: {
    label: {
      description: "Select label text",
      control: "text",
    },
    defaultValue: {
      description: "Initial selected value",
      control: {
        type: "null",
      },
    },

    getValue: {
      description: "Function to get select's current value",
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => (
  <UHCSelect
    data={[
      { label: "Opcion 1", value: "1" },
      { label: "Opcion 2", value: "2" },
    ]}
    {...args}
  ></UHCSelect>
);

export const WithoutDefaultValue = Template.bind({});
WithoutDefaultValue.args = {
  label: "Select",
};
