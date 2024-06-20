import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from "@/shared/constans";
import { TPostListProps } from "@/shared/api/types";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query<TPostListProps[], Record<string, any>>({
            query: (params) => ({
                url: '/posts?_limit=10',
                params,
            }),
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
