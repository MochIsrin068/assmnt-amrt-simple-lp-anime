import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonBackToTop from "../../components/ButtonBackToTop";

describe("Perform testing component ButtonBackToTop", () => {
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

  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Error:/];
      if (propTypeFailures.some((prop) => prop.test(args[0]))) {
      }
    };
  });

  it("Perform snapshots test ButtonBackToTop", () => {
    const view = render(<ButtonBackToTop />);
    expect(view).toMatchSnapshot();
  });

  it("test button back to top", () => {
    render(<ButtonBackToTop />);
    const container = screen.getByTestId("button-back-wrapper");
    expect(container).toHaveAttribute("type", "button");
  });

  it("test background image icon", () => {
    render(<ButtonBackToTop />);
    const container = screen.getByTestId("icon-arrow-back");
    expect(container).toHaveAttribute("src", `arrow-up.png`);
  });
});
