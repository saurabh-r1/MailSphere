// features/mail/mailAPI.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mailAPI = createApi({
  reducerPath: 'mailAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getInbox: builder.query({
      query: () => '/mail/inbox',
    }),
  }),
});

export const { useGetInboxQuery } = mailAPI;
