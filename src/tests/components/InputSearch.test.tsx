import React from "react";
import { render } from "@testing-library/react";
import InputSearch from "../../components/InputSearch";

describe("Perform testing component InputSearch", () => {
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

  it("Perform snapshots test InputSearch", () => {
    const view = render(<InputSearch onSearch={() => {}} />);
    expect(view).toMatchSnapshot();
  });
});
