import { api } from "./api";

export const payToAccount = api.injectEndpoints({
	endpoints: (builder) => ({
		payToAccount: builder.mutation({
			query: (payDetails) => ({
				url: "/api/apigateway/",
				method: "POST",
        body: {...payDetails},
				headers: { APIEND: "pay" },
			}),
		}),
	}),
});

export const { usePayToAccountMutation } = payToAccount;
