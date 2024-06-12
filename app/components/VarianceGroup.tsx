import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { VariationValue } from "../types";
import { useGetBalance } from "../utils/qureries";
import { usePrice } from "../context/PriceContext";

const VarianceGroup = ({ options, projectId }: { options: VariationValue[]; projectId: string }) => {
  const { variance, count, setVariance, setBalanceData } = usePrice();
  const { data, isLoading } = useGetBalance(
    variance.map((op: any) => op.value),
    projectId,
    count
  );
  useEffect(() => {
    if (data) {
      setBalanceData(data); // Set the fetched data into balanceData state
    }
  }, [data, setBalanceData]);
  const handleVarianceChange = (value: string, parentId: string) => {
    setVariance((prevVariance: any) => {
      const filteredVariance = prevVariance.filter((item: any) => item.parentId !== parentId);
      return [...filteredVariance, { value, parentId }];
    });
  };
  return (
    <div className="my-5">
      <RadioGroup
      //@ts-ignore
        onValueChange={(value) => handleVarianceChange(value, options.find((option) => option.id === value)?.parentId)}
      >
        {options.map((option) => (
          <div key={option.id} className="flex p-1 items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            <Label htmlFor={option.id}>{option.variation_value_name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default VarianceGroup;
