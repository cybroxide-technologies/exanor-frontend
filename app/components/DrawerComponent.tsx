import React, { ReactNode } from "react";
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

const DrawerComponent = ({ trigger,name, id }: { trigger: ReactNode; id: string ,name?:string}) => {
  return (
    <Drawer >
      <DrawerTrigger >{trigger}</DrawerTrigger>
      <DrawerContent className=" bg-gray-100 ">
        <div className="mx-auto max-h-[75vh] overflow-y-scroll w-full max-w-96 xl:max-w-[40rem]">
          <DrawerHeader>
            <DrawerTitle>Variations of {name}</DrawerTitle>
            <DrawerDescription>Choose your desired options.</DrawerDescription>
          </DrawerHeader>
          <Variance  id={id} />
        <DrawerFooter className="flex ml-auto self-end justify-end flex-row items-end">
          <Counter/>
          <DrawerClose>
            <ButtonRounded notbtn text="Cancel" />
          </DrawerClose>
        </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
