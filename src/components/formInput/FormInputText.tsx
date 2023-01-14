import { useField, FieldHookConfig } from "formik";

interface IInputProps {
  label: string;
}

const FormInputText = ({
  required,
  label,
  ...props
}: IInputProps & FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex justify-between gap-3 text-center">
        <label htmlFor={props.id || props.name} className="">
          {label}
        </label>
        <div className="pb-3">
          <input
            type={props.type}
            placeholder={props.placeholder}
            {...field}
            autoComplete="off"
            className="peer min-w-[300px] rounded-md  border-none placeholder:text-slate-400 invalid:border-red-600  focus:bg-blue-100"
            required={required}
          />
          {meta.touched && meta.error ? (
            <div className="relative left-3 bottom-12 w-fit text-xs peer-required:text-red-600">
              {meta.error}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FormInputText;
