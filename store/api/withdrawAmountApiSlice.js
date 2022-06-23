import { api } from "./api";

export const withdrawAmountApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		withdrawAmount: builder.mutation({
			query: (withdraw) => ({
				url: "/api/apigateway/",
				method: "POST",
        body: {...withdraw},
				headers: { APIEND: "withdrawAmount" },
			}),
		}),
	}),
});

export const { useWithdrawAmountMutation } = withdrawAmountApiSlice;
