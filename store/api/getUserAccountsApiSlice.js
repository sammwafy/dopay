import { api } from "./api";

export const getUserAccountsApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		UserAccounts: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "POST",
				body: { ...credentials },
				headers: { APIEND: "getUserAccounts" },
			}),
		}),
	}),
});

export const { useUserAccountsMutation } = getUserAccountsApiSlice;
