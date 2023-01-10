import { useField, FieldHookConfig } from "formik";

interface ILabel {
  label: string;
}

const FormInputText = ({
  label,
  ...props
}: ILabel & FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type={props.type} placeholder={props.placeholder} {...field} />
      {meta.touched && meta.error ? (
        <div className="error-container">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormInputText;
