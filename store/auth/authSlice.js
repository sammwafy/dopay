/**
 * authentication reducer & actions
 * author : Sameh hassan
 */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { email: null, token: null },

	reducers: {
		setCredentials: (state, action) => {
			const { email, accessToken } = action.payload;
			state.email = email;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			state.email = null;
			state.token = null;
		},
	},
});

// export actions and reducers
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// functions to get a certain user from the store state
export const selectCurrentUser = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
