import { CategoryType, ProductType, ProductsResponse } from "@/types/product";

const BASE = "https://dummyjson.com";

export async function fetchProducts(): Promise<ProductsResponse> {
  const res = await fetch(`${BASE}/products?limit=100`, {
    next: { revalidate: 300 },
    cache: 'force-cache'
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function fetchProductById(
  id: string | number
): Promise<ProductType> {
  const res = await fetch(`${BASE}/products/${id}`, {
    next: { revalidate: 300 },
    cache: 'force-cache'
  });
  if (!res.ok) throw new Error("Failed to fetch product by id");
  return await res.json();
}

export async function fetchCategories(): Promise<CategoryType[]> {
  const res = await fetch(`${BASE}/products/categories`, {
    next: { revalidate: 300 },
    cache: 'force-cache'
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return await res.json();
}
