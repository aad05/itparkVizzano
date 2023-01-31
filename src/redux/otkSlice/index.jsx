import { createSlice } from "@reduxjs/toolkit";

const otkSlice = createSlice({
  name: "otks",
  initialState: {
    selectedData: {},
  },
  reducers: {
    useOTKSelect(state, action) {
      state.selectedData = action.payload;
    },
    setOTKSelectedData(state, action) {
      state.selectedData = action.payload;
    },
  },
});

export default otkSlice.reducer;
export const { useOTKSelect, setOTKSelectedData } = otkSlice.actions;
