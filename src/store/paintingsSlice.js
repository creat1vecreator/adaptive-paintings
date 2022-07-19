import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCurrentPage, setTotalPages } from './pagesSlice';
import { getAllPaintings } from '../requests/request';

export const getPaintingsByFilters = createAsyncThunk(
  'paintings/getPaintingsByFilters',
  async ({ url }, { dispatch, getState }) => {
    const { currentPage } = getState().pages;
    const { totalPages } = getState().pages;

    const newURL = new URL(url);
    if (totalPages <= 3) {
      newURL.searchParams.append('_limit', 12);
      const response = await fetch(newURL);
      const data = await response.json();
      dispatch(setCurrentPage(1));
      getAllPaintings().then((res) => dispatch(setTotalPages(Math.ceil(res.data.length / 12))));
      return data;
    }
    newURL.searchParams.append('_page', currentPage);
    const response = await fetch(newURL);
    const data = await response.json();
    dispatch(setCurrentPage(1));
    dispatch(setTotalPages(Math.ceil(data.length / 12)));
    return data;
  },
);
const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: {
    paintings: [],
  },
  reducers: {
    setPaintings(state, action) {
      state.paintings = action.payload;
    },
  },
  extraReducers: {
    [getPaintingsByFilters.fulfilled]: (state, action) => {
      state.paintings = action.payload;
    },
  },
});
export const { setPaintings } = paintingsSlice.actions;
export default paintingsSlice.reducer;
