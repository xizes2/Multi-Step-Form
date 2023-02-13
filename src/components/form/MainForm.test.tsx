import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainForm from "./MainForm";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

beforeEach(() => {
  render(<MainForm />);
});

describe("Given a MainForm component", () => {
  const testData = {
    name: "test name",
    surname: "test Surname",
    email: "test@email.com",
    password: "testPassword+9",
    country: "test country",
    state: "test state",
  };

  it("should render it's steps component, one by one.", async () => {
    const inputsStep1 = [
      await screen.findByLabelText("Name"),
      await screen.findByLabelText("Surname"),
    ];

    inputsStep1.forEach((input) => expect(input).toBeInTheDocument());

    await user.type(inputsStep1[0], testData.name);
    await user.type(inputsStep1[1], testData.surname);

    expect(inputsStep1[0]).toHaveValue(testData.name);
    expect(inputsStep1[1]).toHaveValue(testData.surname);

    await user.click(screen.getByText("Next"));

    const inputsStep2 = [
      await screen.findByLabelText("Email"),
      await screen.findByLabelText("Username"),
      await screen.findByLabelText("Password"),
    ];

    inputsStep2.forEach((input) => expect(input).toBeInTheDocument());

    await user.type(inputsStep2[0], testData.email);
    await user.type(inputsStep2[2], testData.password);

    expect(inputsStep2[0]).toHaveValue(testData.email);
    expect(inputsStep2[1]).toHaveValue(testData.email);
    expect(inputsStep2[2]).toHaveValue(testData.password);

    await user.click(screen.getByText("Next"));

    const inputsStep3 = [
      await screen.findByLabelText("Country"),
      await screen.findByLabelText("Address"),
    ];

    inputsStep3.forEach((input) => expect(input).toBeInTheDocument());

    await user.type(inputsStep3[0], testData.country);
    await user.type(inputsStep3[1], testData.state);

    expect(inputsStep3[0]).toHaveValue(testData.country);
    expect(inputsStep3[1]).toHaveValue(testData.state);

    await user.click(screen.getByText("Submit"));
  });

  it("should return to previous page when not on first step and button 'previous' is pressed.", async () => {
    const inputsStep1 = [
      await screen.findByLabelText("Name"),
      await screen.findByLabelText("Surname"),
    ];

    await user.type(inputsStep1[0], testData.name);
    await user.type(inputsStep1[1], testData.surname);

    await user.click(screen.getByText("Next"));

    const inputsStep2 = [
      await screen.findByLabelText("Email"),
      await screen.findByLabelText("Username"),
      await screen.findByLabelText("Password"),
    ];

    inputsStep2.forEach((input) => expect(input).toBeInTheDocument());

    await user.click(screen.getByText("Previous"));

    const inputsStep1Previous = [
      await screen.findByLabelText("Name"),
      await screen.findByLabelText("Surname"),
    ];
    inputsStep1Previous.forEach((input) => expect(input).toBeInTheDocument());
  });

  it("should show an error when no input is typed and the user clicks on the next button.", async () => {
    user.click(screen.getByText("Next"));

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
