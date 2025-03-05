export interface IProductsInitialState {
  products: {
    products: ProductsFilters[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  allProducts: {
    products: ProductsFilters[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  isProductsLoading: boolean;
  isAllProductsLoading: boolean;
}

export interface filterProps {
  limit?: number;
  key?: string;
  value?: string;
  skip?: number;
}

export interface ProductsFilters {
  title: string;
  brand: string;
  category: string;
  price?: number;
  rating?: number;
  discountPercentage?: number;
  availabilityStatus?: string;
  stock?: number;
  minimumOrderQuantity?: string;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}
