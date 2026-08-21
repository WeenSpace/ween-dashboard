import { ProductListUrlFiltersAsDictWithMultipleValues } from "@dashboard/products/urls";

export const ProductFilterKeys = {
  ...ProductListUrlFiltersAsDictWithMultipleValues,
  categories: "categories",
  collections: "collections",
  metadata: "metadata",
  price: "price",
  productType: "productType",
  stock: "stock",
  currency: "currency",
  productKind: "productKind",
} as const;

export type ProductFilterKeys = (typeof ProductFilterKeys)[keyof typeof ProductFilterKeys];
