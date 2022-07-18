import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const getPaintingsByFilters = createAsyncThunk('paintings/getPaintingsByFilters', async () => {
  const url = useSelector((state) => state.filter.qString);
  console.log('action payload in paintings slice:', url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
});
const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: {
    paintings: [],
  },
  extraReducers: {
    [getPaintingsByFilters.fulfilled]: (state, action) => {
      console.log('in extra reducers for painting');
      state.paintings = action.payload;
    },
  },
});

export default paintingsSlice.reducer;
