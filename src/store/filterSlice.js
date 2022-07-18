import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { GET_ALL_PAINTINGS } from '../requests/routes';
import { getPaintingsByFilters } from './paintingsSlice';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    qValue: 'bbb',
    authorId: '',
    locationId: '',
    created_gte: '',
    created_lte: '',
    qString: new URL(GET_ALL_PAINTINGS),
  },
  reducers: {
    setQValue: (state, action) => {
      const dispatch = useDispatch();
      console.log('changed');
      state.qValue += action.payload;
      dispatch(getPaintingsByFilters());
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
