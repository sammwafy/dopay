import { api } from "./api";

export const usersApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		users: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "POST",
				body: { ...credentials },
				headers: { APIEND: "users" },
			}),
		}),
	}),
});

export const { useUsersMutation } = usersApiSlice;
