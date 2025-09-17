"use client";
import { ProductType } from "@/types/product";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Carousel = dynamic(() => import("@/components/ProductCarousel"), {
  ssr: false,
});

export default function Product({ product }: { product: ProductType }) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-black">{product.title}</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Suspense fallback={<p>Loading image...</p>}>
            <Carousel images={product.images} />
          </Suspense>
        </div>
        <div className="col-span-12">
          <p className="text-gray-700 mb-4 text-xl">{product.description}</p>
          <div className="text-3xl font-bold mb-2 text-black">
            ${product.price}
          </div>
          <div
            className={`inline-block px-3 py-1 rounded ${
              product.stock > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
            {product.availabilityStatus}
          </div>
        </div>
      </div>
    </>
  );
}
