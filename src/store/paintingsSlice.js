import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCurrentPage, setTotalPages } from './pagesSlice';

export const getPaintingsByFilters = createAsyncThunk(
  'paintings/getPaintingsByFilters',
  async ({ url }, { dispatch }) => {
    console.log('action payload in paintings slice:', url);
    const response = await fetch(url);
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
      console.log('in extra reducers for painting');
      state.paintings = action.payload;
    },
  },
});
export const { setPaintings } = paintingsSlice.actions;
export default paintingsSlice.reducer;
