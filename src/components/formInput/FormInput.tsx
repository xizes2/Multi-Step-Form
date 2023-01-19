import { useField, FieldHookConfig } from "formik";

interface IInputProps {
  label: string;
}

const FormInput = ({
  required,
  label,
  ...props
}: IInputProps & FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex justify-between gap-3 text-center">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="min-h-[70px] pb-3">
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            {...field}
            autoComplete="off"
            className={
              meta.touched && meta.error
                ? "min-w-[300px] rounded-md border-red-600 placeholder:text-slate-400 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                : "min-w-[300px] rounded-md border-gray-400 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1"
            }
            required={required}
          />
          {meta.touched && meta.error ? (
            <span
              id="field-error"
              className="relative -top-[50px] left-2 block w-fit bg-white px-[5px] text-xs  text-red-600"
            >
              {meta.error}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FormInput;
