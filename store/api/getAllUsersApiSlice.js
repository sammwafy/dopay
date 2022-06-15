import { api } from "./api";

export const getAllUsersApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    getAllUsers: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'getAllUsers'},
      }),
    }),
  }),
});

export const {useGetAllUsersrMutation } = getAllUsersApiSlice;
