import { api } from "./api";

export const usersApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/api/apigateway/",
				method: "GET",
				body: { ...credentials },
				headers: { APIEND: "users" },
			}),
		}),
	}),
});

export const { useUsersMutation } = usersApiSlice;
