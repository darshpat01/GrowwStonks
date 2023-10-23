import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  value: {
    topGainers: [],
    topLosers: [],
  },
};

export const companiesSlice = createSlice({
  name: "gainersLosers",
  initialState,
  reducers: {
    addTopGainersLosers: (state, action: PayloadAction<any>) => {
      state.value.topGainers = action.payload.top_gainers;
      state.value.topLosers = action.payload.top_losers;
    },
  },
});

export const { addTopGainersLosers } = companiesSlice.actions;

export default companiesSlice.reducer;
