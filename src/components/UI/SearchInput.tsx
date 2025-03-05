import { Input } from "@heroui/react";

import { SearchIcon } from "../../assets";

interface Props {
  value: string;
  handleChange: (e: string) => void;
}

const SearchInput = ({ value, handleChange }: Props) => {
  return (
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
      startContent={<SearchIcon />}
      type="search"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchInput;
