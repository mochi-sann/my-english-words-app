import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Listss, { ListssProps } from "./EnlishLists";

export default {
  title: "Example/EnlishLists",
  component: Listss,
  argTypes: {
    Listtitle: { control: "text" },
    widthParcent: { control: "range", min: 1, max: 100, step: 10 },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ListssProps> = (args) => <Listss {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Listtitle: "タイトル",
  widthParcent: 100,
};
