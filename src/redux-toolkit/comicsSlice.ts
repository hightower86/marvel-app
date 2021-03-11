import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux-toolkit/store';

// Define a type for the slice state

export interface IHero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: [];
  stories: [];
  events: [];
  series: [];
}
interface ComicsState {
  characters: [];
  error: null | string;
  isLoading: boolean;
  hero: IHero | null;
}

// Define the initial state using that type
const initialState: ComicsState = {
  characters: [],
  error: null,
  isLoading: false,
  hero: {
    id: 0,
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
    comics: [],
    stories: [],
    events: [],
    series: [],
  },
};

export const comicsSlice = createSlice({
  name: 'comics',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getCharactersFetching: (state) => {
      state.isLoading = true;
    },
    getCharactersSuccess: (state, action: PayloadAction<[]>) => {
      state.characters = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getMoreCharactersSuccess: (state, action: PayloadAction<[]>) => {
      state.characters = [...state.characters, ...action.payload];
      state.isLoading = false;
      state.error = null;
    },
    getCharactersFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    getHeroFetching: (state) => {
      state.isLoading = true;
    },
    getHeroSuccess: (state, action: PayloadAction<IHero>) => {
      state.hero = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getHeroFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  getCharactersSuccess,
  getCharactersFetching,
  getCharactersFail,
  getHeroFail,
  getHeroFetching,
  getHeroSuccess,
  getMoreCharactersSuccess,
} = comicsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectComics = (state: RootState) => state.comics.characters;

export default comicsSlice.reducer;
