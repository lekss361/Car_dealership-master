import { Car } from '../../models/car';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface FavoritesPage {
  items: Car[];
  minPrice: number;
  maxPrice: number;
}

const initialState: FavoritesPage = {
  items: [],
  minPrice: 0,
  maxPrice: 100000,
};

const favoritesPageSlice = createSlice({
  name: 'favoritesPage',
  initialState,
  reducers: {
    toggleToFavorites: (state, action: PayloadAction<Car>) => {
      const inList = state.items.find((item) => item.id === action.payload.id);
      if (!inList) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { toggleToFavorites, clearFavorites } = favoritesPageSlice.actions;

export const selectFavoritesItems = (state: RootState) => state.favoritesPage.items;
export const selectFavoritesItemsCount = (state: RootState) => state.favoritesPage.items.length;
export const checkInFavorites = (state: RootState, id: number) => state.favoritesPage.items.find((item) => item.id === id);

export const favoritesPageReducer = favoritesPageSlice.reducer;
