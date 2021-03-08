import { combineReducers, configureStore } from '@reduxjs/toolkit';
import comicsReducer from './comicsSlice';
// ...

export interface RootState {
  comics: {
    characters: [];
  };
}
const rootReducer = combineReducers({
  comics: comicsReducer,
});

export const store = configureStore({ reducer: rootReducer });
