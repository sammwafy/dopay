import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./auth/authSlice";
import notificationReducer from "./notification/notificationSlice";
import accountsSliceReducer from "./accounts/accountsSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import usersSliceReducer from "./users/usersSlice";

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  notification: notificationReducer,
  users: usersSliceReducer,
  accounts: accountsSliceReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = configureStore({
 
    reducer,

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });
