import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "../store/auth/authSlice";
import notificationReducer from "../store/notification/notificationSlice";

import { createWrapper } from "next-redux-wrapper";

export const store = 
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer,
      notification: notificationReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

const makeStore = () => store
export const wrapper = createWrapper(makeStore, { debug: true });
