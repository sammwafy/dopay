import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authReducer from "./auth/authSlice";
import notificationReducer from "./notification/notificationSlice";
import accountsSliceReducer from "./accounts/accountsSlice";
import { createWrapper } from "next-redux-wrapper";
import usersSliceReducer from "./users/usersSlice";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
		notification: notificationReducer,
		users: usersSliceReducer,
		accounts: accountsSliceReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });
