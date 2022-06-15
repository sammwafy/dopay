import { api } from "./api";

export const createNewAccountApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    createNewAccount: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'createNewAccount'},
      }),
    }),
  }),
});

export const {usecreateNewAccountMutation } = createNewAccountApiSlice;
