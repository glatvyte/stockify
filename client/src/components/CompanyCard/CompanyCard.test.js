import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CompanyCard from "../CompanyCard/CompanyCard";
import mockData from "../../utils/mockData";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("ComponentCard renders with provided props", () => {
  act(() => {
    render(<CompanyCard company={mockData[0]} />, container);
  });
  expect(container.textContent).toBe(
    "GameStop CorpCountry: USCurrency: USDWeb Url:https://news.gamestop.com/"
  );
});

it("renders collection of elements", () => {
  act(() => {
    render(<CompanyCard company={mockData[0]} />, container);
  });
  expect(container.getElementsByClassName("cards").length).toBe(1);
  expect(container.getElementsByClassName("prop-text").length).toBe(3);
  expect(container.getElementsByClassName("description").length).toBe(1);
  expect(container.getElementsByClassName("image").length).toBe(1);
  expect(container.getElementsByClassName("link").length).toBe(1);
});
