import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => ({
        url:"/products/categories",
        method:'Get',
      }),
      
    }),
  }),
});

export const {useFetchDataQuery} = api;