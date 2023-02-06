import { ReactElement, useState } from "react";

export interface IInitialValues {
  name: string;
  surname: string;
  email: string;
  userName: string;
  password: string;
  country: string;
  address: string;
}

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentFormValues, setCurrentFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    userName: "",
    password: "",
    country: "",
    address: "",
  });

  const previousStep = (values: IInitialValues) => {
    setCurrentFormValues(values);
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  };

  const nextStep = (values: IInitialValues) => {
    setCurrentFormValues(values);
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  };

  return {
    currentStepIndex,
    currentFormValues,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    previousStep,
    nextStep,
  };
};

export default useMultistepForm;
