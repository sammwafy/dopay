import { api } from "./api";

export const getAllAccountsApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllAccounts: builder.mutation({
			query: () => ({
				url: "/api/apigateway/",
				method: "GET",
				headers: { APIEND: "getAllAccounts" },
			}),
		}),
	}),
});

export const { useGetAllAccountsMutation } = getAllAccountsApiSlice;
