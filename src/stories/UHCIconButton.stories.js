import React from "react";

import { UHCIconButton } from "../components";

export default {
  title: "Example/UHCIconButton",
  component: UHCIconButton,
  argTypes: {
    text: {
      description: "Button's text",
      control: "text"
    },
    icon: {
      description: "Button's icon",
      table: { defaultValue: { summary: "arrow-right" } },
      control: {
        type: "select",
        options: ["arrow-right", "arrow-left", "sort"]
      }
    },
    buttonType: {
      description: "Button's visual variant",
      table: { defaultValue: { summary: "primary" } },
      control: {
        type: "select",
        options: ["primary", "secondary", "danger"]
      }
    },
    disabled: {
      description: "Defines if the button can be clicked",
      table: { defaultValue: { summary: "false" } },
      control: {
        type: "boolean"
      }
    },
    onPress: {
      description: "Action to be called on button click",
      control: {
        type: null
      }
    }
  }
};

const Template = args => <UHCIconButton {...args} />;

export const Textless = Template.bind({});
Textless.args = {
  icon: "arrow-right",
  buttonType: "primary",
  badgeNumber: 3,
  onPress: () => {}
};

export const WithText = Template.bind({});
WithText.args = {
  text: "Primary",
  icon: "arrow-right",
  buttonType: "primary",
  disabled: false,
  badgeNumber: 100,
  onPress: () => {}
};
