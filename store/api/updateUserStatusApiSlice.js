import { api } from "./api";

export const updateUserStatusApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    updateUserStatus: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'updateUserStatus'},
      }),
    }),
  }),
});

export const {useupdateUserStatusMutation } = updateUserStatusApiSlice;
