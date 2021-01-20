import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Listss, { ListssProps } from "./EnlishLists";

export default {
  title: "Example/EnlishLists",
  component: Listss,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ListssProps> = (args) => <Listss {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Main = Template.bind({});
