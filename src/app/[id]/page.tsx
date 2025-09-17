import { notFound } from "next/navigation";

import { fetchProductById } from "@/services/api";

import Product from "@/components/Product";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await fetchProductById(params.id);
    return (
      <main>
        <Product product={product} />
      </main>
    );
  } catch (e) {
    return notFound();
  }
}
