import { configureStore } from "@reduxjs/toolkit";
import countWorkSlice from "./countWorkSlice";
import otkSlice from "./otkSlice";

export default configureStore({
  reducer: {
    countWork: countWorkSlice,
    otk: otkSlice,
  },
});
