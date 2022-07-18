import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getPaintingsByFilters = createAsyncThunk('paintings/getPaintingsByFilters', async (state, action) => {
  const response = await fetch(action.payload);
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
      state.paintings = action.payload;
    },
  },
});

export default paintingsSlice.reducer;
