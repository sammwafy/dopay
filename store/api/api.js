/**
 * reduxAPI (RTK) for user auth and token
 * author : Sameh hassan
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../auth/authSlice";

// SSR won't read our client redux store so we use this middleware
import { HYDRATE } from "next-redux-wrapper";

// here we set a baseQuery with the settings we want
// and we will extend it to baseQuery with refresh token so that it handles the
// expired token and regenerates it

const baseQuery = fetchBaseQuery({
	// no need for baseUrl in nextjs as we utilize the same server
	credentials: "include",
	prepareHeaders: (headers) => {
		const token = document.cookie.replace(
			/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
			"$1"
		);
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

// // support token refresh
// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.originalStatus === 403) {
//     console.log("sending refresh token");
//     // send refresh token to generate a new token
//     const refreshResult = await baseQuery("/refreshToken", api, extraOptions);

//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the original query with the new refreshed token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

// rehydrate the initialized client redux state with our server-side action payload
// we will extend this later in authApiSlice file

export const api = createApi({
	baseQuery: baseQuery, // use the one with refresh token function
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({}),
});
