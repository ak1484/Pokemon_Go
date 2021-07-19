import { render, screen } from "@testing-library/react";
import App from "./App";
describe("<App/> component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Enter number of Pokemon for List at Max 1000/i,
      { exact: true }
    );
    expect(linkElement).toBeInTheDocument();
  });
});
