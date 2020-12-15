import React from "react";

import { UHCIcon } from "../components";

export default {
  title: "Example/UHCIcon",
  component: UHCIcon,
  argTypes: {
    name: {
      description: "Button's icon",
      table: { defaultValue: { summary: "search" } },
      control: {
        type: "select",
        options: [
          "search",
          "view",
          "more",
          "request-document",
          "donor-information",
          "consent",
          "get-document",
          "new-document",
          "connection-details",
          "new-messages",
          "document",
          "clinical-trials",
          "send-message",
          "imaging-studies",
          "new-appointment",
          "video-call",
          "servers",
          "awards",
          "contacts",
          "medical-devices",
          "organization",
          "profile",
          "research",
          "studies",
          "medical-profile",
          "prescriptions",
          "invite",
          "emergencies",
          "insurance-and-policies",
        ],
      },
    },
    size: {
      description: "Action to be called on button click",
      table: { defaultValue: { summary: "small" } },
      control: {
        type: "select",
        options: ["big", "small"],
      },
    },
  },
};

const Template = (args) => <UHCIcon {...args} />;

export const Big = Template.bind({});
Big.args = {
  name: "search",
  size: "big",
};

export const Small = Template.bind({});
Small.args = {
  name: "search",
  size: "small",
};
