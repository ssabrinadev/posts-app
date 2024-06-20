import { TPostListProps } from "@/shared/api/types";
import { apiService } from "@/shared/api/apiService";

export const postsApi = apiService.injectEndpoints({
  
  endpoints: (builder) => ({
    getPosts: builder.query<TPostListProps[], Record<string, any>>({
      query: (params) => ({
        url: "/posts?_limit=10",
        params,
      }),
      providesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery } = postsApi;
