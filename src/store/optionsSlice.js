import { createSlice } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    authorOptions: [],
    locationOptions: [],
  },
  reducers: {
    setAuthorOption() {},
  },
});

export default optionsSlice;
