import { ProductsFilters } from "../../types/products.types";
import { UserFilters } from "../../types/users.types";

export const filterFields = [
  "firstName",
  "lastName",
  "maidenName",
  "gender",
  "email",
  "username",
  "bloodGroup",
  "eyeColor",
  "height",
  "weight",
  "phone",
];

export const headcells: {
  id: keyof UserFilters | keyof ProductsFilters;
  label: string;
}[] = [
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

export const inputDataInitialValue = {
  firstName: "",
  lastName: "",
  maidenName: "",
  gender: "",
  email: "",
  username: "",
  bloodGroup: "",
  eyeColor: "",
  height: "",
  weight: "",
  phone: "",
  age: "",
};
