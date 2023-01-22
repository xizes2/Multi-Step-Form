import FormInput from "../formInput/FormInput";

const UserDataForm = () => {
  return (
    <>
      <h2 className="pb-8 text-3xl">User Information</h2>
      <FormInput
        label="Email"
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        required={true}
      />
      <FormInput
        label="Username"
        name="email"
        id="username"
        type="text"
        placeholder="Your email"
        disabled={true}
      />
      <FormInput
        label="Password"
        name="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        required={true}
      />
    </>
  );
};

export default UserDataForm;
