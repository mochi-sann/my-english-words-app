import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Test } from "~/components/MainpageLIsts/EnlishLists.stories";
describe("add", (): void => {
  it("タイトルです", () => {
    render(<Test Listtitle="タイトルです" {...Test.args} />);
    expect(screen.getByRole("heading")).toHaveTextContent("タイトルです");
  });
  it("hogehoge", () => {
    render(<Test Listtitle="hogehoge" {...Test.args} />);
    expect(screen.getByRole("heading")).toHaveTextContent("hogehoge");
  });
  it("番号1", () => {
    render(<Test Listtitle="番号1" {...Test.args} />);
    expect(screen.getByRole("heading")).toHaveTextContent("番号1");
  });
});
