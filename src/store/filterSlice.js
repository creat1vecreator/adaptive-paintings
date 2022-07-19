import { createSlice } from '@reduxjs/toolkit';
import { GET_ALL_PAINTINGS } from '../requests/routes';
import { useCustomHook } from '../hooks/useCustomHook';

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
      const { setParamToCurrLocation, deleteParamFromCurrLocation } = useCustomHook();
      if (action.payload) {
        state.qValue = action.payload;
        setParamToCurrLocation('_q', action.payload);
      } else {
        state.qString.searchParams.delete('q');
        state.qValue = action.payload;
        deleteParamFromCurrLocation('_q');
      }
    },
    setAuthorId: (state, action) => {
      const { setParamToCurrLocation, deleteParamFromCurrLocation } = useCustomHook();
      if (action.payload) {
        state.qString.searchParams.set('authorId', action.payload);
        state.authorId = action.payload;
        setParamToCurrLocation('authorId', action.payload);
      } else {
        state.qString.searchParams.delete('authorId');
        state.authorId = action.payload;
        deleteParamFromCurrLocation('authorId');
      }
    },
    setLocationId: (state, action) => {
      const { setParamToCurrLocation, deleteParamFromCurrLocation } = useCustomHook();
      if (action.payload) {
        state.qString.searchParams.set('locationId', action.payload);
        state.locationId = action.payload;
        setParamToCurrLocation('locationId', action.payload);
      } else {
        state.qString.searchParams.delete('locationId');
        state.locationId = action.payload;
        deleteParamFromCurrLocation('locationId');
      }
    },
    setCreatedGte: (state, action) => {
      const { setParamToCurrLocation, deleteParamFromCurrLocation } = useCustomHook();
      if (action.payload) {
        state.qString.searchParams.set('created_gte', action.payload);
        state.created_gte = action.payload;
        setParamToCurrLocation('created_gte', action.payload);
      } else {
        state.qString.searchParams.delete('created_gte');
        state.created_gte = action.payload;
        deleteParamFromCurrLocation('created_gte');
      }
    },
    setCreatedLte: (state, action) => {
      const { setParamToCurrLocation, deleteParamFromCurrLocation } = useCustomHook();
      if (action.payload) {
        state.qString.searchParams.set('created_lte', action.payload);
        state.created_lte = action.payload;
        setParamToCurrLocation('created_lte', action.payload);
      } else {
        state.qString.searchParams.delete('created_lte');
        state.created_lte = action.payload;
        deleteParamFromCurrLocation('created_lte');
      }
    },
  },
});
export const { setQValue, setAuthorId, setLocationId, setCreatedGte, setCreatedLte } = filterSlice.actions;
export default filterSlice.reducer;
