import React from "react";
import { render } from "@testing-library/react";
import Results from "../Results/Results";
import mockData from "../../utils/mockData";

const mockChildComponent = jest.fn();

jest.mock("../CompanyCard/CompanyCard", () => (companyList) => {
  mockChildComponent(mockData);
  return <mock-company-card />;
});

test("If Results component is rendered and is passing companyList prop to CompanyCard component", () => {
  render(<Results companyList={mockData} />);
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.arrayContaining(mockData)
  );
});
