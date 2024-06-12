import React, { ReactNode, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ButtonRounded from "./ButtonRounded";

import Variance from "./Variance";
import Counter from "./Counter";
import { usePrice } from "../context/PriceContext";
import { toast } from "react-toastify";

const DrawerComponent = ({ trigger, name, id }: { trigger: ReactNode; id: string; name?: string }) => {
  const { count ,setCount,balanceData} = usePrice();
  const data=balanceData?.response
  console.log(data)
  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className=" bg-gray-100   ">
      <DrawerClose className=" text-xl text-1  p-2 rounded-xl absolute top-5 right-10 font-bold">
          X
      </DrawerClose>
        <div className="mx-auto max-h-[75vh] overflow-y-scroll w-full max-w-64 md:max-w-[30rem] xl:max-w-[40rem]">
          <DrawerHeader>
            <DrawerTitle>Variations of {name}</DrawerTitle>
            <DrawerDescription>Choose your desired options.</DrawerDescription>
          </DrawerHeader>
          <Variance count={count} id={id} />
          <DrawerFooter className="flex ml-auto self-end justify-end flex-row items-end">
            <Counter count={count} setCount={setCount} />
            {data&&(data.is_available?<ButtonRounded text={`Add Item | ${data.pricing_details.amount_including_tax}₹`}/>:<div>
          {toast.error('Product is out of stock', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000, // Close the toast after 5 seconds
          })}
        </div>)}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
