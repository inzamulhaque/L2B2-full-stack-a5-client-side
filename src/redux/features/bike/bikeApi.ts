import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (querys) => {
        const params = new URLSearchParams();

        if (querys) {
          params.append(
            Object.keys(querys)[0],
            Object.values(querys)[0] as string
          );
        }

        return {
          url: "/bikes",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllBikesQuery } = bikeApi;
