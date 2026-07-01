import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pageContext } from "@/context/pageContext";
import { useContext, useState } from "react";

export function PaginationComp() {
  const { handlePageSwitch, pagination } = useContext(pageContext);
  const [pages, setPages] = useState([1, 2, 3]);
  console.log(pagination);

  const offsetPagLink = (currentTarget: number) => {
    if (currentTarget === pages[2] && pagination?.has_next_page) {
      setPages([pages[1], pages[2], pages[2] + 1]);
      handlePageSwitch(pages[2]);
    } else if (currentTarget === pages[0] && pages[0] - 1 !== 0) {
      setPages([pages[0] - 1, pages[0], pages[1]]);
      handlePageSwitch(pages[0]);
    } else {
      handlePageSwitch(pages[currentTarget]);
    }
  };

  const page = pagination?.current_page || 1;
  console.log(page);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => offsetPagLink(page - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pagination?.current_page === pages[0]}
            onClick={() => offsetPagLink(pages[0])}
          >
            {pages[0]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pagination?.current_page === pages[1]}
            onClick={() => handlePageSwitch(pages[1])}
          >
            {pages[1]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive={pagination?.current_page === pages[2]}
            onClick={() => offsetPagLink(pages[2])}
          >
            {pages[2]}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => offsetPagLink(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
