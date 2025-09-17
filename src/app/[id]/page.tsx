import React from "react"; 
import { notFound } from "next/navigation";

import { fetchProductById } from "@/services/api";

import Carousel from "@/components/ProductCarousel";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await fetchProductById(params.id);
    console.log(product);
    return (
      <main>
        <h1 className="text-2xl font-bold mb-2 text-black">{product.title}</h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <Carousel images={product.images} />
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
      </main>
    );
  } catch (e) {
    return notFound();
  }
}
