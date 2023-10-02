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
    fetchCatogries: builder.query({
      query: () => ({
        url:"/products",
        method:'Get',
      }),
      
    }),
  }),

});

export const {useFetchDataQuery, useFetchCatogriesQuery} = api;