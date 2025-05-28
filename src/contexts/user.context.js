import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthUserStateChanged,
} from "../utils/Firebase/Firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      console.log("user", user);
      setCurrentUser(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
