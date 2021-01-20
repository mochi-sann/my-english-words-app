import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Layout, { Props } from "./Layout";

// import * as HeaderStories from "./Header.stories";
export default {
  title: "Example/Layout",
  component: Layout,
} as Meta;
const Template: Story<Props> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
