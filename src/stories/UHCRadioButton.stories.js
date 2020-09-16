import React from "react";
import theme from "uhc-themes";
import { UHCRadioButton } from "../components";

export default {
  title: "Example/UHCRadioButton",
  component: UHCRadioButton,
  argTypes: {
    isSelected: {
      description: "Defines if the radio button",
      table: { defaultValue: { summary: "false" } },
      control: {
        type: "boolean",
      },
    },
    onClick: {
      description: "Function to call on radio click",
      control: {
        type: "null",
      },
    },
    selectedColor: {
      description: "Internal color of the selected radio button",
      table: { defaultValue: { summary: theme.color.tertiary } },
      control: "color",
    },
    containerColorSelected: {
      description: "Border color of the selected radio button",
      table: { defaultValue: { summary: theme.color.tertiary } },
      control: "color",
    },
    containerColorUnselected: {
      description: "Border color of the unselected radio button",
      table: { defaultValue: { summary: theme.color.gray } },
      control: "color",
    },
  },
};

const Template = (args) => <UHCRadioButton {...args} />;

const onClick = () => {
  console.log("No me gusta");
};
export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
  onClick: onClick,
};

export const Unselected = Template.bind({});
Unselected.args = {};
