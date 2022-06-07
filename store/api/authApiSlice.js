import { api } from "./api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'login'},
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
