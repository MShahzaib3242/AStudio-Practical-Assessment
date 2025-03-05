import {
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";

import { ArrowIcon } from "../assets";
import { headcell } from "./UI/Table";
import { UserFilters } from "../types/users.types";
import { ProductsFilters } from "../types/products.types";

type FilterData = UserFilters | ProductsFilters;

interface Props {
  filterText?: string;
  ShowText?: boolean;
  inputData: FilterData;
  headcells: headcell[];
  handleReset: () => void;
  handleChange: (value: string, id: keyof FilterData) => void;
}

const Filters = ({
  ShowText,
  filterText,
  inputData,
  headcells,
  handleReset,
  handleChange,
}: Props) => {
  return (
    <div className="flex items-center">
      <ButtonGroup color="default" size="sm" className="flex-wrap">
        {headcells?.map((data) => (
          <Popover key={data.id} showArrow offset={10} placement="top">
            <PopoverTrigger>
              <Button
                endContent={
                  <div className="w-2 h-2 rotate-180">
                    <ArrowIcon />
                  </div>
                }
              >
                {data.label}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
              {(titleProps) => (
                <div className="w-full px-1 py-2">
                  <p
                    className="font-bold text-small text-foreground"
                    {...titleProps}
                  >
                    Search by {data.label}
                  </p>
                  {ShowText ? (
                    <span className="text-red-600">{filterText}</span>
                  ) : (
                    <div className="flex flex-col w-full gap-2 mt-2">
                      <Input
                        placeholder={data.label}
                        size="sm"
                        variant="bordered"
                        value={inputData[data.id as keyof FilterData] || ""}
                        onChange={(e) =>
                          handleChange(
                            e.target.value,
                            data.id as keyof FilterData
                          )
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            </PopoverContent>
          </Popover>
        ))}
        <Button
          className="text-base font-medium bg-transparent"
          onPress={handleReset}
        >
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filters;
