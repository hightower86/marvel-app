import { apiGetCharacters, apiGetHero } from './../api/index';
import {
  getCharactersFail,
  getCharactersFetching,
  getCharactersSuccess,
  getHeroFail,
  getHeroFetching,
  getHeroSuccess,
} from './comicsSlice';

export const fetchCharacters = () => async (dispatch: any) => {
  dispatch(getCharactersFetching());
  try {
    const response: any = await apiGetCharacters();
    const data = response.data;
    console.log('data', data);
    console.log('data.results', data.results);
    dispatch(getCharactersSuccess(data.results));
  } catch (error) {
    dispatch(getCharactersFail(error));
  }
};

export const fetchHero = (id: number) => async (dispatch: any) => {
  dispatch(getHeroFetching());
  try {
    const result: any = await apiGetHero(id);
    const data = result.data;
    console.log('data', data);
    console.log('data.results', data.results);
    dispatch(getHeroSuccess(data?.results?.[0]));
  } catch (error) {
    dispatch(getHeroFail(error));
  }
};
