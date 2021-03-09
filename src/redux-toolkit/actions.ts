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
    const {
      data: { results },
    } = await apiGetCharacters();
    dispatch(getCharactersSuccess(results));
  } catch (error) {
    dispatch(getCharactersFail(error));
  }
};

export const fetchHero = (id: number) => async (dispatch: any) => {
  dispatch(getHeroFetching());
  try {
    const {
      data: { results },
    } = await apiGetHero(id);
    dispatch(getHeroSuccess(results));
  } catch (error) {
    dispatch(getHeroFail(error));
  }
};
