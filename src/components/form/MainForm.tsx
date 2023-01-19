import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import FormInput from "../formInput/FormInput";

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
          name: Yup.string().max(15, "Max 15 characters").required("Required"),
          surname: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().password().required("Required"),
          country: Yup.string()
            .max(15, "Max 15 characters")
            .required("Required"),
          address: Yup.string()
            .max(30, "Max 30 characters")
            .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="grid max-w-2xl justify-center rounded-md bg-white p-8 shadow-md shadow-slate-400 ">
          <FormInput
            label="Name"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your first name"
            required={true}
          />
          <FormInput
            label="Surname"
            name="surname"
            id="surname"
            type="text"
            placeholder="Enter your last surname"
            required={true}
          />
          <FormInput
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required={true}
          />
          <FormInput
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required={true}
          />
          <FormInput
            label="Country"
            name="country"
            id="country"
            type="text"
            placeholder="Enter your country"
            required={true}
          />
          <FormInput
            label="Address"
            name="address"
            id="address"
            type="text"
            placeholder="Enter your address"
            required={true}
          />

          <button
            type="submit"
            className="mt-3 w-fit justify-center justify-self-center rounded-md bg-blue-600 px-7 py-2 text-white shadow-sm shadow-black"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
