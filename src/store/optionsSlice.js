import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk';
import { getAllAuthors, getAllLocations } from '../requests/request';
import { GET_ALL_LOCATIONS } from '../requests/routes';

export const fecthLocations = createAsyncThunk('options/fecthLocations', async () => {
  const response = await fetch(GET_ALL_LOCATIONS);
  const data = await response.json();
  return data;
});
const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    authorOptions: [],
    locationOptions: [],
  },
  reducers: {
    setAuthorOptions(state) {
      console.log('попало в reducer автор');
      getAllAuthors().then((res) =>
        res.data.map((authorObj) => {
          state.authorOptions.push({
            value: authorObj.id,
            label: authorObj.name,
          });
        }),
      );
    },
    setLocationOptions(state) {
      getAllLocations().then((res) => {
        res.data.map((locationObj) => {
          state.locationOptions.push({
            value: locationObj.id,
            location: locationObj.location,
          });
        });
      });
    },
  },
  extraReducers: {
    [fecthLocations.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.locationOptions = action.locationOptions;
    },
  },
});
export const { setAuthorOptions, setLocationOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
