import { api } from "./api";

export const getUserAccountsApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		UserAccounts: builder.mutation({
			query: () => ({
				url: "/api/apigateway/",
				method: "GET",
				headers: { APIEND: "getUserAccounts" },
			}),
		}),
	}),
});

export const { useUserAccountsMutation } = getUserAccountsApiSlice;
