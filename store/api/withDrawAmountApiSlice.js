import { api } from "./api";

export const withDrawAmountApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    withDrawAmount: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "GET",
        body: { ...credentials },
        headers: {  'APIEND': 'withDrawAmount'},
      }),
    }),
  }),
});

export const {usewithDrawAmountMutation } = withDrawAmountApiSlice;
