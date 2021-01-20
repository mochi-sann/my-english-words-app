import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Header, { HeaderProps } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Main = Template.bind({});
// M.args = {};
