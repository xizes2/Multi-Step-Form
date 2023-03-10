import FormInput from "../formInput/FormInput";

const PersonalDataForm = () => {
  return (
    <>
      <FormInput
        label="Name"
        name="name"
        id="name"
        type="text"
        placeholder="Enter your first name"
        required={true}
        autoFocus
      />
      <FormInput
        label="Surname"
        name="surname"
        id="surname"
        type="text"
        placeholder="Enter your last surname"
        required={true}
      />
    </>
  );
};

export default PersonalDataForm;
