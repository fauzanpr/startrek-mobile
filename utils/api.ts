import { AppConfig } from "@/config/app-config";
import axios from "axios";
import * as SecureStorage from "expo-secure-store";

type TApi = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    urlKey: string;
    queryParams?: Record<any,any>;
    data?: Record<any,any>;
    isWithAuthorization?: boolean;
    additionalHeaders?: Record<any,any>
}

const getToken = () => {
    return SecureStorage.getItem("access");
}

export const api = async ({ method, isWithAuthorization = true, additionalHeaders, urlKey, data, queryParams }: TApi) => {
    const token = getToken();

    const getDefaultHeader = () => ({
        ...(isWithAuthorization && { Authorization: `Bearer ${token}` }),
        "Content-Type": "application/json",
        ...additionalHeaders
    });

    const instance = axios.create({
        baseURL: AppConfig.url.api,
        method: method,
        headers: getDefaultHeader(),
        withCredentials: true
    });

    const response = await instance({
        url: urlKey,
        method: method,
        data: data,
        params: queryParams
    });

    return response?.data;
}