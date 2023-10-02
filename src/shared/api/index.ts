import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Beer } from './beer/model';

export const beerApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/' }),

    endpoints: (build) => ({
      getListItems: build.query<Beer[], number>({
        query: (pageNumber) => `beers?page=${pageNumber}&per_page=12`,

        transformResponse: (response: []) :Beer[] =>
            response.map((item: any) => {
                item = {id: item.id, name: item.name, tagline: item.tagline, description: item.description, imageUrl: item.image_url}
            return item;
        }, {}),

        serializeQueryArgs: ({ endpointName }) => {
          return endpointName
        },

        merge: (currentCache, newItems) => {
          currentCache.push(...newItems)
        },

        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg
        },
      }),
    }),
});

export const { useGetListItemsQuery } = beerApi