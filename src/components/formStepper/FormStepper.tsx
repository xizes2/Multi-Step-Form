interface IFormStepperProps {
  steps: Array<JSX.Element>;
  currentStepIndex: number;
}

const FormStepper = ({ steps, currentStepIndex }: IFormStepperProps) => {
  const formSteps = ["Personal Data", "User Data", "Address Data"];

  return (
    <li className="flex list-none justify-around pb-5 [&>div:last-child>span:first-child]:hidden">
      {steps.map((step, index) => (
        <div
          key={step.key}
          className="relative flex w-32 flex-col items-center "
        >
          <ul
            className={`${
              currentStepIndex >= index && "bg-blue-600 text-white"
            }   w-fit rounded-3xl border border-gray-400 bg-white px-4 py-2 text-lg`}
          >
            {index + 1}
          </ul>
          <span className="absolute left-[85px] top-5 h-2 w-full border border-gray-400 "></span>
          <span className="pt-1">{formSteps[index]}</span>
        </div>
      ))}
    </li>
  );
};

export default FormStepper;
