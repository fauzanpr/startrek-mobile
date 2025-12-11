import { QUERY_KEYS } from "@/constants/query-keys";
import { TPaginationResponseType } from "@/types/request";
import { useQuery } from "@tanstack/react-query";
import { getCompanyList } from "../services/company";
import { TCompany } from "../type";

export const useCompaniesQuery = (params?: Record<any,any>) => {
    return useQuery<TPaginationResponseType<TCompany[]>>({
        queryKey: [QUERY_KEYS.COMPANY, params],
        queryFn: () => getCompanyList(params),
        retry: false
    });
}