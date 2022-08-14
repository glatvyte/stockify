import { render, screen, cleanup } from "@testing-library/react";
import Filter from "../Filter/Filter";

describe("Testing Filter component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Filter />, div);
  });

  it("search button has a placeholder", () => {
    render(<Filter />);
    expect(
      screen.getByRole("textbox", {
        placeholder: "Search by company stock symbol...",
      })
    ).toBeInTheDocument();
  });

  it("Search button is visible", () => {
    render(<Filter />);
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });
});
