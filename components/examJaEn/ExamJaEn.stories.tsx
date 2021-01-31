import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import ExamJaEn, { HeaderProps } from "./ExamJaEn";

export default {
  title: "Example/ExamJaEn",
} as Meta;

const Template: Story<HeaderProps> = (args) => <ExamJaEn {...args} />;

export const Primary = Template.bind({});
Primary.args = { japanese: "英語", English: "English", ShowAnswer: false };

export const ShowAnswer = Template.bind({});
ShowAnswer.args = {
  japanese: "英語",
  English: "English",
  EnglishInputDefaultWord: "English",
  ShowAnswer: true,
};

// export const Main = Template.bind({});
// M.args = {};
