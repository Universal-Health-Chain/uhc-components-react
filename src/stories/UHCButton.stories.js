import React from "react";

import { UHCButton } from "../components";

export default {
  title: "Example/UHCButton",
  component: UHCButton,
  argTypes: {
    text: {
      description: "Text that describes the action of the button",
    },
    buttonType: {
      description: "Button's visual variant",
      table: { defaultValue: { summary: "primary" } },
      control: {
        type: "select",
        options: ["primary", "secondary", "danger"],
      },
    },
    size: {
      description: "Button's width",
      table: { defaultValue: { summary: "big" } },
      control: {
        type: "select",
        options: ["big", "small"],
      },
    },
    disabled: {
      description: "Defines if the button can be clicked",
      table: { defaultValue: { summary: "false" } },
      control: {
        type: "boolean",
      },
    },
    onPress: {
      description: "Action to be called on button click",
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => <UHCButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  buttonType: "primary",
  size: "big",
  onPress: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  buttonType: "secondary",
  size: "big",
  onPress: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  buttonType: "danger",
  size: "big",
  onPress: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled",
  disabled: true,
  size: "big",
  onPress: () => {},
};

export const Small = Template.bind({});
Small.args = {
  text: "Small",
  size: "small",
  onPress: () => {},
};
