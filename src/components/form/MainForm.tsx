import FormWrapper from "../formWrapper/FormWrapper";
import AddressDataForm from "../formSteps/AddressDataForm";
import PersonalDataForm from "../formSteps/PersonalDataForm";
import UserDataForm from "../formSteps/UserDataForm";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { IInitialValues } from "../../hooks/useMultistepForm";
import { FormikHelpers } from "formik";

YupPassword(Yup);

interface IFormStepProps {
  children: JSX.Element;
  validationSchema: Yup.AnyObjectSchema;
  onSubmit: (
    values: IInitialValues,
    bag: FormikHelpers<IInitialValues>
  ) => Promise<void>;
}

const FormStep = ({ children }: IFormStepProps) => children;

const MainForm = (): JSX.Element => {
  return (
    <FormWrapper onSubmit={async (values) => console.log("Final", values)}>
      <FormStep
        onSubmit={async (values) => console.log("Step 1", values)}
        validationSchema={Yup.object({
          name: Yup.string().max(15, "Max 15 characters").required("Required"),
          surname: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
        })}
      >
        <PersonalDataForm />
      </FormStep>
      <FormStep
        onSubmit={async (values) => console.log("Step 2", values)}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().password().required("Required"),
        })}
      >
        <UserDataForm />
      </FormStep>
      <FormStep
        onSubmit={async (values) => console.log("Step 3", values)}
        validationSchema={Yup.object({
          country: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          address: Yup.string()
            .max(30, "Max 30 characters")
            .required("Required"),
        })}
      >
        <AddressDataForm />
      </FormStep>
    </FormWrapper>
  );
};

export default MainForm;
