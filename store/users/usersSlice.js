/**
 * authentication reducer & actions
 * author : Sameh hassan
 */

import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
	name: "users",
	initialState: [],

	reducers: {
		getUsers: (state, action) => {
			return (state = action.payload);
		},
	},
});

// export actions and reducers
export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
