import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {  VariationValue } from "../types";

const VarianceGroup = ({ options }: { options: [VariationValue] }) => {
  return (
    <div className=" my-5">
      <RadioGroup defaultValue="comfortable">
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
