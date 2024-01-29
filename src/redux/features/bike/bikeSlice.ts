import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  bikes: null,
};

const bikeSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    addBikes: (state, action) => {
      state.bikes = action.payload;
    },
  },
});

export default bikeSlice.reducer;
export const selectBike = (state: RootState) => state.bikes.bikes;
