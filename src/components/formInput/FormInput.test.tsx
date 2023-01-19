import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FormInput from "../formInput/FormInput";
import * as Yup from "yup";
import YupPassword from "yup-password";
import FormikWrapper from "../../utils/FormikWrapper";

YupPassword(Yup);

beforeEach(() => {
  render(
    <FormikWrapper>
      <FormInput
        label="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        required
        id="name"
      />
    </FormikWrapper>
  );
});

const user = userEvent.setup();

describe("Given a FormInput component", () => {
  it("should render a label and it corresponding input.", async () => {
    const inputText = "John Doe";

    const labelInput = await screen.findByLabelText("name");

    await user.type(labelInput, inputText);

    expect(labelInput).toBeInTheDocument();
    expect(labelInput).toHaveValue(inputText);
  });

  it("should show an error if user doesn't input anything and pass to the next field", async () => {
    const labelInput = await screen.findByLabelText("name");
    const errorMessage = "Required";

    await user.click(labelInput);
    await user.tab();

    const errorElement = await screen.findByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
