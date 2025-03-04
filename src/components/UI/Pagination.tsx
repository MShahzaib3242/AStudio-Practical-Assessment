import { useState } from "react";

interface Props {
  page: number;
  totalPages: number;
  handlePage: any;
  position?: "left" | "center" | "right";
}

const Pagination = ({
  page,
  totalPages,
  handlePage,
  position = "center",
}: Props) => {
  const [currentPage, setCurrentPage] = useState(page);

  const getPositionClass = () => {
    switch (position) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      default:
        return "justify-center";
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    // If total pages are less than or equal to 5, show all pages
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show the first page only if the current page is not near the first page
      if (currentPage > 2) {
        pages.push(1);
      }

      // Show previous and next pages around the current page
      if (currentPage > 2) pages.push(currentPage - 1); // Previous page
      pages.push(currentPage); // Current page
      if (currentPage < totalPages - 1) pages.push(currentPage + 1); // Next page

      // Add ellipsis if there's a gap between the current page and the last pages
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Show the last page only if it's not already added
      if (currentPage !== totalPages) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      handlePage(pageNumber);
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className={`flex ${getPositionClass()} mt-4`}>
      <button
        className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
        onClick={() => {
          if (currentPage > 1) {
            handlePage(currentPage - 1);
            setCurrentPage(currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {generatePageNumbers().map((item, index) => (
        <button
          key={index}
          className={`px-3 py-2 mx-1 border rounded ${
            currentPage === item
              ? "bg-blue-500 text-white"
              : item === "..."
              ? "text-gray-500"
              : ""
          }`}
          onClick={() => {
            if (item !== "...") {
              handlePageClick(item as number);
            }
          }}
        >
          {item}
        </button>
      ))}

      <button
        className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
        onClick={() => {
          if (currentPage < totalPages) {
            handlePage(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
