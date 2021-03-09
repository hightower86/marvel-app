import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
const API_KEY = '1bded6638cafa565ae83ba51bc9e1d43';

export const apiGetCharacters = () => {
  const params = {
    //limit: 10,
    apikey: API_KEY,
  };
  return axios(BASE_URL, { params }).then((res) => res.data);
};
export const apiGetHero = (id: number) => {
  const params = {
    //limit: 10,
    apikey: API_KEY,
  };
  return axios(`${BASE_URL}/${id}`, { params }).then((res) => res.data);
};
