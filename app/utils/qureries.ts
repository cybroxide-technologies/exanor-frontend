import { useQuery } from "@tanstack/react-query"
import { getProductVariance } from "./apiServices"

export const useVariance=(id:string)=>{
    const {data,isLoading,isError,}=useQuery({queryFn:()=>getProductVariance(id),queryKey:[`product ${id}`]})
    return {data,isLoading}
}