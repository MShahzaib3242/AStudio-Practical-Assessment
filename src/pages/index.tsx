import { useEffect } from "react";
import Heading from "../components/UI/Heading";
import Table from "../components/UI/Table";
import { useSelector } from "react-redux";
import { selectUsers } from "../store/users/usersSice";
import { useUsersActions } from "../store/users/usersActions";

const headcells = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "maidenName", label: "Maiden Name" },
  { id: "age", label: "Age" },
  { id: "gender", label: "Gender" },
  { id: "email", label: "Email" },
  { id: "username", label: "User Name" },
  { id: "bloodGroup", label: "Blood Group" },
  { id: "eyeColor", label: "Eye Color" },
];

const index = () => {
  const limit = 10;
  const { isUsersLoading, users } = useSelector(selectUsers);

  const { getUsers } = useUsersActions();

  const handlePage = (page: number) => {
    console.log(page);
    const skipData = page * limit;
    getUsers({ skip: skipData, limit: limit });
  };

  useEffect(() => {
    if (!isUsersLoading) {
      getUsers({ limit: limit });
    }
  }, []);

  return (
    <div className="container mx-auto p-4 h-screen">
      <Heading title="User Table" position="left" />
      <Table
        showPagination
        headcells={headcells}
        data={users?.users}
        handlePage={handlePage}
        itemsPerPage={limit}
        total={users?.total}
        initialPage={1}
        paginationPosition="right"
      />
    </div>
  );
};

export default index;
