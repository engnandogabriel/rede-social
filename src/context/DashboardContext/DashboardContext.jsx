import { createContext, useState } from "react";
import {
  PHOTO_POST,
  PHOTOS_GET,
  PHOTO_GET,
  PHOTO_COMMENT_POST,
} from "../../services/api/api";
import { useNavigate } from "react-router-dom";

export const GlobalDashboardContext = createContext();

export const StorageDashboardContext = ({ children }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(null);
  const [dataPhotos, setDataPhotos] = useState({});
  const [dataPhoto, setDataPhoto] = useState({});

  async function photoPost(formData) {
    try {
      setLoad(true);
      setErro(null);
      const token = window.localStorage.getItem("token");
      if (token) {
        await PHOTO_POST(formData, token);
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

  async function fetchPhotos() {
    try {
      setLoad(true);
      const response = await (
        await PHOTOS_GET({ page: 1, total: 6, user: 0 })
      ).json();
      setDataPhotos(response);
      return;
    } catch (error) {
      setErro("Não foi possivel carregar as imagens");
      setDataPhotos({});
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  async function fetchOnePhoto(id) {
    try {
      setLoad(true);
      setErro(null);
      const response = await (await PHOTO_GET(id)).json();
      setDataPhoto(response);
    } catch (error) {
      setErro("Não foi possível carregar a imagem");
    } finally {
      setLoad(false);
    }
  }

  async function photoCommentPost(id, body) {
    try {
      setLoad(true);
      const token = window.localStorage.getItem("token");
      const response = await (await PHOTO_COMMENT_POST(id, body, token)).json();
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <GlobalDashboardContext.Provider
      value={{
        photoPost,
        fetchPhotos,
        fetchOnePhoto,
        photoCommentPost,
        load,
        erro,
        dataPhotos,
        dataPhoto,
      }}
    >
      {children}
    </GlobalDashboardContext.Provider>
  );
};
