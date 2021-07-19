import { render, screen } from "@testing-library/react";
import Title from "./Title";

test('renders "Title" as a text', () => {
  //Arrange
  render(<Title />);
  //Act
  //.... nothing
  //Assert
  const titleElement = screen.getByText("Pokemon Go");
  expect(titleElement).toBeInTheDocument();
});
