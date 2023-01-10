import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import FormInputText from "../formInput/FormInputText";
YupPassword(Yup);

const MainForm = (): JSX.Element => {
  return (
    <>
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
          name: Yup.string().max(15, "Max 15 characters.").required("Required"),
          surname: Yup.string()
            .max(15, "Max 15 characters.")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().password().required("Required"),
          country: Yup.string()
            .max(15, "Max 15 characters.")
            .required("Required"),
          address: Yup.string()
            .max(30, "Max 30 characters.")
            .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <FormInputText
            label="name"
            name="name"
            type="text"
            placeholder="Enter your first name"
          />
          <FormInputText
            label="surname"
            name="surname"
            type="text"
            placeholder="Enter your last surname"
          />
          <FormInputText
            label="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <FormInputText
            label="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <FormInputText
            label="country"
            name="country"
            type="text"
            placeholder="Enter your country"
          />
          <FormInputText
            label="address"
            name="address"
            type="text"
            placeholder="Enter your address"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
