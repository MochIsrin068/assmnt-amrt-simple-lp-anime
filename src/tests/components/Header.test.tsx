import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("Perform testing component Header", () => {
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

  it("Perform snapshots test Header", () => {
    const view = render(<Header isHeaderWithAction={false} />);
    expect(view).toMatchSnapshot();
  });
});
