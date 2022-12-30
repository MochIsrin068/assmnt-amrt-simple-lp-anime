import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Error:/];
      if (propTypeFailures.some((prop) => prop.test(args[0]))) {
      }
    };
  });

  it("Perform snapshots test HomePage", () => {
    const view = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("test title header", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
    const label = screen.getAllByText(/The Anime Movie/i);
    expect(label[0]).toBeInTheDocument();
  });

  it("test description header", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
    const label = screen.getAllByText(/The Anime Movie/i);
    expect(label[1]).toBeInTheDocument();
  });
});
