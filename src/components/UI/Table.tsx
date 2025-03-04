import Pagination from "./Pagination";

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
  paginationPosition = "center",
  handlePage,
  total = 10,
  initialPage,
}: Props) => {
  console.log(total / itemsPerPage);
  const totalPages = Math.floor(total / itemsPerPage);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
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
              <tr key={index} className="border-b hover:bg-gray-100">
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
      {/* Pagination Controls */}
      {showPagination && data.length > 0 && (
        <Pagination
          position={paginationPosition}
          page={initialPage || 1}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      )}
    </>
  );
};

export default Table;
