import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Report } from 'types';

export interface ReportsState {
  items: Report[];
  selectedId: string | null;
}

const initialState: ReportsState = {
  items: [],
  selectedId: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setReports(state, action: PayloadAction<Report[]>) {
      state.items = action.payload;
    },
    selectReport(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload;
    },
    clearReports(state) {
      state.items = [];
      state.selectedId = null;
    }
  },
});

export const { setReports, selectReport, clearReports } = reportsSlice.actions;
export default reportsSlice.reducer;

