import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import pagesSlice from './peagesSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    pages: pagesSlice,
  },
});
