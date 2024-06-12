"use client";
import React, {  useEffect, useState } from "react";
import { ProductProps } from "../types";
import Search from "./Search";
import Product from "./Product";
import { SkeletonCard } from "./SkeletonCard";
import Filters from "./Filters";
import PaginationHome from "./Pagination";
import Motion from "./Motion";

const Products = ({ products }: { products: [ProductProps] }) => {
  const [query, SetQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<[ProductProps] | null>(null);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);
  return (
    <section className="  py-5 pt-10 lg:mt-8 min-h-screen">
      <h1 className=" text-gray-900 text-4xl font-bold text-center my-8 pb-4">Top Products</h1>
      <div className="flex flex-col px-4 items-center gap-3">
        <Search setQuery={SetQuery} query={query} />
        <Filters />
      </div>
      {filteredProducts ? (
        <Motion list={true} className=" grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto items-center px-4 lg:px-20 py-5 md:py-10">
          {filteredProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Motion>
      ) : (
        <SkeletonCard />
      )}
      <PaginationHome />
    </section>
  );
};

export default Products;
