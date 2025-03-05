import { ProductsFilters } from "../../types/products.types";
import { UserFilters } from "../../types/users.types";

export const filterFields = [
  "title",
  "brand",
  "category",
  "price",
  "rating",
  "discountPercentage",
  "availabilityStatus",
  "stock",
  "minimumOrderQuantity",
  "warrantyInformation",
  "shippingInformation",
  "returnPolicy",
];

export const headcells: {
  id: keyof UserFilters | keyof ProductsFilters;
  label: string;
}[] = [
  { id: "title", label: "Title" },
  { id: "brand", label: "Brand" },
  { id: "category", label: "Category" },
  { id: "price", label: "Price" },
  { id: "rating", label: "Rating" },
  { id: "discountPercentage", label: "Discount Percentage" },
  { id: "availabilityStatus", label: "Availability Status" },
  { id: "stock", label: "Stock" },
  { id: "minimumOrderQuantity", label: "Minimum Order Quantity" },
  { id: "warrantyInformation", label: "Warranty Information" },
  { id: "shippingInformation", label: "Shipping Information" },
  { id: "returnPolicy", label: "Return Policy" },
];

export const FilterHeadcells: {
  id: keyof UserFilters | keyof ProductsFilters;
  label: string;
}[] = [
  { id: "title", label: "Title" },
  { id: "brand", label: "Brand" },
  { id: "category", label: "Category" },
];

export const inputDataInitialValue = {
  title: "",
  brand: "",
  category: "",
};
