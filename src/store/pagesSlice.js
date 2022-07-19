import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      const history = createBrowserHistory();
      history.push(`?_page=${action.payload}`);
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});
export const { setCurrentPage, setTotalPages } = pagesSlice.actions;
export default pagesSlice.reducer;
