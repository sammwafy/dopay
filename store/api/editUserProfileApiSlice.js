import { api } from "./api";

export const editUserProfileApiSlice = api.injectEndpoints({
   endpoints: (builder) => ({
    createNewAccount: builder.mutation({
      query: (credentials) => ({
        url: "/api/apigateway/",
        method: "POST",
        body: { ...credentials },
        headers: {  'APIEND': 'editUserProfile'},
      }),
    }),
  }),
});

export const {useEditUserProfileMutation } = editUserProfileApiSlice;
