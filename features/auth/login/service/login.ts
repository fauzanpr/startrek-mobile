import { API_URL } from "@/constants/api-url"
import { api } from "@/utils/api"

export const postLogin = (data: Record<any,any>) => {
    return api({
        method: "POST",
        urlKey: API_URL.LOGIN.INDEX,
        data: data,
        isWithAuthorization: false
    })
}