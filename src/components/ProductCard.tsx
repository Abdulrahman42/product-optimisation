"use client";
import Link from "next/link";
import Image from "next/image";

import { ProductType } from "@/types/product";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link
      href={`/${product.id}`}
      prefetch={true}
      className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-lg truncate text-black">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold text-black">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
