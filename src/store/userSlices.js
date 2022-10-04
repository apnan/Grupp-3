import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    toLoggeIn: (state) => {
      state.isLoggedIn = true;
    },
    toLoggeOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toLoggeIn, toLoggeOut } = userSlice.actions;

export default userSlice.reducer;
