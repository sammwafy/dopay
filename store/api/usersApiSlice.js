import { api } from "./api";

export const usersApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		users: builder.mutation({
			query: () => ({
				url: "/api/apigateway/",
				method: "GET",
				headers: { APIEND: "users" },
			}),
		}),
	}),
});

export const { useUsersMutation } = usersApiSlice;
