import { QUERY_KEYS } from "@/constants/query-keys";
import { MutateParamsType, MutationFunctionType, TPaginationResponseType } from "@/types/request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCompany, getCompanyList, postCompany } from "../services/company";
import { TCompany } from "../type";

export const useCompaniesQuery = (params?: Record<any,any>) => {
    return useQuery<TPaginationResponseType<TCompany[]>>({
        queryKey: [QUERY_KEYS.COMPANY, params],
        queryFn: () => getCompanyList(params),
        retry: false
    });
}

export const useCompanyMutation = ({ onError, onSuccess }: MutationFunctionType<unknown>) => {
    return useMutation({
        mutationFn: ({ method, data, id }: MutateParamsType) => {
            if (method === "POST") return postCompany(data);
            else if (method === "DELETE") return deleteCompany(id?.toString() || "")
            else return postCompany(data);
        },
        onSuccess: onSuccess,
        onError: onError
    })
}