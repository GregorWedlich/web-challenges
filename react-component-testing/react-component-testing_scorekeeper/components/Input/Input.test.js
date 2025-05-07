import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name"
      placeholder="Test Placeholder"
      name="name-input"
      value="Chess"
      onChange={handleChange}
      required={true}
    />
  );

  const input = screen.getByLabelText("Name");
  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "Player Name");
  expect(input).toHaveAttribute("name", "name-input");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("required", "true");
  expect(input).toHaveAttribute("value", "");
});

test("calls callback on every user input", async () => {});
