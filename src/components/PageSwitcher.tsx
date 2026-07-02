import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageContext } from "@/context/pageContext";
import { useContext } from "react";

export function PaginationComp() {
  const { handlePageSwitch, pagination } = useContext(pageContext);
  console.log(pagination);

  const currentPage = pagination?.current_page || 1;
  const totalPages = pagination?.last_visible_page || 3;

  const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));

  const offsetPagLink = (targetPage: number) => {
    // calc the page minimum so it doesn't go into negatives
    const pageMin = Math.max(1, currentPage + targetPage);
    // calc the page max so it doesn't overshoot
    const pageMax = Math.min(pagination?.last_visible_page || 3, pageMin);
    handlePageSwitch(pageMax);
  };

  console.log(currentPage);

  return (
    <Pagination className="mb-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => offsetPagLink(-1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={currentPage === startPage}
            onClick={() => offsetPagLink(-1)}
          >
            {startPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={currentPage === startPage + 1}
            onClick={() => offsetPagLink(1)}
          >
            {startPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={currentPage === startPage + 2}
            onClick={() => offsetPagLink(2)}
          >
            {startPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => offsetPagLink(1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
