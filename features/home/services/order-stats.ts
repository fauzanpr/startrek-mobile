import { API_URL } from "@/constants/api-url";
import { api } from "@/utils/api";
import { TPointsGiven, TPointsRedeemed, TProductSold } from "../types/order-stats";

export const getProductSoldCount = (params?: Record<any, any>): Promise<TProductSold> => api({
    method: "GET",
    urlKey: API_URL.DASHBOARD_TOTAL_PRODUCT_SOLD.INDEX,
    queryParams: params
})

export const getPointsGivenCount = (params?: Record<any,any>): Promise<TPointsGiven> => api({
    method: "GET",
    urlKey: API_URL.DASHBOARD_POINTS_GIVEN.INDEX,
    queryParams: params
})

export const getPointsRedeemedCount = (params?: Record<any,any>): Promise<TPointsRedeemed> => api({
    method: "GET",
    urlKey: API_URL.DASHBOARD_POINTS_REDEEMED.INDEX,
    queryParams: params
})