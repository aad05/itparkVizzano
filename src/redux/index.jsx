import { configureStore } from "@reduxjs/toolkit";
import countWorkSlice from "./countWorkSlice";

export default configureStore({
  reducer: {
    countWork: countWorkSlice,
  },
});
