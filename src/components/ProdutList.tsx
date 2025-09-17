"use client";
import { useMemo, useState } from "react";

import { CategoryType, ProductType } from "@/types/product";

import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  categories,
}: {
  products: ProductType[];
  categories: CategoryType[];
}) {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const filterProducts = useMemo(() => {
    let list = products;
    if (category !== "all") list = list.filter((p) => p.category === category);
    list = [...list].sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
    return list;
  }, [products, category, sort]);

  return (
    <div>
      <div className="flex gap-4 items-center mb-4">
        <div>
          <label className="mr-2 text-black">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded p-1 text-black">
            <option value="all">All</option>
            {categories.map((i) => (
              <option key={i.name} value={i.slug}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mr-2 text-black">Sort by Price</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "asc" | "desc")}
            className="border rounded p-1 text-black">
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-cols-3 gap-4">
        {filterProducts.length === 0 ? (
          <p className="text-black text-center text-xl w-full">
            No Product for category {category}
          </p>
        ) : (
          filterProducts.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
}
