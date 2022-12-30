import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../../pages/home";

describe("Perform testing page home", () => {
  // Handle error : TypeError: window.matchMedia is not a function
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => ({
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  it("Perform snapshots test HomePage", () => {
    const view = render(<HomePage />);
    expect(view).toMatchSnapshot();
  });
});
