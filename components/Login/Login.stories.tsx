import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { LoginBtn } from "./LoginAndLogoutButtom";

export default {
  title: "Example/LoginButton",
  component: LoginBtn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => <LoginBtn {...args} />;

export const Main = Template.bind({});
export const Test = Template.bind({});
