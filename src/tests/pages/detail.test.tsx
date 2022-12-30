/* eslint-disable testing-library/await-async-utils */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DetailPage from "../../pages/detail";
import { mockDataDetail } from "./mockData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

jest.mock("../../hooks/useDetailPage", () =>
  jest.fn(() => ({
    anime: {
      isLoading: false,
      data: mockDataDetail,
    },
    onBack: jest.fn,
    scrollTop: 0,
  }))
);

beforeEach(() => {
  global.console.error = (...args) => {
    const propTypeFailures = [/Error:/];
    if (propTypeFailures.some((prop) => prop.test(args[0]))) {
    }
  };

  global.console.warn = (...args) => {
    const propTypeFailures = [/No routes/];
    if (propTypeFailures.some((prop) => prop.test(args[0]))) {
    }
  };
});

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
    const view = render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("test title", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    waitFor(() =>
      expect(screen.getByText(mockDataDetail.title)).toBeInTheDocument()
    );
  });

  it("test title japanese", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    waitFor(() =>
      expect(
        screen.getByText(mockDataDetail.title_japanese)
      ).toBeInTheDocument()
    );
  });

  it("test genre name", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );

    waitFor(() =>
      expect(
        screen.getByText(mockDataDetail.genres[0].name)
      ).toBeInTheDocument()
    );
  });

  it("test rating", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    waitFor(() =>
      expect(screen.getByText(mockDataDetail.rating)).toBeInTheDocument()
    );
  });

  it("test duration", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    waitFor(() => expect(screen.getByText(/Duration : /i)).toBeInTheDocument());
    waitFor(() =>
      expect(screen.getByText(mockDataDetail.duration)).toBeInTheDocument()
    );
  });

  it("test Aired Date", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );

    waitFor(() =>
      expect(screen.getByText(/Aired date : /i)).toBeInTheDocument()
    );
    waitFor(() =>
      expect(screen.getByText(mockDataDetail.aired?.string)).toBeInTheDocument()
    );
  });

  it("test Synopsis", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/anime/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
    waitFor(() => expect(screen.getByText(/Synopsis/i)).toBeInTheDocument());
    waitFor(() =>
      expect(screen.getByText(mockDataDetail.synopsis)).toBeInTheDocument()
    );
  });
});
