import React from "react";
import { useVariance } from "../utils/qureries";
import { VarianceProps } from "../types";
import { Label } from "@radix-ui/react-label";
import VarianceGroup from "./VarianceGroup";

const Variance = ({id}:{id:string}) => {
  const { data, isLoading } = useVariance(id);
  if (isLoading) return <span>loading</span>;
  const variances=data.response;
  console.log(variances)
  return <div className="flex flex-col gap-4">
    {variances.map((option:VarianceProps)=><div className=" py-2 px-5 rounded-xl  bg-white" key={option.id}>
        <Label className=" text-lg px-2 py-4 font-semibold" id={option.id}>{option.variation_name}</Label>
        <VarianceGroup options={option.variation_value}/>
    </div>)}
  </div>;
};

export default Variance;
