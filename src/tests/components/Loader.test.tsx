import React from "react";
import { render } from "@testing-library/react";
import Loader from "../../components/Loader";

describe("Perform testing component Loader", () => {
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

  it("Perform snapshots test Loader", () => {
    const view = render(<Loader />);
    expect(view).toMatchSnapshot();
  });
});
