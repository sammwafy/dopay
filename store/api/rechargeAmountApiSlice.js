import { api } from "./api";

export const rechargeAmountApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		rechargeAmount: builder.mutation({
			query: (recharge) => ({
				url: "/api/apigateway/",
				method: "POST",
        body: {...recharge},
				headers: { APIEND: "rechargeAmount" },
			}),
		}),
	}),
});

export const { useRechargeAmountMutation } = rechargeAmountApiSlice;
