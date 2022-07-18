import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import pagesSlice from './peagesSlice';
import optionsSlice from './optionsSlice';
import filterSlice from './filterSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export default configureStore({
  reducer: {
    theme: themeReducer,
    pages: pagesSlice,
    options: optionsSlice,
    filter: filterSlice,
  },
  middleware: customizedMiddleware,
});
