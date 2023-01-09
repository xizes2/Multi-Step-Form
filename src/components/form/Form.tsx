import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const Form = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      userName: "",
      country: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Max 15 characters.").required("Required"),
      surname: Yup.string().max(15, "Max 15 characters.").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().password().required("Required"),
      country: Yup.string().max(15, "Max 15 characters.").required("Required"),
      address: Yup.string().max(30, "Max 30 characters.").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="name">name</label>
      <input type="text" id="name" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
