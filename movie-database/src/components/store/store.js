import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../Faves/favouritesSlice';

//for storing features aka state objects
const store = configureStore({
  reducer: {
    favourites: favouritesReducer
  }
});

export default store;