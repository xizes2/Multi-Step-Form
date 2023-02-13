import { render, screen } from "@testing-library/react";
import AddressDataForm from "../formSteps/AddressDataForm";
import PersonalDataForm from "../formSteps/PersonalDataForm";
import UserDataForm from "../formSteps/UserDataForm";
import FormStepper from "./FormStepper";
import "@testing-library/jest-dom";

const steps = [
  <PersonalDataForm key={"personalData"} />,
  <UserDataForm key={"userData"} />,
  <AddressDataForm key={"addressData"} />,
];

const currentStepIndex = 0;

beforeEach(() => {
  render(<FormStepper steps={steps} currentStepIndex={currentStepIndex} />);
});

describe("Given a FormStepper component, when rendered", () => {
  it("should render a stepper with the ammount of steps in the form", async () => {
    expect(await screen.findByText("1")).toBeInTheDocument();
    expect(await screen.findByText("2")).toBeInTheDocument();
    expect(await screen.findByText("3")).toBeInTheDocument();
  });
});
