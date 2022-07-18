import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import pagesSlice from './peagesSlice';
import optionsSlice from './optionsSlice';
import filterSlice from './filterSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    pages: pagesSlice,
    options: optionsSlice,
    filter: filterSlice,
  },
});
