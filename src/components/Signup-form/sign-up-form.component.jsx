import { useContext, useState } from "react";
import {
  createAuthWithUserAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase.utils";

const defaultValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFeilds, setFormFeilds] = useState(defaultValue);
  const { displayName, email, password, confirmPassword } = formFeilds;
  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormFeilds({ ...formFeilds, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("password not matched");
      return;
    }
    try {
      const { user } = await createAuthWithUserAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setFormFeilds(defaultValue);
    } catch (error) {
      console.log("failed to create");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleInput}
      />

      <label>Email</label>
      <input type="email" name="email" value={email} onChange={handleInput} />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignUp;
