import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Formik } from "formik";
import FormInput from "../formInput/FormInput";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

describe("Given a FormInput component", () => {
  it("should render a label and it corresponding input.", async () => {
    const user = userEvent.setup();

    render(
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
          userName: "",
          country: "",
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(15, "Max 15 characters").required("Required"),
          surname: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().password().required("Required"),
          country: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          address: Yup.string()
            .max(30, "Max 30 characters")
            .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormInput
          label="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required={true}
          id="name"
        />
      </Formik>
    );

    const inputText = "John Doe";
    const label = await screen.findByText("name");
    const labelIinput = await screen.findByLabelText("name");

    await user.type(labelIinput, inputText);

    expect(label).toBeInTheDocument();
    expect(labelIinput).toBeInTheDocument();
    expect(labelIinput).toHaveValue(inputText);
  });

  it("should show an error if user doesn't input anything", async () => {
    const user = userEvent.setup();

    render(
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
          userName: "",
          country: "",
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(15, "Max 15 characters").required("Required"),
          surname: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().password().required("Required"),
          country: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          address: Yup.string()
            .max(30, "Max 30 characters")
            .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormInput
          label="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          id="name"
        />
      </Formik>
    );

    const labelInput = await screen.findByLabelText("name");
    const errorMessage = "Required";

    await user.click(labelInput);
    await user.tab();

    const errorElement = await screen.findByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
