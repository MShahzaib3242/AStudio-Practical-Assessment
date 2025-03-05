import { useDispatch } from "react-redux";

import { setUsersSlice } from "./usersSice.ts";
import { GET_USERS } from "../../utils/network/ApiEndpoints.ts";
import ApiRequest from "../../utils/network/ApiRequest.ts";
import { filterProps } from "../../types/users.types.ts";

export const useUsersActions = () => {
  const dispatch = useDispatch();

  const getUsers = async (filters?: filterProps, showFilter = false) => {
    dispatch(
      setUsersSlice({
        isUsersLoading: true,
      })
    );
    return await ApiRequest()
      .request({
        method: "GET",
        url: showFilter ? `${GET_USERS}/filter?` : `${GET_USERS}`,
        params: filters,
      })
      .then((response) => {
        const { data } = response;
        dispatch(
          setUsersSlice({
            users: data,
            filteredUsers: data,
          })
        );
        return response;
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        dispatch(
          setUsersSlice({
            isUsersLoading: false,
          })
        );
      });
  };

  return {
    getUsers,
  };
};
