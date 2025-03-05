/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUsers, setUsersSlice } from "../../store/users/usersSice";
import { useUsersActions } from "../../store/users/usersActions";
import Heading from "../../components/UI/Heading";
import Table from "../../components/UI/Table";
import Filters from "../../components/Filters";
import RowPagination from "../../components/UI/RowPagination";
import SearchInput from "../../components/UI/SearchInput";
import {
  filterFields,
  headcells,
  inputDataInitialValue,
} from "../../utils/constants/user";

const Users = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [inputData, setInputData] = useState(inputDataInitialValue);
  const [searchValue, setSearchValue] = useState("");

  const { getUsers, getAllUsers } = useUsersActions();

  const { isUsersLoading, isAllUsersLoading, users, allUsers } =
    useSelector(selectUsers);

  const handlePageChange = (page: number) => {
    const skipData = page * limit;
    setPage(page);
    getUsers({ skip: skipData, limit: limit });
  };

  const handleReset = () => {
    setLimit(5);
    setPage(1);
    setSearchValue("");
    setInputData(inputDataInitialValue);
    getUsers({ limit: 5 });
  };

  const handleRowChange = (pageSize: number) => {
    setSearchValue("");
    setInputData(inputDataInitialValue);
    setLimit(pageSize);
    getUsers({ limit: pageSize });
  };

  const handleInputChange = (value: string, id: keyof typeof inputData) => {
    setLimit(5);
    setInputData(inputDataInitialValue);
    setPage(1);
    setInputData({
      [id]: value,
    } as typeof inputData);

    if (value.length > 0) {
      getUsers({ key: id, value }, "filter");
    } else {
      setSearchValue("");
      getUsers({ limit: limit });
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setInputData(inputDataInitialValue);
    setPage(1);

    if (!allUsers?.users) return;

    const filteredUsers = allUsers.users.filter((user) =>
      filterFields.some((field) =>
        String(user[field as keyof typeof user] || "")
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );

    if (value.length > 0) {
      dispatch(
        setUsersSlice({
          users: {
            total: filteredUsers.length,
            skip: 0,
            limit: limit,
            users: filteredUsers,
          },
        })
      );
    } else {
      setLimit(5);
      getUsers({ limit: limit });
    }
  };

  useEffect(() => {
    if (!isUsersLoading && !users) {
      getUsers({ limit: limit });
    }
    if (!isAllUsersLoading && !allUsers) {
      getAllUsers({ limit: 0 });
    }
  }, []);

  return (
    <div className="container flex flex-col gap-4 p-4 pt-8 mx-auto h-custom">
      <Heading title="Users Table" position="left" />

      <div className="flex items-center gap-4">
        <RowPagination handleChange={handleRowChange} value={limit} />
        <SearchInput value={searchValue} handleChange={handleSearchChange} />
      </div>

      <Filters
        inputData={inputData}
        handleReset={handleReset}
        headcells={headcells}
        handleChange={handleInputChange}
      />

      <Table
        showPagination
        headcells={headcells}
        data={users?.users}
        handlePageChange={handlePageChange}
        itemsPerPage={limit}
        total={users?.total}
        initialPage={page}
        paginationPosition="right"
        page={page}
        isLoading={isUsersLoading}
      />
    </div>
  );
};

export default Users;
