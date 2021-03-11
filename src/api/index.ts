import axios from 'axios';
import { charactersData } from './data';
import { heroData } from './heroData';

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
const API_KEY = '1bded6638cafa565ae83ba51bc9e1d43';

export const apiGetCharacters = (limit: number, offset: number) => {
  const params = {
    limit: limit,
    apikey: API_KEY,
  };
  return axios(BASE_URL, { params }).then((res) => res.data);
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(charactersData);
  //   }, 2000);
  // });
};
export const apiGetHero = (id: number) => {
  const params = {
    //limit: 10,
    apikey: API_KEY,
  };
  return axios(`${BASE_URL}/${id}`, { params }).then((res) => res.data);
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(heroData);
  //   }, 2000);
  // });
};
