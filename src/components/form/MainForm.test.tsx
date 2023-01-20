import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainForm from "./MainForm";

describe("Given a MainForm component", () => {
  it("should render seven labels and it corresponding inputs.", async () => {
    render(<MainForm />);

    const inputs = [
      await screen.findByLabelText("Name"),
      await screen.findByLabelText("Surname"),
      await screen.findByLabelText("Email"),
      await screen.findByLabelText("Username"),
      await screen.findByLabelText("Password"),
      await screen.findByLabelText("Country"),
      await screen.findByLabelText("Address"),
    ];

    inputs.forEach((input) => expect(input).toBeInTheDocument());
  });
});
