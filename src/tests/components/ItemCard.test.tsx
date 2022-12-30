/* eslint-disable testing-library/await-async-utils */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ItemCard from "../../components/ItemCard";

const mockProps = {
  onDirectToDetail: () => {},
  item: {
    mal_id: 8,
    title: "Movie title",
    aired: {
      string: "29 nov 2022",
      duration: "40 min",
    },
    genres: [
      {
        mal_id: "",
        name: "scient",
      },
    ],
    images: {
      webp: {
        image_url: "one-piece.png",
      },
    },
  },
};

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
    const view = render(<ItemCard {...mockProps} />);
    expect(view).toMatchSnapshot();
  });

  it("test anime image", () => {
    render(<ItemCard {...mockProps} />);
    const container = screen.getByTestId("item-image");
    expect(container).toHaveAttribute("src", "one-piece.png");
  });

  it("test anime title", () => {
    render(<ItemCard {...mockProps} />);
    waitFor(() => expect(screen.getByText(/Movie title/i)).toBeInTheDocument());
  });

  it("test anime aired date", () => {
    render(<ItemCard {...mockProps} />);
    waitFor(() =>
      expect(screen.getByText(mockProps.item.aired.string)).toBeInTheDocument()
    );
  });

  it("test anime aired duration", () => {
    render(<ItemCard {...mockProps} />);
    waitFor(() =>
      expect(
        screen.getByText(mockProps.item.aired.duration)
      ).toBeInTheDocument()
    );
  });

  it("test anime genre item", () => {
    render(<ItemCard {...mockProps} />);
    waitFor(() =>
      expect(
        screen.getByText(mockProps.item.genres[0].name)
      ).toBeInTheDocument()
    );
  });
});
