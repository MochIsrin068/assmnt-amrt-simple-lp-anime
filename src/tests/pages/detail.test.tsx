import React from "react";
import { render, screen } from "@testing-library/react";
import DetailPage from "../../pages/detail";
import { mockDataDetail } from "./mockData";

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

  it("test title", () => {
    render(<DetailPage />);
    const label = screen.getByText(mockDataDetail.title);
    expect(label).toBeInTheDocument();
  });

  it("test title japanese", () => {
    render(<DetailPage />);
    const label = screen.getByText(mockDataDetail.title_japanese);
    expect(label).toBeInTheDocument();
  });

  it("test genre name", () => {
    render(<DetailPage />);
    const label = screen.getByText(mockDataDetail.genres[0].name);
    expect(label).toBeInTheDocument();
  });

  it("test rating", () => {
    render(<DetailPage />);
    const label = screen.getByText(mockDataDetail.rating);
    expect(label).toBeInTheDocument();
  });

  it("test duration", () => {
    render(<DetailPage />);
    const label = screen.getByText(/Duration : /i);
    const value = screen.getByText(mockDataDetail.duration);
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("test Aired Date", () => {
    render(<DetailPage />);
    const label = screen.getByText(/Aired date : /i);
    const value = screen.getByText(mockDataDetail.aired?.string);
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("test Synopsis", () => {
    render(<DetailPage />);
    const label = screen.getByText(/Synopsis/i);
    const value = screen.getByText(mockDataDetail.synopsis);
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
