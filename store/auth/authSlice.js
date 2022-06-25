/**
 * authentication reducer & actions
 * author : Sameh hassan
 */

import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from 'cookies-next';

// get the initial state from cookies if the redux store is destroied i.e on refresh
const token = getCookie('token');
const userID = getCookie('id');


const authSlice = createSlice({
	name: "auth",
	initialState: { id: userID || null, token: token || null },

	reducers: {
		setCredentials: (state, action) => {
			const { id, accessToken } = action.payload;
			state.id = id;
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
