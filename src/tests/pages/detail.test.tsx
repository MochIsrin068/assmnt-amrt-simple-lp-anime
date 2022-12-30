import React from "react";
import { render } from "@testing-library/react";
import DetailPage from "../../pages/detail";

describe("Perform testing page detail", () => {
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

  it("Perform snapshots test DetailPage", () => {
    const view = render(<DetailPage />);
    expect(view).toMatchSnapshot();
  });
});
