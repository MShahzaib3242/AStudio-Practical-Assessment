import { useEffect } from "react";
import Heading from "../components/UI/Heading";
import Table from "../components/UI/Table";
import { useSelector } from "react-redux";
import { selectUsers } from "../store/users/usersSice";
import { useUsersActions } from "../store/users/usersActions";
import {
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@heroui/react";
import React from "react";

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
  { id: "height", label: "Height" },
  { id: "weight", label: "Weight" },
  { id: "phone", label: "Phone" },
];

const index = () => {
  const [limit, setLimit] = React.useState(5);
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

  const handlePageChange = (pageSize: number) => {
    setLimit(pageSize);
    getUsers({ limit: limit });
    console.log({ pageSize, limit });
  };

  const pages = [
    { key: 5, label: "5" },
    { key: 10, label: "10" },
    { key: 20, label: "20" },
    { key: 50, label: "50" },
  ];

  const SearchIcon = ({ size = 24, strokeWidth = 1.5, ...props }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size}
        role="presentation"
        viewBox="0 0 24 24"
        width={size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };

  const ArrowIcon = () => {
    return (
      <div className="w-2 h-2 rotate-180">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_224_"
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
          />
        </svg>
      </div>
    );
  };

  const searchData = [
    "First Name",
    "Last Name",
    "Maiden Name",
    "Age",
    "Gender",
    "Email",
    "Username",
    "Blood Group",
    "Eye Color",
    "Height",
    "Weight",
    "Phone",
  ];

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col gap-4 pt-8">
      <Heading title="Users Table" position="left" />
      <div className="flex items-center gap-4">
        <Select
          variant="faded"
          className="max-w-40"
          label="Select Page Size"
          defaultSelectedKeys={"5"}
          size="sm"
          onChange={(e) => handlePageChange(Number(e.target.value))}
        >
          {pages.map((page) => (
            <SelectItem key={page.key}>{page.label}</SelectItem>
          ))}
        </Select>
        <Input
          classNames={{
            base: "max-w-full focus:max-w-[10rem] h-12",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 border-medium border-default-200",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
      <div className="flex items-center gap-4">
        <ButtonGroup color="default" size="sm">
          {searchData.map((data) => (
            <Popover showArrow offset={10} placement="top">
              <PopoverTrigger>
                <Button endContent={<ArrowIcon />}>{data}</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[240px]">
                {(titleProps) => (
                  <div className="px-1 py-2 w-full">
                    <p
                      className="text-small font-bold text-foreground"
                      {...titleProps}
                    >
                      Search by {data}
                    </p>
                    <div className="mt-2 flex flex-col gap-2 w-full">
                      <Input placeholder={data} size="sm" variant="bordered" />
                    </div>
                  </div>
                )}
              </PopoverContent>
            </Popover>
          ))}
        </ButtonGroup>
      </div>
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
