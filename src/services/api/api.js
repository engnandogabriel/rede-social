import axios from "axios";
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
  // return axios.post(`${url}/jwt-auth/v1/token/validate`, {
  //   headers: {
  //     Authorization: "Bearer " + token,
  //   },
  // });
};

export const CREATE_USER = async (body) => {
  console.log(body);
  return await axios.post(`${url}/api/user`, {
    username: body.username,
    email: body.email,
    password: body.password,
  });
};
