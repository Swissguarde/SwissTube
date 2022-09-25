import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = process.env.REACT_APP_API_KEY;

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube.googleapis.com/youtube/v3",
  }),
  endpoints: (builder) => ({
    getChannelDetails: builder.query({
      query: (id) => `/channels?part=snippet&id=${id}&key=${key}`,
    }),
    getSearch: builder.query({
      query: (searchQuery) =>
        `/search?part=snippet&maxResults=20&q=${searchQuery}&key=${key}`,
    }),
    getVideos: builder.query({
      query: (keyword) => {
        if (keyword) {
          return `/search?part=snippet&maxResults=20&q=${keyword}&type=video,channel&key=${key}`;
        }
        // Popular Videos
        return `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${key}`;
      },
    }),
    getVideoById: builder.query({
      query: (id) =>
        `/videos?part=snippet,contentDetails,statistics&id=${id}&key=${key}`,
    }),
    getVideoComments: builder.query({
      query: (id) => `/commentThreads?part=snippet&videoId=${id}&key=${key}`,
    }),
    getRelatedVideos: builder.query({
      query: (id) =>
        `/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10&key=${key}`,
    }),
    getMoreChannelDetails: builder.query({
      query: (id) =>
        `/channels?part=snippet,contentDetails,statistics&id=${id}&key=${key}`,
    }),
    getUploadPlaylist: builder.query({
      query: (id) =>
        `/playlistItems?part=contentDetails,snippet&playlistId=${id}&maxResults=30&key=${key}`,
    }),
    getChannelVideos: builder.query({
      query: (id) => `/channels?part=contentDetails&id=${id}&key=${key}`,
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetChannelDetailsQuery,
  useGetSearchQuery,
  useGetVideoByIdQuery,
  useGetVideoCommentsQuery,
  useGetRelatedVideosQuery,
  useGetMoreChannelDetailsQuery,
  useGetUploadPlaylistQuery,
  useGetChannelVideosQuery,
} = youtubeApi;
