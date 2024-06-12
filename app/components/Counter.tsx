import React, { useState } from "react";
import ButtonRounded from "./ButtonRounded";
import { FaShoppingCart } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    if (count > 0) setCount((c) => c + 1);
    else return;
  };
  const decrease=()=>{
    if(count<0) return
    else setCount(c=>c-1) 
  }
  return (
    <div className="">
      {count === 0 ? (
        <ButtonRounded
          onClick={() => setCount((c) => c + 1)}
          icon={<FaShoppingCart />}
          text="Add"
          className=" "
        />
      ) : (
        <div className="flex items-center text-lg m-auto text-gray-50  gap-4">
            <button className=" px-2  hover:bg-1/80 hover:text-gray-200 duration-150 rounded-lg bg-1" onClick={decrease}>-</button>
            <span className="font-semibold text-gray-900 duration-200">{count}</span>
            <button className=" px-2   hover:bg-1/80 hover:text-gray-200 duration-150 rounded-lg bg-1" onClick={handleClick}>+</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
