import { createSlice } from '@reduxjs/toolkit';
import { GET_ALL_PAINTINGS } from '../requests/routes';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    qValue: '',
    authorId: '',
    locationId: '',
    created_gte: '',
    created_lte: '',
    qString: new URL(GET_ALL_PAINTINGS),
  },
  reducers: {
    setQValue: (state, action) => {
      console.log('changed');
      state.qValue += action.payload;
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
export const { setQValue, setAuthorId, setLocationId, setCreatedGte, setCreatedLte } = filterSlice.actions;
export default filterSlice.reducer;
