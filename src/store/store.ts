import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "services/api";
import ui from "./ui";

export default configureStore({
  reducer: {
    ui,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
