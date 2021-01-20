import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "~/components/MainpageLIsts/EnlishLists.stories";
// import { Primary } from "~/stories/Button.stories";

it("リストのタイトルが タイトルになっている", () => {
  render(<Primary Listtitle="タイトル" {...Primary.args} />);
  expect(screen.getByRole("heading")).toHaveTextContent("タイトル");
});
