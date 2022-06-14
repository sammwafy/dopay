import { api } from "./api";

export const updateUserApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		updateUser: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "PUT",
				body: { ...credentials },
				headers: { APIEND: "updateUser" },
			}),
		}),
	}),
});

export const { useUpdateUserMutation } = updateUserApiSlice;
