import { api } from "./api";

export const accountsApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		accounts: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "POST",
				body: { ...credentials },
				headers: { APIEND: "accounts" },
			}),
		}),
	}),
});

export const { useAccountsMutation } = accountsApiSlice;
