import { useDispatch } from "react-redux";

import { setProductsSlice } from "./productsSice.ts";
import { GET_PRODUCTS } from "../../utils/network/ApiEndpoints.ts";
import ApiRequest from "../../utils/network/ApiRequest.ts";
import { filterProps } from "../../types/products.types.ts";

export const useProductsActions = () => {
  const dispatch = useDispatch();

  const getProducts = async (filters?: filterProps, filterText = "") => {
    dispatch(
      setProductsSlice({
        isProductsLoading: true,
      })
    );
    return await ApiRequest()
      .request({
        method: "GET",
        url: `${GET_PRODUCTS}/${filterText}?`,
        params: filters,
      })
      .then((response) => {
        const { data } = response;
        dispatch(
          setProductsSlice({
            products: data,
          })
        );
        return response;
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        dispatch(
          setProductsSlice({
            isProductsLoading: false,
          })
        );
      });
  };

  const getAllProducts = async (filters?: filterProps) => {
    dispatch(
      setProductsSlice({
        isAllProductsLoading: true,
      })
    );
    return await ApiRequest()
      .request({
        method: "GET",
        url: `${GET_PRODUCTS}`,
        params: filters,
      })
      .then((response) => {
        const { data } = response;
        dispatch(
          setProductsSlice({
            allProducts: data,
          })
        );
        return response;
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        dispatch(
          setProductsSlice({
            isAllProductsLoading: false,
          })
        );
      });
  };

  return {
    getProducts,
    getAllProducts,
  };
};
