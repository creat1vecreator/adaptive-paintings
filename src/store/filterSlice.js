import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    q: '',
    authorId: '',
    locationId: '',
    created_gte: '',
    created_lte: '',
  },
  reducers: {
    setQ: (state, action) => {
      state.q = action.payload;
    },
    setAuthorId: (state, action) => {
      state.authorId = action.payload;
    },
    setLocationId: (state, action) => {
      state.locationId = action.payload;
    },
    setCreatedGte: (state, action) => {
      state.created_gte = action.payload;
    },
    setCreatedLte: (state, action) => {
      state.created_lte = action.payload;
    },
  },
});
export const { setQ, setAuthorId, setLocationId, setCreatedGte, setCreatedLte } = filterSlice.actions;
export default filterSlice.reducer;
