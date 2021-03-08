import axios from 'axios';

export const apiGetCharacters = () => {
  const params = {
    limit: 10,
    apikey: '1bded6638cafa565ae83ba51bc9e1d43',
  };
  return axios('https://gateway.marvel.com/v1/public/comics', { params }).then(
    (res) => res.data
  );
};
