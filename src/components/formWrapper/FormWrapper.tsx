import { Form, Formik, FormikHelpers } from "formik";
import useMultistepForm, { IInitialValues } from "../../hooks/useMultistepForm";
import FormStepper from "../formStepper/FormStepper";
import AddressDataForm from "../formSteps/AddressDataForm";
import PersonalDataForm from "../formSteps/PersonalDataForm";
import UserDataForm from "../formSteps/UserDataForm";

interface IFormWrapperProps {
  children: Array<JSX.Element>;
  onSubmit: (
    values: Partial<IInitialValues>,
    bag: FormikHelpers<IInitialValues>
  ) => Promise<void>;
}

const FormWrapper = ({ children, onSubmit }: IFormWrapperProps) => {
  const {
    isFirstStep,
    isLastStep,
    currentFormValues,
    currentStepIndex,
    previousStep,
    nextStep,
  } = useMultistepForm([
    <PersonalDataForm key={"personalData"} />,
    <UserDataForm key={"userData"} />,
    <AddressDataForm key={"addressData"} />,
  ]);

  const step = children[currentStepIndex];

  const handleSubmit = async (
    values: IInitialValues,
    bag: FormikHelpers<IInitialValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      nextStep(values);
    }
  };

  return (
    <Formik
      initialValues={currentFormValues}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {({ values, isValid, setErrors }) => (
        <Form className="grid max-w-2xl justify-center rounded-md border  bg-white p-8 shadow-md  shadow-slate-600">
          <FormStepper currentStepIndex={currentStepIndex} steps={children} />
          {<div className="flex h-56 w-96 flex-col justify-evenly">{step}</div>}
          <div className="flex justify-evenly gap-1">
            {!isFirstStep && (
              <button
                className="t-3 h-12 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-800 px-7 py-2 text-white shadow-sm shadow-black"
                onClick={() => [previousStep(values), setErrors({})]}
                type="button"
              >
                Previous
              </button>
            )}
            <button
              className="t-3 h-12 w-fit min-w-[119px] justify-center justify-self-center rounded-md bg-blue-800 px-7 py-2 text-white shadow-sm shadow-black disabled:bg-blue-400"
              type="submit"
              disabled={!isValid}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormWrapper;
