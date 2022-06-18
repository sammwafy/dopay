import { api } from "./api";

export const totalMoneyInAccountsApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    totalMoneyInAccounts: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'totalMoneyInAccounts'},
      }),
    }),
  }),
});

export const {useTotalMoneyInAccountsMutation } = totalMoneyInAccountsApiSlice;
