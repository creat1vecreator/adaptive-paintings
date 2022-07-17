import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme(state) {
      // eslint-disable-next-line no-param-reassign
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', state.theme);
    },
  },
});
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
