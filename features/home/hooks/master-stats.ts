import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import { getProductsTotal } from "../services/master-stats"
import { TTotalProducts } from "../types/master-stats"

export const useProductsTotalQuery = (params?: Record<any,any>) => {
    return useQuery<TTotalProducts>({
        queryKey: [QUERY_KEYS.DASHBOARD_TOTAL_PRODUCTS, params],
        queryFn: () => getProductsTotal(params),
        retry: false
    })
}