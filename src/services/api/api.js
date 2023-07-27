import axios from "axios";
import { json } from "react-router-dom";
//api/user -- pegar token
//https://dogsapi.origamid.dev/json

const url = import.meta.env.VITE_URL;

export const TOKEN_POST = async (body) => {
  return axios.post(`${url}/jwt-auth/v1/token`, {
    username: body.username,
    password: body.password,
  });
};

export const GET_USER = async (token) => {
  return axios.get(`${url}/api/user`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const VALIDATE_TOKEN = async (token) => {
  const response = await fetch(`${url}/jwt-auth/v1/token/validate`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const json = await response.json();
  return json;
};

export const CREATE_USER = async (body) => {
  return await axios.post(`${url}/api/user`, {
    username: body.username,
    email: body.email,
    password: body.password,
  });
};

export const PHOTO_POST = async (formData, token) => {
  return await fetch(`${url}/api/photo`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  });
};

export const PHOTOS_GET = async ({ page, total, user }) => {
  return await fetch(
    `${url}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
};

export const PHOTO_GET = async (id) => {
  return await fetch(`${url}/api/photo/${id}`, {
    method: "GET",
    cache: "no-store",
  });
};

export const PHOTO_COMMENT_POST = async (id, body, token) => {
  return await fetch(`${url}/api/comment/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });
};

export const DELTE_PHOTO = async (id, token) => {
  return await fetch(`${url}/api/photo/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
