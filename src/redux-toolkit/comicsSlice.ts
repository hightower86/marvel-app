import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux-toolkit/store';

// Define a type for the slice state
interface ComicsState {
  characters: [];
  error: null | string;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: ComicsState = {
  characters: [],
  error: null,
  isLoading: false,
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
    getCharactersFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  getCharactersSuccess,
  getCharactersFetching,
  getCharactersFail,
} = comicsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectComics = (state: RootState) => state.comics.characters;

export default comicsSlice.reducer;
