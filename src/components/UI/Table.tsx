import { Pagination, Skeleton } from "@heroui/react";
import { UserFilters } from "../../types/users.types";
import { ProductsFilters } from "../../types/products.types";
import { Empty } from "../../assets";

export interface headcell {
  id: keyof UserFilters | keyof ProductsFilters;
  label: string;
}

interface Props {
  data: UserFilters[] | ProductsFilters[] | undefined;
  headcells: headcell[];
  itemsPerPage: number;
  showPagination: boolean;
  paginationPosition?: "left" | "center" | "right";
  handlePageChange?: (e: number) => void;
  total?: number;
  initialPage?: number;
  page?: number;
  isLoading?: boolean;
}

const Table = ({
  data,
  headcells,
  itemsPerPage = 10,
  showPagination,
  handlePageChange,
  total = 10,
  initialPage,
  page,
  isLoading,
}: Props) => {
  const totalPages = Math.floor(total / itemsPerPage);

  const isUserFilters = (
    item: UserFilters | ProductsFilters
  ): item is UserFilters => {
    return "firstName" in item; // Adjust with a unique property from UserFilters
  };

  return (
    <>
      <div className="w-full overflow-x-auto text-xs md:text-sm text-primaryBlack">
        <table className="min-w-full overflow-hidden bg-white border rounded-lg border-primaryYellow">
          <thead className="bg-primaryYellow">
            <tr>
              {headcells?.map((header: headcell) => (
                <th key={header.id} className="px-4 py-2 border text-nowrap">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array.from({ length: itemsPerPage }, (_, index) => (
                  <tr key={index} className="border-b hover:bg-primaryBlue/20">
                    {Array.from({ length: 11 }, (_, index1) => (
                      <td key={index1} className="px-4 py-2 border text-nowrap">
                        <Skeleton className="flex w-full h-6 rounded" />
                      </td>
                    ))}
                  </tr>
                ))
              : data?.length
              ? data?.map(
                  (item: UserFilters | ProductsFilters, index: number) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-primaryBlue/20"
                    >
                      {headcells.map((header: headcell) => (
                        <td
                          key={header.id}
                          className="px-4 py-2 border text-nowrap"
                        >
                          {isUserFilters(item)
                            ? String(item[header.id as keyof UserFilters])
                            : String(item[header.id as keyof ProductsFilters])}
                        </td>
                      ))}
                    </tr>
                  )
                )
              : ""}
          </tbody>
        </table>
        {!isLoading && !data?.length && (
          <div className="flex flex-col items-center justify-center w-full gap-2 py-4 bg-white rounded-lg">
            <img src={Empty} alt="Empty Image" className="w-20" />
            No Records Found. Try to Type Full Name
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && showPagination && (
        <div className="flex justify-center w-full">
          <Pagination
            showControls
            showShadow
            page={page}
            initialPage={initialPage || 1}
            total={totalPages}
            variant={"faded"}
            classNames={{
              cursor: "bg-primaryYellow text-primaryBlack",
            }}
            onChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default Table;
