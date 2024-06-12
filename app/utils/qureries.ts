import { useQuery } from "@tanstack/react-query";
import { getProductVariance, validateProductAvailability } from "./apiServices";

export const useVariance = (id: string) => {
  const { data, isLoading, isError } = useQuery({ queryFn: () => getProductVariance(id), queryKey: [`product ${id}`] });
  return { data, isLoading };
};
export const useGetBalance = (variations: string[]|any, product_id: string, quantity: number) => {
    console.log(quantity)
  const { data, isLoading, isError } = useQuery({
    queryFn: () => validateProductAvailability(variations, product_id, quantity),
    queryKey: [`product ${product_id} ${quantity} ${variations}`],
  });
  return { data, isLoading };
};
