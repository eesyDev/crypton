
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '8c0242ca71msh5bfe5752287ce21p1a260bjsne4b1bf3900bf',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
