import { api } from "./api";

export const getNewUsersApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    getNewUsers: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "GET",
        body: { ...credentials },
        headers: {  'APIEND': 'getNewUsers'},
      }),
    }),
  }),
});

export const {useGetNewUsersrMutation } = getNewUsersApiSlice;
