import FormInput from "../formInput/FormInput";

const AddressDataForm = () => {
  return (
    <>
      <h2 className="pb-8 text-3xl">Addrress Information</h2>
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
    </>
  );
};

export default AddressDataForm;
