import { createContext, useEffect, useState } from "react";
import { TOKEN_POST, GET_USER, VALIDATE_TOKEN } from "../../services/api/api";

export const GlobalUserContext = createContext();

export const StorageUserContext = ({ children }) => {
  const [dataUser, setDataUser] = useState("");
  const [loged, setLoged] = useState(null);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function autoLogin() {
      var token = window.localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await VALIDATE_TOKEN(token);
          if (data.status != 200) throw new Error("Token invalido");
          await getUser(token);
        } catch (error) {
          console.log(error);
        }
      }
    }
    autoLogin();
  }, []);

  function logoutUser() {
    setDataUser(null);
    setErro(null);
    setLoad(null);
    setLoged(false);
    window.localStorage.clear("token");
  }

  async function getUser(token) {
    const { data } = await GET_USER(token);
    setDataUser(data);
    setLoged(true);
  }

  async function userLogin(user, pass) {
    try {
      setLoad(true);
      setErro(null);
      const { data } = await TOKEN_POST({ username: user, password: pass });
      window.localStorage.setItem("token", data.token);
      getUser(data.token);
    } catch (error) {
      setErro(error.response.data.message);
    } finally {
      setLoad(false);
    }
  }

  return (
    <GlobalUserContext.Provider
      value={{ userLogin, logoutUser, dataUser, load, erro, loged }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
