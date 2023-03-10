import { Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

interface IFormikWrapperProps {
  children: JSX.Element;
}

const FormikWrapper = ({ children }: IFormikWrapperProps) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        userName: "",
        password: "",
        country: "",
        address: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(15, "Max 15 characters").required("Required"),
        surname: Yup.string().max(15, "Max 15 characters").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().password().required("Required"),
        country: Yup.string().max(15, "Max 15 characters").required("Required"),
        address: Yup.string().max(30, "Max 30 characters").required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {children}
    </Formik>
  );
};

export default FormikWrapper;
