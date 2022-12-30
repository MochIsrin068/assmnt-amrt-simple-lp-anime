import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "../../components/ItemCard";

describe("Perform testing component ItemCard", () => {
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

  it("Perform snapshots test ItemCard", () => {
    const view = render(<ItemCard />);
    expect(view).toMatchSnapshot();
  });
});
