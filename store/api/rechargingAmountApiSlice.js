import { api } from "./api";

export const rechargingAmountApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    rechargingAmount: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "GET",
        body: { ...credentials },
        headers: {  'APIEND': 'rechargingAmount'},
      }),
    }),
  }),
});

export const {userechargingAmountMutation } = rechargingAmountApiSlice;
