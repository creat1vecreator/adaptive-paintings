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
      if (action.payload) {
        state.qString.searchParams.set('q', action.payload);
        state.qValue = action.payload;
      } else {
        state.qString.searchParams.delete('q');
        state.qValue = action.payload;
      }
    },
    setAuthorId: (state, action) => {
      if (action.payload) {
        state.qString.searchParams.set('authorId', action.payload);
        state.authorId = action.payload;
      } else {
        state.qString.searchParams.delete('authorId');
        state.authorId = action.payload;
      }
    },
    setLocationId: (state, action) => {
      if (action.payload) {
        state.qString.searchParams.set('locationId', action.payload);
        state.locationId = action.payload;
      } else {
        state.qString.searchParams.delete('locationId');
        state.locationId = action.payload;
      }
    },
    setCreatedGte: (state, action) => {
      if (action.payload) {
        state.qString.searchParams.set('created_gte', action.payload);
        state.created_gte = action.payload;
      } else {
        state.qString.searchParams.delete('created_gte');
        state.created_gte = action.payload;
      }
      state.created_gte = action.payload;
    },
    setCreatedLte: (state, action) => {
      if (action.payload) {
        state.qString.searchParams.set('created_lte', action.payload);
        state.created_lte = action.payload;
      } else {
        state.qString.searchParams.delete('created_lte');
        state.created_lte = action.payload;
      }
    },
  },
});
export const { setQValue, setAuthorId, setLocationId, setCreatedGte, setCreatedLte } = filterSlice.actions;
export default filterSlice.reducer;
