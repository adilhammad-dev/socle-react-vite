import { api } from '.';

export const fileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    downloadFileByUrl: builder.query<
      any,
      { fileUrl: string | undefined; endpoint: string; entityId?: string }
    >({
      query: ({ fileUrl, endpoint, entityId }) => {
        return {
          url: `${endpoint}/download-by-url`,
          params: { fileUrl, entityId },
          responseType: 'blob', // Set the responseType to blob to receive binary data
        };
      },
    }),
  }),
});

export const { useLazyDownloadFileByUrlQuery } = fileApi;
