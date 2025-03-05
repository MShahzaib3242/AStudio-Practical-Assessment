import { Select, SelectItem } from "@heroui/react";

interface Props {
  value: number;
  handleChange: (e: number) => void;
}

const pages = [
  { key: 5, label: "5" },
  { key: 10, label: "10" },
  { key: 20, label: "20" },
  { key: 50, label: "50" },
];

const RowPagination = ({ handleChange }: Props) => {
  return (
    <Select
      // value={value}
      variant="faded"
      className="max-w-40"
      label="Select Page Size"
      defaultSelectedKeys={"5"}
      size="sm"
      onChange={(e) => handleChange(Number(e.target.value))}
    >
      {pages.map((page) => (
        <SelectItem key={page.key}>{page.label}</SelectItem>
      ))}
    </Select>
  );
};

export default RowPagination;
