import { Car } from '../../models/car';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface ComparisonPage {
  items: Car[];
}

const initialState: ComparisonPage = {
  items: [],
};

const comparisonPageSlice = createSlice({
  name: 'comparisonPage',
  initialState,
  reducers: {
    toggleToComparison: (state, action: PayloadAction<Car>) => {
      const inList = state.items.find((item) => item.id === action.payload.id);
      if (!inList) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    clearComparison: (state) => {
      state.items = [];
    },
  },
});

export const { toggleToComparison, clearComparison } = comparisonPageSlice.actions;

export const selectComparisonItems = (state: RootState) => state.comparisonPage.items;
export const selectComparisonItemsCount = (state: RootState) => state.comparisonPage.items.length;
export const checkInComparison = (state: RootState, id: number) => state.comparisonPage.items.find((item) => item.id === id);

export const comparisonPageReducer = comparisonPageSlice.reducer;
