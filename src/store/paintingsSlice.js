import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { setTotalPages } from './pagesSlice';
import { getAllPaintings } from '../requests/request';
import { useCustomHook } from '../hooks/useCustomHook';
import { BASE_URL } from '../requests/routes';

export const getPaintingsByFilters = createAsyncThunk(
  'paintings/getPaintingsByFilters',
  async (_, { getState, dispatch }) => {
    const { stringToQuery } = useCustomHook();
    const history = createBrowserHistory();
    console.log('search params to push:', stringToQuery.pathname);
    history.push(`${stringToQuery.pathname}/`);
    history.push(stringToQuery.search);
    console.log('history', history.location);

    const { totalPages } = getState().pages;
    stringToQuery.searchParams.set('_limit', 12);
    const response = await fetch(BASE_URL + history.location.pathname + history.location.search);

    const data = await response.json();
    if (!totalPages) {
      getAllPaintings().then((res) => dispatch(setTotalPages(Math.ceil(res.data.length / 12))));
    }
    return data;
  },
);
const paintingsSlice = createSlice({
  name: 'paintings',
  initialState: {
    paintings: [],
  },
  reducers: {
    setPaintings(state, action) {
      const { setParamToCurrLocation } = useCustomHook();
      state.paintings = action.payload;
      setParamToCurrLocation('_page', action.payload);
    },
  },
  extraReducers: {
    [getPaintingsByFilters.fulfilled]: (state, action) => {
      state.paintings = action.payload;
    },
  },
});
export const { setPaintings } = paintingsSlice.actions;
export default paintingsSlice.reducer;
