import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { App } from "./App";

describe("App", () => {
  test("foo?", async () => {
    render(<App />);

    expect(
      await screen.findByRole("button", { name: "Foo" })
    ).toBeInTheDocument();

    screen.debug();
  });
});
