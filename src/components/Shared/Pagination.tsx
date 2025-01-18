import { Pagination } from "@heroui/react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  amountPages: number;
}

const PaginationComponent = ({
  currentPage,
  onPageChange,
  amountPages,
}: PaginationProps) => {

  const pageLimit = currentPage === amountPages;

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {currentPage !== 0 && (
          <Pagination
            size="sm"
            total={amountPages}
            color="success"
            page={currentPage}
            onChange={onPageChange}
            initialPage={currentPage}
          />
        )}
        <button
          className="pagination__button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={pageLimit}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
