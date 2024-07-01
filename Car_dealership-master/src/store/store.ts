import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { comparisonPageReducer } from '../pages/ComparisonPage/comparisonPageSlice';
import { currentUserReducer } from '../pages/LoginPage/currentUserSlice';
import { favoritesPageReducer } from '../pages/FavoritesPage/favoritesPageSlice';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  currentUser: currentUserReducer,
  favoritesPage: favoritesPageReducer,
  comparisonPage: comparisonPageReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
