"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type PriceContextType = {
  count: number;
  setCount: (count: number) => void;
  variance: string[];
  setVariance: any;setBalanceData:any,balanceData:any
};
const priceContext = createContext<PriceContextType | undefined>(undefined);

function PriceProvider({ children }: { children: React.ReactNode }) {
  const [variance, setVariance] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);
  const [balanceData, setBalanceData] = useState<any[] | null>(null);
  const [mounted, setMounted] = useState(false); // Flag to track if the component is mounted

  useEffect(() => {
    //@ts-ignore
    if (mounted && !balanceData?.response?.is_available) {
      toast.error("Product is out of stock!");
    } else {
      setMounted(true); // Set mounted to true after initial mount
    }
  }, [balanceData,]);
  const contextValue: PriceContextType = {
    variance,
    setCount,
    count,
    setVariance,setBalanceData,balanceData
  };
  return <priceContext.Provider value={contextValue}>{children}</priceContext.Provider>;
}

function usePrice() {
  const context = useContext(priceContext);
  if (!context) throw new Error("useColor must be used within a ColorProvider");
  return context;
}

export { PriceProvider, usePrice };
