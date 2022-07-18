import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      console.log('set curr page to:', action.payload);
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});
export const { setCurrentPage, setTotalPages } = pagesSlice.actions;
export default pagesSlice.reducer;
