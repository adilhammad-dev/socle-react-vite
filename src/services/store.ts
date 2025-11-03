import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from 'services/slices/reportsSlice';

export const store = configureStore({
  reducer: {
    reports: reportsReducer,
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
