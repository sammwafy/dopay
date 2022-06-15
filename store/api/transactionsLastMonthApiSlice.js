import { api } from "./api";

export const transactionsLastMonthApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    transactionsLastMonth: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "GET",
        body: { ...credentials },
        headers: {  'APIEND': 'transactionsLastMonth'},
      }),
    }),
  }),
});

export const {usetransactionsLastMonthMutation } = transactionsLastMonthApiSlice;
