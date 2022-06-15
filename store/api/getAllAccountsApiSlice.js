import { api } from "./api";

export const getAllAccountsApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    getAllAccounts: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'getAllAccounts'},
      }),
    }),
  }),
});

export const {useGetAllAccountsrMutation } = getAllAccountsApiSlice;
