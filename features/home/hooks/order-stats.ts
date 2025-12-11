import { QUERY_KEYS } from "@/constants/query-keys";
import { useQuery } from "@tanstack/react-query";
import { getPointsGivenCount, getPointsRedeemedCount, getProductSoldCount } from "../services/order-stats";
import { TPointsGiven, TPointsRedeemed, TProductSold } from "../types/order-stats";

export const useGetProductSoldCount = (params?: Record<any,any>) => {
    return useQuery<TProductSold>({
        queryKey: [QUERY_KEYS.DASHBOARD_TOTAL_PRODUCT_SOLD, params],
        queryFn: () => getProductSoldCount(params),
        retry: false,
    });
}

export const useGetPointsGivenCountQuery = (params?: Record<any,any>) => {
    return useQuery<TPointsGiven>({
        queryKey: [QUERY_KEYS.DASHBOARD_POINTS_GIVEN, params],
        queryFn: () => getPointsGivenCount(params),
        retry: false,
    })
}

export const useGetPointsRedeemedCountQuery = (params?: Record<any,any>) => {
    return useQuery<TPointsRedeemed>({
        queryKey: [QUERY_KEYS.DASHBOARD_POINTS_REDEEMED, params],
        queryFn: () => getPointsRedeemedCount(params),
        retry: false,
    })
}