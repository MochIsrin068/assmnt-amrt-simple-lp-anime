/* eslint-disable testing-library/await-async-utils */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("test background image header if show on detail page", () => {
    const onActionSpy = jest.fn();
    render(
      <Header
        isHeaderWithAction={true}
        backgroundImageUrl="banner-detail.png"
        onAction={onActionSpy}
      />
    );
    const container = screen.getByTestId("header-container");
    expect(container).toHaveStyle(`background: url(banner-detail.png)`);
  });

  it("test class attribute header if show on home page", () => {
    render(<Header isHeaderWithAction={false} />);
    const container = screen.getByTestId("header-container");
    expect(container).toHaveAttribute("class", `header --header-home`);
  });

  it("test class attribute header if show on detail page", () => {
    const onActionSpy = jest.fn();
    render(
      <Header
        isHeaderWithAction={true}
        backgroundImageUrl="banner-detail.png"
        onAction={onActionSpy}
      />
    );
    const container = screen.getByTestId("header-container");
    expect(container).toHaveAttribute("class", `header --header-action`);
  });

  it("test button back or text showed header if show on home page", () => {
    render(<Header isHeaderWithAction={false} />);
    const container = screen.getByTestId("header-container");
    expect(container).toHaveAttribute("class", `header --header-home`);
  });

  it("test button back func header if show on detail page", () => {
    const onActionSpy = jest.fn();
    render(
      <Header
        isHeaderWithAction={true}
        backgroundImageUrl="banner-detail.png"
        onAction={onActionSpy}
      />
    );
    fireEvent.click(screen.getByTestId("header-back-menu"));
    expect(onActionSpy).toHaveBeenCalled();
  });

  it("test button back image / icon header if show on detail page", () => {
    const onActionSpy = jest.fn();
    render(
      <Header
        isHeaderWithAction={true}
        backgroundImageUrl="banner-detail.png"
        onAction={onActionSpy}
      />
    );
    const container = screen.getByTestId("icon-arrow-back");
    expect(container).toHaveAttribute("src", `arrow-back.png`);
  });

  it("test label button back header if show on home page", () => {
    const onActionSpy = jest.fn();
    render(
      <Header
        isHeaderWithAction={true}
        backgroundImageUrl="banner-detail.png"
        onAction={onActionSpy}
      />
    );
    waitFor(() => expect(screen.getByText(/Back/i)).toBeInTheDocument());
  });

  it("test title and subtitle header if show on home page", () => {
    render(<Header isHeaderWithAction={false} />);
    waitFor(() =>
      expect(screen.getByText(/The Anime Movie/i)).toBeInTheDocument()
    );

    waitFor(() =>
      expect(
        screen.getByText(
          "The Anime Movie is a web-based application to see what movies aretrending and popular that you can use as a reference to watch with your special someone :)"
        )
      ).toBeInTheDocument()
    );
  });
});
