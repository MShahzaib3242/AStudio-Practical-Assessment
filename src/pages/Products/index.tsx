/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Heading from "../../components/UI/Heading";
import Table from "../../components/UI/Table";
import Filters from "../../components/Filters";
import RowPagination from "../../components/UI/RowPagination";
import SearchInput from "../../components/UI/SearchInput";
import Tabs from "../../components/UI/Tabs";
import {
  filterFields,
  FilterHeadcells,
  headcells,
  inputDataInitialValue,
} from "../../utils/constants/products";
import { useProductsActions } from "../../store/products/productsActions";
import {
  selectProducts,
  setProductsSlice,
} from "../../store/products/productsSice";

const Products = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [inputData, setInputData] = useState(inputDataInitialValue);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState<string | number | null>("all");

  const { getProducts, getAllProducts } = useProductsActions();

  const { isProductsLoading, isAllProductsLoading, products, allProducts } =
    useSelector(selectProducts);

  const handlePageChange = (page: number) => {
    const skipData = page * limit;
    setPage(page);
    if (selectedTab === "laptops") {
      getProducts({ skip: skipData, limit: limit }, "category/laptops");
    } else {
      getProducts({ skip: skipData, limit: limit });
    }
  };

  const handleReset = () => {
    setLimit(5);
    setPage(1);
    setSearchValue("");
    setInputData(inputDataInitialValue);
    if (selectedTab === "laptops") {
      getProducts({ limit: 5 }, "category/laptops");
    } else {
      getProducts({ limit: 5 });
    }
  };

  const handleRowChange = (pageSize: number) => {
    setSearchValue("");
    setInputData(inputDataInitialValue);
    setLimit(pageSize);
    if (selectedTab === "laptops") {
      getProducts({ limit: pageSize }, "category/laptops");
    } else {
      getProducts({ limit: pageSize });
    }
  };

  const handleInputChange = (value: string, id: keyof typeof inputData) => {
    setLimit(5);
    setInputData(inputDataInitialValue);
    setPage(1);
    setInputData({
      [id]: value,
    } as typeof inputData);

    if (value.length > 0) {
      getProducts({ key: id, value }, "filter");
    } else {
      setSearchValue("");
      if (selectedTab === "laptops") {
        getProducts({ limit: limit }, "category/laptops");
      } else {
        getProducts({ limit: limit });
      }
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setInputData(inputDataInitialValue);
    setPage(1);

    if (!allProducts?.products) return;

    const filteredProducts = allProducts.products.filter((products) =>
      filterFields.some((field) =>
        String(products[field as keyof typeof products] || "")
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );

    if (value.length > 0) {
      dispatch(
        setProductsSlice({
          products: {
            total: filteredProducts.length,
            skip: 0,
            limit: limit,
            products: filteredProducts,
          },
        })
      );
    } else {
      setLimit(5);
      getProducts({ limit: limit });
    }
  };

  const handleTabChange = (value: string | number | null) => {
    setSelectedTab(value);
    setSearchValue("");
    setInputData(inputDataInitialValue);
    if (value === "laptops") {
      getProducts({ limit: limit }, "category/laptops");
    } else {
      getProducts({ limit: limit });
    }
  };

  const content = (
    <div className="flex flex-col gap-3 max-h-[70vh]">
      <div className="flex items-center gap-4">
        <RowPagination handleChange={handleRowChange} value={limit} />
        <SearchInput value={searchValue} handleChange={handleSearchChange} />
      </div>
      <Filters
        ShowText
        filterText="Not able to find API for it"
        inputData={inputData}
        handleReset={handleReset}
        headcells={FilterHeadcells}
        handleChange={handleInputChange}
      />
      <Table
        showPagination
        headcells={headcells}
        data={products?.products}
        handlePageChange={handlePageChange}
        itemsPerPage={limit}
        total={products?.total}
        initialPage={page}
        paginationPosition="right"
        page={page}
        isLoading={isProductsLoading}
      />
    </div>
  );

  const tabs = [
    {
      id: "all",
      label: "All",
      content: content,
    },
    {
      id: "laptops",
      label: "Laptops",
      content: content,
    },
  ];

  useEffect(() => {
    if (!isProductsLoading && !products) {
      getProducts({ limit: limit });
    }
    if (!isAllProductsLoading && !allProducts) {
      getAllProducts({ limit: 0 });
    }
  }, []);

  return (
    <div className="container flex flex-col gap-4 p-4 pt-8 mx-auto h-custom">
      <Heading title="Products Table" position="left" />

      <Tabs
        selected={selectedTab}
        handleTabChange={handleTabChange}
        tabs={tabs}
      />
    </div>
  );
};

export default Products;
