import { render, screen, cleanup } from "@testing-library/react";
import App from "../App/App";

describe("Testing App component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Search button is visible", () => {
    render(<App />);
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders collection of elements", () => {
    const { container } = render(<App />);
    expect(
      container.getElementsByClassName("search-bar-container").length
    ).toBe(1);
    expect(container.getElementsByClassName("search-bar").length).toBe(1);
    expect(container.getElementsByClassName("input").length).toBe(1);
    expect(container.getElementsByClassName("button").length).toBe(2);
    expect(container.getElementsByClassName("teal").length).toBe(1);
  });
});
