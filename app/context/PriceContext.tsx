"use client";
import { createContext, useContext, useEffect, useState } from "react";

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
