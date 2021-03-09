import { combineReducers, configureStore } from '@reduxjs/toolkit';
import comicsReducer, { IHero } from './comicsSlice';
// ...

export interface RootState {
  comics: {
    characters: [];
    hero: IHero;
  };
}
const rootReducer = combineReducers({
  comics: comicsReducer,
});

export const store = configureStore({ reducer: rootReducer });
