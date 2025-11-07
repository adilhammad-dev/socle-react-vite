/**
 * RTK Query API Configuration
 *
 * Uses customRequest from axios.ts for automatic Bearer token injection
 */

import {createApi} from '@reduxjs/toolkit/query/react';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import type {AxiosError, AxiosRequestConfig} from 'axios';
import customRequest from './axios';

const axiosBaseQuery = (): BaseQueryFn<
    {
        url: string;
        method?: AxiosRequestConfig['method'];
        data?: any;
        params?: AxiosRequestConfig['params'];
        headers?: AxiosRequestConfig['headers'];
        responseType?: AxiosRequestConfig['responseType'];
    },
    unknown,
    unknown
> => async ({url, method = 'GET', data, params, headers, responseType}) => {
    try {
        const result = await customRequest({
            url,
            method,
            data,
            params,
            headers,
            responseType,
        });
        return {data: result.data};
    } catch (axiosError) {
        const err = axiosError as AxiosError;


        return {
            error: {
                status: err.response?.status || 500,
                data: err.response?.data || err.message,
            },
        };
    }
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery(),
    tagTypes: [],
    endpoints: () => ({}),
});

export interface Page<T> {
    getTotalPages: number;
    getTotalElements: number;
    number: number;
    size: number;
    numberOfElements: number;
    content: T[];
}
