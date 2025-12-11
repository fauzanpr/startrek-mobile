import { MutateParamsType, MutationFunctionType } from "@/types/request"
import { useMutation } from "@tanstack/react-query"
import { postLogin } from "../service/login"
import { TLoginResponse } from "../types"

export const useLoginMutation = ({ onError, onSuccess }: MutationFunctionType<TLoginResponse>) => {
    return useMutation({
        mutationFn: ({ data }: MutateParamsType) => postLogin(data || {}),
        onSuccess: onSuccess,
        onError: onError
    })
}