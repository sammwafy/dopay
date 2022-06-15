import { api } from "./api";

export const registerApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'register'},
      }),
    }),
  }),
});

export const {useRegisterMutation } = registerApiSlice;
