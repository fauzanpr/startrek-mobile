import { API_URL } from "@/constants/api-url"
import { TPaginationResponseType } from "@/types/request"
import { api } from "@/utils/api"
import { TCompany } from "../type"

export const getCompanyList = (params?: Record<any, any>): Promise<TPaginationResponseType<TCompany[]>> => api({
    method: "GET",
    urlKey: API_URL.COMPANY.INDEX,
    queryParams: params
})