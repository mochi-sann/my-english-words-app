import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "~/components/MainpageLIsts/EnlishLists.stories";

it("タイトルです", () => {
  render(<Primary Listtitle="タイトルです" {...Primary.args} />);
  expect(screen.getByRole("heading")).toHaveTextContent("タイトルです");
});
it("hogehoge", () => {
  render(<Primary Listtitle="hogehoge" {...Primary.args} />);
  expect(screen.getByRole("heading")).toHaveTextContent("hogehoge");
});
it("番号1", () => {
  render(<Primary Listtitle="番号1" {...Primary.args} />);
  expect(screen.getByRole("heading")).toHaveTextContent("番号1");
});
