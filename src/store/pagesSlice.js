import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { useCustomHook } from '../hooks/useCustomHook';

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
      const { setParamToCurrLocation } = useCustomHook();
      setParamToCurrLocation('_page', action.payload);
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});
export const { setCurrentPage, setTotalPages } = pagesSlice.actions;
export default pagesSlice.reducer;
