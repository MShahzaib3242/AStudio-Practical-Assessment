import { useDispatch } from "react-redux";

import { setUsersSlice } from "./usersSice.ts";
import { GET_USERS } from "../../utils/network/ApiEndpoints.ts";
import ApiRequest from "../../utils/network/ApiRequest.ts";
import { filterProps } from "../../types/users.types.ts";

export const useUsersActions = () => {
  const dispatch = useDispatch();

  const getUsers = async (filters?: filterProps, filterText = "") => {
    dispatch(
      setUsersSlice({
        isUsersLoading: true,
      })
    );
    return await ApiRequest()
      .request({
        method: "GET",
        url: `${GET_USERS}/${filterText}?`,
        params: filters,
      })
      .then((response) => {
        const { data } = response;
        dispatch(
          setUsersSlice({
            users: data,
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

  const getAllUsers = async (filters?: filterProps) => {
    dispatch(
      setUsersSlice({
        isAllUsersLoading: true,
      })
    );
    return await ApiRequest()
      .request({
        method: "GET",
        url: `${GET_USERS}`,
        params: filters,
      })
      .then((response) => {
        const { data } = response;
        dispatch(
          setUsersSlice({
            allUsers: data,
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
            isAllUsersLoading: false,
          })
        );
      });
  };

  return {
    getUsers,
    getAllUsers,
  };
};
