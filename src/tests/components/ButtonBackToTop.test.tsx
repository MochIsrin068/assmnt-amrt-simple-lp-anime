import React from "react";
import { render } from "@testing-library/react";
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

  it("Perform snapshots test ButtonBackToTop", () => {
    const view = render(<ButtonBackToTop />);
    expect(view).toMatchSnapshot();
  });
});
