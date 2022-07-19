import { createSlice } from '@reduxjs/toolkit';
import { useCustomHook } from '../hooks/useCustomHook';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
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
