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

  const offsetPagLink = (targetPage: number) => {
    console.log("test", currentPage + targetPage);
    const calcMax = Math.max(1, currentPage + targetPage);
    const calcMin = Math.min(pagination?.items.total || 3, calcMax);
    handlePageSwitch(calcMin);
  };

  console.log(currentPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => offsetPagLink(-1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive onClick={() => offsetPagLink(-1)}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => offsetPagLink(1)}>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => offsetPagLink(2)}>
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => offsetPagLink(1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
