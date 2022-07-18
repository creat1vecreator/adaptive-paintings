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
    setCreated_gte: (state, action) => {
      state.created_gte = action.payload;
    },
    setCreated_lte: (state, action) => {
      state.created_lte = action.payload;
    },
  },
});
export const { getFilteredEntities } = filterSlice.actions;
export default filterSlice;
