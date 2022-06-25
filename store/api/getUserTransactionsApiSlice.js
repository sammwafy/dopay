import { api } from "./api";

export const getUserTransactionsApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		UserTransactions: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "POST",
				body: { ...credentials },
				headers: { APIEND: "getUserTransactions" },
			}),
		}),
	}),
});

export const { useUserTransactionsMutation } = getUserTransactionsApiSlice;
