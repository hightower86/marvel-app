import { apiGetCharacters } from './../api/index';
import {
  getCharactersFail,
  getCharactersFetching,
  getCharactersSuccess,
} from './comicsSlice';

export const fetchCharacters = () => async (dispatch: any) => {
  dispatch(getCharactersFetching());
  try {
    const { data: results } = await apiGetCharacters();
    dispatch(getCharactersSuccess(results));
  } catch (error) {
    dispatch(getCharactersFail(error));
  }
};
