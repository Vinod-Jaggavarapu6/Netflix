export const validateFormData = (
  email,
  password,
  isSignInForm,
  name = null
) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(name);
  if (!isSignInForm && !isNameValid) {
    return "Name is not valid";
  }
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
