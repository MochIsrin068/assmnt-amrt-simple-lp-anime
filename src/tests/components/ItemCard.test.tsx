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
    const view = render(
      <ItemCard
        onDirectToDetail={() => {}}
        item={{
          mal_id: 8,
          title: "Movie title",
          aired: {
            string: "29 nov 2022",
            duration: "40 min",
          },
          genres: [
            {
              mal_id: "",
              name: "",
            },
          ],
          images: {
            webp: {
              image_url: "",
            },
          },
        }}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
