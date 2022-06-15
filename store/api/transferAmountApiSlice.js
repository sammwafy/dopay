import { api } from "./api";

export const transferAmountApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    transferAmount: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "GET",
        body: { ...credentials },
        headers: {  'APIEND': 'transferAmount'},
      }),
    }),
  }),
});

export const {usetransferAmountMutation } = transferAmountApiSlice;
