import { api } from "./api";

export const getAllUsersApiSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.mutation({
			query: () => ({
				url: "/api/apigateway/",
				method: "GET",
				// body: { ...credentials },
				headers: { APIEND: "getAllUsers" },
			}),
		}),
	}),
});

export const { useGetAllUsersMutation } = getAllUsersApiSlice;
