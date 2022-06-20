/**
 * authentication reducer & actions
 * author : Sameh hassan
 */

import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
	name: "accounts",
	initialState: [],

	reducers: {
		getAccounts: (state, action) => {
			return (state = action.payload);
		},
	},
});

// export actions and reducers
export const { getAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
