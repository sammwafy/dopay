import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "../store/auth/authSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = 
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

const makeStore = () => store
export const wrapper = createWrapper(makeStore, { debug: true });
