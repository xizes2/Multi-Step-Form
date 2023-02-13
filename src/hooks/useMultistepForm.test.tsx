import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import AddressDataForm from "../components/formSteps/AddressDataForm";
import PersonalDataForm from "../components/formSteps/PersonalDataForm";
import UserDataForm from "../components/formSteps/UserDataForm";
import useMultistepForm from "./useMultistepForm";

describe("Given a hook useMultistepForm", () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    userName: "",
    password: "",
    country: "",
    address: "",
  };

  const testValues = {
    name: "John",
    surname: "Doe",
    email: "doe@gmail.com",
    userName: "doe@gmail.com",
    password: "654sfds+K",
    country: "Djibuti",
    address: "djibuti St.",
  };

  const testValues2 = {
    name: "John",
    surname: "Doe",
    email: "",
    userName: "",
    password: "",
    country: "",
    address: "",
  };

  const steps = [
    <PersonalDataForm key={"personalData"} />,
    <UserDataForm key={"userData"} />,
    <AddressDataForm key={"addressData"} />,
  ];

  it("should have empty initial values and current index should be 0.", async () => {
    const { result } = renderHook(() => useMultistepForm(steps));

    expect(result.current.currentFormValues).toEqual(initialValues);
    expect(result.current.currentStepIndex).toBe(0);
  });

  it("should update the current form values and sum 1 to currentStepIndex when nextStep is called.", () => {
    const { result } = renderHook(() => useMultistepForm(steps));

    act(() => {
      result.current.nextStep(testValues);
    });

    expect(result.current.currentFormValues).toEqual(testValues);
    expect(result.current.currentStepIndex).toBe(1);
  });

  it("should update the current form values and subtract 1 from currentStepIndex when peviousStep is called.", () => {
    const { result } = renderHook(() => useMultistepForm(steps));

    act(() => {
      result.current.nextStep(testValues);
      result.current.previousStep(testValues2);
    });

    expect(result.current.currentFormValues).toEqual(testValues2);
    expect(result.current.currentStepIndex).toBe(0);
  });

  it("should return index 0 when peviousStep is called and index is less than or equal to 0.", () => {
    const { result } = renderHook(() => useMultistepForm(steps));

    act(() => {
      result.current.previousStep(testValues2);
    });

    expect(result.current.currentStepIndex).toBe(0);
  });

  it("should return the current index when nextStep is called and index is greater than or equal to steps length - 1.", () => {
    const { result } = renderHook(() => useMultistepForm(steps));

    act(() => {
      result.current.nextStep(testValues);
      result.current.nextStep(testValues);
      result.current.nextStep(testValues);
    });

    expect(result.current.currentStepIndex).toBe(2);
  });
});
