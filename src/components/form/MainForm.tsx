import { Form } from "formik";
import { FormEvent } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormikWrapper from "../../utils/FormikWrapper";
import AddressDataForm from "../formSteps/AddressDataForm";
import PersonalDataForm from "../formSteps/PersonalDataForm";
import UserDataForm from "../formSteps/UserDataForm";

YupPassword(Yup);

const MainForm = (): JSX.Element => {
  const {
    steps,
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
  } = useMultistepForm([
    <PersonalDataForm key={"personalData"} />,
    <UserDataForm key={"userData"} />,
    <AddressDataForm key={"addressData"} />,
  ]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <FormikWrapper>
      <Form
        onSubmit={onSubmit}
        className="grid max-w-2xl justify-center rounded-md bg-white p-8 shadow-md shadow-slate-400 "
      >
        {step}

        <div className="flex justify-evenly gap-1">
          {!isFirstStep && (
            <button
              type="button"
              className="t-3 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black"
              onClick={previousStep}
            >
              Previous
            </button>
          )}
          <button
            className="t-3 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black"
            type="submit"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </Form>
    </FormikWrapper>
  );
};

export default MainForm;
