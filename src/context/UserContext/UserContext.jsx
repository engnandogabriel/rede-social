import { createContext, useCallback, useEffect, useState } from "react";
import {
  TOKEN_POST,
  GET_USER,
  VALIDATE_TOKEN,
  CREATE_USER,
} from "../../services/api/api";
import { useNavigate } from "react-router-dom";

export const GlobalUserContext = createContext();

export const StorageUserContext = ({ children }) => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState("");
  const [loged, setLoged] = useState(null);
  const [load, setLoad] = useState(false);
  const [loadGlobal, setLoadGlobal] = useState(false);
  const [erro, setErro] = useState(null);

  const logoutUser = useCallback(() => {
    setDataUser(null);
    setErro(null);
    setLoad(null);
    setLoged(false);
    window.localStorage.clear("token");
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    async function autoLogin() {
      var token = window.localStorage.getItem("token");
      if (token) {
        try {
          setErro(null);
          setLoadGlobal(true);
          const { data } = await VALIDATE_TOKEN(token);
          if (data.status != 200) throw new Error("Token invalido");
          await getUser(token);
        } catch (error) {
          logoutUser();
        } finally {
          setLoadGlobal(false);
        }
      }
    }
    autoLogin();
  }, [logoutUser]);

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

  async function createUser(username, email, password) {
    try {
      setErro(null);
      setLoad(true);
      CREATE_USER({ username, email, password });
      await userLogin(username, password);
    } catch (error) {
      setErro("Usuário não cadastrado");
    } finally {
      setLoad(false);
    }
  }

  return (
    <GlobalUserContext.Provider
      value={{
        userLogin,
        logoutUser,
        createUser,
        dataUser,
        load,
        loadGlobal,
        erro,
        loged,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
