import { API_URL } from "@/constants/api-url";
import { api } from "@/utils/api";
import { TTotalProducts } from "../types/master-stats";

export const getProductsTotal = (params?: Record<any,any>): Promise<TTotalProducts> => api({
    method: "GET",
    urlKey: API_URL.DASHBOARD_TOTAL_PRODUCTS.INDEX,
    queryParams: params
})