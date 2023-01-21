import { ReactElement, useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const previousStep = () => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index + 1;
    });
  };

  const nextStep = () => {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps,
    step: steps[currentStepIndex],
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    previousStep,
    nextStep,
    goToStep,
  };
};

export default useMultistepForm;
