import { QUERY_KEYS } from "@/constants/query-keys";
import { MutateParamsType, MutationFunctionType, TPaginationResponseType } from "@/types/request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCompany, getCompanyDetail, getCompanyList, postCompany, putCompany } from "../services/company";
import { TCompany } from "../type";

export const useCompaniesQuery = (params?: Record<any, any>) => {
    return useQuery<TPaginationResponseType<TCompany[]>>({
        queryKey: [QUERY_KEYS.COMPANY, params],
        queryFn: () => getCompanyList(params),
        retry: false
    });
}

export const useCompanyDetail = (id: string, disabled?: boolean) => {
    return useQuery({
        queryKey: [QUERY_KEYS.COMPANY, id],
        queryFn: () => getCompanyDetail(id),
        retry: false,
        enabled: !disabled
    })
}

export const useCompanyMutation = ({ onError, onSuccess }: MutationFunctionType<unknown>) => {
    return useMutation({
        mutationFn: ({ method, data, id }: MutateParamsType) => {
            if (method === "POST") return postCompany(data);
            else if (method === "DELETE") return deleteCompany(id?.toString() || "")
            else return putCompany(id?.toString() || "", data || {});
        },
        onSuccess: onSuccess,
        onError: onError
    })
}