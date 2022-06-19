import { api } from "./api";

export const updateAccountStatusApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		updateAccountStatus: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "POST",
				body: { ...credentials },
				headers: { APIEND: "updateAccountStatus" },
			}),
		}),
	}),
});

export const { useUpdateAccountStatusMutation } = updateAccountStatusApiSlice;
