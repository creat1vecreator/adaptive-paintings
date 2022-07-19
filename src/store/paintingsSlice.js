import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
// import { BASE_URL } from '../requests/routes';
import { setTotalPages } from './pagesSlice';
import { getAllPaintings } from '../requests/request';
import { useCustomHook } from '../hooks/useCustomHook';

export const getPaintingsByFilters = createAsyncThunk(
  'paintings/getPaintingsByFilters',
  async (_, { getState, dispatch }) => {
    const { stringToQuery } = useCustomHook();
    const history = createBrowserHistory();
    console.log('search params to push:', stringToQuery.pathname);
    history.push(`${stringToQuery.pathname}/`);
    history.push(stringToQuery.search);

    console.log('history', history.location);

    // console.log('string query to push info:', stringToQuery.pathname + stringToQuery.searchParams);
    const { totalPages } = getState().pages;
    if (!totalPages) {
      getAllPaintings().then((res) => dispatch(setTotalPages(Math.ceil(res.data.length / 12))));
    }
    const response = await fetch(stringToQuery);
    const data = await response.json();
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
