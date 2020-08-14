import React from "react";

import { UHCButton } from "../components";

export default {
  title: "Example/UHCButton",
  component: UHCButton,
};

const Template = (args) => <UHCButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  type: "primary"
};


export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  type: "secondary"
};