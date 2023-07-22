import { createContext, useState } from "react";
import { PHOTO_POST } from "../../services/api/api";
import { useNavigate } from "react-router-dom";

export const GlobalDashboardContext = createContext();

export const StorageDashboardContext = ({ children }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(null);

  async function photoPost(formData) {
    try {
      setLoad(true);
      setErro(null);
      const token = window.localStorage.getItem("token");
      if (token) {
        const response = await PHOTO_POST(formData, token);
        console.log(response);
        return navigate("/dashboard");
      }
      throw new Error("Token inválido");
    } catch (error) {
      console.log("erro");
      console.log(error);
      setErro(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <GlobalDashboardContext.Provider value={{ photoPost, load, erro }}>
      {children}
    </GlobalDashboardContext.Provider>
  );
};
