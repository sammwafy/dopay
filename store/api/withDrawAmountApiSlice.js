import { api } from "./api";

export const withDrawAmountApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		withDrawAmount: builder.mutation({
			query: () => ({
				url: "/api/apigateway/",
				method: "GET",
				headers: { APIEND: "withDrawAmount" },
			}),
		}),
	}),
});

export const { useWithDrawAmountMutation } = withDrawAmountApiSlice;
