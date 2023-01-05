import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NetflixState {
  value: number;
}

const initialState: NetflixState = {
  value: 0,
};

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {},
});

export const {} = netflixSlice.actions;

export default netflixSlice.reducer;
