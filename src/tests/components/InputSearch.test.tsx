/* eslint-disable testing-library/await-async-utils */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
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

  it("test input change attr", () => {
    const onSearch = jest.fn();

    render(<InputSearch onSearch={onSearch} />);
    const container = screen.getByTestId("input-search");

    expect(container).toHaveAttribute("type", "text");
  });

  it("test input placeholder", () => {
    const onSearch = jest.fn();
    render(<InputSearch onSearch={onSearch} />);
    waitFor(() =>
      expect(screen.getByText(/Search anime movie.../i)).toBeInTheDocument()
    );
  });
});
