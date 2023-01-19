import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormikWrapper from "../../utils/FormikWrapper";
import MainForm from "./MainForm";

beforeEach(() => {
  render(
    <FormikWrapper>
      <MainForm />
    </FormikWrapper>
  );
});

describe("Given a MainForm component", () => {
  it("should render seven labels and it corresponding inputs.", async () => {
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
