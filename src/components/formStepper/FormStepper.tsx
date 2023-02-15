interface IFormStepperProps {
  steps: Array<JSX.Element>;
  currentStepIndex: number;
}

const FormStepper = ({ steps, currentStepIndex }: IFormStepperProps) => {
  const formSteps = ["Personal Data", "User Data", "Address Data"];

  return (
    <ul className="flex list-none justify-around pb-14 [&>div:last-child>span:last-child]:hidden">
      {steps.map((step, index) => (
        <div key={index} className="relative flex w-32 flex-col items-center">
          <li
            key={index}
            className={`${
              currentStepIndex >= index && "bg-blue-800 text-white"
            }   w-fit rounded-3xl border border-gray-400 bg-white px-4 py-2 text-lg transition-all delay-100 duration-500`}
          >
            {index + 1}
          </li>
          <span
            className={`${
              currentStepIndex === index && "text-lg font-bold"
            } pt-1 transition-font duration-[900ms] ease-out`}
          >
            {formSteps[index]}
          </span>
          <span
            className={
              currentStepIndex > index
                ? "absolute left-[85px] top-5 h-2 w-full bg-blue-800 transition-width duration-500"
                : "absolute left-[85px] top-5 h-2 w-0 bg-blue-800 transition-width duration-500"
            }
          ></span>
          <span className="absolute left-[85px] top-5 h-2 w-full border border-gray-400"></span>
        </div>
      ))}
    </ul>
  );
};

export default FormStepper;
