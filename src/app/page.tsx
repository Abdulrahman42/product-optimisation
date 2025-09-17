import { fetchCategories, fetchProducts } from "@/services/api";

import ProductList from "@/components/ProdutList";

export default async function Page() {
  const [productsRes, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4 text-black">Products</h1>
      <ProductList products={productsRes.products} categories={categories} />
    </main>
  );
}
