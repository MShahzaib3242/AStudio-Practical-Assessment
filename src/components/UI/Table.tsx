// import Pagination from "./Pagination";
import { Pagination as Pagination2 } from "@heroui/react";

interface headcell {
  id: string;
  label: string;
}

interface Props {
  data: any;
  headcells: headcell[];
  itemsPerPage: number;
  showPagination: boolean;
  paginationPosition?: "left" | "center" | "right";
  handlePage?: (e: number) => void;
  total?: number;
  initialPage?: number;
}

const Table = ({
  data,
  headcells,
  itemsPerPage = 10,
  showPagination,
  // paginationPosition = "center",
  handlePage,
  total = 10,
  initialPage,
}: Props) => {
  console.log(total / itemsPerPage);
  const totalPages = Math.floor(total / itemsPerPage);

  return (
    <>
      <div className="w-full overflow-x-auto text-xs md:text-sm text-primaryBlack">
        <table className="min-w-full bg-white border border-primaryYellow rounded-lg overflow-hidden">
          <thead className="bg-primaryYellow">
            <tr>
              {headcells?.map((header: headcell) => (
                <th key={header.id} className="py-2 px-4 border text-nowrap">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: number) => (
              <tr key={index} className="border-b hover:bg-primaryBlue/20">
                {headcells.map((header: headcell) => (
                  <td key={header.id} className="py-2 px-4 border text-nowrap">
                    {item[header.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPagination && data?.length > 0 && (
        <div className="w-full flex justify-center">
          <Pagination2
            showControls
            showShadow
            initialPage={initialPage || 1}
            total={totalPages}
            variant={"faded"}
            classNames={{
              cursor: "bg-primaryYellow text-primaryBlack",
            }}
            onChange={handlePage}
          />
        </div>
      )}
      {/* Pagination Controls */}

      {/* {showPagination && data.length > 0 && (
        <Pagination
          position={paginationPosition}
          page={initialPage || 1}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      )} */}
    </>
  );
};

export default Table;
