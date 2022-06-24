import { api } from "./api";

export const transferMoney = api.injectEndpoints({
	endpoints: (builder) => ({
		transferToAccount: builder.mutation({
			query: (transferDetails) => ({
				url: "/api/apigateway/",
				method: "POST",
        body: {...transferDetails},
				headers: { APIEND: "transfer" },
			}),
		}),
	}),
});

export const { useTransferToAccountMutation } = transferMoney;
