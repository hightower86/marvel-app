import { apiGetCharacters, apiGetHero } from './../api/index';
import {
  getCharactersFail,
  getCharactersFetching,
  getCharactersSuccess,
  getHeroFail,
  getHeroFetching,
  getHeroSuccess,
  getMoreCharactersSuccess,
} from './comicsSlice';

export const fetchCharacters = (limit: number, offset: number) => async (
  dispatch: any
) => {
  dispatch(getCharactersFetching());
  try {
    const response: any = await apiGetCharacters(limit, offset);
    const data = response.data;
    if (offset > 0) {
      dispatch(getMoreCharactersSuccess(data.results));
    } else {
      dispatch(getCharactersSuccess(data.results));
    }
  } catch (error) {
    dispatch(getCharactersFail(error));
  }
};

export const fetchHero = (id: number) => async (dispatch: any) => {
  dispatch(getHeroFetching());
  try {
    const result: any = await apiGetHero(id);
    const data = result.data;
    dispatch(getHeroSuccess(data?.results?.[0]));
  } catch (error) {
    dispatch(getHeroFail(error));
  }
};
