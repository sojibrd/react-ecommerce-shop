import { useState } from "react";
import {
  SignInAuthWithUserAndPassword,
  signInWithGoogle,
} from "../../utils/Firebase/Firebase.utils";

const defaultValue = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultValue);
  const { email, password } = formFields;

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthWithUserAndPassword(email, password);
      setFormFields(defaultValue);
    } catch (error) {
      console.log("failed to create");
    }
  };

  const onSignInGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <>
      <button onClick={onSignInGoogle}>Sign in with google popup</button>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleInput} />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />

        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
export default SignIn;
