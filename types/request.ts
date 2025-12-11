import { AxiosError } from "axios";

export type ErrorType = AxiosError<any & {
    detail: string;
    year: string[];
    amount: string[];
}>

export type TRequestMethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type MutateParamsType = {
    method: TRequestMethodType;
    data?: Record<any, any>;
    id?: string;
}

export type MutationFunctionType<T> = {
    onSuccess?: (data: T) => void | Promise<void>;
    onError?: (error: ErrorType) => void;
}

export type TPaginationResponseType<T> = {
    "count": number,
    "next": number | null,
    "current": number,
    "previous": number | null,
    "limit": number,
    "results": T
}