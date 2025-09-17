export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  availabilityStatus: string;
};

export type ProductsResponse = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

export type CategoryType = {
  name: string;
  slug: string;
  url: string;
}