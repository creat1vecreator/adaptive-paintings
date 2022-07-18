import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_ALL_AUTHORS, GET_ALL_LOCATIONS } from '../requests/routes';

export const fetchLocationsAndAuthors = createAsyncThunk('options/fecthLocationsAndAuthors', async () => {
  const responseLocations = await fetch(GET_ALL_LOCATIONS);
  const dataLocations = await responseLocations.json();
  const dataLocationsCorrect = dataLocations.map((locObj) => ({
    value: locObj.id,
    label: locObj.location,
  }));
  const responseAuthors = await fetch(GET_ALL_AUTHORS);
  const dataAuthors = await responseAuthors.json();
  const dataAuthorsCorrect = dataAuthors.map((authorObj) => ({
    value: authorObj.id,
    label: authorObj.name,
  }));

  return Array.of(dataAuthorsCorrect, dataLocationsCorrect);
});

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    locationOptions: [],
    authorOptions: [],
  },
  extraReducers: {
    [fetchLocationsAndAuthors.fulfilled]: (state, action) => {
      [state.authorOptions, state.locationOptions] = action.payload;
    },
  },
});
export default optionsSlice.reducer;
