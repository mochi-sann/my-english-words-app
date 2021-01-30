import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Header from "./LoadingPeage";

export default {
  title: "Example/LoadhingPeage",
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

// export const Main = Template.bind({});
// M.args = {};
