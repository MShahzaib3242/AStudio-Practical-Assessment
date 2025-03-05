import { Pagination, Skeleton } from "@heroui/react";
import { UserFilters } from "../../types/users.types";

export interface headcell {
  id: string;
  label: string;
}

interface Props {
  data: UserFilters[] | undefined;
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
              ? Array.from({ length: 5 }, (_, index) => (
                  <tr key={index} className="border-b hover:bg-primaryBlue/20">
                    {Array.from({ length: 11 }, (_, index1) => (
                      <td key={index1} className="px-4 py-2 border text-nowrap">
                        <Skeleton className="flex w-full h-6 rounded" />
                      </td>
                    ))}
                  </tr>
                ))
              : data?.map((item: UserFilters, index: number) => (
                  <tr key={index} className="border-b hover:bg-primaryBlue/20">
                    {headcells.map((header: headcell) => (
                      <td
                        key={header.id}
                        className="px-4 py-2 border text-nowrap"
                      >
                        {item[header.id as keyof UserFilters]}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
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
