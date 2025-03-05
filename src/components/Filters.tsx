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

interface Props {
  inputData: UserFilters;
  headcells: headcell[];
  handleReset: () => void;
  handleChange: (value: string, id: keyof UserFilters) => void;
}

const Filters = ({
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
                  <div className="flex flex-col w-full gap-2 mt-2">
                    <Input
                      placeholder={data.label}
                      size="sm"
                      variant="bordered"
                      value={inputData[data.id as keyof typeof inputData] || ""}
                      onChange={(e) =>
                        handleChange(
                          e.target.value,
                          data.id as keyof typeof inputData
                        )
                      }
                    />
                  </div>
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
