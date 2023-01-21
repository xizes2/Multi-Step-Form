import { Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormikWrapper from "../../utils/FormikWrapper";
import FormInput from "../formInput/FormInput";
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
  } = useMultistepForm([]);

  return (
    <FormikWrapper>
      <Form className="grid max-w-2xl justify-center rounded-md bg-white p-8 shadow-md shadow-slate-400 ">
        <UserDataForm />
        <PersonalDataForm />
        <AddressDataForm />

        <div className="flex justify-evenly gap-1">
          {!isFirstStep && (
            <button className="t-3 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black">
              Previous
            </button>
          )}
          {!isLastStep && (
            <button className="t-3 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black">
              {isLastStep ? "Submit" : "Next"}
            </button>
          )}
        </div>

        {/* <button
          type="submit"
          className="mt-3 w-fit justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black"
        >
          Submit
        </button> */}
      </Form>
    </FormikWrapper>
  );
};

export default MainForm;
