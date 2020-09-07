import React from "react";

import { UHCIconButton } from "../components";

export default {
  title: "Example/UHCIconButton",
  component: UHCIconButton,
  argTypes: {
    text: {
      description: "Button's text",
      control: "text",
    },
    icon: {
      description: "Button's icon",
      table: { defaultValue: { summary: "arrow-right" } },
      control: {
        type: "select",
        options: ["arrow-right", "arrow-left"],
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

const Template = (args) => <UHCIconButton {...args} />;

export const Textless = Template.bind({});
Textless.args = {
  icon: "arrow-right",
  onPress: () => {},
};

export const WithText = Template.bind({});
WithText.args = {
  text: "Hello",
  icon: "arrow-right",
  onPress: () => {},
};
