import { createContext, useState } from "react";
import {
  PHOTO_POST,
  PHOTOS_GET,
  PHOTO_GET,
  PHOTO_COMMENT_POST,
  DELTE_PHOTO,
  GET_STATITCS
} from "../../services/api/api";
import { useNavigate } from "react-router-dom";

export const GlobalDashboardContext = createContext();

export const StorageDashboardContext = ({ children }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [loadGlobal, setLoadGlobal] = useState(false);
  const [erro, setErro] = useState(null);
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
      setErro(error)
      setErro(error);
    } finally {
      setLoad(false);
    }
  }

  async function fetchPhotos(page, user) {
    try {
      setLoadGlobal(true);
      const response = await (
        await PHOTOS_GET({ page: page, total: 6, user: user })
      ).json();
      return response;
    } catch (error) {
      setErro("Não foi possivel carregar as imagens");
    } finally {
      setLoadGlobal(false);
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
      setErro(error)
      } finally {
      setLoad(false);
    }
  }

  async function deletePhoto(id) {
    try {
      setLoad(true);
      const token = window.localStorage.getItem("token");
      const response = await DELTE_PHOTO(id, token);
      return response;
    } catch (error) {
      setErro(error)
    } finally {
      setLoad(false);
    }
  }

  async function getStatics() {
    try {
      setErro(null)
      setLoadGlobal(true)
      const token = window.localStorage.getItem('token')
   return await (await GET_STATITCS(token)).json()
    } catch (error) {
      setErro(erro)
    }finally{
      setLoadGlobal(false)
    }
  }

  return (
    <GlobalDashboardContext.Provider
      value={{
        photoPost,
        fetchPhotos,
        fetchOnePhoto,
        photoCommentPost,
        deletePhoto,
        getStatics,
        load,
        loadGlobal,
        erro,
        dataPhoto,
      }}
    >
      {children}
    </GlobalDashboardContext.Provider>
  );
};
