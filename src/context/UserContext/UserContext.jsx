import { createContext } from "react";
import { LOGIN_USER } from "../../services/api/api";

export const GlobalUserContext = createContext();

export const StorageUserContext = ({ children }) => {
  async function loginUser(user, pass) {
    const userLogin = await LOGIN_USER(user, pass);
    console.log(userLogin);
  }

  return (
    <GlobalUserContext.Provider value={{ loginUser }}>
      {children}
    </GlobalUserContext.Provider>
  );
};
