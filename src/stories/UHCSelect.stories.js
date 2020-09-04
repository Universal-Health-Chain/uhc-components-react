import React from "react";

import { UHCSelect, UHCSelectItem } from "../components";

export default {
  title: "Example/UHCSelect",
  component: UHCSelect,
  argTypes: {
    defaultValue: {
      description: "Initial selected value",
      table: { defaultValue: { summary: "Seleccione una opción" } },
      control: {
        type: "text",
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
  <UHCSelect {...args}>
    <UHCSelectItem key={0} value="Hehe" />
    <UHCSelectItem key={1} value="Hoho" />
    <UHCSelectItem key={2} value="Hihi" />
  </UHCSelect>
);

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: "Valor predefinido",
};

export const WithoutDefaultValue = Template.bind({});
WithoutDefaultValue.args = {};
