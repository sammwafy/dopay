/**
 * authentication reducer & actions
 * author : Sameh hassan
 */

import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
	name: "notification",
	initialState: [],

	reducers: {
		addNotification: (state, action) => {
			state.push(action.payload);
		},
		removeNotification: (state, action) => {
			state = [];
		},
	},
});

// export actions and reducers
export const { addNotification, removeNotification } =
	notificationSlice.actions;
export default notificationSlice.reducer;

// functions to get notifications from the store state
// export const getNotification = (state) => state?.notification;
