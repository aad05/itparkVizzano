import { createSlice } from "@reduxjs/toolkit";

const countWorkSlice = createSlice({
  name: "countWork",
  initialState: {
    selectedData: {},
  },
  reducers: {
    useCountWorkSelect(state, action) {
      state.selectedData = action.payload;
    },
    setCountWorkSelectedData(state, action) {
      state.selectedData = action.payload;
    },
  },
});

export default countWorkSlice.reducer;

export const { useCountWorkSelect, setCountWorkSelectedData } =
  countWorkSlice.actions;
