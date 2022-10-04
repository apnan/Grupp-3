import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlices';

export default configureStore({
  reducer: userReducer,
});
